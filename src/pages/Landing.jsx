import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { pageVariants } from '../motion/variants'

export function Landing() {
  const navigate = useNavigate()

  return (
    <motion.main
      className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.p
        className="mb-3 font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-[0.35em] text-pink-200/80"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Four months
      </motion.p>

      <motion.h1
        className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-100 via-pink-200 to-fuchsia-200 drop-shadow-[0_0_40px_rgba(244,114,182,0.25)]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        For the most special person in my life{' '}
        <motion.span
          className="inline-block"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        >
          ❤️
        </motion.span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-md text-base font-light leading-relaxed text-pink-100/75 md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
      >
        A small corner of the internet, made only for you — gentle, honest, and full of gratitude.
      </motion.p>

      <motion.button
        type="button"
        onClick={() => navigate('/message')}
        className="mt-12 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-10 py-3.5 font-[family-name:var(--font-body)] text-base font-semibold text-white shadow-[0_0_40px_rgba(236,72,153,0.45)] ring-2 ring-white/20 transition hover:ring-white/35"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        whileHover={{ scale: 1.04, boxShadow: '0 0 56px rgba(236,72,153,0.55)' }}
        whileTap={{ scale: 0.98 }}
      >
        Enter
      </motion.button>
    </motion.main>
  )
}
