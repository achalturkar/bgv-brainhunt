'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ShieldCheck, ChevronDown,
  Building2, Cpu, Cog, Factory, Briefcase,
  ArrowRight, Phone, Globe, Search,
  CardSimIcon,
} from 'lucide-react'

// ─── Nav structure ────────────────────────────────────────────────────────────
const NAV = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    mega: {
      sections: [
        {
          heading: 'Company',
          items: [
            { icon: Building2, label: 'Who We Are', href: '/about', desc: 'Our story, mission & values' },
            // { icon: Globe,     label: 'Global Presence', href: '/about',   desc: 'Operations across 12 countries' },
            // { icon: Briefcase, label: 'Leadership',      href: '/about',     desc: 'Meet our executive team' },
          ],
        },
      ],
      cta: { label: 'View full profile →', href: '/about' },
    },
  },
  // {
  //   name: 'Products',
  //   href: '/products',
  //   mega: {
  //     sections: [
  //       {
  //         heading: 'Verification Suite',
  //         items: [
  //           { icon: ShieldCheck, label: 'BGV Platform',   href: '/products',      desc: 'End-to-end background checks' },
  //           // { icon: Cpu,         label: 'AI Risk Engine',  href: '/products/ai',       desc: 'Real-time risk intelligence' },
  //           { icon: Globe,       label: 'Global Database', href: '/products',  desc: '200+ verified records' },
  //         ],
  //       },
  //     ],
  //     cta: { label: 'Explore all products →', href: '/products' },
  //   },
  // },
  {
    name: 'Services',
    href: '/services',
    mega: {
      sections: [
        {
          heading: 'What We Do',
          items: [
            { icon: ShieldCheck, label: 'Employment Checks', href: '/services', desc: 'Verify past roles & credentials' },
            { icon: Cog, label: 'Criminal Records', href: '/services', desc: 'Multi-jurisdiction screening' },
            { icon: Building2, label: 'Company Diligence', href: '/services', desc: 'Corporate background checks' },
          ],
        },
      ],
      cta: { label: 'See all services →', href: '/services' },
    },
  },
  {
    name: 'Industries',
    href: '/industries',
    mega: {
      sections: [
        {
          heading: 'We Serve',
          items: [
            { icon: Factory, label: 'Financial Services', href: '/industries', desc: 'BFSI-grade compliance screening' },
            { icon: Cpu, label: 'Technology', href: '/industries', desc: 'Fast-track for high-growth teams' },
            { icon: Building2, label: 'Healthcare', href: '/industries', desc: 'Clinical & non-clinical staff' },
          ],
        },
      ],
      cta: { label: 'All industries →', href: '/industries' },
    },
  },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

// ─── Dropdown panel ───────────────────────────────────────────────────────────
function MegaPanel({ mega }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] z-50"
    >
      {/* Arrow tip */}
      <div className="mx-auto w-3 h-3 bg-white border-l border-t border-slate-200/80 rotate-45 -mb-1.5 ml-[46%]" />

      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/70 rounded-2xl shadow-xl shadow-slate-900/10 overflow-hidden">
        {mega.sections.map((sec) => (
          <div key={sec.heading} className="p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 px-3 mb-2">
              {sec.heading}
            </p>
            {sec.items.map(({ icon: Icon, label, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[#EAF2FF] transition-colors"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF2FF] group-hover:bg-[#0052CC] transition-colors">
                  <Icon className="h-4 w-4 text-[#0052CC] group-hover:text-white transition-colors" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-800 group-hover:text-[#0052CC] transition-colors">
                    {label}
                  </span>
                  <span className="block text-[12px] text-slate-500 leading-tight mt-0.5">{desc}</span>
                </span>
              </Link>
            ))}
          </div>
        ))}

        {/* CTA strip */}
        <div className="bg-slate-50/80 border-t border-slate-100 px-5 py-3 flex items-center justify-between">
          <Link
            href={mega.cta.href}
            className="text-[12px] font-semibold text-[#0052CC] hover:text-[#0041A8] flex items-center gap-1 transition-colors"
          >
            {mega.cta.label}
          </Link>
          <span className="text-[11px] text-slate-400">Brainhunt Ventures</span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setActiveMenu(null) }, [pathname])

  const openMenu = (name) => { clearTimeout(timerRef.current); setActiveMenu(name) }
  const closeMenu = () => { timerRef.current = setTimeout(() => setActiveMenu(null), 120) }
  const stayOpen = () => clearTimeout(timerRef.current)

  return (
    <>
      {/* ── Top ticker bar ───────────────────────────────────────────────── */}
      {/* <div className="hidden lg:flex items-center justify-between bg-[#0052CC] text-white text-[11.5px] font-medium px-8 py-1.5">
        <div className="flex items-center gap-5 text-blue-100/90">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All systems operational
          </span>
          <span className="opacity-40">|</span>
          <span>ISO 27001 · SOC 2 Type II · GDPR Compliant</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="tel:+911800123456" className="flex items-center gap-1.5 text-blue-100/90 hover:text-white transition">
            <Phone className="h-3 w-3" /> 1800-123-4567
          </Link>
          <span className="opacity-40">|</span>
          <Link href="/login" className="text-blue-100/90 hover:text-white transition">Client Login</Link>
          <Link href="/partner" className="text-blue-100/90 hover:text-white transition">Partner Portal</Link>
        </div>
      </div> */}

      {/* ── Main header ──────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,82,204,0.06)]'
            : 'bg-white'
          }`}
      >
        {/* Progress bar (purely decorative accent) */}
        <div className=" bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#60a5fa]" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.webp" alt="Brainhunt Ventures" width={130} height={36} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/')
              const isOpen = activeMenu === item.name

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.mega && openMenu(item.name)}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-150
                      ${active
                        ? 'text-[#0052CC]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#EAF2FF] rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item.name}
                    {item.mega && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0052CC]' : 'text-slate-400'}`}
                      />
                    )}
                  </Link>

                  {item.mega && (
                    <AnimatePresence>
                      {isOpen && (
                        <div onMouseEnter={stayOpen} onMouseLeave={closeMenu}>
                          <MegaPanel mega={item.mega} />
                        </div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Search toggle */}
            {/* <button
              onClick={() => setSearchOpen(v => !v)}
              aria-label="Search"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <Search className="h-4.5 w-4.5" />
            </button> */}

            {/* Outline CTA */}
            {/* <Link
              href="/BVPL-Background-Verification-Services.pdf"
              target="_blank"
              className="px-4 py-2 rounded-lg text-[13px] font-semibold text-[#0052CC] border border-[#0052CC]/30 hover:bg-[#EAF2FF] transition-colors"
            >
              BGV Proposal
            </Link> */}

            <Link href="/BVPL-Background-Verification-Services.pdf" target="_blank">
              <div
                className="px-4 py-2 rounded-lg text-[13px] font-semibold text-[#0052CC] border border-[#0052CC]/30 hover:bg-[#EAF2FF] transition-colors"
              >              Download Proposal
              </div>
            </Link>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden bg-[#0052CC] text-white px-4 py-2 rounded-lg text-[13px] font-semibold shadow-md shadow-blue-200 hover:bg-[#0041A8] transition-colors"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Request Verification
              <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* ── Search bar (slides down) ────────────────────────────────────── */}
        {/* <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0,    opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-slate-100"
            >
              <div className="max-w-2xl mx-auto px-5 py-3">
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products, services, industries…"
                    className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
                  />
                  <kbd className="hidden sm:inline text-[10px] text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">ESC</kbd>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <Image src="/logo.webp" alt="Brainhunt Ventures" width={110} height={30} />
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-[14px] font-medium transition-colors
                        ${pathname === item.href
                          ? 'bg-[#EAF2FF] text-[#0052CC]'
                          : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      {item.name}
                      <ArrowRight className={`h-4 w-4 ${pathname === item.href ? 'text-[#0052CC]' : 'text-slate-300'}`} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="p-4 border-t border-slate-100 space-y-2.5">

                <Link href="/BVPL-Background-Verification-Services.pdf" target="_blank">
                  <div
                    className=" flex gap-2 items-center justify-center px-4 py-2 rounded-lg text-[13px] font-semibold text-[#0052CC] border border-[#0052CC]/30 hover:bg-[#EAF2FF] transition-colors"
                  >  
                  <CardSimIcon/>
                  Download Proposal
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0052CC] text-white text-sm font-semibold shadow-md shadow-blue-200 hover:bg-[#0041A8] transition-colors"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Request Verification
                </Link>

                {/* Contact info */}
                <div className="pt-2 flex items-center gap-2 text-[12px] text-slate-400">
                  <Phone className="h-3 w-3" />
                  9689003720 · Mon–Sat 9am–7pm
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}