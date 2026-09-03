import type { APIRoute } from 'astro';
import { SECTORS } from '../data/sectors.js';

const SITE = 'https://planning-core-web.vercel.app';

export const prerender = true;

const staticPaths = ['', 'producto', 'comparativa', 'precios', 'contacto', 'sectores'];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPaths.map(p => `${SITE}/${p}`),
    ...SECTORS.map((s: { slug: string }) => `${SITE}/sectores/${s.slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(loc => `  <url><loc>${loc}</loc><changefreq>monthly</changefreq></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
