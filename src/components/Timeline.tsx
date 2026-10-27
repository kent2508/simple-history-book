import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { eraLabel, type Period } from '../data/periods'

interface TimelineProps {
  periods: Period[]
  /** Các id triều đại cần làm nổi bật (khớp lọc/tìm kiếm) */
  highlightIds?: Set<string>
  /** Id triều đại cần trượt tới khi thay đổi */
  scrollToId?: string | null
}

function Timeline({ periods, highlightIds, scrollToId }: TimelineProps) {
  const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map())

  useEffect(() => {
    if (!scrollToId) return
    const el = itemRefs.current.get(scrollToId)
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [scrollToId])

  if (periods.length === 0) {
    return <p className="timeline-empty">Chưa có dữ liệu triều đại.</p>
  }

  const hasHighlight = highlightIds !== undefined && highlightIds.size > 0

  return (
    <div
      className="timeline"
      role="list"
      aria-label="Dòng thời gian lịch sử Việt Nam"
    >
      <ol className="timeline-items">
        {periods.map((period, index) => {
          const highlighted = highlightIds?.has(period.id) ?? false
          const dimmed = hasHighlight && !highlighted
          return (
            <li
              key={period.id}
              ref={(el) => {
                if (el) itemRefs.current.set(period.id, el)
                else itemRefs.current.delete(period.id)
              }}
              className={`timeline-item era-${period.era} ${index % 2 === 0 ? 'above' : 'below'
                } ${highlighted ? 'is-highlighted' : ''} ${dimmed ? 'is-dimmed' : ''
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
          )
        })}
      </ol>
    </div>
  )
}

export default Timeline
