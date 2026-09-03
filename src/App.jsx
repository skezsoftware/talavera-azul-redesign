import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import PrivateDining from './pages/PrivateDining'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './styles/components.css'
import './styles/pages.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/private-dining" element={<PrivateDining />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
