'use client'
import { motion } from 'framer-motion'
import { Cpu, Banknote, Landmark, Shield, HeartPulse, Pill, Factory, Truck, ShoppingBag, Headphones, GraduationCap, Package, Phone, Lock, Briefcase } from 'lucide-react'

const industries = [
  { icon: Cpu, t: 'IT & Software', d: 'Comprehensive employee verification for tech enterprises and product startups.' },
  { icon: Banknote, t: 'Banking & Financial Services', d: 'Risk management, KYC and integrity checks for banking workforce.' },
  { icon: Landmark, t: 'NBFC', d: 'Compliance-aligned screening for collections, sales and credit officers.' },
  { icon: Shield, t: 'Insurance', d: 'Agent verification and IRDAI-aligned distribution channel screening.' },
  { icon: HeartPulse, t: 'Healthcare', d: 'Medical staff verification including license & credentialing.' },
  { icon: Pill, t: 'Pharma', d: 'Research staff verification and scientific integrity checks.' },
  { icon: Factory, t: 'Manufacturing', d: 'Workforce screening for plants, warehouses & shop floors.' },
  { icon: Truck, t: 'Logistics', d: 'Driver verification including DL, criminal & address checks.' },
  { icon: ShoppingBag, t: 'Retail', d: 'Store staff verification at speed for high-volume hiring.' },
  { icon: Headphones, t: 'BPO / KPO', d: 'Mass hiring verification with bulk APIs and SLAs.' },
  { icon: GraduationCap, t: 'Education', d: 'Faculty verification including degree, employment & police checks.' },
  { icon: Package, t: 'E-Commerce', d: 'Warehouse and last-mile staff verification at scale.' },
  { icon: Phone, t: 'Telecom', d: 'Field executive verification & doorstep KYC associates.' },
  { icon: Lock, t: 'Security Agencies', d: 'Guard verification including police clearance & training records.' },
  { icon: Briefcase, t: 'Government Vendors', d: 'Contract staff verification for PSU & government empanelment.' },
]

export default function IndustriesPage() {
  return (
    <div className="pt-8">
      <section className="container-x text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">Industries Served</div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Tailored verification for <span className="text-gradient">every sector</span></h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">From regulated BFSI to high-volume e-commerce, we configure verification packages aligned to industry-specific risks and compliance needs.</p>
      </section>

      <section className="container-x mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <motion.div key={ind.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: (i%6)*0.05 }}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 overflow-hidden hover:border-[#0052CC]/40 hover:-translate-y-1 hover:shadow-glow transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#EAF2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center shadow-soft"><ind.icon className="h-5 w-5" /></div>
            <h3 className="relative mt-4 text-lg font-semibold">{ind.t}</h3>
            <p className="relative mt-1.5 text-sm text-slate-600 leading-relaxed">{ind.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20 mt-10">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-br from-[#0052CC] via-[#0066FF] to-[#3B82F6] p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Don't see your industry?</h2>
                <p className="mt-2 text-white/85">We build custom verification packages for any sector. Talk to our experts.</p>
              </div>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#0052CC] px-6 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform w-fit">Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
