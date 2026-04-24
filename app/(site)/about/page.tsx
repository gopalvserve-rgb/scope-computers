import Link from 'next/link';

export const metadata = { title: 'About Us — Three Decades of Practical Training' };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">About the Institute</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Who We Are</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            We&apos;re a computer training institute focused on one thing: turning students into hired
            professionals. CAD, CAM, design, data science, and accounting — taught by people who have
            actually worked in those fields for decades.
          </p>
        </div>
      </section>

      {/* Director */}
      <section className="section">
        <div className="container-wrap grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-1 shadow-xl">
              <div className="rounded-2xl bg-white p-6 text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-4xl font-bold">
                  DN
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Dr. Nishat</h3>
                <div className="mt-1 text-sm text-slate-500">Director</div>
                <div className="mt-3 inline-flex flex-wrap gap-1.5 justify-center">
                  <span className="text-[11px] rounded-full bg-brand-50 text-brand-700 px-2 py-0.5">IITian</span>
                  <span className="text-[11px] rounded-full bg-accent-50 text-accent-700 px-2 py-0.5">M.Tech</span>
                  <span className="text-[11px] rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">PhD</span>
                  <span className="text-[11px] rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">Data Scientist</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 prose-scope">
            <div className="text-xs font-semibold text-brand-700">Meet the Director</div>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Dr. Nishat — IITian, Data Scientist, Educator</h2>
            <p>
              Dr. Nishat has been shaping technical education in India since he was seventeen. An IIT alumnus with a
              double doctorate, he&apos;s a recognized Data Scientist with deep expertise across CAD/CAM, GIS, and
              Artificial Intelligence — a rare combination of academic depth and applied skill.
            </p>
            <p>
              His work has earned him hundreds of national and international awards, and he&apos;s the author of
              several books across robotics, AI, and design. But credentials aside, what makes him different is that
              he still teaches. Advanced tracks in CAD/CAM, GIS, AI, and programming are run by him personally — not
              delegated down.
            </p>
            <p>
              Over his career, more than a lakh students have trained under his guidance. Many now work at top firms
              or run their own ventures. He&apos;s also served as guest faculty at several of India&apos;s leading
              engineering institutes.
            </p>
            <div className="mt-6 rounded-lg border-l-4 border-accent-500 bg-accent-50 p-4 text-slate-800">
              <em>
                Under his direction, the institute has grown into one of India&apos;s most hands-on, industry-aligned
                training setups.
              </em>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-slate-50">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-brand-700">What Makes Us Different</div>
            <h2 className="section-heading mt-2">Real Equipment, Real Projects, Real Outcomes</h2>
            <p className="section-sub">
              Established in 1993, we&apos;re one of the oldest computer training institutes in India. Branches in
              Bangalore, Jodhpur, Hyderabad, Ajmer, Noida, Gorakhpur, and beyond. Three decades of refining how we
              teach — and more importantly, what we teach.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Civil Engineering', body: 'Hands-on with Total Station, GPS, DGPS, Auto Level, drone mapping, and town-planning instruments — the actual tools used on live sites.' },
              { title: 'Mechanical Engineering', body: 'Real CNC machines on-site. Students design, run, and adjust production workflows instead of simulating them in software.' },
              { title: 'Graphic Design', body: 'We run an in-house ad agency. Students work on live client briefs using our screen printing units, flex machines, and production workflows.' },
              { title: 'CNC Router &amp; Laser Design', body: 'Our own wood, stone, and laser CNC routers mean students cut real material — not just render it on screen.' },
              { title: 'Robotics', body: 'Our own sensors, controllers, and robotics kits. Build working prototypes instead of watching videos of them.' },
              { title: 'Placement Infrastructure', body: 'An AI-powered job portal plus an independent placement arm — thousands of verified openings, not vague promises.' },
            ].map((b) => (
              <div key={b.title} className="card">
                <h3 className="font-bold text-slate-900" dangerouslySetInnerHTML={{ __html: b.title }} />
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-brand-700 text-white p-6 lg:p-8">
            <p className="text-lg font-semibold">
              More than a training institute — a complete ecosystem of knowledge, equipment, and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Practice / Facilities */}
      <section className="section">
        <div className="container-wrap grid lg:grid-cols-2 gap-10">
          <div className="card">
            <h3 className="text-xl font-bold text-slate-900">Practice Beats Theory</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              You don&apos;t learn a tool by reading about it. Our practice area is stocked with hours of
              exercises, real-world problems, and open challenges — so you can put theory to work the same day
              you learn it. There&apos;s even a gaming section when you need a break.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-slate-900">Live Classrooms, Real Equipment</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Online courses are convenient, but nothing replaces in-person access to current hardware and
              software. Our live classrooms in Jodhpur, Ajmer, and Bangalore give you that — the latest gear,
              in an actual workspace, with instructors in the room.
            </p>
          </div>
        </div>

        <div className="container-wrap mt-12 text-center">
          <Link href="/admission" className="btn-primary">Start Your Journey</Link>
        </div>
      </section>
    </>
  );
}
