import LoginForm from '@/components/LoginForm';

export const metadata = { title: 'Admin Login' };

export default function AdminLoginPage() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-brand-50 to-white">
      <div className="container-wrap py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-brand-700 text-white font-bold">
              SC
            </div>
            <h1 className="mt-4 text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="mt-2 text-sm text-slate-600">Sign in to the Scope Computers admin panel.</p>
          </div>
          <div className="mt-8">
            <LoginForm />
          </div>
          <div className="mt-6 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600">
            <strong>First-time setup?</strong> Once your database is connected and env vars are set, visit{' '}
            <code className="px-1 bg-white rounded">/api/auth/setup</code> once to seed the initial admin.
          </div>
        </div>
      </div>
    </section>
  );
}
