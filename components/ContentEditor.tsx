'use client';
import { useState } from 'react';

const FIELD_GROUPS: { label: string; fields: { key: string; label: string; textarea?: boolean }[] }[] = [
  {
    label: 'Branding',
    fields: [
      { key: 'site_name', label: 'Site name' },
      { key: 'tagline', label: 'Tagline (e.g. Since 1993)' },
    ],
  },
  {
    label: 'Home Page — Hero',
    fields: [
      { key: 'headline', label: 'Main headline' },
      { key: 'sub_headline', label: 'Sub-headline' },
      { key: 'hero_paragraph', label: 'Hero paragraph', textarea: true },
      { key: 'description', label: 'Site description (for SEO)', textarea: true },
    ],
  },
  {
    label: 'Home Page — Featured Course',
    fields: [
      { key: 'featured_course_title', label: 'Featured course title' },
      { key: 'featured_course_description', label: 'Featured course description', textarea: true },
    ],
  },
  {
    label: 'About Page',
    fields: [
      { key: 'about_hero_paragraph', label: 'About hero paragraph', textarea: true },
    ],
  },
  {
    label: 'Footer & CTA',
    fields: [
      { key: 'footer_tagline', label: 'Footer tagline', textarea: true },
      { key: 'cta_heading', label: 'Bottom CTA heading' },
      { key: 'cta_paragraph', label: 'Bottom CTA paragraph', textarea: true },
    ],
  },
];

export default function ContentEditor({ initial }: { initial: Record<string, string> }) {
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState('');

  async function save() {
    setSaving(true);
    setErr('');
    setSaved(false);
    const res = await fetch('/api/cms/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      setErr('Save failed');
    }
    setSaving(false);
  }

  return (
    <div className="space-y-6">
      {FIELD_GROUPS.map((group) => (
        <div key={group.label} className="rounded-xl bg-white ring-1 ring-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">{group.label}</h2>
          <div className="space-y-4">
            {group.fields.map((f) => (
              <div key={f.key}>
                <label className="form-label">{f.label}</label>
                {f.textarea ? (
                  <textarea
                    value={values[f.key] ?? ''}
                    onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                    rows={3}
                    className="form-input"
                  />
                ) : (
                  <input
                    value={values[f.key] ?? ''}
                    onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                    className="form-input"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3 sticky bottom-4">
        <button onClick={save} disabled={saving} className="btn-primary">
          {saving ? 'Saving…' : 'Save All Changes'}
        </button>
        {saved && <span className="text-sm text-green-700 font-medium">✓ Saved — refresh public site to see changes</span>}
        {err && <span className="text-sm text-red-700 font-medium">{err}</span>}
      </div>
    </div>
  );
}
