import { NextRequest, NextResponse } from 'next/server';
import { sql, ensureTables } from '@/lib/db';
import { requireAdmin } from '@/lib/session';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    await ensureTables();
    const body = await req.json();

    const firstName = String(body.firstName || '').trim();
    const surname = String(body.surname || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const fatherName = String(body.fatherName || '').trim();
    const motherName = String(body.motherName || '').trim();
    const address = String(body.address || '').trim();
    const qualification = String(body.qualification || '').trim();
    const course = String(body.course || '').trim();
    const joiningDate = body.joiningDate ? String(body.joiningDate) : null;

    if (!firstName || !surname || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sql`
      INSERT INTO admissions (first_name, surname, email, phone, father_name, mother_name, address, qualification, course, joining_date)
      VALUES (${firstName}, ${surname}, ${email}, ${phone}, ${fatherName}, ${motherName}, ${address}, ${qualification}, ${course}, ${joiningDate})
    `;

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Admission POST error:', err);
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await ensureTables();
    const { rows } = await sql`SELECT * FROM admissions ORDER BY created_at DESC LIMIT 500`;
    return NextResponse.json({ rows });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Server error' }, { status: 500 });
  }
}
