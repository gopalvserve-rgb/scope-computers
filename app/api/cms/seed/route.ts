import { NextResponse } from 'next/server';
import { seedAllIfEmpty } from '@/lib/cms';
import { requireAdmin } from '@/lib/session';

export const runtime = 'nodejs';

export async function POST() {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const results = await seedAllIfEmpty();
  return NextResponse.json({ ok: true, seeded: results });
}

export async function GET() {
  // Anyone can trigger seed since it only runs if tables are empty — safe
  const results = await seedAllIfEmpty();
  return NextResponse.json({ ok: true, seeded: results });
}
