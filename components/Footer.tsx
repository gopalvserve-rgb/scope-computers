import Link from 'next/link';
import { siteConfig, offices, socialLinks } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container-wrap py-16 grid gap-10 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
              CI
            </div>
            <div>
              <div className="text-lg font-bold text-white">{siteConfig.name}</div>
              <div className="text-xs text-slate-400">{siteConfig.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Institute Led by IITians and PhD Experts — Best CAD / CAM / AI &amp; Data Science Institute since 1993.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-brand-300 underline underline-offset-2"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">About</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/faculty" className="hover:text-white">Faculty</Link></li>
            <li><Link href="/placement" className="hover:text-white">Placement Cell</Link></li>
            <li><Link href="/syllabus" className="hover:text-white">Syllabus Download</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/admission" className="hover:text-white">Admission</Link></li>
            <li><Link href="/admin/login" className="hover:text-white">Admin Login</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
          <div className="text-sm text-slate-400 space-y-2">
            <div>
              <div className="font-semibold text-slate-200">Jodhpur Head Office</div>
              <div>{offices[0].address}</div>
              <div>📞 {offices[0].phone}</div>
              <div>✉️ {offices[0].email}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{siteConfig.copyright}</div>
          <div>Developed with care for Computer Institute</div>
        </div>
      </div>
    </footer>
  );
}
