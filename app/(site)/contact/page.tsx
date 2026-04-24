import ContactForm from '@/components/ContactForm';
import { offices } from '@/lib/site-data';

export const metadata = { title: 'Contact Us — Our Centers' };

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="container-wrap py-16 lg:py-20">
          <div className="text-xs font-semibold text-brand-200">Contact Us</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Let&apos;s Talk</h1>
          <p className="mt-4 max-w-3xl text-brand-100 leading-relaxed">
            Have questions or need guidance? We&apos;re here to help! Reach out for course details, admissions,
            or support — online or at one of our centers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in the form and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900">Our Centers Across the Country</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {offices.map((o) => (
                <div key={o.city} className="card">
                  <h3 className="font-bold text-slate-900">{o.city}</h3>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div>📍 {o.address}</div>
                    <div>📞 <a href={`tel:${o.phone.split('|')[0].trim().replace(/\s/g, '')}`} className="hover:text-brand-700">{o.phone}</a></div>
                    {o.email && <div>✉️ <a href={`mailto:${o.email}`} className="hover:text-brand-700">{o.email}</a></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
