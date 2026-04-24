import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { SoundProvider } from './context/SoundContext'
import { FloatingHearts } from './components/FloatingHearts'
import { GlowOrbs } from './components/GlowOrbs'
import { HeartCursor } from './components/HeartCursor'
import { SoundToggle } from './components/SoundToggle'
import { FinalSurprise } from './pages/FinalSurprise'
import { Landing } from './pages/Landing'
import { LoveMessage } from './pages/LoveMessage'
import { Reasons } from './pages/Reasons'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/message" element={<LoveMessage />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/surprise" element={<FinalSurprise />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SoundProvider>
        <div className="romantic-bg relative min-h-dvh">
          <GlowOrbs />
          <FloatingHearts />
          <HeartCursor />
          <SoundToggle />
          <AnimatedRoutes />
        </div>
      </SoundProvider>
    </BrowserRouter>
  )
}
