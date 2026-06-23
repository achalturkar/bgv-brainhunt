'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQS = [
  { q: 'What is Background Verification (BGV)?', a: 'Background Verification is the process of authenticating a candidate\'s identity, employment, education, address, criminal history and other credentials to make confident, risk-aware hiring decisions.' },
  { q: 'How long does verification take with Brainhunt Ventures?', a: 'Most checks are completed within 24–72 hours. Bulk PAN/Aadhaar identity checks return in seconds via our APIs. Field-based checks like address & police verification typically close within 5–7 working days.' },
  { q: 'Is your platform DPDP and ISO compliant?', a: 'Yes. Our platform is aligned with India\'s Digital Personal Data Protection (DPDP) Act and built on ISO 27001-ready architecture with end-to-end encryption, RBAC and full audit trails.' },
  { q: 'Can you integrate with our HRMS or ATS?', a: 'Absolutely. We offer REST APIs, webhooks and pre-built connectors for popular HRMS/ATS platforms. Most integrations go live in a single sprint.' },
  { q: 'Do you cover PAN India for field verifications?', a: 'Yes — our field network of 5,000+ associates covers all major Indian cities and tier-2/3 towns, including rural locations across every state and UT.' },
  { q: 'What pricing models do you offer?', a: 'We offer pay-per-check, package-based and enterprise volume pricing. Custom packages can be tailored to your industry and hiring volume — contact sales for details.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-20">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">FAQ</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked <span className="text-gradient">questions</span></h2>
          <p className="mt-3 text-slate-600">Everything you need to know about Brainhunt Ventures' verification platform. Can't find what you're looking for?</p>
          <a href="mailto:contact@brainhuntventures.com" className="mt-5 inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:gap-3 transition-all"><HelpCircle className="h-4 w-4" /> Ask our team →</a>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <motion.div key={f.q} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.04 }} className={`rounded-2xl border bg-white transition-all ${open === i ? 'border-[#0052CC] shadow-soft' : 'border-slate-200'}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left p-5">
                <span className="font-semibold text-slate-900">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-[#0052CC] transition-transform shrink-0 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
      }) }} />
    </section>
  )
}
