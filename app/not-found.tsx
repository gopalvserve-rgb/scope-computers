import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-brand-50 to-white">
      <div className="container-wrap max-w-xl text-center">
        <div className="text-6xl font-bold text-brand-700">404</div>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-2 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="mt-6 btn-primary inline-block">Return Home</Link>
      </div>
    </section>
  );
}
