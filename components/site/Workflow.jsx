"use client";

import { motion } from "framer-motion";
import {
  ClipboardPlus,
  FolderOpen,
  ScanSearch,
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const workflowSteps = [
  {
    title: "Case Initiation",
    description:
      "Raise verification requests through Portal, API or Bulk Upload.",
    icon: ClipboardPlus,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    title: "Document Collection",
    description:
      "Candidates securely upload documents through our encrypted portal.",
    icon: FolderOpen,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    title: "Verification Process",
    description:
      "AI validation and field verification begin simultaneously.",
    icon: ScanSearch,
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    title: "Verification Checks",
    description:
      "20+ employment, education and identity checks run in parallel.",
    icon: ShieldCheck,
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    title: "Quality Review",
    description:
      "Senior analysts perform quality review and insufficiency handling.",
    icon: BadgeCheck,
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    title: "Final Report",
    description:
      "Digitally signed audit-ready report delivered instantly.",
    icon: FileCheck2,
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
];

export default function Workflow() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="container-x">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-[#0052CC]">
            Our Workflow
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            How Our Verification Process Works
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            A fast, secure and transparent workflow that ensures every
            background verification is completed accurately and on time.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {workflowSteps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group"
              >

                <div
                  className={`relative overflow-hidden rounded-3xl border ${step.border} bg-white p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
                >

                  {/* Hover Gradient */}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />

                  {/* Step Number */}

                  <div className="absolute top-5 right-5 text-5xl font-black text-slate-100 group-hover:text-white/20 transition">
                    0{index + 1}
                  </div>

                  {/* Content */}

                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      {/* Icon */}

                      <div
                        className={`h-16 w-16 rounded-2xl ${step.bg} flex items-center justify-center shadow-sm transition-all group-hover:bg-white/20`}
                      >
                        <Icon className="h-8 w-8 text-slate-700 group-hover:text-white" />
                      </div>



                    </div>

                    <h3 className="mt-8 text-xl font-bold text-slate-900 transition group-hover:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-blue-100">
                      {step.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}