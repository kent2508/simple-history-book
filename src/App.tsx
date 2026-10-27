import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PeriodDetail from './pages/PeriodDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/period/:id" element={<PeriodDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
