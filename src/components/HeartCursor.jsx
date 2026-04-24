import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeartCursor() {
  const [finePointer, setFinePointer] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const apply = () => setFinePointer(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!finePointer) return undefined

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    document.body.classList.add('heart-cursor-active')
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.body.classList.remove('heart-cursor-active')
    }
  }, [finePointer, x, y])

  if (!finePointer) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] text-base text-pink-300/90 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      aria-hidden="true"
    >
      ✦
    </motion.div>
  )
}
