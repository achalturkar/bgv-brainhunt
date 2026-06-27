"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/client/logo.png", alt: "Logo" },
  { src: "/client/dlogo.png", alt: "D Logo" },
  { src: "/client/es.png", alt: "ES" },
  { src: "/client/fc.svg", alt: "FC" },
  { src: "/client/globant.svg", alt: "GlobalNet" },
  { src: "/client/jdg.jpg", alt: "JDG" },
  { src: "/client/ll.png", alt: "LL" },
  { src: "/client/logos.png", alt: "Logos" },
  { src: "/client/pp.png", alt: "PP" },
  { src: "/client/tc.webp", alt: "TC" },
  { src: "/client/ts.png", alt: "TS" },
  { src: "/client/v.svg", alt: "V" },
  { src: "/client/skp.png", alt: "V" },
];

export default function ClientsMarquee() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-white to-[#F4F9FF] py-20">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-200/40 blur-[120px]" />

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-200/40 blur-[120px]" />

      <div className="container-x relative">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0052CC]">
            Trusted Clients
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Trusted by Leading Organizations
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Trusted by enterprises, startups and fast-growing companies for
            secure, compliant and reliable background verification services.
          </p>

        </div>

        {/* Row 1 */}

        <div className="relative mt-16 overflow-hidden">

          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (

              <div
                key={index}
                className="group relative flex h-32 w-60 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0052CC] hover:shadow-[0_20px_60px_rgba(0,82,204,0.18)]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full w-full items-center justify-center px-8">

                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={170}
                    height={80}
                    className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

              </div>

            ))}
          </motion.div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-white via-white to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-white via-white to-transparent" />

        </div>

        {/* Row 2 */}

        <div className="relative mt-8 overflow-hidden">

          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].reverse().map((logo, index) => (

              <div
                key={index}
                className="group relative flex h-28 w-56 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow transition-all duration-300 hover:-translate-y-2 hover:border-[#0052CC] hover:shadow-[0_20px_60px_rgba(0,82,204,0.15)]"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-blue-50 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full w-full items-center justify-center px-8">

                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={70}
                    className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

              </div>

            ))}
          </motion.div>

          <div className="pointer-events-none absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-white via-white to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-white via-white to-transparent" />

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          {[
            { value: "8+", label: "Enterprise Clients" },
            { value: "3K+", label: "Verifications Completed" },
            { value: "99%", label: "Accuracy Rate" },
            { value: "24 hrs", label: "Average TAT" },
          ].map((item) => (

            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:border-[#0052CC] hover:shadow-xl"
            >

              <h3 className="bg-gradient-to-r from-[#0052CC] to-[#2563EB] bg-clip-text text-4xl font-bold text-transparent">
                {item.value}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}