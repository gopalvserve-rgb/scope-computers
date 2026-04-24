import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts, seedAllIfEmpty } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  await seedAllIfEmpty();
  const article = await getBlogPostBySlug(params.slug);
  return { title: article?.title || 'Article' };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  await seedAllIfEmpty();
  const article = await getBlogPostBySlug(params.slug);
  if (!article) notFound();
  const related = (await getBlogPosts()).filter((a) => a.slug !== article.slug).slice(0, 5);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20 max-w-4xl">
          {article.tagline && <div className="text-xs font-semibold text-brand-200">{article.tagline}</div>}
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{article.title}</h1>
          {article.intro && <p className="mt-5 text-brand-100 leading-relaxed">{article.intro}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admission" className="btn-accent">Enroll Now</Link>
            <Link href="/syllabus" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">Download Syllabus</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose-scope">
            {article.body && article.body.split('\n\n').map((para, i) => {
              if (para.startsWith('## ')) return <h2 key={i}>{para.replace(/^##\s*/, '')}</h2>;
              if (para.startsWith('**') && para.endsWith('**')) return <h3 key={i}>{para.slice(2, -2)}</h3>;
              return <p key={i}>{para}</p>;
            })}
          </article>

          <aside className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-slate-900">Ready to Start?</h3>
              <p className="mt-2 text-sm text-slate-600">Join hundreds of students who have built rewarding careers with us.</p>
              <Link href="/admission" className="mt-4 btn-primary w-full">Apply Now</Link>
            </div>
            {related.length > 0 && (
              <div className="card">
                <h3 className="font-bold text-slate-900">Other Articles</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {related.map((a) => (
                    <li key={a.id}>
                      <Link href={`/courses/${a.slug}`} className="text-brand-700 hover:text-brand-800">→ {a.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
