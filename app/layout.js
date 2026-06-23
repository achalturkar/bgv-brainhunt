import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'
import WhatsAppButton from '@/components/site/WhatsAppButton'
import ScrollProgress from '@/components/site/ScrollProgress'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL('https://bgv.brainhuntventures.com'),
  title: {
    default: 'Brainhunt Ventures | India\'s Trusted Background Verification Partner',
    template: '%s | Brainhunt Ventures'
  },
  description: 'Brainhunt Ventures Pvt. Ltd. — India\'s leading Background Verification (BGV) company. Fast, accurate, technology-driven employee verification: PAN, Aadhaar, Education, Employment, Criminal & more. DPDP compliant.',
  keywords: ['Background Verification Services India','Employee Verification Services','BGV Company India','Employment Verification','Education Verification','Criminal Check India','HR Verification Services','Candidate Screening Services','Background Check Company India','Brainhunt Ventures','PAN Verification','Aadhaar Verification'],
  authors: [{ name: 'Brainhunt Ventures Pvt. Ltd.' }],
  creator: 'Brainhunt Ventures Pvt. Ltd.',
  publisher: 'Brainhunt Ventures Pvt. Ltd.',
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: 'https://bgv.brainhuntventures.com' },
  openGraph: {
    title: 'Brainhunt Ventures | India\'s Trusted Background Verification Partner',
    description: 'Fast, accurate & technology-driven employee verification solutions. 500+ companies trust us. 50,000+ verifications. 98% accuracy.',
    url: 'https://bgv.brainhuntventures.com',
    siteName: 'Brainhunt Ventures',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brainhunt Ventures | Background Verification Services India',
    description: 'India\'s trusted BGV partner. Technology-driven verification with PAN India coverage.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  verification: { google: 'google-site-verification-placeholder' },
}

export const viewport = {
  themeColor: '#0052CC',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brainhunt Ventures Pvt. Ltd.',
  alternateName: 'BGV Services India',
  url: 'https://bgv.brainhuntventures.com',
  logo: 'https://bgv.brainhuntventures.com/logo.svg',
  description: 'India\'s trusted Background Verification (BGV) partner providing technology-driven employee verification services.',
  email: 'contact@brainhuntventures.com',
  telephone: '+91-9960224245',
  address: [{
    '@type': 'PostalAddress',
    streetAddress: 'Plot No.3, 2nd Floor, Indraprastha Apartment, Dronacharya Nagar, Trimurti Nagar',
    addressLocality: 'Nagpur',
    postalCode: '440022',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  }],
  sameAs: [
    'https://www.linkedin.com/company/brainhunt-ventures',
    'https://twitter.com/brainhuntventures',
    'https://www.facebook.com/brainhuntventures'
  ],
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: '+91-9960224245',
    contactType: 'customer service',
    email: 'contact@brainhuntventures.com',
    areaServed: 'IN',
    availableLanguage: ['English','Hindi']
  }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
