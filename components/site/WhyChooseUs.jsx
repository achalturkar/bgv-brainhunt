"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Cpu,
  Users,
  Lock,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import AnimatedBackground from "../ui/AnimatedBackground";

const features = [
  {
    icon: Zap,
    title: "Fast Verification",
    description:
      "Industry-leading turnaround time with AI-powered workflows and real-time tracking.",
    badge: "24-48 Hrs",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Cpu,
    title: "API Integration",
    description:
      "Connect seamlessly with HRMS, ATS and ERP platforms using secure REST APIs.",
    badge: "API Ready",
    color: "from-violet-500 to-indigo-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Every client gets a dedicated SPOC ensuring smooth onboarding and faster resolutions.",
    badge: "Dedicated SPOC",
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description:
      "Enterprise-grade security with encryption, audit logs and DPDP compliant processes.",
    badge: "DPDP",
    color: "from-red-500 to-pink-500",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: Globe,
    title: "PAN India Coverage",
    description:
      "Nationwide verification network covering metro cities, towns and rural locations.",
    badge: "5000+ Associates",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: Award,
    title: "Enterprise Ready",
    description:
      "Built for enterprises with SLA management, dashboards, analytics and audit trails.",
    badge: "ISO Ready",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#F8FBFF] via-white to-[#F4F9FF]">

<AnimatedBackground/>
      {/* Decorative Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="container-x relative">

        {/* Heading */}

        {/* <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0052CC]">
            Why Brainhunt Ventures
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Built for Modern Hiring Teams
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Combining technology, compliance and expert verification to help
            organizations hire with complete confidence.
          </p>

        </div> */}
         <SectionHead
      eyebrow="Why Brainhunt Ventures"
      title="Built for Modern Hiring Teams"
      sub=" Combining technology, compliance and expert verification to help organizations hire with complete confidence."
    />

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: index * .08 }}
                className="group"
              >

                <div
                  className={`relative overflow-hidden rounded-3xl border ${item.border} bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,82,204,0.15)]`}
                >

                  {/* Hover Gradient */}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />

                  <div className="relative z-10">

                    {/* Top */}

                    <div className="flex items-center justify-between">

                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} transition-all group-hover:bg-white/20`}
                      >
                        <Icon className="h-8 w-8 text-slate-700 group-hover:text-white" />
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-blue-700 transition-all group-hover:bg-white/20 group-hover:text-white">
                        {item.badge}
                      </span>

                    </div>

                    {/* Content */}

                    <h3 className="mt-8 text-xl font-bold text-slate-900 transition group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-blue-100">
                      {item.description}
                    </p>

                    {/* Bottom */}

                    {/* <div className="mt-8 flex items-center text-[#0052CC] font-semibold transition-all group-hover:text-white">

                      Learn More

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                    </div> */}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#0052CC] to-[#2563EB] px-8 py-8 text-white shadow-xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>

              <h3 className="text-2xl font-bold">
                Trusted by 60+ Organizations Across India
              </h3>

              <p className="mt-2 text-blue-100">
                Delivering secure, accurate and compliant background
                verification solutions with industry-leading turnaround times.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-6 text-center">

              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-blue-100">Accuracy</div>
              </div>

              <div>
                <div className="text-3xl font-bold">3K+</div>
                <div className="text-sm text-blue-100">Checks Done</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
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