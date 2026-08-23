# ASME Recruitment

## Local setup

1. Copy `.env.example` to `.env`.
2. Add your Supabase project URL and anon key.
3. Run:

```bash
npm install
npm run dev
```

## Supabase configuration

1. Create a Supabase project.
2. Open the SQL editor and run the migration in `supabase/task1_schema.sql`.
3. Ensure the public/anon key is used in the browser. Do not expose a service-role key.
4. Set `recruitment_settings.task1_open` to `true` or `false` to open or close Task 1.

## Task 1 testing

- Open state: set `task1_open = true` and submit a valid form.
- Closed state: set `task1_open = false` and refresh the page; the form should show a closed state and database insertion should be rejected.

## Vercel

Add the same environment variables in Vercel under Project Settings > Environment Variables:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## RLS summary

- Public users may insert valid Task 1 submissions.
- Public users may not read, update, or delete submissions.
- Public users may read the `task1_open` flag but may not modify recruitment settings.

## Important note

The current app routes still use `electronics` in the frontend, while the database requires the value `electrical`. The Task 1 submission layer normalizes that value before inserting into Supabase so the published UI remains unchanged.
