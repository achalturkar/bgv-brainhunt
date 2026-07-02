'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, Send,
  Building2, Navigation, ArrowRight,
} from 'lucide-react'

const WHATSAPP_NUMBER = '919689003720' // country code + number, no + or spaces

/* ============ OFFICES — dedicated section, styled like the reference card design ============ */
const offices = [
  {
    tag: 'Head Office',
    city: 'Nagpur',
    address: 'Plot No.3, 2nd Floor, Indraprastha Apartment, Dronacharya Nagar, Trimurti Nagar, Nagpur — 440022',
    link: 'https://maps.app.goo.gl/PRN4ZYVoDxMU9yav5',
    featured: true,
  },
  {
    tag: 'Branch Office',
    city: 'Pune',
    address: 'Office No 5, 2nd Floor, Siddhivinayak Towers, Bibvewadi Road, Pune — 411037',
    link: 'https://maps.app.goo.gl/8Eqm48maYwbauaw66',
    featured: false,
  },
  {
    tag: 'Branch Office',
    city: 'Bangalore',
    address: 'A1306, Skylark Esta Apartment, near Hoodi Metro Station, Bangalore — 560048',
    link: 'https://www.google.com/maps/search/?api=1&query=A1306%2C+Skylark+Esta+Apartment%2C+near+Hoodi+Metro+Station%2C+Bangalore-560048',
    featured: false,
  },
]

/* ============ Quick contact — separate from offices ============ */
const quickContacts = [
  { icon: Phone, k: 'Call Us', v: '+91 9960224245', v2: '+91 9689003720', v3:'+91 8329917749', href: 'tel:+919960224245' },
  { icon: Mail, k: 'Email', v: 'contact@brainhuntventures.com', v2:'suhas@brainhuntventures.com', href: 'mailto:contact@brainhuntventures.com' },
  { icon: MessageCircle, k: 'WhatsApp', v: 'Chat with our team', href: 'https://wa.me/919689003720' },
  { icon: Clock, k: 'Business Hours', v: 'Mon – Sat • 9:30 AM – 6:30 PM IST' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', designation: '', email: '', mobile: '', requirement: '', message: '' })
  const [status, setStatus] = useState('') // '' | 'success'

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const buildMessage = () => [
    `New BGV Inquiry`,
    ``,
    `Name: ${form.name}`,
    `Company: ${form.company}`,
    form.designation ? `Designation: ${form.designation}` : '',
    `Email: ${form.email}`,
    `Mobile: ${form.mobile}`,
    form.requirement ? `Verification Requirement: ${form.requirement}` : '',
    form.message ? `\nMessage:\n${form.message}` : '',
  ].filter(Boolean).join('\n')

  const submitViaWhatsApp = (e) => {
    e.preventDefault()
    const text = buildMessage()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setStatus('success')
    setTimeout(() => setStatus(''), 6000)
  }

  const submitViaEmail = () => {
    const subject = `New BGV Inquiry from ${form.name || 'Website'} (${form.company || 'N/A'})`
    const body = buildMessage()
    window.location.href = `mailto:contact@brainhuntventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="pt-8 pb-20 bg-white">

      {/* ============ HERO ============ */}
      <section className="container-x text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em]">
          Contact Us
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Let's build a <span className="text-gradient">trusted workforce</span> together
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
          Talk to a verification expert. We'll respond within one business day.
        </p>
      </section>

      {/* ============ OUR OFFICES ============ */}
      <section className="container-x mt-20">
        <div className="max-w-xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em] border border-[#0052CC]/10">
            <Building2 className="h-3.5 w-3.5" /> Where To Find Us
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Offices</h2>
          <p className="mt-3 text-slate-600">
            Three locations, one team. Drop by, or get directions straight to whichever office is closest to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative flex flex-col rounded-2xl bg-white border p-7 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ${
                o.featured ? 'border-[#0052CC]' : 'border-slate-200'
              }`}
            >
              {o.featured && (
                <span className="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-soft">
                  HQ
                </span>
              )}

              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center mb-5">
                <MapPin className="h-6 w-6" />
              </div>

              <span
                className={`inline-block w-fit text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md mb-3 ${
                  o.featured ? 'bg-orange-50 text-orange-600' : 'bg-[#EAF2FF] text-[#0052CC]'
                }`}
              >
                {o.tag}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{o.city}</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-grow">{o.address}</p>

              <a
                href={o.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 pt-4 border-t border-slate-100 inline-flex items-center gap-2 text-sm font-bold text-[#0052CC] hover:text-orange-500 transition-colors"
              >
                <Navigation className="h-3.5 w-3.5" />
                Get Directions
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ QUICK CONTACT / EMAIL SECTION ============ */}
      <section className="container-x mt-20">
        <div className="max-w-xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#0052CC] text-[11px] font-bold uppercase tracking-[0.18em] border border-[#0052CC]/10">
            <Mail className="h-3.5 w-3.5" /> Reach Us Directly
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Prefer To Just Reach Out?</h2>
          <p className="mt-3 text-slate-600">Call, email or message us directly — a real person replies within one business day.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickContacts.map((x, i) => (
            <motion.a
              key={x.k}
              href={x.href}
              target={x.href?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col items-start gap-3 p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0052CC] hover:shadow-soft transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0052CC] to-[#0066FF] text-white flex items-center justify-center shrink-0">
                <x.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wide font-bold text-slate-500">{x.k}</div>
                <div className="mt-1 font-semibold text-slate-900 group-hover:text-[#0052CC] transition text-sm leading-snug">
                  {x.v}
                </div>
                {x.v2 && <div className="text-sm text-slate-800">{x.v2}</div>}
                {x.v3 && <div className="text-sm text-slate-800">{x.v3}</div>}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section className="container-x mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-soft p-7 sm:p-9"
        >
          <h2 className="text-2xl font-bold text-slate-900">Request a verification consultation</h2>
          <p className="mt-1.5 text-sm text-slate-600">
            Share your requirement and we'll get back with a tailored proposal — sent instantly over WhatsApp, or by email if you prefer.
          </p>

          <form onSubmit={submitViaWhatsApp} className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Full Name *" value={form.name} onChange={change} required />
            <Field name="company" label="Company *" value={form.company} onChange={change} required />
            <Field name="designation" label="Designation" value={form.designation} onChange={change} />
            <Field name="email" type="email" label="Work Email *" value={form.email} onChange={change} required />
            <Field name="mobile" type="tel" label="Mobile *" value={form.mobile} onChange={change} required />

            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Verification Requirement</label>
              <select
                name="requirement"
                value={form.requirement}
                onChange={change}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition"
              >
                <option value="">Select a service</option>
                {['Identity Verification', 'PAN / Aadhaar', 'Employment Verification', 'Education Verification', 'Criminal Check', 'Address Verification', 'Bulk / Custom Package'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={change}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition resize-none"
                placeholder="Tell us about your hiring volume, industry and verification needs..."
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4">
              <p className="text-xs text-slate-500">
                By submitting, you agree to our privacy & data handling practices.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={submitViaEmail}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#0052CC] text-slate-800 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Send className="h-4 w-4" /> Send via Email
                </button>
              </div>
            </div>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold shadow-soft"
              >
                <CheckCircle2 className="h-4 w-4" /> WhatsApp opened with your inquiry — hit send there to finish.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}

function Field({ name, label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition"
      />
    </div>
  )
}