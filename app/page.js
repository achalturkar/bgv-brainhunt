'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe, Lock, Users, Database, CheckCircle2, ArrowRight, FileCheck2, IdCard, GraduationCap, Briefcase, MapPin, Sparkles, BadgeCheck, Cpu, BarChart3, Search, ClipboardCheck, FileSearch, Award, Star, Quote, Phone, Mail } from 'lucide-react'
import Counter from '@/components/site/Counter'
import Particles from '@/components/site/Particles'
import Typewriter from '@/components/site/Typewriter'
import FAQ from '@/components/site/FAQ'

const services = [
  { icon: IdCard, t: 'Identity Verification', d: 'PAN, Aadhaar, Passport & DL validation against authoritative sources.' },
  { icon: FileCheck2, t: 'PAN Verification', d: 'Real-time PAN status & name match via NSDL/Income Tax APIs.' },
  { icon: ShieldCheck, t: 'Aadhaar Verification', d: 'Offline e-KYC & OTP-based Aadhaar verification.' },
  { icon: MapPin, t: 'Address Verification', d: 'On-ground physical or digital address checks across PAN India.' },
  { icon: Briefcase, t: 'Employment Verification', d: 'Direct employer confirmation of role, tenure & exit reason.' },
  { icon: GraduationCap, t: 'Education Verification', d: 'University & board level certificate authentication.' },
  { icon: Search, t: 'Criminal Record Check', d: 'Court & police database screening for civil and criminal cases.' },
  { icon: FileSearch, t: 'Court Record Check', d: 'Litigation history at District, High Court & Supreme Court.' },
  { icon: BadgeCheck, t: 'Police Verification', d: 'Local police station coordination & character certificate.' },
  { icon: Users, t: 'Reference Check', d: 'Structured reference interviews with verified contacts.' },
  { icon: BarChart3, t: 'Credit / CIBIL Check', d: 'Credit history & financial integrity assessment.' },
  { icon: Database, t: 'Global Database Check', d: 'Sanctions, PEPs and adverse media screening worldwide.' },
]

const whyUs = [
  { icon: Zap, t: 'Fast Verification', d: 'Industry-leading TAT with automated workflows.' },
  { icon: Cpu, t: 'API Integration', d: 'Seamless HRMS/ATS integration with REST APIs.' },
  { icon: Users, t: 'Dedicated Support', d: 'Single Point of Contact (SPOC) per client.' },
  { icon: Lock, t: 'Secure Platform', d: 'DPDP compliant with end-to-end encryption.' },
  { icon: Globe, t: 'PAN India Coverage', d: '5000+ field associates across urban & rural India.' },
  { icon: Award, t: 'Enterprise Ready', p: 'ISO Ready', d: 'Audit trails, role-based access, SLAs & analytics.' },
]

const steps = [
  { t: 'Case Initiation', d: 'Client raises case via portal, API or bulk upload.' },
  { t: 'Data Collection', d: 'Candidate submits documents via secure portal.' },
  { t: 'Verification Processing', d: 'Automated checks & field investigations begin.' },
  { t: 'Verification Checks', d: '20+ checks executed in parallel with progress tracking.' },
  { t: 'Quality Review', d: 'Multi-level QC & insufficiency management.' },
  { t: 'Final Report', d: 'Digitally signed audit-ready report delivered.' },
]

const industries = ['IT & Software','Banking & Finance','NBFC','Insurance','Healthcare','Pharma','Manufacturing','Logistics','Retail','BPO/KPO','Education','E-Commerce','Telecom','Security','Government','Real Estate']

const testimonials = [
  { n: 'Rohit Sharma', r: 'Head of HR, IT Enterprise', q: 'Brainhunt cut our verification turnaround time by 60%. Their API plugged into our ATS in a single sprint.' },
  { n: 'Priya Iyer', r: 'Talent Acquisition Lead, NBFC', q: 'Accuracy and transparency are unmatched. We trust them for executive-level checks.' },
  { n: 'Anil Verma', r: 'COO, Logistics', q: 'PAN India field network handled 1200 driver verifications in record time.' },
  { n: 'Sneha Kapoor', r: 'CHRO, BPO', q: 'The dashboard gives us real-time SLA visibility. Game changer for mass hiring.' },
  { n: 'Vikram Singh', r: 'Director, Healthcare', q: 'Their compliance posture and DPDP readiness gave our board confidence.' },
]

const brands = ['Acme Corp','Nexus Bank','Veritas IT','Helios Pharma','OmegaLogistics','BrightRetail','PolarisBPO','Stellar Edu','UrbanCabs','PrimeNBFC']

const floatingCards = [
  { icon: IdCard, t: 'Identity Verified', d: 'PAN • ABCDE1234F' },
  { icon: Search, t: 'Criminal Check Completed', d: 'No records found' },
  { icon: GraduationCap, t: 'Education Verified', d: 'B.Tech • IIT Bombay' },
  { icon: Briefcase, t: 'Employment Verified', d: 'TechCo • 2019–2024' },
  { icon: MapPin, t: 'Address Verified', d: 'Pune, Maharashtra' },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

function HeroDashboard() {
  return (
    <div className="relative">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
        className="relative rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-xs text-slate-500">verify.brainhuntventures.com / dashboard</span>
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-12 gap-3">
          <div className="col-span-12 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-500">Candidate Verification</div>
              <div className="text-base font-semibold text-slate-900">Rajesh Kumar • BGV-2025-04812</div>
            </div>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-semibold">IN PROGRESS</span>
          </div>
          <div className="col-span-12 sm:col-span-6 rounded-xl border border-slate-100 p-3.5 bg-gradient-to-br from-[#EAF2FF] to-white">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-slate-700">Overall Progress</div>
              <div className="text-xs text-[#0052CC] font-bold">78%</div>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ duration: 1.6, delay: 0.4 }} className="h-full rounded-full bg-gradient-to-r from-[#0052CC] to-[#0066FF]" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {['PAN','Aadhaar','UAN'].map((x, i) => (
                <div key={x} className="rounded-lg bg-white border border-slate-100 py-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mx-auto" />
                  <div className="text-[10px] mt-1 font-semibold text-slate-700">{x}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 rounded-xl border border-slate-100 p-3.5">
            <div className="text-xs font-semibold text-slate-700 mb-2">Verification Checks</div>
            <div className="space-y-2">
              {[['Identity','complete'],['Education','complete'],['Employment','progress'],['Criminal','progress'],['Address','queued']].map(([n,s], i) => (
                <motion.div key={n} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i*0.15 }} className="flex items-center justify-between text-xs">
                  <span className="text-slate-700">{n}</span>
                  <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${s==='complete'?'bg-emerald-50 text-emerald-700':s==='progress'?'bg-blue-50 text-[#0052CC]':'bg-slate-100 text-slate-500'}`}>{s==='complete'?'✓ DONE':s==='progress'?'• ACTIVE':'QUEUED'}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="col-span-12 rounded-xl border border-slate-100 p-3.5 bg-slate-950 text-emerald-300 font-mono text-[11px]">
            <div className="text-slate-500 mb-1">POST /api/v1/verify/pan</div>
            <div>{'{ "pan": "ABCDE1234F", "name": "Rajesh Kumar" }'}</div>
            <div className="text-slate-500 mt-2">200 OK • 142ms</div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>{'{ "status": "VALID", "name_match": true, "category": "Individual" }'}</motion.div>
          </div>
        </div>
      </motion.div>

      {floatingCards.map((c, i) => {
        const positions = [
          'left-[-18%] top-[8%]','right-[-14%] top-[6%]','left-[-14%] top-[58%]','right-[-12%] top-[48%]','left-[10%] top-[100%]'
        ]
        return (
          <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i*0.18, duration: 0.6 }}
            className={`hidden md:flex absolute ${positions[i]} bg-white shadow-2xl border border-slate-200 rounded-xl p-3 items-center gap-2.5 max-w-[200px] animate-float`}
            style={{ animationDelay: `${i*0.6}s` }}>
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#EAF2FF] to-white flex items-center justify-center text-[#0052CC] border border-[#0052CC]/10"><c.icon className="h-4 w-4" /></div>
            <div>
              <div className="text-[11px] font-semibold text-slate-900 leading-tight">{c.t}</div>
              <div className="text-[10px] text-slate-500">{c.d}</div>
            </div>
            <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
          </motion.div>
        )
      })}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF2FF] via-white to-[#F5F9FF]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0"><Particles density={55} /></div>
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-[#0066FF]/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-[480px] h-[480px] bg-[#0052CC]/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

        <div className="relative container-x py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-soft border border-[#0052CC]/10 text-xs font-semibold text-[#0052CC]">
              <Sparkles className="h-3.5 w-3.5" /> India's #1 Tech-Driven BGV Platform
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900">
              India's Trusted <span className="text-gradient">Background Verification</span> Partner
            </motion.h1>
            <motion.div variants={fadeUp} className="mt-3 text-lg sm:text-xl font-semibold text-slate-700">
              Verify <Typewriter words={['Identity • PAN • Aadhaar','Education & Employment','Criminal & Court Records','Address & References','Credit & Global Databases']} className="text-[#0052CC]" />
            </motion.div>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
              Fast, accurate & technology-driven employee verification solutions. Trusted by 500+ companies across India for secure, compliant hiring.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all">
                Request Demo <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#0052CC] text-slate-800 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors">
                <Phone className="h-4 w-4" /> Contact Sales
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[['500+','Companies'],['50K+','Verifications'],['98%','Accuracy']].map(([n,l]) => (
                <div key={l} className="glass-blue rounded-xl px-3 py-3 text-center">
                  <div className="text-xl font-bold text-[#0052CC]">{n}</div>
                  <div className="text-[11px] text-slate-600">{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative lg:pl-8"><HeroDashboard /></div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">Trusted by enterprises and fast-growing companies</p>
          <div className="mt-6 overflow-hidden relative">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((b, i) => (
                <div key={i} className="text-2xl font-bold text-slate-300 hover:text-[#0052CC] transition-colors">{b}</div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[{n:500, s:'+', l:'Enterprise Clients'},{n:50000, s:'+', l:'Verifications Done'},{n:98, s:'%', l:'Accuracy Rate'},{n:24, s:'h', l:'Avg. Turnaround'}].map((x,i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="text-center rounded-2xl border border-slate-100 p-6 hover:border-[#0052CC]/30 hover:shadow-soft transition-all">
                <div className="text-3xl lg:text-4xl font-bold text-gradient"><Counter to={x.n} suffix={x.s} /></div>
                <div className="mt-1 text-sm text-slate-600">{x.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead eyebrow="Why Brainhunt Ventures" title="Built for modern hiring teams" sub="Combining people, process and platform to deliver verification you can trust." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <motion.div key={w.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i*0.06 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#0052CC]/40 hover:-translate-y-1 hover:shadow-glow transition-all overflow-hidden">
                <div className="absolute -right-6 -top-6 h-24 w-24 bg-[#EAF2FF] rounded-full opacity-0 group-hover:opacity-100 transition" />
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center shadow-soft">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-4 text-lg font-semibold text-slate-900">{w.t}</h3>
                <p className="relative mt-1.5 text-sm text-slate-600 leading-relaxed">{w.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gradient-to-b from-white via-[#F8FAFF] to-white">
        <div className="container-x">
          <SectionHead eyebrow="Services" title="20+ Background Verification Services" sub="End-to-end checks under one roof — from identity to credit, criminal to global database." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.04 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#0052CC] hover:shadow-glow transition-all">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-[#EAF2FF] text-[#0052CC] group-hover:bg-[#0052CC] group-hover:text-white transition-colors flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{s.t}</h4>
                    <p className="mt-1 text-sm text-slate-600">{s.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:gap-3 transition-all">
              Explore the full verification platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead eyebrow="Process" title="How Verification Works" sub="A transparent, audit-ready process designed for speed and accuracy." />
          <div className="mt-14 relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-transparent via-[#0052CC]/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {steps.map((s, i) => (
                <motion.div key={s.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="relative text-center">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-white border-2 border-[#0052CC] text-[#0052CC] font-bold flex items-center justify-center shadow-soft relative z-10">
                    {i+1}
                  </div>
                  <h4 className="mt-3 font-semibold text-slate-900 text-sm">{s.t}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="container-x">
          <SectionHead eyebrow="Industries Served" title="Tailored for every sector" sub="From BFSI to BPO, healthcare to logistics — we power verification at scale." />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.03 }}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-5 text-center hover:border-[#0052CC] hover:bg-gradient-to-br hover:from-[#0052CC] hover:to-[#0066FF] hover:text-white hover:-translate-y-1 transition-all cursor-default shadow-sm hover:shadow-glow">
                <div className="text-sm font-semibold">{ind}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/industries" className="inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:gap-3 transition-all">View all industries <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 overflow-hidden">
        <div className="container-x">
          <SectionHead eyebrow="Testimonials" title="Loved by HR leaders" sub="Hear from talent leaders building secure, compliant workforces with us." />
        </div>
        <div className="mt-12 relative">
          <div className="flex gap-5 animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[340px] max-w-[340px] rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <Quote className="h-6 w-6 text-[#0052CC]/30" />
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{t.q}</p>
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center font-bold">{t.n[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.n}</div>
                    <div className="text-xs text-slate-500">{t.r}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">{[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0052CC] via-[#0066FF] to-[#3B82F6] p-10 lg:p-16 text-white animate-gradient">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Verify Your Workforce?</h2>
                <p className="mt-3 text-white/85 max-w-2xl">Schedule a 30-minute demo to see how Brainhunt Ventures can transform your hiring with secure, fast and compliant background verification.</p>
                <div className="mt-4 flex items-center gap-5 text-sm"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> No credit card</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> 30-min walkthrough</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Custom pricing</span></div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0052CC] px-6 py-3.5 rounded-xl text-sm font-bold shadow-xl hover:scale-105 transition-transform">Schedule Demo <ArrowRight className="h-4 w-4" /></Link>
                <a href="mailto:contact@brainhuntventures.com" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3.5 rounded-xl text-sm font-semibold backdrop-blur"><Mail className="h-4 w-4" /> Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">{eyebrow}</motion.div>
      <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</motion.h2>
      <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 text-slate-600 leading-relaxed">{sub}</motion.p>
    </div>
  )
}
