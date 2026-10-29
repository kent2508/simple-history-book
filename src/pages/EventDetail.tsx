import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthModal from '../auth/AuthModal'
import { useAuth } from '../auth/useAuth'
import EventForm from '../components/EventForm'
import { eraLabel, getPeriodById } from '../data/periods'
import { useEvents } from '../hooks/useEvents'
import {
  insertEventRelative,
  updateEvent,
  type EventInput,
} from '../lib/eventsApi'

type Action = 'edit' | 'insert-before' | 'insert-after'

function EventDetail() {
  const { id, eventId } = useParams<{ id: string; eventId: string }>()
  const navigate = useNavigate()
  const period = id ? getPeriodById(id) : undefined
  const { events, loading, refetch } = useEvents(period?.id)
  const { user } = useAuth()
  const event = events.find((e) => e.id === eventId)

  const [action, setAction] = useState<Action | null>(null)
  const [showAuth, setShowAuth] = useState(false)
  const [pending, setPending] = useState<Action | null>(null)

  if (!period || (!event && loading)) {
    return (
      <div className="detail-page">
        <p className="detail-notfound">
          {!period ? 'Không tìm thấy triều đại này.' : 'Đang tải sự kiện…'}
        </p>
        <Link to="/" className="back-link">
          ← Về dòng thời gian
        </Link>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="detail-page">
        <p className="detail-notfound">Không tìm thấy sự kiện này.</p>
        <Link to="/" className="back-link">
          ← Về dòng thời gian
        </Link>
      </div>
    )
  }

  const index = events.findIndex((e) => e.id === event.id)
  const prev = index > 0 ? events[index - 1] : undefined
  const next = index < events.length - 1 ? events[index + 1] : undefined

  function requestAction(a: Action) {
    if (!user) {
      setPending(a)
      setShowAuth(true)
      return
    }
    setAction(a)
  }

  async function handleSubmit(input: EventInput) {
    if (!period || !event) return
    if (action === 'edit') {
      await updateEvent(period.id, event.id, input)
      refetch()
    } else if (action === 'insert-before' || action === 'insert-after') {
      const newId = await insertEventRelative(
        period.id,
        events,
        event.id,
        action === 'insert-before' ? 'before' : 'after',
        input,
      )
      refetch()
      navigate(`/period/${period.id}/event/${newId}`)
    }
  }

  return (
    <article className={`detail-page era-${period.era}`}>
      <Link to={`/period/${period.id}`} className="back-link">
        ← Về triều đại {period.name}
      </Link>

      <header className="detail-header">
        <span className="milestone-era">{period.name}</span>
        <h1>{event.title}</h1>
        <p className="detail-years">{event.yearLabel}</p>
      </header>

      <p className="detail-summary">{event.summary}</p>
      <p className="detail-body">{event.detail}</p>

      <div className="event-actions">
        <button
          type="button"
          className="action-btn edit"
          onClick={() => requestAction('edit')}
        >
          ✎ Sửa sự kiện
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={() => requestAction('insert-before')}
        >
          + Thêm sự kiện trước
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={() => requestAction('insert-after')}
        >
          + Thêm sự kiện sau
        </button>
      </div>

      <p className="event-breadcrumb">
        Thuộc giai đoạn <strong>{eraLabel[period.era]}</strong> ·{' '}
        <Link to={`/period/${period.id}`}>{period.name}</Link>
      </p>

      <nav className="detail-nav" aria-label="Điều hướng sự kiện">
        {prev ? (
          <Link
            to={`/period/${period.id}/event/${prev.id}`}
            className="detail-nav-link prev"
          >
            <span>← Mốc trước</span>
            <strong>{prev.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/period/${period.id}/event/${next.id}`}
            className="detail-nav-link next"
          >
            <span>Mốc tiếp →</span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      {showAuth && (
        <AuthModal
          onClose={() => {
            setShowAuth(false)
            setPending(null)
          }}
          onSuccess={() => {
            if (pending) setAction(pending)
            setPending(null)
          }}
        />
      )}

      {action && (
        <EventForm
          title={
            action === 'edit'
              ? 'Sửa sự kiện'
              : action === 'insert-before'
                ? 'Thêm sự kiện phía trước'
                : 'Thêm sự kiện phía sau'
          }
          initial={
            action === 'edit'
              ? {
                yearLabel: event.yearLabel,
                year: event.year,
                title: event.title,
                summary: event.summary,
                detail: event.detail,
              }
              : undefined
          }
          submitLabel={action === 'edit' ? 'Lưu thay đổi' : 'Thêm sự kiện'}
          onSubmit={handleSubmit}
          onClose={() => setAction(null)}
        />
      )}
    </article>
  )
}

export default EventDetail
