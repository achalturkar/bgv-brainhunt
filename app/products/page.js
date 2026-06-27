'use client'
import { motion } from 'framer-motion'
import { Layout, Smartphone, Code2, BarChart3, Users, Shield, Bell, FileText, ArrowRight, CheckCircle2, Tablet, Monitor } from 'lucide-react'
import Link from 'next/link'

const features = [
  { icon: Layout, t: 'Verification Management', d: 'Case creation, allocation, tracking & reporting in one workspace.' },
  { icon: BarChart3, t: 'Real-Time Dashboard', d: 'Live verification status with SLA monitoring and alerts.' },
  { icon: Code2, t: 'API Integration', d: 'REST APIs for HRMS / ATS integration with sandbox & docs.' },
  { icon: Smartphone, t: 'Mobile App', d: 'Candidate self-service & field executive companion app.' },
  { icon: Users, t: 'Multi Client Management', d: 'Manage subsidiaries, BUs and clients with isolated workspaces.' },
  { icon: FileText, t: 'Bulk Upload', d: 'Excel-based bulk case creation with validation & previews.' },
  { icon: Shield, t: 'Role Based Access', d: 'Fine-grained permissions and audit logs for every action.' },
  { icon: Bell, t: 'Real Time Notifications', d: 'In-app, email and webhook events for every state change.' },
]

export default function ProductsPage() {
  return (
    <div className="pt-0">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAF2FF] via-white to-white" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#0066FF]/15 rounded-full blur-3xl animate-blob" />
        <div className="relative container-x py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-soft border border-[#0052CC]/10 text-[#0052CC] text-xs font-bold uppercase tracking-[0.18em]">Verification Portal</div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Brainhunt <span className="text-gradient">Verification Portal</span></h1>
            <p className="mt-5 text-lg text-slate-600">A modern SaaS platform for client teams, candidates and field verifiers — unified into one workflow with real-time analytics.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-soft">Request Demo <ArrowRight className="h-4 w-4" /></Link>
              <a href="#features" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm font-semibold hover:border-[#0052CC]">Explore Features</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-slate-50">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="p-5 grid grid-cols-3 gap-3">
                {[['Total Cases','12,480','+18%'],['SLA Met','98.4%','+2.1%'],['Avg TAT','22h','-3h']].map(([k,v,d]) => (
                  <div key={k} className="rounded-xl bg-gradient-to-br from-[#EAF2FF] to-white border border-slate-100 p-3">
                    <div className="text-[10px] font-semibold text-slate-500">{k}</div>
                    <div className="text-lg font-bold text-slate-900">{v}</div>
                    <div className="text-[10px] text-emerald-600">{d}</div>
                  </div>
                ))}
                <div className="col-span-3 rounded-xl border border-slate-100 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold">Recent Verifications</span><span className="text-[10px] text-[#0052CC]">View all</span>
                  </div>
                  {[['Aarav S.','Identity • Education','done'],['Meera P.','Employment • Address','progress'],['Karan V.','Criminal • Reference','done'],['Neha R.','PAN • Aadhaar','progress']].map(([n,c,s], i) => (
                    <motion.div key={n} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i*0.12 }} className="flex items-center justify-between text-xs py-1.5 border-b last:border-none border-slate-50">
                      <span className="font-semibold text-slate-700">{n}</span><span className="text-slate-500">{c}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${s==='done'?'bg-emerald-50 text-emerald-700':'bg-blue-50 text-[#0052CC]'}`}>{s.toUpperCase()}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -left-10 bottom-10 w-44 rounded-xl bg-slate-950 text-emerald-300 font-mono text-[10px] p-3 shadow-2xl animate-float">
              <div className="text-slate-500">POST /verify/pan</div>
              <div>200 OK 142ms</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Product <span className="text-gradient">Features</span></h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Everything modern HR and risk teams need — from intake to insight.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.04 }} className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-[#0052CC] hover:shadow-glow transition-all">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center"><f.icon className="h-5 w-5" /></div>
                <h3 className="mt-3 font-semibold">{f.t}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#7AB3FF] text-[11px] font-bold uppercase tracking-[0.18em]">Developer API</div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Integrate verification in minutes</h2>
            <p className="mt-3 text-slate-300">REST APIs and webhooks to embed verification into your HRMS, ATS or custom apps.</p>
            <div className="mt-5 space-y-2 text-sm">
              {['REST + JSON','Sandbox & Postman Collection','Webhooks for status updates','Bulk endpoints','SDKs (Node, Python)'].map(x => (
                <div key={x} className="flex items-center gap-2 text-slate-200"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{x}</div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-slate-900 border border-white/10 p-5 font-mono text-[12px] text-emerald-300 shadow-2xl">
            <div className="text-slate-500">// Verify PAN</div>
            <div className="text-[#7AB3FF]">POST</div> https://api.brainhuntventures.com/v1/verify/pan
            <div className="mt-3 text-slate-400">Headers</div>
            <div>Authorization: Bearer &lt;TOKEN&gt;</div>
            <div className="mt-3 text-slate-400">Body</div>
            <pre className="text-emerald-300">{`{
  "pan": "ABCDE1234F",
  "name": "Rajesh Kumar",
  "dob": "1990-04-12"
}`}</pre>
            <div className="mt-3 text-slate-400">Response 200 OK</div>
            <pre className="text-emerald-300">{`{
  "status": "VALID",
  "name_match": true,
  "category": "Individual",
  "verified_at": "2025-06-12T08:14:22Z"
}`}</pre>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Built for every screen</h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Desktop dashboards, tablet workflows and a mobile app for HR and field associates.</p>
          <div className="mt-14 grid lg:grid-cols-3 gap-8">
            {[
              { icon: Monitor, t: 'Desktop Dashboard', d: 'Powerful analytics, bulk actions, audit logs.' },
              { icon: Tablet, t: 'Tablet Workflow', d: 'Field verifier workflows and document capture.' },
              { icon: Smartphone, t: 'Mobile App', d: 'Candidate document upload & live tracking.' },
            ].map((x, i) => (
              <motion.div key={x.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="rounded-2xl border border-slate-200 p-8 text-center bg-gradient-to-b from-white to-[#F8FAFF] hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center"><x.icon className="h-7 w-7" /></div>
                <h3 className="mt-4 font-semibold text-lg">{x.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{x.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
