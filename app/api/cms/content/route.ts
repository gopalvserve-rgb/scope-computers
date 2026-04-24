import { NextRequest, NextResponse } from 'next/server';
import { getAllContent, setContent } from '@/lib/cms';
import { requireAdmin } from '@/lib/session';

export const runtime = 'nodejs';

export async function GET() {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ content: await getAllContent() });
}

export async function PUT(req: NextRequest) {
  const s = await requireAdmin();
  if (!s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await req.json();
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === 'string') await setContent(key, value);
  }
  return NextResponse.json({ ok: true });
}
