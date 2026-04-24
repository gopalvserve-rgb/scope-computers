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
    UPDATE blog_posts SET
      slug = ${b.slug}, title = ${b.title}, tagline = ${b.tagline || ''},
      intro = ${b.intro || ''}, body = ${b.body || ''}, is_published = ${b.is_published !== false}
    WHERE id = ${id} RETURNING *
  `;
  return NextResponse.json({ row: rows[0] });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  await sql`DELETE FROM blog_posts WHERE id = ${parseInt(params.id, 10)}`;
  return NextResponse.json({ ok: true });
}
