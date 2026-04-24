import { ReactNode } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import LogoutButton from '@/components/LogoutButton';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (!session.isLoggedIn) redirect('/admin/login');

  const nav = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/admissions', label: 'Admissions', icon: '🎓' },
    { href: '/admin/contacts', label: 'Contacts', icon: '✉️' },
    { href: '/admin/inquiries', label: 'Inquiries', icon: '💬' },
    { href: '/admin/resumes', label: 'Resumes', icon: '📄' },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[260px_1fr] bg-slate-100">
      {/* Sidebar */}
      <aside className="bg-slate-900 text-slate-200 lg:min-h-screen">
        <div className="p-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
              SC
            </div>
            <div>
              <div className="font-bold text-white">Scope Admin</div>
              <div className="text-xs text-slate-400">Control Panel</div>
            </div>
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <span>{n.icon}</span>
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800 mt-4">
          <Link
            href="/"
            className="block px-3 py-2 text-xs text-slate-400 hover:text-white"
          >
            ← View public site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col">
        <header className="bg-white border-b border-slate-200">
          <div className="px-6 h-16 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">Welcome back,</div>
              <div className="font-semibold text-slate-900">{session.name || session.email}</div>
            </div>
            <LogoutButton />
          </div>
        </header>
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
