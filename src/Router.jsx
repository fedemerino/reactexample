import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Reportes } from './components/Reportes'
import { Autogestion } from './components/Autogestion'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/misdatos" element={<Autogestion />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default Router