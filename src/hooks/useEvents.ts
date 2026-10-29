import { useCallback, useEffect, useState } from 'react'
import { getEvents as getStaticEvents } from '../data/events'
import type { HistoryEvent } from '../data/periods'
import { supabase } from '../lib/supabase'

interface UseEventsResult {
  events: HistoryEvent[]
  loading: boolean
  source: 'supabase' | 'static'
  refetch: () => void
}

interface SupabaseState {
  periodId: string
  events: HistoryEvent[]
}

/**
 * Nạp danh sách sự kiện của một triều đại. Ưu tiên Supabase (bảng `events`),
 * fallback về dữ liệu tĩnh trong `src/data/events.ts` nếu chưa cấu hình/không có.
 */
export function useEvents(periodId: string | undefined): UseEventsResult {
  const [remote, setRemote] = useState<SupabaseState | null>(null)
  const [fetchedId, setFetchedId] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)

  const refetch = useCallback(() => setReloadKey((k) => k + 1), [])

  useEffect(() => {
    if (!supabase || !periodId) return

    let active = true

    supabase
      .from('events')
      .select('id, year, year_label, title, summary, detail, sort_order')
      .eq('period_id', periodId)
      .order('sort_order', { ascending: true })
      .then(({ data, error }) => {
        if (!active) return

        if (!error && data && data.length > 0) {
          const mapped: HistoryEvent[] = data.map((row) => ({
            id: row.id as string,
            year: row.year as number,
            yearLabel: row.year_label as string,
            title: row.title as string,
            summary: row.summary as string,
            detail: row.detail as string,
          }))
          setRemote({ periodId, events: mapped })
        } else {
          setRemote(null)
        }
        setFetchedId(periodId)
      })

    return () => {
      active = false
    }
  }, [periodId, reloadKey])

  // Chỉ dùng dữ liệu Supabase nếu nó khớp với periodId hiện tại,
  // tránh hiển thị sự kiện của triều đại cũ trong lúc đổi trang.
  const hasRemote = remote !== null && remote.periodId === periodId
  const events = hasRemote
    ? remote.events
    : periodId
      ? getStaticEvents(periodId)
      : []

  const loading = supabase !== null && !!periodId && fetchedId !== periodId

  return {
    events,
    loading,
    source: hasRemote ? 'supabase' : 'static',
    refetch,
  }
}
