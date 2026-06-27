'use client'
import CTA from '@/components/site/CTA'
import WhyChooseUs from '@/components/site/WhyChooseUs'
import { motion } from 'framer-motion'
import { ShieldCheck, Target, Eye, Zap, Cpu, Activity, Lock, Headphones, ClipboardCheck, Award, FileCheck2, Database } from 'lucide-react'

const whyChoose = [
  { icon: Zap, t: 'Fast Turnaround', d: 'Industry-leading TAT with parallel processing.' },
  { icon: Cpu, t: 'Advanced Technology', d: 'AI-assisted document classification and OCR.' },
  { icon: Activity, t: 'Real-Time Tracking', d: 'Live dashboards with SLA monitoring.' },
  { icon: Database, t: 'API Integration', d: 'Drop-in HRMS/ATS integrations.' },
  { icon: ClipboardCheck, t: 'Compliance Driven', d: 'DPDP, ISO ready, audit trail enabled.' },
  { icon: Headphones, t: 'Dedicated Support', d: 'SPOC + 24x7 client success team.' },
]

const process = [
  { t: 'Discovery', d: 'Understand your hiring volume, risk policies and compliance needs.' },
  { t: 'Configuration', d: 'Custom verification packages and SLAs aligned to your industry.' },
  { t: 'Onboarding', d: 'Portal, API & user training. Go-live in days.' },
  { t: 'Run & Optimize', d: 'Run verifications, monitor SLAs, optimize via analytics.' },
]

const security = [
  { t: 'DPDP Compliance', d: 'Aligned with India\'s Digital Personal Data Protection Act.' },
  { t: 'ISO Ready Architecture', d: 'Controls aligned to ISO 27001 / 9001 readiness.' },
  { t: 'Secure Data Handling', d: 'Granular RBAC, audit trails, tokenized storage.' },
  { t: 'End-to-End Encryption', d: 'Encryption in-transit (TLS 1.3) and at-rest (AES-256).' },
]

export default function AboutPage() {
  return (
    <div className="pt-8">
      <section className="container-x">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">About Brainhunt Ventures</div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Trusted Intelligence. <span className="text-gradient">Reliable Verification.</span> Confident Hiring.</h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Brainhunt Ventures is a technology-driven Background Verification company empowering organizations across India to build secure, compliant and high-integrity workforces through accurate, reliable and innovative screening solutions.</p>
        </motion.div>
      </section>

      <section className="container-x mt-16 grid md:grid-cols-2 gap-5">
        {[
          { icon: Target, t: 'Our Mission', d: 'Deliver accurate, compliant and technology-enabled verification solutions that help organizations make confident hiring decisions and reduce workforce risk.' },
          { icon: Eye, t: 'Our Vision', d: 'To become India\'s most trusted verification partner — setting the benchmark for speed, accuracy, security and customer experience in BGV.' },
        ].map((x) => (
          <motion.div key={x.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F8FAFF] p-7 shadow-soft">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center"><x.icon className="h-5 w-5" /></div>
            <h3 className="mt-4 text-xl font-semibold">{x.t}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{x.d}</p>
          </motion.div>
        ))}
      </section>

     <WhyChooseUs/>
      <section className="py-20">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center">Our Process</h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">A consultative, four-phase engagement designed to get you live quickly.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div key={p.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.08 }} className="relative rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-soft">
                <div className="text-5xl font-black text-[#EAF2FF]">0{i+1}</div>
                <h3 className="-mt-4 relative font-semibold text-slate-900">{p.t}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#7AB3FF] text-[11px] font-bold uppercase tracking-[0.18em]">Security & Compliance</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Security & compliance at the core</h2>
            <p className="mt-3 text-slate-300">Zero data leakage commitment. Audit-ready by design.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {security.map((s, i) => (
              <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.07 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <Lock className="h-6 w-6 text-[#7AB3FF]" />
                <h3 className="mt-3 font-semibold text-white">{s.t}</h3>
                <p className="mt-1.5 text-sm text-slate-300">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA/>
    </div>
  )
}
