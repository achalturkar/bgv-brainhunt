'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, IdCard, FileCheck2, MapPin, Briefcase, GraduationCap, Search, FileSearch, BadgeCheck, Users, BarChart3, Database, FileText, Stethoscope, Globe2, Car, Building2, Home, UserCheck, Smartphone, FolderOpen, LogOut, Briefcase as BriefcaseIcon, ShieldAlert, CheckCircle2, ArrowRight, Clock, Award } from 'lucide-react'
import Link from 'next/link'

const ALL = [
  { icon: IdCard, t: 'Identity Verification', d: 'Confirm identity via authoritative sources — PAN, Aadhaar, Passport & DL cross-referenced for name, DOB and address.', b: ['Reduces identity fraud','Government source validation','Real-time API'] },
  { icon: FileCheck2, t: 'PAN Verification', d: 'Validate PAN status, name match and category via NSDL / Income Tax APIs in real time.', b: ['Real-time NSDL lookup','Name match scoring','Detects invalid/duplicate PAN'] },
  { icon: ShieldCheck, t: 'Aadhaar Verification', d: 'Offline e-KYC, OTP or biometric Aadhaar verification with UIDAI-compliant flows.', b: ['UIDAI compliant','Masked Aadhaar storage','OTP & offline modes'] },
  { icon: MapPin, t: 'Address Verification', d: 'Physical on-ground and digital address checks across urban and rural India.', b: ['PAN India field network','Geo-tagged proof','Permanent & current address'] },
  { icon: Briefcase, t: 'Employment Verification', d: 'Confirm previous employment, tenure, designation, exit reason & rehire eligibility directly with employers.', b: ['Direct HR source','Form 16 cross-check','Exit reason capture'] },
  { icon: GraduationCap, t: 'Education Verification', d: 'University, board and institute level verification of degrees and certificates.', b: ['UGC/AICTE coverage','Marksheet authentication','Detects diploma mills'] },
  { icon: Search, t: 'Criminal Record Check', d: 'Comprehensive court and police database screening across civil and criminal cases.', b: ['Pan-India coverage','Multi-jurisdiction','Litigation history'] },
  { icon: FileSearch, t: 'Court Record Check', d: 'Litigation search at District, High Court & Supreme Court including civil suits.', b: ['District + Higher courts','Civil & criminal suits','Detailed case timeline'] },
  { icon: BadgeCheck, t: 'Police Verification', d: 'Local police station coordination, character certificate and tenant police checks.', b: ['Police station coordination','Character certificate','PCC processing'] },
  { icon: Users, t: 'Reference Check', d: 'Structured reference interviews with verified professional contacts.', b: ['Structured questionnaire','Identity-verified referees','Audio transcripts'] },
  { icon: BarChart3, t: 'Credit / CIBIL Check', d: 'CIBIL based credit history & financial integrity assessment for high-risk roles.', b: ['CIBIL bureau lookup','Score & overdue history','Defaulter check'] },
  { icon: ShieldAlert, t: 'Drug Test Verification', d: 'Empanelled labs across India for 5/10 panel drug tests with chain-of-custody.', b: ['NABL-accredited labs','Chain of custody','Lab partner network'] },
  { icon: Globe2, t: 'Global Database Check', d: 'Sanctions, PEPs, watchlists and adverse media screening across 200+ countries.', b: ['200+ databases','OFAC / UN / EU lists','Adverse media'] },
  { icon: FileText, t: 'Passport Verification', d: 'Validate passport authenticity, status and travel history via authorized channels.', b: ['MEA-aligned process','Tatkal compatible','Address proof linkage'] },
  { icon: Car, t: 'Driving License Verification', d: 'RTO-level DL authenticity, class, expiry and endorsements check.', b: ['RTO lookup','Vehicle class match','Endorsement check'] },
  { icon: Building2, t: 'Vendor Verification', d: 'GST, MCA and director due diligence on third-party vendors and suppliers.', b: ['GST / MCA validation','Director DIN check','Litigation lookup'] },
  { icon: UserCheck, t: 'Director Due Diligence', d: 'In-depth check on directors including DIN, signatory history and beneficial owners.', b: ['DIN & signatory history','UBO mapping','Sanctions screening'] },
  { icon: Home, t: 'Tenant Verification', d: 'Comprehensive tenant background check including police, employment & address.', b: ['Police + ID + address','Employment proof','Income validation'] },
  { icon: Smartphone, t: 'Gig Worker Verification', d: 'Lightning-fast verification for gig and on-demand workforce — delivery, ride-share.', b: ['Bulk APIs','Sub-24h TAT','Mobile-first flow'] },
  { icon: FolderOpen, t: 'Social Media Screening', d: 'AI-assisted scan of public social profiles for risk and behavior indicators.', b: ['AI risk scoring','Configurable categories','Public-data only'] },
  { icon: Database, t: 'Database Verification', d: 'Internal & external watchlist checks including ex-employees and DNH lists.', b: ['Watchlist coverage','Custom DNH lists','Continuous monitoring'] },
  { icon: LogOut, t: 'Employee Exit Verification', d: 'Final settlement, exit interview validation and rehire eligibility checks.', b: ['F&F validation','Rehire eligibility','Exit reason capture'] },
  { icon: BriefcaseIcon, t: 'Business Verification', d: 'KYB checks — incorporation, registered address, beneficial owners and operations.', b: ['MCA & GST','Operational checks','Bank statement parse'] },
  { icon: Award, t: 'Vendor Due Diligence', d: 'Enhanced 360° vendor risk — financial, legal, operational and reputational.', b: ['360° risk','Financial health','Compliance scoring'] },
]

const PROCESS = ['Initiate request', 'Collect documents', 'Run verification', 'Quality review', 'Deliver report']

export default function ServicesPage() {
  return (
    <div className="pt-8">
      <section className="container-x text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">Services</div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">24+ Background <span className="text-gradient">Verification Services</span></h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">End-to-end checks under one roof — powered by automation, expert ops and PAN India field network.</p>
      </section>

      <section className="container-x mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ALL.map((s, i) => (
          <motion.div key={s.t} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: (i%6)*0.04 }}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 overflow-hidden hover:border-[#0052CC]/40 hover:-translate-y-1 hover:shadow-glow transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#EAF2FF] to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center shadow-soft"><s.icon className="h-5 w-5" /></div>
            <h3 className="relative mt-4 text-lg font-semibold">{s.t}</h3>
            <p className="relative mt-1.5 text-sm text-slate-600 leading-relaxed">{s.d}</p>
            <ul className="relative mt-3 space-y-1.5">
              {s.b.map(x => (
                <li key={x} className="flex items-start gap-2 text-xs text-slate-700"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />{x}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="py-20 mt-10 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">How it works</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">A simple 5-step verification process</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS.map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.07 }} className="text-center rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-soft">
                <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center font-bold">{i+1}</div>
                <div className="mt-3 text-sm font-semibold">{p}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow">Request a custom package <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
