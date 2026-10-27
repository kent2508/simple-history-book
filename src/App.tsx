import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Tách mỗi trang thành chunk riêng (route-based code splitting).
// Giúp bundle ban đầu nhỏ hơn; Supabase chỉ nằm trong chunk các trang cần nó.
const Home = lazy(() => import('./pages/Home'))
const PeriodDetail = lazy(() => import('./pages/PeriodDetail'))
const EventDetail = lazy(() => import('./pages/EventDetail'))

function App() {
  return (
    <Suspense fallback={<p className="route-loading">Đang tải…</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/period/:id" element={<PeriodDetail />} />
        <Route path="/period/:id/event/:eventId" element={<EventDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default App
