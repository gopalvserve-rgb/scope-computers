import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { sql, ensureTables } from '@/lib/db';

export const runtime = 'nodejs';

/**
 * One-time admin bootstrap.
 * Hit GET /api/auth/setup to seed the INITIAL_ADMIN_EMAIL from env as the first admin.
 * It will only create a user if none exists yet, so this endpoint is safe.
 */
export async function GET() {
  try {
    await ensureTables();
    const { rows: existing } = await sql`SELECT COUNT(*)::int AS c FROM admin_users`;
    if (existing[0].c > 0) {
      return NextResponse.json({ ok: false, message: 'Admin already exists. Setup not needed.' });
    }

    const email = process.env.INITIAL_ADMIN_EMAIL;
    const password = process.env.INITIAL_ADMIN_PASSWORD;
    const name = process.env.INITIAL_ADMIN_NAME || 'Administrator';

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Set INITIAL_ADMIN_EMAIL and INITIAL_ADMIN_PASSWORD in environment variables.' },
        { status: 400 },
      );
    }

    const hash = await bcrypt.hash(password, 10);
    await sql`INSERT INTO admin_users (email, password_hash, name) VALUES (${email}, ${hash}, ${name})`;

    return NextResponse.json({
      ok: true,
      message: `Admin created: ${email}. You can now log in at /admin/login. Remove INITIAL_ADMIN_PASSWORD from env after first login.`,
    });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}
