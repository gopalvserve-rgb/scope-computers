import AdmissionForm from '@/components/AdmissionForm';

export const metadata = { title: 'Admission & Payment' };

export default function AdmissionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">Admission &amp; Payment</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Join Scope Computers</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            Take the first step toward a successful IT career. Our admission process is simple and hassle-free —
            complete the form below and our team will reach out within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold text-slate-900">Admission Form</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in all required fields. We&apos;ll contact you to confirm your admission and payment details.
              </p>
              <div className="mt-6">
                <AdmissionForm />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-slate-900">Why Choose Scope Computers?</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✅ 35+ years of experience</li>
                <li>✅ 150,000+ students trained</li>
                <li>✅ IITian &amp; PhD faculty</li>
                <li>✅ Hands-on practical training</li>
                <li>✅ Placement assistance</li>
                <li>✅ NIELIT Govt. approved courses</li>
              </ul>
            </div>
            <div className="card bg-brand-50 ring-brand-100">
              <h3 className="font-bold text-slate-900">Need help applying?</h3>
              <p className="mt-2 text-sm text-slate-700">
                Call us at <a href="tel:+918560000535" className="font-semibold text-brand-700">+91 8560000535</a> or email{' '}
                <a href="mailto:jodhpurscope@gmail.com" className="font-semibold text-brand-700">jodhpurscope@gmail.com</a>
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-slate-900">Terms &amp; Conditions</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                By submitting this form, you agree that all information provided is accurate and complete.
                Admission is subject to verification and institute policies. Fees once paid are non-refundable.
                Scope Computers reserves the right to modify course details, schedules, or terms without prior notice.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
