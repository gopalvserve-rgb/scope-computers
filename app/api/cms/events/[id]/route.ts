import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTables } from '@/lib/db';
import { requireAdmin } from '@/lib/session';
export const runtime = 'nodejs';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const id = parseInt(params.id, 10);
  const b = await req.json();
  const { rows } = await sql`
    UPDATE events SET title = ${b.title}, date_text = ${b.date_text || ''},
    location = ${b.location || ''}, sort_order = ${b.sort_order || 100}, is_active = ${b.is_active !== false}
    WHERE id = ${id} RETURNING *
  `;
  return NextResponse.json({ row: rows[0] });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  await sql`DELETE FROM events WHERE id = ${parseInt(params.id, 10)}`;
  return NextResponse.json({ ok: true });
}
