import { sql, ensureTables } from './db';
import { siteConfig, courseCategories, faculty as defaultFaculty, events as defaultEvents, testimonials as defaultTestimonials, blogPosts as defaultBlogPosts } from './site-data';
import { courseArticles } from './course-articles';

// Default editable site content keys (hero text, about, footer, etc.)
export const DEFAULT_SITE_CONTENT: Record<string, string> = {
  site_name: siteConfig.name,
  tagline: siteConfig.tagline,
  headline: siteConfig.headline,
  sub_headline: siteConfig.subHeadline,
  description: siteConfig.description,
  hero_paragraph: "Jodhpur's longest-running computer training institute. Three decades of experience turning beginners into hired professionals across CAD, CAM, AI, data science, and design.",
  about_hero_paragraph: "We're a computer training institute focused on one thing: turning students into hired professionals. CAD, CAM, design, data science, and accounting — taught by people who have actually worked in those fields for decades.",
  featured_course_title: 'Interior Design & Architect Assistant',
  featured_course_description: 'Go from beginner to hireable. Master CAD, 3D modeling, space planning, materials, and the client handling that wins repeat work. Graduate ready for a job or your own practice.',
  cta_heading: 'Your Next Step Starts Here',
  cta_paragraph: '150,000+ students have passed through our programs. Join the next cohort — admissions are open across all courses.',
  footer_tagline: 'Institute Led by IITians and PhD Experts — Best CAD / CAM / AI & Data Science Institute since 1993.',
};

export async function getContent(key: string): Promise<string> {
  await ensureTables();
  const { rows } = await sql<{ value: string }>`SELECT value FROM site_content WHERE key = ${key} LIMIT 1`;
  return rows[0]?.value ?? DEFAULT_SITE_CONTENT[key] ?? '';
}

export async function getAllContent(): Promise<Record<string, string>> {
  await ensureTables();
  const { rows } = await sql<{ key: string; value: string }>`SELECT key, value FROM site_content`;
  const db: Record<string, string> = {};
  rows.forEach((r) => { db[r.key] = r.value; });
  return { ...DEFAULT_SITE_CONTENT, ...db };
}

export async function setContent(key: string, value: string): Promise<void> {
  await ensureTables();
  await sql`
    INSERT INTO site_content (key, value, updated_at) VALUES (${key}, ${value}, NOW())
    ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
  `;
}

// -------- COURSES --------
export type Course = { id: number; name: string; category: string; description: string; tag: string; sort_order: number; is_featured: boolean; is_active: boolean };

export async function getCourses({ activeOnly = true }: { activeOnly?: boolean } = {}): Promise<Course[]> {
  await ensureTables();
  if (activeOnly) {
    const { rows } = await sql<Course>`SELECT * FROM courses WHERE is_active = true ORDER BY sort_order, name`;
    return rows;
  }
  const { rows } = await sql<Course>`SELECT * FROM courses ORDER BY sort_order, name`;
  return rows;
}

export async function seedCoursesIfEmpty() {
  await ensureTables();
  const { rows } = await sql<{ c: number }>`SELECT COUNT(*)::int AS c FROM courses`;
  if (rows[0].c > 0) return false;
  let order = 0;
  for (const cat of courseCategories) {
    for (const name of cat.courses) {
      order += 10;
      await sql`INSERT INTO courses (name, category, description, sort_order) VALUES (${name}, ${cat.title}, '', ${order})`;
    }
  }
  return true;
}

// -------- FACULTY --------
export type Faculty = { id: number; name: string; role: string; specialization: string; bio: string; photo_url: string | null; sort_order: number; is_active: boolean };

export async function getFaculty({ activeOnly = true }: { activeOnly?: boolean } = {}): Promise<Faculty[]> {
  await ensureTables();
  if (activeOnly) {
    const { rows } = await sql<Faculty>`SELECT * FROM faculty WHERE is_active = true ORDER BY sort_order, name`;
    return rows;
  }
  const { rows } = await sql<Faculty>`SELECT * FROM faculty ORDER BY sort_order, name`;
  return rows;
}

export async function seedFacultyIfEmpty() {
  await ensureTables();
  const { rows } = await sql<{ c: number }>`SELECT COUNT(*)::int AS c FROM faculty`;
  if (rows[0].c > 0) return false;
  let order = 0;
  for (const f of defaultFaculty) {
    order += 10;
    await sql`INSERT INTO faculty (name, role, specialization, bio, sort_order) VALUES (${f.name}, ${f.role}, ${f.specialization}, ${f.bio}, ${order})`;
  }
  return true;
}

// -------- BLOG POSTS --------
export type BlogPost = { id: number; slug: string; title: string; tagline: string | null; intro: string | null; body: string | null; is_published: boolean; published_at: string; created_at: string };

export async function getBlogPosts({ publishedOnly = true }: { publishedOnly?: boolean } = {}): Promise<BlogPost[]> {
  await ensureTables();
  if (publishedOnly) {
    const { rows } = await sql<BlogPost>`SELECT * FROM blog_posts WHERE is_published = true ORDER BY published_at DESC`;
    return rows;
  }
  const { rows } = await sql<BlogPost>`SELECT * FROM blog_posts ORDER BY published_at DESC`;
  return rows;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await ensureTables();
  const { rows } = await sql<BlogPost>`SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ?? null;
}

export async function seedBlogIfEmpty() {
  await ensureTables();
  const { rows } = await sql<{ c: number }>`SELECT COUNT(*)::int AS c FROM blog_posts`;
  if (rows[0].c > 0) return false;
  for (const article of courseArticles) {
    const body = article.sections.map((s) => `## ${s.heading}\n\n${s.body.join('\n\n')}`).join('\n\n') +
      '\n\n## Frequently Asked Questions\n\n' +
      article.faqs.map((f) => `**${f.q}**\n\n${f.a}`).join('\n\n');
    await sql`INSERT INTO blog_posts (slug, title, tagline, intro, body) VALUES (${article.slug}, ${article.title}, ${article.tagline}, ${article.intro}, ${body})`;
  }
  return true;
}

// -------- EVENTS --------
export type Event = { id: number; title: string; date_text: string | null; location: string | null; is_active: boolean; sort_order: number };

export async function getEvents({ activeOnly = true }: { activeOnly?: boolean } = {}): Promise<Event[]> {
  await ensureTables();
  if (activeOnly) {
    const { rows } = await sql<Event>`SELECT * FROM events WHERE is_active = true ORDER BY sort_order, title`;
    return rows;
  }
  const { rows } = await sql<Event>`SELECT * FROM events ORDER BY sort_order, title`;
  return rows;
}

export async function seedEventsIfEmpty() {
  await ensureTables();
  const { rows } = await sql<{ c: number }>`SELECT COUNT(*)::int AS c FROM events`;
  if (rows[0].c > 0) return false;
  let order = 0;
  for (const e of defaultEvents) {
    order += 10;
    await sql`INSERT INTO events (title, date_text, location, sort_order) VALUES (${e.title}, ${e.date}, ${e.location}, ${order})`;
  }
  return true;
}

// -------- TESTIMONIALS --------
export type Testimonial = { id: number; name: string; course: string | null; label: string | null; quote: string | null; is_active: boolean; sort_order: number };

export async function getTestimonials({ activeOnly = true }: { activeOnly?: boolean } = {}): Promise<Testimonial[]> {
  await ensureTables();
  if (activeOnly) {
    const { rows } = await sql<Testimonial>`SELECT * FROM testimonials WHERE is_active = true ORDER BY sort_order, name`;
    return rows;
  }
  const { rows } = await sql<Testimonial>`SELECT * FROM testimonials ORDER BY sort_order, name`;
  return rows;
}

export async function seedTestimonialsIfEmpty() {
  await ensureTables();
  const { rows } = await sql<{ c: number }>`SELECT COUNT(*)::int AS c FROM testimonials`;
  if (rows[0].c > 0) return false;
  let order = 0;
  for (const t of defaultTestimonials) {
    order += 10;
    await sql`INSERT INTO testimonials (name, course, label, quote, sort_order) VALUES (${t.name}, ${t.course}, ${t.label}, ${t.quote}, ${order})`;
  }
  return true;
}

// -------- SEED ALL --------
export async function seedAllIfEmpty() {
  const results: Record<string, boolean> = {};
  results.courses = await seedCoursesIfEmpty();
  results.faculty = await seedFacultyIfEmpty();
  results.blog_posts = await seedBlogIfEmpty();
  results.events = await seedEventsIfEmpty();
  results.testimonials = await seedTestimonialsIfEmpty();
  return results;
}
