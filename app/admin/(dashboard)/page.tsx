export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { sql, ensureTables } from '@/lib/db';
import Link from 'next/link';

export default async function AdminDashboardPage() {
  await ensureTables();
  const [adm, cont, inq, res] = await Promise.all([
    sql`SELECT COUNT(*)::int AS c, COUNT(*) FILTER (WHERE status = 'new')::int AS new FROM admissions`,
    sql`SELECT COUNT(*)::int AS c, COUNT(*) FILTER (WHERE status = 'new')::int AS new FROM contacts`,
    sql`SELECT COUNT(*)::int AS c, COUNT(*) FILTER (WHERE status = 'new')::int AS new FROM inquiries`,
    sql`SELECT COUNT(*)::int AS c, COUNT(*) FILTER (WHERE status = 'new')::int AS new FROM resumes`,
  ]);

  const cards = [
    { label: 'Admissions', href: '/admin/admissions', total: adm.rows[0].c, new: adm.rows[0].new, color: 'from-brand-500 to-brand-700' },
    { label: 'Contacts', href: '/admin/contacts', total: cont.rows[0].c, new: cont.rows[0].new, color: 'from-accent-500 to-accent-700' },
    { label: 'Inquiries', href: '/admin/inquiries', total: inq.rows[0].c, new: inq.rows[0].new, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Resumes', href: '/admin/resumes', total: res.rows[0].c, new: res.rows[0].new, color: 'from-indigo-500 to-indigo-700' },
  ];

  const { rows: recentAdms } = await sql`SELECT id, first_name, surname, email, course, created_at FROM admissions ORDER BY created_at DESC LIMIT 5`;
  const { rows: recentContacts } = await sql`SELECT id, name, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 5`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-600">Quick overview of all submissions.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className={`block rounded-xl bg-gradient-to-br ${c.color} text-white p-6 shadow-sm hover:shadow-lg transition`}>
            <div className="text-sm opacity-90">{c.label}</div>
            <div className="mt-2 text-3xl font-bold">{c.total}</div>
            <div className="mt-3 text-xs opacity-90">{c.new} new</div>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent Admissions</h2>
            <Link href="/admin/admissions" className="text-xs font-semibold text-brand-700">View all →</Link>
          </div>
          {recentAdms.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">No admissions yet.</p>
          ) : (
            <ul className="mt-4 divide-y divide-slate-100">
              {recentAdms.map((r) => (
                <li key={r.id} className="py-3 flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium text-slate-900">{r.first_name} {r.surname}</div>
                    <div className="text-xs text-slate-500">{r.course || 'No course'} • {r.email}</div>
                  </div>
                  <div className="text-xs text-slate-400">{new Date(r.created_at).toLocaleDateString()}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Recent Contacts</h2>
            <Link href="/admin/contacts" className="text-xs font-semibold text-brand-700">View all →</Link>
          </div>
          {recentContacts.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">No contact messages yet.</p>
          ) : (
            <ul className="mt-4 divide-y divide-slate-100">
              {recentContacts.map((r) => (
                <li key={r.id} className="py-3 flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.email}</div>
                  </div>
                  <div className="text-xs text-slate-400">{new Date(r.created_at).toLocaleDateString()}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
