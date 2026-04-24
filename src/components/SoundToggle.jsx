import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'

export function SoundToggle() {
  const { enabled, toggle, canPlay } = useSound()

  return (
    <motion.button
      type="button"
      onClick={() => canPlay && toggle()}
      disabled={!canPlay}
      whileHover={canPlay ? { scale: 1.06 } : {}}
      whileTap={canPlay ? { scale: 0.95 } : {}}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-lg text-pink-100 shadow-lg shadow-pink-500/10 backdrop-blur-md transition-colors hover:border-pink-300/40 hover:bg-black/40 disabled:cursor-not-allowed disabled:opacity-45 md:right-6 md:top-6"
      aria-pressed={enabled}
      aria-disabled={!canPlay}
      aria-label={
        !canPlay
          ? 'Background music unavailable — add music.mp3 to the public folder'
          : enabled
            ? 'Turn background music off'
            : 'Turn background music on'
      }
      title={
        !canPlay
          ? 'Add public/music.mp3 to enable music'
          : enabled
            ? 'Music on'
            : 'Music off'
      }
    >
      {enabled ? '♪' : '♫'}
    </motion.button>
  )
}
