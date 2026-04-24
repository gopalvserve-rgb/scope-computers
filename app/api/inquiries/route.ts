import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTables } from '@/lib/db';
import { requireAdmin } from '@/lib/session';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    await ensureTables();
    const body = await req.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();
    if (!name || !phone) return NextResponse.json({ error: 'Name and phone required' }, { status: 400 });

    await sql`INSERT INTO inquiries (name, phone, email, message) VALUES (${name}, ${phone}, ${email}, ${message})`;
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Inquiry POST error:', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await ensureTables();
    const { rows } = await sql`SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 500`;
    return NextResponse.json({ rows });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
