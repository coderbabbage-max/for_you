import { motion } from 'framer-motion'

export function GlowOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[min(90vw,480px)] w-[min(90vw,480px)] rounded-full bg-fuchsia-500/20 blur-[100px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[min(85vw,420px)] w-[min(85vw,420px)] rounded-full bg-pink-500/15 blur-[90px]"
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-400/10 blur-[80px]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
