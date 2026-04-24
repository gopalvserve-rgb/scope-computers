import { ReactNode } from 'react';

export const metadata = { title: 'Admin Panel' };

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-slate-100">{children}</div>;
}
