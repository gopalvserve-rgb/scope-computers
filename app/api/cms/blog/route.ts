import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTables } from '@/lib/db';
import { requireAdmin } from '@/lib/session';
export const runtime = 'nodejs';

export async function GET() {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const { rows } = await sql`SELECT * FROM blog_posts ORDER BY published_at DESC`;
  return NextResponse.json({ rows });
}

export async function POST(req: NextRequest) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await ensureTables();
  const b = await req.json();
  const slug = String(b.slug || '').trim() || String(b.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (!slug || !b.title) return NextResponse.json({ error: 'Title and slug required' }, { status: 400 });
  const { rows } = await sql`
    INSERT INTO blog_posts (slug, title, tagline, intro, body, is_published)
    VALUES (${slug}, ${b.title}, ${b.tagline || ''}, ${b.intro || ''}, ${b.body || ''}, ${b.is_published !== false})
    RETURNING *
  `;
  return NextResponse.json({ row: rows[0] });
}
