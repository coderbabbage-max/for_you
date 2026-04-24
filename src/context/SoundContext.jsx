import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const SoundContext = createContext(null)

const MUSIC_SRC = '/music.mp3'

export function SoundProvider({ children }) {
  const audioRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [canPlay, setCanPlay] = useState(true)

  useEffect(() => {
    const el = new Audio(MUSIC_SRC)
    el.loop = true
    el.volume = 0.28
    el.preload = 'auto'
    audioRef.current = el

    const onErr = () => setCanPlay(false)
    el.addEventListener('error', onErr)

    return () => {
      el.removeEventListener('error', onErr)
      el.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = useCallback(() => {
    const el = audioRef.current
    if (!el || !canPlay) return

    if (enabled) {
      el.pause()
      setEnabled(false)
      return
    }

    el.play()
      .then(() => setEnabled(true))
      .catch(() => setEnabled(false))
  }, [enabled, canPlay])

  const value = { enabled, toggle, canPlay }

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

/* Hook colocated with provider for this small app. */
// eslint-disable-next-line react-refresh/only-export-components -- useSound is tied to SoundProvider
export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) throw new Error('useSound must be used within SoundProvider')
  return ctx
}
