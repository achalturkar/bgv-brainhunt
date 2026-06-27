import React from "react";
import { ArrowRight, CheckCircle, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-[#03122A] p-10 lg:p-16 text-white">
          {/* Mesh bg */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 80% 80% at 0% 50%, #0052CC40, transparent),
                radial-gradient(ellipse 60% 60% at 100% 50%, #2563EB30, transparent)
              `,
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(#fff 1px,transparent 1px),
                linear-gradient(90deg,#fff 1px,transparent 1px)
              `,
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-5">
                <Sparkles className="h-3 w-3" />
                Start Verifying Today
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Build a Verified Workforce?
              </h2>

              <p className="mt-3 text-white/70 text-base max-w-xl leading-relaxed">
                Join 500+ companies using Brainhunt Ventures for fast,
                compliant and accurate background checks. Book a 30-minute
                demo — no credit card required.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-white/70">
                {[
                  "No credit card",
                  "30-min walkthrough",
                  "Custom pricing",
                  "DPDP compliant",
                ].map((x) => (
                  <span key={x} className="inline-flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#2563EB] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-[0_8px_32px_rgba(0,82,204,0.5)] hover:shadow-[0_12px_48px_rgba(0,82,204,0.65)] hover:scale-[1.03] transition-all"
              >
                Schedule Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="mailto:contact@brainhuntventures.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-semibold backdrop-blur transition-all"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;