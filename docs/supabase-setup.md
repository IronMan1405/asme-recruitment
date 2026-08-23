# Supabase setup for Task 1 submissions

## 1. Create the Supabase project

1. Create a new Supabase project in the Supabase dashboard.
2. Open the SQL editor and run the migration in `supabase/task1_schema.sql`.
3. In Project Settings > API, copy the project URL and the anon/public key.

## 2. Environment variables

Create a `.env` file in the project root with:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Use the public/anon key only. Do not add a service-role key to a Vite frontend.

## 3. Run locally

```bash
npm install
npm run dev
```

## 4. Test Task 1 open state

1. In Supabase, set `recruitment_settings.task1_open = true`.
2. Visit a Task 1 page and submit a valid form.
3. Confirm the new record appears in `task1_submissions`.

## 5. Test Task 1 closed state

1. Set `recruitment_settings.task1_open = false`.
2. Refresh the page and try the submission form.
3. The form should show a clear closed state and the insert trigger should reject the database write.

## 6. Change the open/closed state

```sql
update public.recruitment_settings
set task1_open = true;
```

or:

```sql
update public.recruitment_settings
set task1_open = false;
```

## 7. High-level RLS behavior

- `task1_submissions`: public inserts are allowed for valid Task 1 submissions.
- `task1_submissions`: public reads, updates, and deletes are denied.
- `recruitment_settings`: public reads are allowed for the single `task1_open` flag.
- `recruitment_settings`: public writes are denied.

## 8. Vercel configuration

In Vercel, add the same environment variables under Project Settings > Environment Variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Deploy the app after saving those values.
