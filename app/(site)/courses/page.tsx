import Link from 'next/link';
import { courseCategories } from '@/lib/site-data';

export const metadata = { title: 'Courses — Full Course List' };

export default function CoursesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">Our Courses</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Explore All Courses</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            Short tracks, diploma programs, and government-approved certifications — matched to your career goals and
            taught by instructors with real industry experience. Every program is built around practical work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/admission" className="btn-accent">Apply for Admission</Link>
            <Link href="/syllabus" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">
              Download Syllabus
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap space-y-12">
          {courseCategories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-slate-900">{cat.title}</h2>
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-sm text-slate-500">{cat.courses.length} courses</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.courses.map((course) => (
                  <div key={course} className="card flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 font-bold">
                      {course.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{course}</h3>
                      <div className="mt-2 flex gap-2">
                        <Link href="/admission" className="text-xs font-semibold text-brand-700 hover:text-brand-800">
                          Enroll →
                        </Link>
                        <Link href="/syllabus" className="text-xs font-semibold text-slate-500 hover:text-brand-700">
                          Syllabus →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wrap max-w-2xl text-center">
          <h2 className="section-heading">Not sure which course is right for you?</h2>
          <p className="section-sub mx-auto">
            Our career counselors can help you pick the right course based on your background and goals.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="btn-primary">Talk to a Counselor</Link>
            <Link href="/admission" className="btn-secondary">Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
