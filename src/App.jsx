import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Briefing from './pages/Briefing'

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Briefing />} />
          {/* <Route path="/livro/:book" element={<Capitulos />} />
          <Route path="/livro/:book/:chapter" element={<Versiculos />} /> */}
        </Routes>
      </div>
    </>
  )
}