'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const MSG = "Hello Team Brainhunt Ventures, I would like to know more about your Background Verification Services."
const WA_URL = `https://wa.me/919689003720?text=${encodeURIComponent(MSG)}`

export default function WhatsAppButton() {
  const [hint, setHint] = useState(true)
  useEffect(() => { const t = setTimeout(() => setHint(false), 6000); return () => clearTimeout(t) }, [])
  return (
    <div className="fixed bottom-5 right-5 z-[55] flex items-end gap-2">
      <AnimatePresence>
        {hint && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="relative mb-1.5 hidden sm:block max-w-[230px] rounded-2xl rounded-br-sm bg-white shadow-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
            <button onClick={() => setHint(false)} className="absolute -top-2 -right-2 h-6 w-6 bg-slate-900 text-white rounded-full flex items-center justify-center"><X className="h-3 w-3" /></button>
            <div className="font-semibold text-slate-900 mb-0.5">Need help?</div>
            Chat with our BGV experts on WhatsApp.
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a href={WA_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}
        className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl">
        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
        <MessageCircle className="h-7 w-7" fill="white" />
      </motion.a>
    </div>
  )
}
