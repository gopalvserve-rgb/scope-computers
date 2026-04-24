'use client';

type Col = { key: string; label: string; render?: (row: any) => React.ReactNode };

export default function DataTable({ columns, rows, emptyMsg }: { columns: Col[]; rows: any[]; emptyMsg?: string }) {
  if (rows.length === 0) {
    return (
      <div className="rounded-xl bg-white ring-1 ring-slate-200 p-10 text-center">
        <p className="text-sm text-slate-500">{emptyMsg || 'No records yet.'}</p>
      </div>
    );
  }

  function exportCsv() {
    const headers = columns.map((c) => c.label);
    const data = rows.map((r) => columns.map((c) => {
      const v = r[c.key];
      if (v === null || v === undefined) return '';
      const s = String(v).replace(/"/g, '""');
      return `"${s}"`;
    }));
    const csv = [headers.map((h) => `"${h}"`).join(','), ...data.map((d) => d.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `export-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="rounded-xl bg-white ring-1 ring-slate-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <div className="text-sm text-slate-600">{rows.length} records</div>
        <button onClick={exportCsv} className="btn-secondary !py-1.5 !px-3 !text-xs">⬇ Export CSV</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              {columns.map((c) => (
                <th key={c.key} className="px-4 py-2.5 font-semibold text-slate-700 text-xs uppercase tracking-wide">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 align-top text-slate-800">
                    {c.render ? c.render(r) : (r[c.key] ?? '—')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
