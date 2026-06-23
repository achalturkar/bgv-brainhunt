'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShieldCheck } from 'lucide-react'

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-soft border-b border-slate-200/60' : 'bg-transparent'}`}>
      <div className="container-x flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Brainhunt Ventures"
            width={150}
            height={45}
            priority
          />

          {/* <div className="hidden sm:block">
            <p className="text-xs font-semibold text-[#0052CC] tracking-widest uppercase">
              BGV Services India
            </p>
          </div> */}
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${active ? 'text-[#0052CC]' : 'text-slate-700 hover:text-[#0052CC]'}`}>
                {item.name}
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 bg-[#EAF2FF] rounded-lg -z-10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all">
            <ShieldCheck className="h-4 w-4" />
            Request Verification
          </Link>
        </div>

        <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="container-x py-4 flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link href={item.href} className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${pathname === item.href ? 'bg-[#EAF2FF] text-[#0052CC]' : 'text-slate-800 hover:bg-slate-50'}`}>
                    {item.name}
                    <span className="text-[#0066FF]">›</span>
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-soft">
                <ShieldCheck className="h-4 w-4" /> Request Verification
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
