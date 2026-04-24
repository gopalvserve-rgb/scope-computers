import { SessionOptions, getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export type SessionData = {
  userId?: number;
  email?: string;
  name?: string;
  isLoggedIn?: boolean;
};

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || 'dev-only-insecure-password-min-32-characters-long',
  cookieName: 'scope_admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax',
  },
};

export async function getSession() {
  const cookieStore = cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  return session;
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return null;
  }
  return session;
}
