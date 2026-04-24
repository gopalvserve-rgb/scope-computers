'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setMsg('Could not send message. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-md bg-green-50 border border-green-200 px-5 py-6 text-center">
        <div className="text-3xl">✅</div>
        <h3 className="mt-2 font-bold text-green-900">Message Sent!</h3>
        <p className="mt-1 text-sm text-green-800">We&apos;ll respond within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-3 text-sm font-semibold text-green-700 underline">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="form-label">Name *</label>
        <input name="name" required className="form-input" />
      </div>
      <div>
        <label className="form-label">Email *</label>
        <input name="email" type="email" required className="form-input" />
      </div>
      <div>
        <label className="form-label">Message *</label>
        <textarea name="message" rows={4} required className="form-input" />
      </div>
      {status === 'error' && msg && (
        <div className="text-sm text-red-600">{msg}</div>
      )}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
