import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AuthModal from '../auth/AuthModal'
import { useAuth } from '../auth/useAuth'
import EventForm from '../components/EventForm'
import { eraLabel, getPeriodById, periods } from '../data/periods'
import { useEvents } from '../hooks/useEvents'
import { insertEventRelative, type EventInput } from '../lib/eventsApi'

interface InsertTarget {
  anchorId: string
  position: 'before' | 'after'
}

function PeriodDetail() {
  const { id } = useParams<{ id: string }>()
  const period = id ? getPeriodById(id) : undefined
  const { events, refetch } = useEvents(period?.id)
  const { user } = useAuth()

  const [showAuth, setShowAuth] = useState(false)
  const [insertTarget, setInsertTarget] = useState<InsertTarget | null>(null)
  // Lưu ý định sau khi đăng nhập xong thì mở lại form chèn
  const [pending, setPending] = useState<InsertTarget | null>(null)

  if (!period) {
    return (
      <div className="detail-page">
        <p className="detail-notfound">Không tìm thấy triều đại này.</p>
        <Link to="/" className="back-link">
          ← Về dòng thời gian
        </Link>
      </div>
    )
  }

  const index = periods.findIndex((p) => p.id === period.id)
  const prev = index > 0 ? periods[index - 1] : undefined
  const next = index < periods.length - 1 ? periods[index + 1] : undefined

  function requestInsert(target: InsertTarget) {
    if (!user) {
      setPending(target)
      setShowAuth(true)
      return
    }
    setInsertTarget(target)
  }

  async function handleInsert(input: EventInput) {
    if (!period || !insertTarget) return
    await insertEventRelative(
      period.id,
      events,
      insertTarget.anchorId,
      insertTarget.position,
      input,
    )
    refetch()
  }

  return (
    <article className={`detail-page era-${period.era}`}>
      <Link to="/" className="back-link">
        ← Về dòng thời gian
      </Link>

      <header className="detail-header">
        <span className="milestone-era">{eraLabel[period.era]}</span>
        <h1>{period.name}</h1>
        <p className="detail-years">{period.years}</p>
      </header>

      <p className="detail-summary">{period.summary}</p>
      <p className="detail-body">{period.detail}</p>

      {events.length > 0 && (
        <section
          className="event-section"
          aria-label="Các mốc thời gian nổi bật"
        >
          <h2 className="event-section-title">Các mốc thời gian nổi bật</h2>
          <ol className="event-list">
            {events.map((event) => (
              <li key={event.id} className="event-row">
                <button
                  type="button"
                  className="insert-btn insert-before"
                  onClick={() =>
                    requestInsert({ anchorId: event.id, position: 'before' })
                  }
                  aria-label={`Thêm sự kiện trước "${event.title}"`}
                  title="Thêm sự kiện phía trước"
                >
                  + Thêm trước
                </button>

                <Link
                  to={`/period/${period.id}/event/${event.id}`}
                  className="event-card"
                >
                  <span className="event-year">{event.yearLabel}</span>
                  <span className="event-body">
                    <strong className="event-title">{event.title}</strong>
                    <span className="event-summary">{event.summary}</span>
                  </span>
                  <span className="event-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>

                <button
                  type="button"
                  className="insert-btn insert-after"
                  onClick={() =>
                    requestInsert({ anchorId: event.id, position: 'after' })
                  }
                  aria-label={`Thêm sự kiện sau "${event.title}"`}
                  title="Thêm sự kiện phía sau"
                >
                  + Thêm sau
                </button>
              </li>
            ))}
          </ol>
        </section>
      )}

      <nav className="detail-nav" aria-label="Điều hướng triều đại">
        {prev ? (
          <Link to={`/period/${prev.id}`} className="detail-nav-link prev">
            <span>← Trước đó</span>
            <strong>{prev.name}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/period/${next.id}`} className="detail-nav-link next">
            <span>Tiếp theo →</span>
            <strong>{next.name}</strong>
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
            if (pending) setInsertTarget(pending)
            setPending(null)
          }}
        />
      )}

      {insertTarget && (
        <EventForm
          title={
            insertTarget.position === 'before'
              ? 'Thêm sự kiện phía trước'
              : 'Thêm sự kiện phía sau'
          }
          submitLabel="Thêm sự kiện"
          onSubmit={handleInsert}
          onClose={() => setInsertTarget(null)}
        />
      )}
    </article>
  )
}

export default PeriodDetail
