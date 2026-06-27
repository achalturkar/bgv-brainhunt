'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', company:'', designation:'', email:'', mobile:'', requirement:'', message:'' })
  const [done, setDone] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = `New BGV Inquiry from ${form.name} (${form.company})`
    const body = `Name: ${form.name}\nCompany: ${form.company}\nDesignation: ${form.designation}\nEmail: ${form.email}\nMobile: ${form.mobile}\nVerification Requirement: ${form.requirement}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:contact@brainhuntventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setDone(true)
    setTimeout(() => setDone(false), 6000)
  }

  return (
    <div className="pt-8 pb-16">
      <section className="container-x text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">Contact Us</div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Let's build a <span className="text-gradient">trusted workforce</span> together</h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Talk to a verification expert. We'll respond within one business day.</p>
      </section>

      <section className="container-x mt-14 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, k: 'Call us', v: '+91 9960224245 / +91 9689003720', href: 'tel:+919960224245' },
            { icon: Mail, k: 'Email', v: 'contact@brainhuntventures.com', href: 'mailto:contact@brainhuntventures.com' },
            { icon: MessageCircle, k: 'WhatsApp', v: 'Chat with our team', href: 'https://wa.me/919960224245' },
            { icon: MapPin, k: 'Nagpur (HQ)', v: 'Plot No.3, Indraprastha Apartment, Dronacharya Nagar, Trimurti Nagar, Nagpur — 440022' },
            { icon: MapPin, k: 'Pune Branch', v: 'Office No 5, 2nd Floor, Siddhivinayak Towers, Bibvewadi Road, Pune — 411037' },
            { icon: Clock, k: 'Business Hours', v: 'Mon – Sat • 9:30 AM – 6:30 PM IST' },
          ].map((x, i) => (
            <motion.a key={x.k} href={x.href} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0052CC] hover:shadow-soft transition-all">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center shrink-0"><x.icon className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wide font-bold text-slate-500">{x.k}</div>
                <div className="mt-0.5 font-semibold text-slate-900 group-hover:text-[#0052CC] transition">{x.v}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3 relative rounded-2xl border border-slate-200 bg-white shadow-soft p-7">
          <h2 className="text-2xl font-bold">Request a verification consultation</h2>
          <p className="mt-1.5 text-sm text-slate-600">Share your requirement and we'll get back with a tailored proposal.</p>

          <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Full Name *" value={form.name} onChange={change} required />
            <Field name="company" label="Company *" value={form.company} onChange={change} required />
            <Field name="designation" label="Designation" value={form.designation} onChange={change} />
            <Field name="email" type="email" label="Work Email *" value={form.email} onChange={change} required />
            <Field name="mobile" type="tel" label="Mobile *" value={form.mobile} onChange={change} required />
            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Verification Requirement</label>
              <select name="requirement" value={form.requirement} onChange={change} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition">
                <option value="">Select a service</option>
                {['Identity Verification','PAN / Aadhaar','Employment Verification','Education Verification','Criminal Check','Address Verification','Bulk / Custom Package'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
              <textarea name="message" rows={4} value={form.message} onChange={change} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition resize-none" placeholder="Tell us about your hiring volume, industry and verification needs..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-slate-500">By submitting, you agree to our privacy & data handling practices.</p>
              <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all">
                <Send className="h-4 w-4" /> Send Inquiry
              </button>
            </div>
          </form>

          <AnimatePresence>
            {done && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                <CheckCircle2 className="h-4 w-4" /> Your email client opened. We'll respond within 1 business day.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}

function Field({ name, label, type='text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} required={required} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition" />
    </div>
  )
}
