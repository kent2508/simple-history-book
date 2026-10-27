import { Link, useParams } from 'react-router-dom'
import { eraLabel, getPeriodById, periods } from '../data/periods'

function PeriodDetail() {
  const { id } = useParams<{ id: string }>()
  const period = id ? getPeriodById(id) : undefined

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
