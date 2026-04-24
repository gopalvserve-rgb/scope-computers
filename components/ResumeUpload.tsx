'use client';

import { useState } from 'react';

export default function ResumeUpload() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      role: fd.get('role'),
      filename: (fd.get('resume') as File)?.name || '',
    };
    try {
      const res = await fetch('/api/resumes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setMsg('Upload failed. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-md bg-green-50 border border-green-200 px-5 py-6 text-center">
        <div className="text-3xl">🎯</div>
        <h3 className="mt-2 font-bold text-green-900">Resume Received!</h3>
        <p className="mt-1 text-sm text-green-800">Our placement team will review it and reach out.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name *" required className="form-input" />
        <input name="email" type="email" placeholder="Email *" required className="form-input" />
        <input name="phone" placeholder="Phone *" required className="form-input" />
        <input name="role" placeholder="Role you're applying for" className="form-input" />
      </div>
      <div>
        <label className="form-label">Upload Resume (PDF, DOC, DOCX — max 5MB)</label>
        <input name="resume" type="file" accept=".pdf,.doc,.docx" required className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100" />
        <p className="mt-1 text-xs text-slate-500">Only filename metadata is saved in the demo. Connect Vercel Blob Storage for real file upload — see README.</p>
      </div>
      {status === 'error' && msg && <div className="text-sm text-red-600">{msg}</div>}
      <button type="submit" disabled={status === 'loading'} className="btn-primary">
        {status === 'loading' ? 'Uploading…' : 'Submit Resume'}
      </button>
    </form>
  );
}
