import { getFaculty, seedAllIfEmpty } from '@/lib/cms';

export const metadata = { title: 'Our Faculty' };
export const dynamic = 'force-dynamic';

function initials(name: string) {
  return name.replace(/[()]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}
const palette = ['bg-brand-100 text-brand-700', 'bg-accent-100 text-accent-700', 'bg-emerald-100 text-emerald-700', 'bg-pink-100 text-pink-700', 'bg-indigo-100 text-indigo-700', 'bg-amber-100 text-amber-700'];

export default async function FacultyPage() {
  await seedAllIfEmpty();
  const faculty = await getFaculty();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">Meet the Team</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Our Expert Faculty</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            Learn from IITians, PhD holders, and industry veterans with 10 to 30+ years of real-world experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f, idx) => (
            <div key={f.id} className="card">
              <div className="flex items-start gap-4">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold ${palette[idx % palette.length]}`}>
                  {initials(f.name)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">{f.name}</h3>
                  <div className="text-xs font-semibold text-brand-700">{f.role}</div>
                </div>
              </div>
              {f.specialization && <div className="mt-4 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-700 font-medium">🎯 {f.specialization}</div>}
              {f.bio && <p className="mt-4 text-sm text-slate-600 leading-relaxed">{f.bio}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
