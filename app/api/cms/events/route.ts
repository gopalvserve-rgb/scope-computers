import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTables } from '@/lib/db';
import { requireAdmin } from '@/lib/session';
export const runtime = 'nodejs';

export async function GET() {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const { rows } = await sql`SELECT * FROM events ORDER BY sort_order, title`;
  return NextResponse.json({ rows });
}

export async function POST(req: NextRequest) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const b = await req.json();
  const { rows } = await sql`
    INSERT INTO events (title, date_text, location, sort_order, is_active)
    VALUES (${b.title}, ${b.date_text || ''}, ${b.location || ''}, ${b.sort_order || 100}, ${b.is_active !== false})
    RETURNING *
  `;
  return NextResponse.json({ row: rows[0] });
}
