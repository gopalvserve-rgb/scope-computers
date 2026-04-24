import { sql, ensureTables } from '@/lib/db';
import DataTable from '@/components/DataTable';

export const dynamic = 'force-dynamic';

export default async function ContactsAdminPage() {
  await ensureTables();
  const { rows } = await sql`SELECT * FROM contacts ORDER BY created_at DESC LIMIT 500`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Contact Messages</h1>
        <p className="text-sm text-slate-600">Messages submitted from the public Contact page.</p>
      </div>
      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'message', label: 'Message' },
          { key: 'created_at', label: 'Received', render: (r) => new Date(r.created_at).toLocaleString() },
        ]}
        rows={rows}
        emptyMsg="No contact messages yet."
      />
    </div>
  );
}
