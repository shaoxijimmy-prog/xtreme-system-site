import { getCollection } from 'astro:content';
import { SITE } from '@lib/site';

export async function GET() {
  const staticPages = ['/', '/blog/', '/projects/', '/lab/', '/about/', '/contact/'];
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects');
  const urls = [...staticPages, ...posts.map((post) => `/blog/${post.id}/`), ...projects.map((project) => `/projects/${project.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${SITE.url}${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
