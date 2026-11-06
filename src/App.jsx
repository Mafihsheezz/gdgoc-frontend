import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Overview from './pages/Overview/Overview'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-[70px]"></main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App