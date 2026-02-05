import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Briefing from './pages/Briefing'
import Aulas from './pages/Aulas'
import Documentacao from './pages/Documentacao'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4">
        <Routes>
          <Route path="/" element={<Aulas />} />
          <Route path="/briefing" element={<Briefing />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/documentacao" element={<Documentacao />} />
        </Routes>
      </div>
    </>
  )
}