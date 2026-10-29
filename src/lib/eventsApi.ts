import type { HistoryEvent } from '../data/periods'
import { supabase } from './supabase'

export interface EventInput {
  yearLabel: string
  title: string
  summary: string
  detail: string
  year: number
}

function slugify(text: string): string {
  const base = text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // bỏ dấu
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
  const suffix = Math.random().toString(36).slice(2, 6)
  return `${base || 'su-kien'}-${suffix}`
}

/** Cập nhật nội dung một sự kiện (title/summary/detail/yearLabel). */
export async function updateEvent(
  periodId: string,
  eventId: string,
  input: EventInput,
): Promise<void> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')
  const { error } = await supabase
    .from('events')
    .update({
      year: input.year,
      year_label: input.yearLabel,
      title: input.title,
      summary: input.summary,
      detail: input.detail,
    })
    .eq('period_id', periodId)
    .eq('id', eventId)
  if (error) throw error
}

/**
 * Chèn một sự kiện mới vào trước hoặc sau sự kiện tham chiếu, rồi đánh lại
 * sort_order cho toàn bộ period để giữ thứ tự liền mạch.
 * Trả về id của sự kiện mới tạo.
 */
export async function insertEventRelative(
  periodId: string,
  events: HistoryEvent[],
  anchorId: string,
  position: 'before' | 'after',
  input: EventInput,
): Promise<string> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')

  const anchorIndex = events.findIndex((e) => e.id === anchorId)
  if (anchorIndex === -1) throw new Error('Không tìm thấy sự kiện tham chiếu.')

  const insertIndex = position === 'before' ? anchorIndex : anchorIndex + 1
  const newId = slugify(input.title)

  const newEvent: HistoryEvent = {
    id: newId,
    year: input.year,
    yearLabel: input.yearLabel,
    title: input.title,
    summary: input.summary,
    detail: input.detail,
  }

  const ordered = [...events]
  ordered.splice(insertIndex, 0, newEvent)

  const userId = (await supabase.auth.getUser()).data.user?.id ?? null

  // Upsert lại toàn bộ danh sách với sort_order mới
  const rows = ordered.map((e, index) => ({
    period_id: periodId,
    id: e.id,
    sort_order: index,
    year: e.year,
    year_label: e.yearLabel,
    title: e.title,
    summary: e.summary,
    detail: e.detail,
    ...(e.id === newId ? { created_by: userId } : {}),
  }))

  const { error } = await supabase
    .from('events')
    .upsert(rows, { onConflict: 'period_id,id' })
  if (error) throw error

  return newId
}
