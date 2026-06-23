'use client'
import { useEffect, useState } from 'react'

export default function Typewriter({ words = [], className = '' }) {
  const [i, setI] = useState(0)
  const [t, setT] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[i % words.length]
    const speed = del ? 40 : 90
    const timeout = setTimeout(() => {
      const next = del ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)
      setT(next)
      if (!del && next === word) setTimeout(() => setDel(true), 1300)
      else if (del && next === '') { setDel(false); setI((v) => v + 1) }
    }, speed)
    return () => clearTimeout(timeout)
  }, [t, del, i, words])
  return <span className={`typing-cursor ${className}`}>{t}</span>
}
