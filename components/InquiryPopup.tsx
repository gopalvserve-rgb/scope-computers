'use client';

import { useEffect, useState } from 'react';

export default function InquiryPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' ? window.sessionStorage.getItem('inquiryDismissed') : null;
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== 'undefined') window.sessionStorage.setItem('inquiryDismissed', '1');
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
      form.reset();
    } catch {
      setError('Could not send inquiry. Please try again or call us.');
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-slate-900/50">
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl ring-1 ring-slate-200">
        <button
          onClick={close}
          className="absolute right-3 top-3 p-1.5 rounded-md text-slate-400 hover:bg-slate-100"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900">Have Questions? Inquire Now</h3>
          <p className="mt-1 text-sm text-slate-600">Tell us what you&apos;re interested in and we&apos;ll get back within 24 hours.</p>

          {submitted ? (
            <div className="mt-5 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
              ✅ Thanks! We&apos;ve received your inquiry and will reach out soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input name="name" required placeholder="Your Name" className="form-input" />
              <input name="phone" required placeholder="Phone Number" className="form-input" />
              <input name="email" type="email" required placeholder="Email" className="form-input" />
              <textarea name="message" rows={3} placeholder="Your message / course of interest" className="form-input" />
              {error && <div className="text-xs text-red-600">{error}</div>}
              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? 'Sending…' : 'Send Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
