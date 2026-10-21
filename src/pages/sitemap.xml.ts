import type { APIRoute } from 'astro';
import { locales, paths } from '../data/site';
export const GET: APIRoute = ({ site }) => {
  const pages = (['home', 'project'] as const).flatMap(page => locales.map(locale =>
    `<url><loc>${new URL(paths[locale][page], site)}</loc>${locales.map(language => `<xhtml:link rel="alternate" hreflang="${language}" href="${new URL(paths[language][page], site)}" />`).join('')}</url>`
  ));
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages.join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
