import Home from './pages/Home';
import LandingPage from './pages/Landing';
import NotFound from './components/utils/NotFound'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/app' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}
