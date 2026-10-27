import { Link, useParams } from 'react-router-dom';
import { eraLabel, getPeriodById } from '../data/periods';
import { useEvents } from '../hooks/useEvents';

function EventDetail() {
  const { id, eventId } = useParams<{ id: string; eventId: string }>()
  const period = id ? getPeriodById(id) : undefined
  const { events, loading } = useEvents(period?.id)
  const event = events.find((e) => e.id === eventId)

  // Đang tải dữ liệu từ Supabase, chưa khẳng định được là không tồn tại
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
    </article>
  )
}

export default EventDetail
