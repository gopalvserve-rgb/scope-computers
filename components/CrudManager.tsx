'use client';

import { useEffect, useState } from 'react';

type Field = {
  key: string;
  label: string;
  type?: 'text' | 'textarea' | 'number' | 'checkbox' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
};

type Props = {
  title: string;
  endpoint: string; // e.g. '/api/cms/courses'
  fields: Field[];
  displayFields: string[]; // which fields to show in the table
  initialSort?: string;
};

export default function CrudManager({ title, endpoint, fields, displayFields }: Props) {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState<Record<string, any>>({});
  const [err, setErr] = useState('');

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(endpoint, { credentials: 'include' });
      const data = await res.json();
      setRows(data.rows || []);
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function openAdd() {
    const blank: Record<string, any> = {};
    fields.forEach((f) => {
      blank[f.key] = f.type === 'checkbox' ? true : f.type === 'number' ? 100 : '';
    });
    blank.is_active = true;
    blank.sort_order = 100;
    setForm(blank);
    setAdding(true);
    setEditing(null);
  }

  function openEdit(row: any) {
    setForm({ ...row });
    setEditing(row);
    setAdding(false);
  }

  async function save() {
    setErr('');
    const method = adding ? 'POST' : 'PUT';
    const url = adding ? endpoint : `${endpoint}/${editing.id}`;
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      const b = await res.json().catch(() => ({}));
      setErr(b.error || 'Save failed');
      return;
    }
    setEditing(null);
    setAdding(false);
    load();
  }

  async function remove(row: any) {
    if (!confirm(`Delete "${row.name || row.title || row.slug}"?`)) return;
    const res = await fetch(`${endpoint}/${row.id}`, { method: 'DELETE', credentials: 'include' });
    if (!res.ok) {
      alert('Delete failed');
      return;
    }
    load();
  }

  const isEditing = adding || editing;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-600">{rows.length} records</p>
        </div>
        <button onClick={openAdd} className="btn-primary !py-2 !px-4 !text-sm">+ Add New</button>
      </div>

      {err && <div className="rounded bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">{err}</div>}

      {loading ? (
        <div className="text-slate-500">Loading…</div>
      ) : (
        <div className="rounded-xl bg-white ring-1 ring-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  {displayFields.map((f) => (
                    <th key={f} className="px-4 py-2.5 font-semibold text-slate-700 text-xs uppercase tracking-wide">{f}</th>
                  ))}
                  <th className="px-4 py-2.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50">
                    {displayFields.map((f) => (
                      <td key={f} className="px-4 py-3 text-slate-800 align-top max-w-xs truncate">
                        {typeof r[f] === 'boolean' ? (r[f] ? '✓' : '✗') : r[f] ?? '—'}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button onClick={() => openEdit(r)} className="text-brand-700 hover:text-brand-800 text-sm font-semibold mr-3">Edit</button>
                      <button onClick={() => remove(r)} className="text-red-600 hover:text-red-700 text-sm font-semibold">Delete</button>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan={displayFields.length + 1} className="px-4 py-10 text-center text-slate-500">No records yet. Click "+ Add New" to create one.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">{adding ? 'Add New' : 'Edit'}</h2>
              <button onClick={() => { setAdding(false); setEditing(null); }} className="text-slate-400 hover:text-slate-700 text-xl">✕</button>
            </div>
            <div className="p-6 space-y-4">
              {fields.map((f) => (
                <div key={f.key}>
                  <label className="form-label">{f.label}{f.required && ' *'}</label>
                  {f.type === 'textarea' ? (
                    <textarea
                      value={form[f.key] ?? ''}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      rows={f.rows || 4}
                      className="form-input"
                      placeholder={f.placeholder}
                    />
                  ) : f.type === 'checkbox' ? (
                    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" checked={!!form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })} />
                      <span>{f.placeholder || 'Enabled'}</span>
                    </label>
                  ) : f.type === 'number' ? (
                    <input
                      type="number"
                      value={form[f.key] ?? ''}
                      onChange={(e) => setForm({ ...form, [f.key]: Number(e.target.value) })}
                      className="form-input"
                      placeholder={f.placeholder}
                    />
                  ) : f.type === 'select' ? (
                    <select value={form[f.key] ?? ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} className="form-input">
                      <option value="">— Choose —</option>
                      {(f.options || []).map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input
                      value={form[f.key] ?? ''}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="form-input"
                      placeholder={f.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-end gap-3">
              <button onClick={() => { setAdding(false); setEditing(null); }} className="btn-secondary">Cancel</button>
              <button onClick={save} className="btn-primary">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
