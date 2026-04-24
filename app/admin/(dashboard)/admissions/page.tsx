import { sql, ensureTables } from '@/lib/db';
import DataTable from '@/components/DataTable';

export const dynamic = 'force-dynamic';

export default async function AdmissionsAdminPage() {
  await ensureTables();
  const { rows } = await sql`SELECT * FROM admissions ORDER BY created_at DESC LIMIT 500`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Admission Applications</h1>
        <p className="text-sm text-slate-600">All applications submitted through the admission form.</p>
      </div>

      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name', render: (r) => `${r.first_name} ${r.surname}` },
          { key: 'course', label: 'Course' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone' },
          { key: 'qualification', label: 'Qualification' },
          { key: 'joining_date', label: 'Joining Date', render: (r) => r.joining_date ? new Date(r.joining_date).toLocaleDateString() : '—' },
          { key: 'created_at', label: 'Submitted', render: (r) => new Date(r.created_at).toLocaleString() },
        ]}
        rows={rows}
        emptyMsg="No admission applications yet. Once someone fills the form on /admission, it shows up here."
      />
    </div>
  );
}
