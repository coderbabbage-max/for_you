import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { pageVariants } from '../motion/variants'

function burst(originY) {
  const colors = ['#fbcfe8', '#f9a8d4', '#e879f9', '#c084fc', '#fda4af']

  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: originY, x: 0.5 },
    colors,
    scalar: 1.1,
    ticks: 200,
  })

  window.setTimeout(() => {
    confetti({
      particleCount: 55,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: originY + 0.05 },
      colors,
    })
    confetti({
      particleCount: 55,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: originY + 0.05 },
      colors,
    })
  }, 180)
}

const heartsBurst = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  angle: (360 / 14) * i + Math.random() * 12,
  dist: 120 + Math.random() * 100,
  delay: Math.random() * 0.15,
}))

export function FinalSurprise() {
  const [revealed, setRevealed] = useState(false)

  const onClick = useCallback(() => {
    burst(0.65)
    burst(0.55)
    setRevealed(true)
  }, [])

  return (
    <motion.main
      className="relative z-10 flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {!revealed && (
        <motion.div
          className="relative z-10 max-w-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-pink-50 md:text-5xl">
            Thank you for everything{' '}
            <span className="text-pink-300" aria-hidden>
              ❤️
            </span>
          </h1>
          <p className="mt-6 text-lg text-pink-100/80 md:text-xl">
            For your patience, your laughter, your heart — for being you.
          </p>

          <motion.button
            type="button"
            onClick={onClick}
            className="mt-12 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 px-12 py-4 text-base font-bold text-white shadow-[0_0_48px_rgba(244,114,182,0.55)] ring-2 ring-white/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Click me
          </motion.button>
        </motion.div>
      )}

      {revealed && (
        <motion.div
          className="relative z-10 flex max-w-xl flex-col items-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        >
          <motion.h2
            className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,4.5rem)] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-100 via-rose-100 to-fuchsia-200 drop-shadow-[0_0_60px_rgba(244,114,182,0.45)]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            I love you{' '}
            <span className="inline-block" aria-hidden>
              ❤️
            </span>
          </motion.h2>
          <p className="mt-8 text-lg text-pink-100/85 md:text-xl">
            Always — in every chapter we write together.
          </p>
        </motion.div>
      )}

      {revealed && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
          {heartsBurst.map((h) => (
            <motion.span
              key={h.id}
              className="absolute text-3xl text-pink-300/90"
              initial={{ opacity: 1, x: 0, y: 0, scale: 0.2 }}
              animate={{
                opacity: [1, 1, 0],
                x: Math.cos((h.angle * Math.PI) / 180) * h.dist,
                y: Math.sin((h.angle * Math.PI) / 180) * h.dist,
                scale: [0.4, 1.2, 0.8],
              }}
              transition={{ duration: 1.4, delay: h.delay, ease: 'easeOut' }}
            >
              ❤️
            </motion.span>
          ))}
        </div>
      )}
    </motion.main>
  )
}
