import Link from 'next/link';
import { notFound } from 'next/navigation';
import { courseArticles, findArticle } from '@/lib/course-articles';

export function generateStaticParams() {
  return courseArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = findArticle(params.slug);
  if (!a) return { title: 'Course Not Found' };
  return { title: a.title };
}

export default function CourseArticlePage({ params }: { params: { slug: string } }) {
  const article = findArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20 max-w-4xl">
          <div className="text-xs font-semibold text-brand-200">{article.tagline}</div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{article.title}</h1>
          <p className="mt-5 text-brand-100 leading-relaxed">{article.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admission" className="btn-accent">Enroll Now</Link>
            <Link href="/syllabus" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">
              Download Syllabus
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-scope">
            {article.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="mt-12">
              <h2>Frequently Asked Questions</h2>
              <div className="space-y-3">
                {article.faqs.map((f) => (
                  <details key={f.q} className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-4 group">
                    <summary className="cursor-pointer font-semibold text-slate-900 flex justify-between items-center">
                      {f.q}
                      <span className="text-brand-700 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 text-slate-700 text-sm">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-slate-900">Ready to Start?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Join hundreds of students who have built rewarding careers with Computer Institute.
              </p>
              <Link href="/admission" className="mt-4 btn-primary w-full">Apply Now</Link>
            </div>
            <div className="card bg-brand-50 ring-brand-100">
              <h3 className="font-bold text-slate-900">Talk to a Counselor</h3>
              <p className="mt-2 text-sm text-slate-700">
                Not sure if this is the right fit? We&apos;ll help you decide.
              </p>
              <Link href="/contact" className="mt-4 btn-secondary w-full">Contact Us</Link>
            </div>
            <div className="card">
              <h3 className="font-bold text-slate-900">Other Articles</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {courseArticles.filter((a) => a.slug !== article.slug).slice(0, 5).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/courses/${a.slug}`} className="text-brand-700 hover:text-brand-800">
                      → {a.tagline}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
