import { sql, ensureTables } from '@/lib/db';
import DataTable from '@/components/DataTable';

export const dynamic = 'force-dynamic';

export default async function InquiriesAdminPage() {
  await ensureTables();
  const { rows } = await sql`SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 500`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Website Inquiries</h1>
        <p className="text-sm text-slate-600">Leads captured through the on-site inquiry pop-up.</p>
      </div>
      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'phone', label: 'Phone' },
          { key: 'email', label: 'Email' },
          { key: 'message', label: 'Message' },
          { key: 'created_at', label: 'Received', render: (r) => new Date(r.created_at).toLocaleString() },
        ]}
        rows={rows}
        emptyMsg="No inquiries yet."
      />
    </div>
  );
}
