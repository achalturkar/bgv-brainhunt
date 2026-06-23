# Brainhunt Ventures — BGV Services India

Premium enterprise website for **Brainhunt Ventures Pvt. Ltd.** — India's trusted Background Verification partner.

> Trusted Intelligence. Reliable Verification. Confident Hiring.

## Tech Stack
- **Next.js 15.5** (App Router, JSX — no TypeScript)
- **React 18.3**
- **Tailwind CSS 3.4** + shadcn/ui design tokens
- **Framer Motion** — animations, transitions, scroll progress, parallax
- **Lucide React** — icon system
- **SEO**: Open Graph, Twitter cards, JSON-LD Organization + FAQ schema, dynamic `sitemap.xml`, `robots.txt`, themeColor, canonical
- **Static**: All pages render statically. Contact form opens user's mail client (mailto). WhatsApp via `wa.me`.

## Pages
| Route          | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `/`            | Home — animated hero dashboard, particle background, typewriter, services, process, industries, testimonials, FAQ, CTA |
| `/about`       | Company overview, mission/vision, why choose us, process, security & compliance |
| `/products`    | Verification Portal SaaS overview, features, API docs, multi-device         |
| `/services`    | 24+ background verification services with benefits                          |
| `/industries`  | 15 industries with sector-specific verification packages                    |
| `/careers`     | Why join, open positions with mailto apply                                  |
| `/contact`     | Contact info, embedded map (in footer), inquiry form (mailto)               |

## Run Locally
```bash
yarn install
yarn dev          # http://localhost:3000
yarn build && yarn start
```

## Production Deployment (bgv.brainhuntventures.com)
1. `yarn build` to generate the production bundle.
2. Deploy `.next/`, `public/`, `package.json`, `yarn.lock` to your host (Vercel / Render / VPS).
3. Point DNS `bgv.brainhuntventures.com` → host.
4. Configure SSL (Let's Encrypt / Cloudflare).
5. Optional: add `GA4` / `GSC` verification tokens in `app/layout.js` (`metadata.verification`).

## Contact Info Used
- 📞 +91 9960224245
- ✉ contact@brainhuntventures.com / careers@brainhuntventures.com
- 🏢 Nagpur HQ: Plot No.3, Indraprastha Apt, Dronacharya Nagar, Trimurti Nagar — 440022
- 🏢 Pune Branch: Office No 5, Siddhivinayak Towers, Bibvewadi Road — 411037

## Project Structure
```
app/
  layout.js          # Root layout, SEO metadata, JSON-LD Organization schema
  globals.css        # Tailwind + design tokens + custom animations
  page.js            # Home
  about/             # About page
  products/          # SaaS product page
  services/          # 24+ services
  industries/        # Industry verticals
  careers/           # Careers + openings
  contact/           # Contact form
  sitemap.js         # Dynamic sitemap.xml generator
components/site/
  Navbar.jsx         # Sticky responsive nav with animated mobile drawer
  Footer.jsx         # Dark footer + Google Map + social icons
  WhatsAppButton.jsx # Floating WhatsApp CTA with hint bubble
  ScrollProgress.jsx # Top scroll progress bar
  Logo.jsx           # Inline SVG logo (brain in head)
  Counter.jsx        # Animated count-up counters
  Particles.jsx      # Hero particle-network canvas
  Typewriter.jsx     # Hero typewriter effect
  FAQ.jsx            # Accordion FAQ + FAQ JSON-LD
public/
  logo.svg, favicon.svg, robots.txt
```

## License
© Brainhunt Ventures Pvt. Ltd. All rights reserved.
