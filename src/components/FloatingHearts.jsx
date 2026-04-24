import { motion } from 'framer-motion'

const hearts = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: `${(i * 37) % 100}%`,
  delay: (i % 7) * 0.35,
  duration: 10 + (i % 5) * 2,
  scale: 0.45 + (i % 4) * 0.2,
  opacity: 0.15 + (i % 3) * 0.12,
}))

export function FloatingHearts({ dense = false }) {
  const list = dense ? hearts : hearts.slice(0, 12)

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {list.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-2xl select-none"
          style={{
            left: h.x,
            bottom: '-8%',
            opacity: h.opacity,
            scale: h.scale,
          }}
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: ['0dvh', '-120dvh'],
            rotate: [0, 18, -12, 8],
            x: [0, 12, -8, 6],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  )
}
