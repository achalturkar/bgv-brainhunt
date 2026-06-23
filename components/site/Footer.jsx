import Link from 'next/link'
import Logo from './Logo'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'

const services = ['PAN Verification','Aadhaar Verification','Education Verification','Employment Verification','Criminal Record Check','Address Verification','Reference Check','Credit Check','Police Verification','Global Database Check']
const industries = ['IT & Software','Banking & Finance','NBFC','Insurance','Healthcare','Pharma','Manufacturing','Logistics','Retail','BPO/KPO']
const products = ['Verification Portal','Client Dashboard','Candidate Dashboard','Bulk Upload','API Integration','Mobile App','Analytics & Reports']
const quick = [['About Us','/about'],['Products','/products'],['Services','/services'],['Industries','/industries'],['Careers','/careers'],['Contact','/contact']]

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-slate-950 to-[#001a4d] text-slate-300 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-grid" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0066FF]/10 blur-3xl rounded-full" />

      <div className="relative container-x pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* <Logo className="h-12 w-12" /> */}
              <div>
                <div className="text-white text-lg font-bold">Brainhunt Ventures</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#7AB3FF] font-semibold">BGV Services India</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">Trusted Intelligence. Reliable Verification. Confident Hiring. India's most comprehensive technology-driven background verification platform serving 500+ companies across 20+ industries.</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-[#7AB3FF] mt-0.5 shrink-0" /><span>Plot No.3, 2nd Floor, Indraprastha Apartment, Dronacharya Nagar, Trimurti Nagar, Nagpur — 440022, India</span></div>
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-[#7AB3FF] mt-0.5 shrink-0" /><span>Office No 5, 2nd floor, Siddhivinayak Towers, Bibvewadi Road, Pune — 411037, India</span></div>
              <a href="tel:+919960224245" className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-[#7AB3FF]" /> +91 9960224245</a>
              <a href="mailto:contact@brainhuntventures.com" className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 text-[#7AB3FF]" /> contact@brainhuntventures.com</a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-xl bg-white/5 hover:bg-[#0066FF] border border-white/10 flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" items={services} />
          <FooterCol title="Industries" items={industries} />
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quick.map(([n, h]) => (
                <li key={h}><Link href={h} className="hover:text-white inline-flex items-center gap-1.5 group"><ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:ml-0 group-hover:opacity-100 transition-all" />{n}</Link></li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mt-7 mb-4 text-sm tracking-wide">Products</h4>
            <ul className="space-y-2.5 text-sm">
              {products.slice(0,5).map((p) => <li key={p} className="hover:text-white cursor-default">{p}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2 overflow-hidden">
          <iframe title="Brainhunt Ventures Nagpur Office" src="https://www.google.com/maps?q=Trimurti+Nagar,+Nagpur,+Maharashtra+440022&output=embed" width="100%" height="220" style={{ border: 0, borderRadius: 12 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Brainhunt Ventures Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
            <a className="hover:text-white" href="#">DPDP Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => <li key={i} className="hover:text-white cursor-default transition-colors">{i}</li>)}
      </ul>
    </div>
  )
}
