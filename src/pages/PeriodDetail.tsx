import { Link, useParams } from 'react-router-dom'
import { eraLabel, getPeriodById, periods } from '../data/periods'
import { useEvents } from '../hooks/useEvents'

function PeriodDetail() {
  const { id } = useParams<{ id: string }>()
  const period = id ? getPeriodById(id) : undefined
  const { events } = useEvents(period?.id)

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
        <section className="event-section" aria-label="Các mốc thời gian nổi bật">
          <h2 className="event-section-title">Các mốc thời gian nổi bật</h2>
          <ol className="event-list">
            {events.map((event) => (
              <li key={event.id} className="event-row">
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
    </article>
  )
}

export default PeriodDetail
