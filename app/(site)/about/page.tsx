import Link from 'next/link';

export const metadata = { title: 'About Us — Building Futures with Expert-Led Learning' };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">About Computer Institute</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            Welcome to Computer Institute — your trusted partner in IT education and digital skills. We
            provide expert-led courses in CAD, graphic design, AI, and computer applications to help
            students and professionals excel in the digital world.
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
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Dr. Nishat — M.Tech IIT &amp; PhD Data Scientist</h2>
            <p>
              Dr. Nishat is a visionary educator, technologist, and leader who has been shaping the future of
              technical education in India since the age of seventeen. An IITian and a Double Doctorate holder,
              he is a globally recognized Data Scientist and expert in CAD/CAM, GIS, and Artificial Intelligence.
            </p>
            <p>
              Dr. Nishat is the recipient of hundreds of national and international awards, honored for his
              unmatched contributions to the field of computer education and innovation. He is also the author
              of several acclaimed books in the areas of technology, robotics, AI, and design.
            </p>
            <p>
              What truly distinguishes Dr. Nishat is his hands-on involvement in education. Despite being the
              Director, he personally teaches advanced courses such as CAD/CAM, GIS, Artificial Intelligence,
              and Programming, ensuring that students receive guidance from the very best.
            </p>
            <p>
              With a career spanning decades, he has trained over one lakh students, many of whom are now
              successfully working in top companies or running their own ventures. He has also been a guest
              faculty and trainer at several prestigious engineering institutions across India.
            </p>
            <div className="mt-6 rounded-lg border-l-4 border-accent-500 bg-accent-50 p-4 text-slate-800">
              <em>
                Under his leadership, Computer Institute has grown into one of the most practical, industry-driven
                training ecosystems in the country.
              </em>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-slate-50">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-brand-700">Who We Are</div>
            <h2 className="section-heading mt-2">Building Futures with Expert-Led Learning</h2>
            <p className="section-sub">
              Established in 1993, Computer Institute is one of India&apos;s oldest and most respected computer
              training institutes. With branches in Bangalore, Jodhpur, Hyderabad, Ajmer, Noida, Gorakhpur,
              and beyond, we have built a legacy of excellence spanning three decades.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Civil Engineering', body: 'Practical sessions with Total Station, GPS, DGPS, Auto Level, Drone Mapping, and town planning instruments.' },
              { title: 'Mechanical Engineering', body: 'Training supported with actual CNC machines for hands-on manufacturing and automation practice.' },
              { title: 'Graphic Designing', body: 'In-house advertising agency, screen printing units, flex machines, and real-time production workflows.' },
              { title: 'CNC Router & Laser Design', body: 'Our own wooden, stone, and laser CNC routers for true hands-on training.' },
              { title: 'Robotics', body: 'Sensors, controllers, robotics kits, and accessories for real-time development.' },
              { title: 'AI-Powered Job Portal', body: 'Independent placement company with thousands of verified vacancies updated regularly.' },
            ].map((b) => (
              <div key={b.title} className="card">
                <h3 className="font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-brand-700 text-white p-6 lg:p-8">
            <p className="text-lg font-semibold">
              Computer Institute is not just an institute — it is a complete ecosystem of knowledge, innovation, and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Practice / Facilities */}
      <section className="section">
        <div className="container-wrap grid lg:grid-cols-2 gap-10">
          <div className="card">
            <h3 className="text-xl font-bold text-slate-900">Practice Makes Perfect</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We know about your hectic schedule. We also know the only way you truly understand a subject is
              by practicing it in a real environment. We&apos;ve set a playground area that&apos;s full of hours of
              exercises, questions, and challenges — it even has a gaming section.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-slate-900">The Best Resource Facilities</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              In addition to our online classroom, we offer live classrooms at our institutes in Jodhpur,
              Ajmer, and Bangalore. Here you&apos;ll use the most up-to-date facilities and computer equipment.
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
