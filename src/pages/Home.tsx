import { useMemo, useState } from 'react'
import Timeline from '../components/Timeline'
import { eraLabel, type Era, type Period } from '../data/periods'
import { usePeriods } from '../hooks/usePeriods'

type Filter = Era | 'all'

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Tất cả' },
  { value: 'ancient', label: eraLabel.ancient },
  { value: 'bacthuoc', label: eraLabel.bacthuoc },
  { value: 'dynastic', label: eraLabel.dynastic },
  { value: 'colonial', label: eraLabel.colonial },
  { value: 'modern', label: eraLabel.modern },
]

function matchesQuery(p: Period, q: string): boolean {
  return (
    p.name.toLowerCase().includes(q) ||
    p.summary.toLowerCase().includes(q) ||
    p.years.toLowerCase().includes(q)
  )
}

function Home() {
  const { periods, loading, source } = usePeriods()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  // Tính tập mốc cần làm nổi bật và mốc đầu tiên để trượt tới.
  // Lưu ý: KHÔNG lọc bỏ mốc nào — dòng thời gian luôn hiển thị đầy đủ.
  const { highlightIds, scrollToId, matchCount } = useMemo(() => {
    const q = query.trim().toLowerCase()
    const hasQuery = q !== ''
    const hasFilter = filter !== 'all'

    if (!hasQuery && !hasFilter) {
      return {
        highlightIds: new Set<string>(),
        scrollToId: null as string | null,
        matchCount: periods.length,
      }
    }

    const matched = periods.filter((p) => {
      const matchEra = filter === 'all' || p.era === filter
      const matchText = !hasQuery || matchesQuery(p, q)
      return matchEra && matchText
    })

    return {
      highlightIds: new Set(matched.map((p) => p.id)),
      scrollToId: matched[0]?.id ?? null,
      matchCount: matched.length,
    }
  }, [periods, query, filter])

  const isSearching = query.trim() !== '' || filter !== 'all'

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
          <div
            className="filter-group"
            role="group"
            aria-label="Lọc theo giai đoạn"
          >
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
          <Timeline
            periods={periods}
            highlightIds={highlightIds}
            scrollToId={scrollToId}
          />
        )}
      </main>

      <footer className="site-footer">
        <p>
          {isSearching
            ? `Khớp ${matchCount} / ${periods.length} dấu mốc`
            : `${periods.length} dấu mốc`}{' '}
          · Nguồn dữ liệu: {source === 'supabase' ? 'Supabase' : 'nội bộ'}
        </p>
      </footer>
    </div>
  )
}

export default Home
