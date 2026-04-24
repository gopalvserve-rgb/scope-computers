'use client';

import { useState } from 'react';
import { allCourses } from '@/lib/site-data';

export default function AdmissionForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    if (!data.terms) {
      setStatus('error');
      setErrorMsg('Please accept the terms and conditions to proceed.');
      return;
    }

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error || 'Failed');
      setStatus('success');
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Could not submit. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 px-6 py-8 text-center">
        <div className="text-4xl">🎉</div>
        <h3 className="mt-2 text-xl font-bold text-green-900">Application Received!</h3>
        <p className="mt-2 text-sm text-green-800">
          Thank you for applying to Scope Computers. Our admissions team will contact you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-green-700 underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">First Name *</label>
          <input name="firstName" required className="form-input" />
        </div>
        <div>
          <label className="form-label">Surname *</label>
          <input name="surname" required className="form-input" />
        </div>
        <div>
          <label className="form-label">Email *</label>
          <input name="email" type="email" required className="form-input" />
        </div>
        <div>
          <label className="form-label">Phone Number *</label>
          <input name="phone" required className="form-input" />
        </div>
        <div>
          <label className="form-label">Father&apos;s Name</label>
          <input name="fatherName" className="form-input" />
        </div>
        <div>
          <label className="form-label">Mother&apos;s Name</label>
          <input name="motherName" className="form-input" />
        </div>
      </div>

      <div>
        <label className="form-label">Address *</label>
        <textarea name="address" rows={2} required className="form-input" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Highest Qualification</label>
          <input name="qualification" className="form-input" placeholder="e.g. 12th, B.Tech" />
        </div>
        <div>
          <label className="form-label">Preferred Joining Date</label>
          <input name="joiningDate" type="date" className="form-input" />
        </div>
      </div>

      <div>
        <label className="form-label">Select Course *</label>
        <select name="course" required className="form-input">
          <option value="">— Choose a course —</option>
          {allCourses.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">Candidate Photo (optional)</label>
        <input name="photo" type="file" accept="image/*" className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100" />
        <p className="mt-1 text-xs text-slate-500">Upload a passport-style photo. (File upload to server can be enabled with Vercel Blob Storage — see README.)</p>
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-700">
        <input name="terms" value="yes" type="checkbox" required className="mt-1" />
        <span>
          I agree to the <a href="/terms" className="text-brand-700 underline">terms &amp; conditions</a> and confirm
          that all information provided is accurate.
        </span>
      </label>

      {status === 'error' && errorMsg && (
        <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
        {status === 'loading' ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}
