import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pageVariants } from '../motion/variants'

const PARAGRAPHS = [
  'My love,',
  'Thank you for these four beautiful months — for choosing me, for staying, for growing beside me in the quiet and the loud.',
  'You have softened the edges of my world. You lift my mood on days that felt too gray, and you remind me that tenderness is a kind of strength.',
  'You give me positive energy when I run low, and motivation when I doubt the path ahead. With you, I want to be better — not out of pressure, but out of love.',
  'This little site is only words and motion, but every pixel is honest: I am grateful for you, deeply and daily.',
]

function useSequentialTyping(paragraphs, msPerChar = 22, gapMs = 600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const gapRef = useRef(null)
  const complete = index >= paragraphs.length

  /* Typing ticks are timer-driven; clearing text on paragraph change is intentional. */
  useEffect(() => {
    if (complete) return undefined

    const full = paragraphs[index]
    let i = 0
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset visible line when `index` changes
    setText('')
    const intervalId = window.setInterval(() => {
      i += 1
      if (i > full.length) {
        window.clearInterval(intervalId)
        gapRef.current = window.setTimeout(() => {
          gapRef.current = null
          setIndex((n) => n + 1)
        }, gapMs)
        return
      }
      setText(full.slice(0, i))
    }, msPerChar)

    return () => {
      window.clearInterval(intervalId)
      if (gapRef.current) {
        window.clearTimeout(gapRef.current)
        gapRef.current = null
      }
    }
  }, [index, paragraphs, msPerChar, gapMs, complete])

  const linesBefore = paragraphs.slice(0, index)
  const currentLine = text

  return { linesBefore, currentLine, complete }
}

export function LoveMessage() {
  const navigate = useNavigate()
  const { linesBefore, currentLine, complete } = useSequentialTyping(PARAGRAPHS)

  return (
    <motion.main
      className="relative z-10 mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-24 md:py-28"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="rounded-3xl border border-white/10 bg-black/25 p-8 shadow-2xl shadow-fuchsia-900/20 backdrop-blur-md md:p-12">
        <div className="space-y-6 font-[family-name:var(--font-body)] text-lg leading-relaxed text-pink-50/95 md:text-xl">
          {linesBefore.map((line, i) => (
            <p key={`${i}-${line.slice(0, 24)}`} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}
          {!complete && (
            <p className="min-h-[1.5em] whitespace-pre-wrap">
              {currentLine}
              <motion.span
                className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 bg-pink-300 align-middle"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 0.85, repeat: Infinity }}
                aria-hidden
              />
            </p>
          )}
        </div>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: complete ? 1 : 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            type="button"
            disabled={!complete}
            onClick={() => navigate('/reasons')}
            whileHover={complete ? { scale: 1.03 } : {}}
            whileTap={complete ? { scale: 0.98 } : {}}
            className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 disabled:cursor-not-allowed disabled:opacity-40 md:text-base"
          >
            Why
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  )
}
