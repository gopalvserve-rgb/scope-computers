import Link from 'next/link';
import { syllabi } from '@/lib/site-data';

export const metadata = { title: 'Syllabus & Downloads' };

export default function SyllabusPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">Downloads</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Syllabus &amp; Course Brochures</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            Explore our carefully designed syllabus that covers all essential topics to help you master your
            chosen course and build practical skills.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {syllabi.map((s) => (
              <div key={s.file} className="card flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{s.description}</p>
                <div className="mt-4 flex gap-2 text-sm">
                  <a
                    href={`/downloads/${s.file}`}
                    className="btn-primary !py-2 !px-3 !text-xs"
                    download
                  >
                    ⬇ Download PDF
                  </a>
                  <Link href="/admission" className="btn-secondary !py-2 !px-3 !text-xs">
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-brand-50 p-6 lg:p-8 ring-1 ring-brand-100">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> Place your actual syllabus PDFs in the{' '}
              <code className="rounded bg-white px-1.5 py-0.5 text-brand-700">/public/downloads/</code> folder
              (matching the filenames above). They will be served at{' '}
              <code className="rounded bg-white px-1.5 py-0.5 text-brand-700">/downloads/filename.pdf</code>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
