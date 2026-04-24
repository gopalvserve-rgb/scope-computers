# Scope Computers — Official Website

Next.js 14 + Vercel Postgres + iron-session (admin auth).
Built for deployment on Vercel via GitHub.

## What's included

**Public site** (at `/`)
- Home with hero, featured course, popular courses, testimonials, stats, events, blog, CTA
- About (Director profile, Who We Are, facilities)
- Courses (categorized list of all programs)
- 7 course detail articles (`/courses/[slug]`)
- Admission (form with 12+ fields, saves to DB)
- Contact (form + 5 city offices)
- Syllabus (PDF download list)
- Placement (placed students, open roles, resume upload)
- Faculty (13 instructors)
- Privacy, Terms, 404 page
- Site-wide Inquiry pop-up

**Admin panel** (at `/admin`)
- Secure login with session cookies (iron-session + bcrypt)
- Dashboard with counts and recent submissions
- Full lists for Admissions, Contacts, Inquiries, Resumes
- CSV export for every table
- Logout

---

## Quick Deployment Guide (GitHub + Vercel)

### Step 1 — Push to GitHub

From the project root:

```bash
git init
git add .
git commit -m "Initial commit — Scope Computers site"
# Create a new empty repo on github.com called 'scope-computers' (or any name)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scope-computers.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to your Vercel dashboard → **Add New → Project**
2. Click **Import** next to your `scope-computers` repo
3. Framework will auto-detect as **Next.js** — leave defaults
4. **Don't click Deploy yet** — we need to set env vars first (next step)

### Step 3 — Add Vercel Postgres Database

1. On the project's Vercel page, go to the **Storage** tab
2. Click **Create Database → Postgres**
3. Name it (e.g. `scope-computers-db`), pick a region close to your users (e.g. Mumbai for India), and click Create
4. Click **Connect to Project** — Vercel will auto-inject all the `POSTGRES_*` env vars

### Step 4 — Set the remaining environment variables

Project → **Settings → Environment Variables** and add:

| Name | Value |
|------|-------|
| `SESSION_SECRET` | A random 48+ character string. Generate one: `openssl rand -base64 48` |
| `INITIAL_ADMIN_EMAIL` | The email you want to use to log in (e.g., `admin@myscopecomputers.com`) |
| `INITIAL_ADMIN_PASSWORD` | A strong password you'll use for first login |
| `INITIAL_ADMIN_NAME` | Display name shown in the admin header (e.g., `Administrator`) |

Make sure every variable is enabled for **Production**, **Preview**, and **Development**.

### Step 5 — Deploy

Go to **Deployments** tab and click **Redeploy**. First deploy takes ~60 seconds.

### Step 6 — Create the first admin user

Once the deploy finishes, open this URL **once** in your browser:

```
https://YOUR-SITE.vercel.app/api/auth/setup
```

This reads `INITIAL_ADMIN_EMAIL` / `INITIAL_ADMIN_PASSWORD` and creates the first admin. Running it again is safe — it will only seed if no admin exists yet.

You should see:
```json
{"ok": true, "message": "Admin created: admin@... — You can now log in at /admin/login. Remove INITIAL_ADMIN_PASSWORD from env after first login."}
```

### Step 7 — Log into the admin panel

Visit `https://YOUR-SITE.vercel.app/admin/login` and sign in with the credentials you set.

✅ **You're live.** Form submissions from the public site will now appear in the admin panel in real time.

### Step 8 — Security hardening (recommended)

After your first login, **remove `INITIAL_ADMIN_PASSWORD`** from Vercel env vars so it's not stored in plain text. You can always re-add it later if you need to seed another account.

---

## Local Development

1. Clone the repo
2. `cp .env.example .env.local` and fill in all values
3. You need a Postgres connection for local dev too — easiest is to use the **same** Vercel Postgres DB and `vercel env pull .env.local` after logging in with the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel link      # link this folder to your Vercel project
   vercel env pull .env.local
   ```
4. `npm install`
5. `npm run dev`
6. Open http://localhost:3000

---

## Custom Domain

1. Buy your domain (Namecheap, GoDaddy, etc.) — e.g. `myscopecomputers.com`
2. In Vercel → Project → **Settings → Domains** → add your domain
3. Vercel will show you DNS records to add at your registrar
4. After DNS propagates (usually 5–30 min) your site goes live on the domain with a free SSL cert

---

## Adding Syllabus PDFs

Drop your PDF files in `/public/downloads/` using the filenames defined in `lib/site-data.ts` (e.g. `new_AutoCAD_Syllabus-1.pdf`). They'll be served at `/downloads/<filename>`.

## Uploading Candidate Photos / Resumes to Real Storage

The form UI accepts file uploads but the demo API only saves metadata (filename). To store actual files:

1. Enable **Vercel Blob Storage** (Storage tab → Create → Blob)
2. `npm install @vercel/blob`
3. Update `app/api/admissions/route.ts` and `app/api/resumes/route.ts` to accept `multipart/form-data`, call `put()` from `@vercel/blob`, and store the returned URL in `photo_url` / `file_url`.

---

## File Structure

```
scope-computers/
├── app/
│   ├── layout.tsx                  # Root layout (html/body/fonts)
│   ├── not-found.tsx               # 404 page
│   ├── globals.css                 # Tailwind + custom styles
│   ├── (site)/                     # Public site route group
│   │   ├── layout.tsx              # Header + Footer + InquiryPopup
│   │   ├── page.tsx                # Home
│   │   ├── about/
│   │   ├── courses/
│   │   │   ├── page.tsx            # Course list
│   │   │   └── [slug]/             # 7 detail articles
│   │   ├── admission/
│   │   ├── contact/
│   │   ├── syllabus/
│   │   ├── placement/
│   │   ├── faculty/
│   │   ├── privacy/
│   │   └── terms/
│   ├── admin/
│   │   ├── layout.tsx              # Plain admin wrapper
│   │   ├── login/                  # Login page
│   │   └── (dashboard)/            # Authed dashboard
│   │       ├── layout.tsx          # Sidebar + auth check
│   │       ├── page.tsx            # Overview
│   │       ├── admissions/
│   │       ├── contacts/
│   │       ├── inquiries/
│   │       └── resumes/
│   └── api/
│       ├── admissions/route.ts
│       ├── contacts/route.ts
│       ├── inquiries/route.ts
│       ├── resumes/route.ts
│       └── auth/
│           ├── login/route.ts
│           ├── logout/route.ts
│           └── setup/route.ts      # One-time admin bootstrap
├── components/                     # Header, Footer, forms, table, etc.
├── lib/
│   ├── site-data.ts                # All site content (faculty, courses, offices, testimonials)
│   ├── course-articles.ts          # 7 course detail articles
│   ├── db.ts                       # Vercel Postgres + schema
│   └── session.ts                  # iron-session config + helpers
├── public/
│   └── downloads/                  # Put syllabus PDFs here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── .env.example
```

## Editing Content

- **Text / offices / faculty / testimonials**: edit `lib/site-data.ts`
- **Course articles**: edit `lib/course-articles.ts`
- **Syllabus list**: edit `syllabi` array in `lib/site-data.ts`

Push to GitHub → Vercel auto-deploys.

---

## Tech Stack

- **Next.js 14** (App Router, Server Components, API routes)
- **TypeScript** + **Tailwind CSS**
- **Vercel Postgres** (`@vercel/postgres`)
- **iron-session** (secure encrypted cookies) + **bcryptjs** (password hashing)

## Support

Built for Scope Computers — institute led by IITians and PhD experts, since 1993.
