'use client'
import { motion } from 'framer-motion'
import { Users, Sparkles, Rocket, HeartHandshake, GraduationCap, ArrowRight, Mail, Briefcase, MapPin, Clock } from 'lucide-react'

const openings = [
  { t: 'Verification Executive', loc: 'Nagpur / Pune', type: 'Full-time', team: 'Operations' },
  { t: 'BGV Analyst', loc: 'Pune', type: 'Full-time', team: 'Operations' },
  { t: 'Client Success Executive', loc: 'Remote / Pune', type: 'Full-time', team: 'Customer Success' },
  { t: 'Sales Executive', loc: 'Mumbai / Pune / Bangalore', type: 'Full-time', team: 'Sales' },
]

const whyJoin = [
  { icon: Rocket, t: 'High-growth journey', d: 'Be early at a category-defining BGV company in India.' },
  { icon: HeartHandshake, t: 'People-first culture', d: 'Mentorship, learning budget and ownership from day one.' },
  { icon: Sparkles, t: 'Tech-first mindset', d: 'Modern stack, automation and a culture of experimentation.' },
  { icon: GraduationCap, t: 'Continuous learning', d: 'Certifications, internal academy and cross-team rotations.' },
]

export default function CareersPage() {
  return (
    <div className="pt-24 lg:pt-28">
      <section className="container-x text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">Careers</div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Build the future of <span className="text-gradient">trusted hiring</span></h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Join a passionate team building India's most trusted Background Verification platform.</p>
      </section>

      <section className="container-x mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyJoin.map((w, i) => (
          <motion.div key={w.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#0052CC]/40 hover:shadow-glow transition">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center"><w.icon className="h-5 w-5" /></div>
            <h3 className="mt-4 font-semibold">{w.t}</h3>
            <p className="mt-1.5 text-sm text-slate-600">{w.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Current Openings</h2>
          <p className="mt-3 text-center text-slate-600">Find your next role at Brainhunt Ventures.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {openings.map((j, i) => (
              <motion.div key={j.t} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.06 }} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-[#0052CC] hover:shadow-glow transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0052CC] bg-[#EAF2FF] px-2.5 py-1 rounded-full"><Briefcase className="h-3 w-3" /> {j.team}</div>
                    <h3 className="mt-3 text-lg font-semibold">{j.t}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
                      <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {j.loc}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {j.type}</span>
                    </div>
                  </div>
                  <a href={`mailto:careers@brainhuntventures.com?subject=Application: ${encodeURIComponent(j.t)}&body=Hi Brainhunt Ventures team, I would like to apply for the ${j.t} role.`} className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-soft group-hover:shadow-glow transition-all whitespace-nowrap">
                    Apply <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="mailto:careers@brainhuntventures.com" className="inline-flex items-center gap-2 text-[#0052CC] font-semibold hover:gap-3 transition-all"><Mail className="h-4 w-4" /> careers@brainhuntventures.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}
