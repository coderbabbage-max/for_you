import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { memories } from '../data/memories'
import { pageVariants } from '../motion/variants'

function MemoryCard({ item, index }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-900/40 to-purple-950/60">
        {imgOk ? (
          <motion.img
            src={item.image}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-sm text-pink-100/70">
            <span className="text-3xl opacity-60" aria-hidden>
              ✿
            </span>
            <p>Add your photo in `src/data/memories.js`</p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
      </div>
      <div className="relative p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-pink-50 md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-pink-100/75 md:text-base">{item.caption}</p>
      </div>
    </motion.article>
  )
}

export function Memories() {
  const navigate = useNavigate()

  return (
    <motion.main
      className="relative z-10 mx-auto min-h-dvh max-w-5xl px-6 py-24 md:py-28"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <header className="mb-14 text-center">
        <motion.p
          className="mb-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-pink-200/70"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Moments with you
        </motion.p>
        <motion.h1
          className="font-[family-name:var(--font-display)] text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 to-fuchsia-200 md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Memories I hold close
        </motion.h1>
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        {memories.map((m, i) => (
          <MemoryCard key={m.id} item={m} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          type="button"
          onClick={() => navigate('/reasons')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-pink-50 backdrop-blur-sm transition hover:border-pink-300/40 hover:bg-white/10 md:text-base"
        >
          Why you mean everything
        </motion.button>
      </motion.div>
    </motion.main>
  )
}
