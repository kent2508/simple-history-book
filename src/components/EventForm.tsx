import { useState, type FormEvent } from 'react'
import type { EventInput } from '../lib/eventsApi'
import ModalPortal from './ModalPortal'

interface EventFormProps {
  title: string
  initial?: Partial<EventInput>
  submitLabel: string
  onSubmit: (input: EventInput) => Promise<void>
  onClose: () => void
}

function EventForm({
  title,
  initial,
  submitLabel,
  onSubmit,
  onClose,
}: EventFormProps) {
  const [yearLabel, setYearLabel] = useState(initial?.yearLabel ?? '')
  const [year, setYear] = useState<string>(
    initial?.year !== undefined ? String(initial.year) : '',
  )
  const [eventTitle, setEventTitle] = useState(initial?.title ?? '')
  const [summary, setSummary] = useState(initial?.summary ?? '')
  const [detail, setDetail] = useState(initial?.detail ?? '')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)

    const parsedYear = Number(year)
    if (!Number.isFinite(parsedYear)) {
      setError('Năm (để sắp xếp) phải là số. Dùng số âm cho trước Công nguyên.')
      return
    }

    setSubmitting(true)
    try {
      await onSubmit({
        yearLabel: yearLabel.trim(),
        year: parsedYear,
        title: eventTitle.trim(),
        summary: summary.trim(),
        detail: detail.trim(),
      })
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <ModalPortal onClose={onClose}>
      <div className="modal-overlay" onClick={onClose} role="presentation">
        <div
          className="modal event-form-modal"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button className="modal-close" onClick={onClose} aria-label="Đóng">
            ×
          </button>
          <h2 className="modal-title">{title}</h2>

          <form onSubmit={handleSubmit} className="auth-form">
            <label>
              Nhãn mốc thời gian *
              <input
                type="text"
                value={yearLabel}
                onChange={(e) => setYearLabel(e.target.value)}
                placeholder="VD: 1288 hoặc Khoảng thế kỷ VII TCN"
                required
              />
            </label>
            <label>
              Năm (số, để sắp xếp) *
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="VD: 1288 hoặc -257 (TCN)"
                required
              />
            </label>
            <label>
              Tiêu đề *
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              />
            </label>
            <label>
              Tóm tắt *
              <input
                type="text"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
              />
            </label>
            <label>
              Nội dung chi tiết *
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                rows={5}
                required
              />
            </label>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-submit" disabled={submitting}>
              {submitting ? 'Đang lưu…' : submitLabel}
            </button>
          </form>
        </div>
      </div>
    </ModalPortal>
  )
}

export default EventForm
