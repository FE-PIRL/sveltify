import routes from '../util/routes';

const BASE = 'https://sveltify.vercel.app';
const TIME = new Date().toISOString().substring(0, 10);
function generateURLs(items) {
  let output = '';
  items.forEach((item) => {
    if (item.items) output += generateURLs(item.items);
    else if (item.href) {
      output += `<url><loc>${BASE}${item.href}</loc><lastmod>${TIME}</lastmod><changefreq>weekly</changefreq><priority>0.85</priority></url>`;
    }
  });
  return output;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url><loc>${BASE}</loc><lastmod>${TIME}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
${generateURLs(routes)}
</urlset>`;

export function get(req, res) {
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`);
  res.setHeader('Content-Type', 'application/rss+xml');
  res.end(sitemap);
}
