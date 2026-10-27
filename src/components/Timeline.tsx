import { Link } from 'react-router-dom'
import { eraLabel, type Period } from '../data/periods'

interface TimelineProps {
  periods: Period[]
}

function Timeline({ periods }: TimelineProps) {
  if (periods.length === 0) {
    return <p className="timeline-empty">Không tìm thấy triều đại phù hợp.</p>
  }

  return (
    <div
      className="timeline"
      role="list"
      aria-label="Dòng thời gian lịch sử Việt Nam"
    >
      <ol className="timeline-items">
        {periods.map((period, index) => (
          <li
            key={period.id}
            className={`timeline-item era-${period.era} ${index % 2 === 0 ? 'above' : 'below'
              }`}
            role="listitem"
          >
            <div className="timeline-card-slot">
              <Link to={`/period/${period.id}`} className="milestone">
                <span className="milestone-era">{eraLabel[period.era]}</span>
                <h2 className="milestone-name">{period.name}</h2>
                <p className="milestone-years">{period.years}</p>
                <p className="milestone-summary">{period.summary}</p>
                <span className="milestone-more">Xem chi tiết →</span>
              </Link>
            </div>
            <div className="timeline-axis-slot">
              <span className="milestone-dot" aria-hidden="true" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Timeline
