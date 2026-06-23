export default function sitemap() {
  const base = 'https://bgv.brainhuntventures.com'
  const routes = ['', '/about', '/products', '/services', '/industries', '/careers', '/contact']
  const now = new Date()
  return routes.map(r => ({ url: `${base}${r}`, lastModified: now, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 }))
}
