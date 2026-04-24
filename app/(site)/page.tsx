import Link from 'next/link';
import { siteConfig, stats, campusCities, featuredJobs } from '@/lib/site-data';
import { getAllContent, getCourses, getTestimonials, getEvents, getBlogPosts, seedAllIfEmpty } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Auto-seed on first visit if DB is empty
  await seedAllIfEmpty();

  const [content, courses, testimonials, events, blogPosts] = await Promise.all([
    getAllContent(),
    getCourses(),
    getTestimonials(),
    getEvents(),
    getBlogPosts(),
  ]);

  const featuredCourses = courses.filter((c) => c.is_featured).slice(0, 6);
  const popularCourses = featuredCourses.length > 0 ? featuredCourses : courses.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container-wrap relative py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-semibold tracking-wide text-brand-100 ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> {content.tagline}
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">{content.headline}</h1>
            <p className="mt-4 text-xl font-semibold text-brand-100">{content.sub_headline}</p>
            <p className="mt-6 text-brand-100/90 text-base max-w-xl leading-relaxed">{content.hero_paragraph}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-accent">Find Courses</Link>
              <Link href="/about" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">Know More</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur p-3 text-center">
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wide text-brand-100/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/95 p-8 shadow-2xl ring-1 ring-white/40 text-slate-800">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-semibold">⭐ Featured Course</div>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">{content.featured_course_title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{content.featured_course_description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                <li>✅ Job-focused curriculum</li>
                <li>✅ Real projects and a finished portfolio</li>
                <li>✅ Direct placement assistance</li>
                <li>✅ Small-batch mentoring</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/admission" className="btn-primary">Enroll Now</Link>
                <Link href="/syllabus" className="btn-secondary">Download Brochure</Link>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                <div>⭐ 4.8 / 5</div><div>•</div><div>2,340 reviews</div><div>•</div><div>150k+ trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="section bg-slate-50">
        <div className="container-wrap">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-brand-700">Programs built for outcomes</div>
            <h2 className="section-heading mt-2">Pick a Career Path</h2>
            <p className="section-sub">Short, deliberate tracks designed around what employers actually hire for.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((c) => (
              <div key={c.id} className="card">
                {c.tag && <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">{c.tag}</div>}
                <h3 className="mt-3 text-lg font-bold text-slate-900">{c.name}</h3>
                {c.description && <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.description}</p>}
                <div className="mt-2 text-xs text-slate-400">{c.category}</div>
                <Link href="/courses" className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-800">Learn more →</Link>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/courses" className="btn-primary">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="section">
          <div className="container-wrap">
            <div className="max-w-2xl">
              <h2 className="section-heading">What Our Students Say</h2>
              <p className="section-sub">Real feedback from students about their learning journey.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 6).map((t) => (
                <div key={t.id} className="card flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold">{t.name.charAt(0)}</div>
                    <div>
                      <div className="font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.course}</div>
                    </div>
                    {t.label && <span className="ml-auto text-xs font-semibold text-accent-600">{t.label}</span>}
                  </div>
                  <p className="mt-4 text-sm text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 text-yellow-500 text-sm">★★★★★</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CAMPUS CITIES */}
      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container-wrap">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-heading">Centers Across India</h2>
              <p className="section-sub">On-site classrooms wherever our students are. In-person mentoring makes a difference.</p>
              <Link href="/contact" className="mt-6 inline-block btn-primary">Find a Center Near You</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {campusCities.map((c) => (
                <div key={c} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 text-sm font-medium text-slate-700">📍 {c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT */}
      <section className="section">
        <div className="container-wrap">
          <div className="max-w-2xl">
            <h2 className="section-heading">Hiring Through Our Placement Cell</h2>
            <p className="section-sub">Our placement team matches students with roles that fit their skills and ambition.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <div key={job.title} className="card">
                <div className="text-xs font-semibold text-brand-700">Open Role</div>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{job.title}</h3>
                <div className="mt-2 text-sm text-slate-600">Package: {job.range}</div>
                <Link href="/placement" className="mt-4 inline-flex items-center text-sm font-semibold text-accent-600 hover:text-accent-700">View details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      {events.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-wrap">
            <div className="max-w-2xl">
              <h2 className="section-heading">Workshops &amp; Events</h2>
              <p className="section-sub">Free workshops, industry sessions, and training programs.</p>
            </div>
            <div className="mt-10 space-y-3">
              {events.map((ev) => (
                <div key={ev.id} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{ev.title}</h3>
                    <div className="text-sm text-slate-500 mt-1">📅 {ev.date_text} &nbsp;•&nbsp; 📍 {ev.location}</div>
                  </div>
                  <Link href="/contact" className="btn-secondary !text-xs !py-2">Register Interest</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BLOG */}
      {blogPosts.length > 0 && (
        <section className="section">
          <div className="container-wrap">
            <div className="max-w-2xl">
              <h2 className="section-heading">From Our Blog</h2>
              <p className="section-sub">Career advice, course breakdowns, and practical guides.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 6).map((p) => (
                <Link key={p.id} href={`/courses/${p.slug}`} className="card block group">
                  <div className="text-xs text-slate-500">{new Date(p.published_at).toLocaleDateString()}</div>
                  <h3 className="mt-2 font-bold text-slate-900 group-hover:text-brand-700 transition">{p.title}</h3>
                  <div className="mt-4 text-sm font-semibold text-brand-700">Read article →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-900 text-white">
        <div className="container-wrap py-16 lg:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">{content.cta_heading}</h2>
          <p className="mt-3 text-brand-100 max-w-xl mx-auto">{content.cta_paragraph}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/admission" className="btn-accent">Apply Now</Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
