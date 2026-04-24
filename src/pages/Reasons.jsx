import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { reasons } from '../data/reasons'
import { pageVariants } from '../motion/variants'

export function Reasons() {
  const navigate = useNavigate()

  return (
    <motion.main
      className="relative z-10 mx-auto min-h-dvh max-w-4xl px-6 py-24 md:py-28"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="mb-12 text-center">
        <motion.p
          className="mb-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-pink-200/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Countless reasons
        </motion.p>
        <motion.h1
          className="font-[family-name:var(--font-display)] text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-100 via-pink-100 to-rose-100 md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Why I love you
        </motion.h1>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {reasons.map((reason, i) => (
          <motion.li
            key={i}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-lg shadow-fuchsia-950/30 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.45 }}
            whileHover={{
              scale: 1.03,
              borderColor: 'rgba(244, 114, 182, 0.45)',
              boxShadow: '0 20px 50px -20px rgba(236, 72, 153, 0.35)',
            }}
          >
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/20 text-sm font-semibold text-pink-100">
              {i + 1}
            </span>
            <p className="mt-1 font-[family-name:var(--font-body)] text-base leading-relaxed text-pink-50/95 md:text-lg">
              {reason}
            </p>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="mt-14 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <motion.button
          type="button"
          onClick={() => navigate('/surprise')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/35 md:text-base"
        >
          One last surprise
        </motion.button>
      </motion.div>
    </motion.main>
  )
}
