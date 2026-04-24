import ResumeUpload from '@/components/ResumeUpload';

export const metadata = { title: 'Placement Cell — 100% Placement Assistance' };

const placedStudents = [
  { name: 'Amit Sharma', company: 'Google India', role: 'Software Engineer', package: '₹34 LPA', batch: '2024' },
  { name: 'Priya Verma', company: 'Microsoft', role: 'Data Scientist', package: '₹29 LPA', batch: '2024' },
  { name: 'Rohan Mehta', company: 'Amazon', role: 'Cloud Architect', package: '₹31 LPA', batch: '2023' },
];

const openRoles = [
  { title: 'Full Stack Developer', company: 'TechMahindra', location: 'Bangalore', package: '₹12–18 LPA', skills: 'React, Node.js, AWS, MongoDB' },
  { title: 'Data Analyst', company: 'Deloitte', location: 'Hyderabad', package: '₹10–15 LPA', skills: 'Python, SQL, Power BI' },
];

export default function PlacementPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">Placement Cell Cell</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Your Dream Job Starts Here</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            End-to-end placement support — from skill audits and mock interviews to introductions with 500+ active recruiters.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { label: 'Students Placed', value: '12,500+' },
              { label: 'Success Rate', value: '95%' },
              { label: 'Highest Package', value: '₹34 LPA' },
              { label: 'Recruiters', value: '500+' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur p-3 text-center">
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wide text-brand-100/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="section">
        <div className="container-wrap">
          <div className="rounded-2xl bg-slate-50 p-8 lg:p-10 grid lg:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-700 text-white text-3xl font-bold">
                DN
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="text-xs font-semibold text-brand-700">MESSAGE FROM DIRECTOR</div>
              <p className="mt-2 text-xl font-semibold text-slate-900 italic leading-relaxed">
                &ldquo;We don&apos;t just place students — we build careers. With industry-aligned training, mockldquo;We don&ldquo;We don&apos;t just place students — we build careers. With industry-aligned training, mockapos;t hand out job leads — we build people recruiters want to hire. Industry-relevant training, mock
                interviews, and 500+ recruiter partnerships — thatinterviews, and 500+ recruiter partnerships, we ensure every student gets the right opportunity.&rdquo;apos;s how we move students into roles that fit.interviews, and 500+ recruiter partnerships, we ensure every student gets the right opportunity.&rdquo;rdquo;
              </p>
              <div className="mt-4 font-semibold text-slate-700">
                — Dr. Nishat (IITian Data Scientist &amp; CAD/CAM/AI Expert), Director
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placed Students */}
      <section className="section bg-slate-50">
        <div className="container-wrap">
          <h2 className="section-heading">Our Proudly Placed Students</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {placedStudents.map((s) => (
              <div key={s.name} className="card text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-700 text-xl font-bold">
                  {s.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{s.name}</h3>
                <div className="text-sm text-slate-500">{s.role}</div>
                <div className="mt-3 text-lg font-bold text-brand-700">{s.company}</div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                  {s.package} • Batch {s.batch}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section">
        <div className="container-wrap">
          <h2 className="section-heading">Latest Job Openings</h2>
          <div className="mt-10 space-y-4">
            {openRoles.map((r) => (
              <div key={r.title + r.company} className="card flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{r.title}</h3>
                    <span className="text-sm text-slate-500">@ {r.company}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    📍 {r.location} &nbsp;•&nbsp; 💰 {r.package}
                  </div>
                  <div className="mt-2 text-xs text-slate-500">Skills: {r.skills}</div>
                </div>
                <a href="#resume-upload" className="btn-primary !py-2 !text-xs whitespace-nowrap">Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Upload */}
      <section id="resume-upload" className="section bg-brand-50">
        <div className="container-wrap">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="section-heading">Stand Out and Get Hired</h2>
              <p className="section-sub mx-auto">
                Upload your resume in 10 seconds and get noticed by top recruiters.
              </p>
            </div>
            <div className="mt-10 card">
              <ResumeUpload />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
