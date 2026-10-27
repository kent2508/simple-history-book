import { useMemo, useState } from 'react'
import Timeline from '../components/Timeline'
import { usePeriods } from '../hooks/usePeriods'
import { eraLabel, type Era } from '../data/periods'

type Filter = Era | 'all'

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Tất cả' },
  { value: 'ancient', label: eraLabel.ancient },
  { value: 'bacthuoc', label: eraLabel.bacthuoc },
  { value: 'dynastic', label: eraLabel.dynastic },
  { value: 'colonial', label: eraLabel.colonial },
  { value: 'modern', label: eraLabel.modern },
]

function Home() {
  const { periods, loading, source } = usePeriods()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return periods.filter((p) => {
      const matchEra = filter === 'all' || p.era === filter
      const matchText =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.years.toLowerCase().includes(q)
      return matchEra && matchText
    })
  }, [periods, query, filter])

  return (
    <div className="page">
      <header className="site-header">
        <p className="site-kicker">Dòng chảy lịch sử</p>
        <h1 className="site-title">
          Các triều đại &amp; thời kỳ lịch sử Việt Nam
        </h1>
        <p className="site-intro">
          Từ nhà nước Văn Lang, Âu Lạc, trải qua các triều đại phong kiến và
          những cuộc chiến tranh vệ quốc, cho đến Việt Nam ngày nay. Kéo ngang
          để lần theo mỗi dấu mốc.
        </p>

        <div className="controls">
          <input
            type="search"
            className="search-input"
            placeholder="Tìm triều đại, mốc năm…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Tìm kiếm triều đại"
          />
          <div className="filter-group" role="group" aria-label="Lọc theo giai đoạn">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`filter-chip ${filter === f.value ? 'active' : ''}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="site-main">
        {loading ? (
          <p className="timeline-empty">Đang tải dữ liệu…</p>
        ) : (
          <Timeline periods={visible} />
        )}
      </main>

      <footer className="site-footer">
        <p>
          {visible.length} / {periods.length} dấu mốc · Nguồn dữ liệu:{' '}
          {source === 'supabase' ? 'Supabase' : 'nội bộ'}
        </p>
      </footer>
    </div>
  )
}

export default Home
