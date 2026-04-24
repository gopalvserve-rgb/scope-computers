import { sql, ensureTables } from '@/lib/db';
import DataTable from '@/components/DataTable';

export const dynamic = 'force-dynamic';

export default async function ResumesAdminPage() {
  await ensureTables();
  const { rows } = await sql`SELECT * FROM resumes ORDER BY created_at DESC LIMIT 500`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Resume Submissions</h1>
        <p className="text-sm text-slate-600">Resumes uploaded through the placement page.</p>
      </div>
      <DataTable
        columns={[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone' },
          { key: 'role', label: 'Role' },
          { key: 'filename', label: 'Resume File' },
          { key: 'created_at', label: 'Received', render: (r) => new Date(r.created_at).toLocaleString() },
        ]}
        rows={rows}
        emptyMsg="No resume submissions yet."
      />
    </div>
  );
}
