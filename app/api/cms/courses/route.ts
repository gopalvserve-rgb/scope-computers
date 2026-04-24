import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTables } from '@/lib/db';
import { requireAdmin } from '@/lib/session';

export const runtime = 'nodejs';

export async function GET() {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const { rows } = await sql`SELECT * FROM courses ORDER BY sort_order, name`;
  return NextResponse.json({ rows });
}

export async function POST(req: NextRequest) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const b = await req.json();
  const { rows } = await sql`
    INSERT INTO courses (name, category, description, tag, sort_order, is_featured, is_active)
    VALUES (${b.name}, ${b.category || ''}, ${b.description || ''}, ${b.tag || ''}, ${b.sort_order || 100}, ${!!b.is_featured}, ${b.is_active !== false})
    RETURNING *
  `;
  return NextResponse.json({ row: rows[0] });
}
