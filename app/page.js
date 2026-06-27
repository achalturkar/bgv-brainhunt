'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Globe, Lock, Users, Database, CheckCircle2, ArrowRight, FileCheck2, IdCard, GraduationCap, Briefcase, MapPin, Sparkles, BadgeCheck, Cpu, BarChart3, Search, ClipboardCheck, FileSearch, Award, Star, Quote, Phone, Mail, Home, Fingerprint, CreditCard, Clock3 } from 'lucide-react'
import {
  Laptop,
  Landmark,
  Wallet,
  Shield,
  HeartPulse,
  Pill,
  Factory,
  Truck,
  ShoppingCart,
  Headphones,
  ShoppingBag,
  RadioTower,
  Building2,
  Building,
  

} from "lucide-react";
import Particles from '@/components/site/Particles'
import Typewriter from '@/components/site/Typewriter'
import FAQ from '@/components/site/FAQ'
import CTA from '@/components/site/CTA'
import Workflow from '@/components/site/Workflow'
import ClientsMarquee from '@/components/site/ClientsMarquee';
import WhyChooseUs from '@/components/site/WhyChooseUs';



const services = [
  {
    icon: Home,
    title: "Residence Verification (Digital)",
    description:
      "Digital address verification using trusted databases for quick and reliable validation.",
    badge: "2 Days",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Residence Verification (Physical)",
    description:
      "On-ground physical address verification conducted across PAN India.",
    badge: "5 Days",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "Academic Verification",
    description:
      "Verification of highest qualification directly from universities, colleges and educational boards.",
    badge: "10 Days",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Briefcase,
    title: "Employment Verification",
    description:
      "Verification of employment history, designation, tenure and exit status.",
    badge: "7 Days",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Fingerprint,
    title: "UAN / EPFO Check",
    description:
      "Instant employment verification through EPFO and UAN employment records.",
    badge: "Instant",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Search,
    title: "Criminal Court Record Check",
    description:
      "Jurisdiction-based criminal court searches to identify legal records.",
    badge: "1 Day",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Database Search",
    description:
      "International sanctions, watchlists, compliance and adverse media screening.",
    badge: "1 Day",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Reference Check",
    description:
      "Structured manager and professional reference verification with documented feedback.",
    badge: "2 Days",
    color: "from-emerald-500 to-teal-500",
  },
  // {
  //   icon: Shield,
  //   title: "OFAC & Sanctions Check",
  //   description:
  //     "Regulatory sanctions screening against OFAC and other compliance databases.",
  //   badge: "2 Days",
  //   color: "from-rose-500 to-red-500",
  // },
  {
    icon: CreditCard,
    title: "Identity Verification",
    description:
      "Verification of PAN, Passport, Driving License and Voter ID through trusted sources.",
    badge: "Instant",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Clock3,
    title: "Gap Verification",
    description:
      "Employment and education gap analysis to identify unexplained career breaks.",
    badge: "2 Days",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: FileCheck2,
    title: "CV Validation",
    description:
      "Resume validation to ensure candidate information is complete, accurate and authentic.",
    badge: "1 Day",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: FileSearch,
    title: "Credit / CIBIL Check",
    description:
      "Credit history verification and financial integrity assessment using CIBIL data.",
    badge: "1 Day",
    color: "from-slate-600 to-slate-800",
  },
];



const industries = [
  {
    title: "IT & Software",
    icon: Laptop,
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-200",
    bg: "bg-blue-50",
  },
  {
    title: "Banking & Finance",
    icon: Landmark,
    color: "from-green-500 to-emerald-500",
    border: "border-green-200",
    bg: "bg-green-50",
  },
  {
    title: "NBFC",
    icon: Wallet,
    color: "from-amber-500 to-orange-500",
    border: "border-amber-200",
    bg: "bg-amber-50",
  },
  {
    title: "Insurance",
    icon: Shield,
    color: "from-violet-500 to-fuchsia-500",
    border: "border-violet-200",
    bg: "bg-violet-50",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
    border: "border-red-200",
    bg: "bg-red-50",
  },
  {
    title: "Pharma",
    icon: Pill,
    color: "from-cyan-500 to-sky-500",
    border: "border-cyan-200",
    bg: "bg-cyan-50",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    color: "from-purple-500 to-indigo-500",
    border: "border-purple-200",
    bg: "bg-purple-50",
  },
  {
    title: "Logistics",
    icon: Truck,
    color: "from-orange-500 to-red-500",
    border: "border-orange-200",
    bg: "bg-orange-50",
  },
  {
    title: "Retail",
    icon: ShoppingCart,
    color: "from-lime-500 to-green-500",
    border: "border-lime-200",
    bg: "bg-lime-50",
  },
  {
    title: "BPO / KPO",
    icon: Headphones,
    color: "from-fuchsia-500 to-purple-500",
    border: "border-fuchsia-200",
    bg: "bg-fuchsia-50",
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-500",
    border: "border-blue-200",
    bg: "bg-blue-50",
  },
  {
    title: "E-Commerce",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-500",
    border: "border-pink-200",
    bg: "bg-pink-50",
  },
  {
    title: "Telecom",
    icon: RadioTower,
    color: "from-sky-500 to-cyan-500",
    border: "border-sky-200",
    bg: "bg-sky-50",
  },
  {
    title: "Security",
    icon: ShieldCheck,
    color: "from-orange-500 to-yellow-500",
    border: "border-orange-200",
    bg: "bg-orange-50",
  },
  {
    title: "Government",
    icon: Building2,
    color: "from-emerald-500 to-green-500",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
  },
  {
    title: "Real Estate",
    icon: Building,
    color: "from-indigo-500 to-blue-500",
    border: "border-indigo-200",
    bg: "bg-indigo-50",
  },
];
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
          {/* <div className="col-span-12 rounded-xl border border-slate-100 p-3.5 bg-slate-950 text-emerald-300 font-mono text-[11px]">
            <div className="text-slate-500 mb-1">POST /api/v1/verify/pan</div>
            <div>{'{ "pan": "ABCDE1234F", "name": "Rajesh Kumar" }'}</div>
            <div className="text-slate-500 mt-2">200 OK • 142ms</div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>{'{ "status": "VALID", "name_match": true, "category": "Individual" }'}</motion.div>
          </div> */}
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
    <div className="">
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
              Fast, accurate & technology-driven employee verification solutions. Trusted by 60+ companies across India for secure, compliant hiring.
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
              {[['60+','Companies'],['3K+','Verifications'],['99%','Accuracy']].map(([n,l]) => (
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
    <ClientsMarquee/>

      {/* WHY US */}
   <WhyChooseUs/>

     {/* SERVICES */}
<section
  id="services"
  className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-[#F8FAFF] to-white"
>
  {/* Background Blur */}
  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-100/30 blur-[120px]" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-100/30 blur-[120px]" />

  <div className="container-x relative">

    <SectionHead
      eyebrow="Verification Services"
      title="Comprehensive Background Verification Services"
      sub="Reliable, secure and technology-driven verification solutions for modern organizations."
    />

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {services.map((service, index) => {

        const Icon = service.icon;

        return (

          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .45,
              delay: index * .05,
            }}
            className="group"
          >

            <div
              className="
                h-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.03]
                hover:border-[#0052CC]
                hover:shadow-[0_15px_40px_rgba(0,82,204,0.12)]
              "
            >

              {/* Top */}

              <div className="flex items-start justify-between">

                <div
                  className="
                    h-12
                    w-12
                    rounded-xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-blue-100
                  "
                >
                  <Icon className="h-6 w-6 text-[#0052CC]" />
                </div>

                <span
                  className="
                    rounded-full
                    bg-slate-100
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    text-slate-600
                  "
                >
                  {service.badge}
                </span>

              </div>

              {/* Title */}

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              {/* Footer */}

              {/* <div className="mt-5 flex items-center justify-between">

                <span className="text-sm font-semibold text-[#0052CC]">
                  Learn More
                </span>

                <div
                  className="
                    h-9
                    w-9
                    rounded-full
                    bg-slate-50
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-blue-50
                  "
                >
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      text-[#0052CC]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </div> */}

            </div>

          </motion.div>

        );

      })}

    </div>

    {/* Bottom CTA */}

    <div className="mt-10 text-center">

      <Link
        href="/services"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          border
          border-[#0052CC]
          px-6
          py-3
          font-semibold
          text-[#0052CC]
          transition-all
          duration-300
          hover:bg-[#0052CC]
          hover:text-white
        "
      >

        View All Verification Services

        <ArrowRight className="h-4 w-4" />

      </Link>

    </div>

  </div>

</section>

      {/* HOW IT WORKS */}
   
    <Workflow/>

      {/* INDUSTRIES */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF]">

    <div className="container-x">

        <SectionHead
            eyebrow="Industries Served"
            title="Tailored for Every Industry"
            sub="Helping organizations across multiple sectors build trusted and compliant workforces."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {industries.map((industry, index) => {

                const Icon = industry.icon;

                return (

                    <motion.div
                        key={industry.title}
                        initial={{opacity:0,y:30}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:.45,delay:index*.05}}
                        viewport={{once:true}}
                        className={`group relative overflow-hidden rounded-3xl border ${industry.border} bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
                    >

                        {/* Background Gradient */}

                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${industry.color}`} />

                        {/* Content */}

                        <div className="relative z-10 flex items-center justify-between">

                            <div className={`h-16 w-16 rounded-2xl ${industry.bg} flex items-center justify-center group-hover:bg-white/20 transition`}>

                                <Icon className="h-8 w-8 text-slate-700 group-hover:text-white"/>

                            </div>

                            <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm group-hover:bg-white/20 group-hover:border-white/40">

                                <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-white"/>

                            </div>

                        </div>

                        <h3 className="relative z-10 mt-7 text-xl font-bold text-slate-900 group-hover:text-white transition">

                            {industry.title}

                        </h3>

                        <p className="relative z-10 mt-2 text-sm text-slate-500 leading-6 group-hover:text-blue-100 transition">

                            Trusted background verification solutions designed for the {industry.title} industry.

                        </p>

                    </motion.div>

                );

            })}

        </div>

        <div className="mt-16 flex justify-center">

            <Link
                href="/industries"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#0052CC] to-[#2563EB] px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 transition"
            >

                View All Industries

                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition"/>

            </Link>

        </div>

    </div>

</section>

      {/* TESTIMONIALS */}
      {/* <section className="py-20 overflow-hidden">
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
      </section> */}

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
     <CTA/>
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
