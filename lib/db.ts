import { sql } from '@vercel/postgres';

export { sql };

export async function ensureTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255),
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS admissions (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      surname VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      father_name VARCHAR(150),
      mother_name VARCHAR(150),
      address TEXT,
      qualification VARCHAR(255),
      course VARCHAR(255),
      joining_date DATE,
      photo_url TEXT,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS inquiries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      phone VARCHAR(50),
      email VARCHAR(255),
      message TEXT,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS resumes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      role VARCHAR(255),
      filename VARCHAR(255),
      file_url TEXT,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;
}
