create extension if not exists pgcrypto;

create table if not exists public.task1_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  bits_id text not null,
  email text not null check (email ~* '@pilani\.bits-pilani\.ac\.in$'),
  vertical text not null check (vertical in ('software', 'electrical', 'mechanical')),
  submission_link text not null,
  notes text,
  submitted_at timestamptz not null default now()
);

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.task1_submissions'::regclass
      and conname = 'task1_submissions_email_vertical_key'
  ) then
    alter table public.task1_submissions
      add constraint task1_submissions_email_vertical_key unique (email, vertical);
  end if;
end $$;

create table if not exists public.recruitment_settings (
  id uuid primary key default gen_random_uuid(),
  task1_open boolean not null default true
);

create index if not exists idx_task1_submissions_vertical
  on public.task1_submissions (vertical);

create index if not exists idx_task1_submissions_submitted_at
  on public.task1_submissions (submitted_at desc);

create or replace function public.enforce_task1_open()
returns trigger
language plpgsql
security definer
as $$
declare
  current_status boolean;
begin
  select task1_open into current_status
  from public.recruitment_settings
  order by id asc
  limit 1;

  if current_status is false then
    raise exception 'Task 1 submissions are currently closed.';
  end if;

  return new;
end;
$$;

drop trigger if exists task1_submissions_open_check on public.task1_submissions;
create trigger task1_submissions_open_check
before insert on public.task1_submissions
for each row execute function public.enforce_task1_open();

create or replace function public.enforce_task1_submission_identity()
returns trigger
language plpgsql
security definer
as $$
begin
  if new.user_id is null then
    raise exception 'Authenticated user is required.';
  end if;

  if new.user_id <> auth.uid() then
    raise exception 'Submission user does not match the authenticated account.';
  end if;

  if lower(new.email) <> lower(coalesce((auth.jwt() ->> 'email'), '')) then
    raise exception 'Submission email must match the authenticated Google account.';
  end if;

  if new.email !~* '@pilani\.bits-pilani\.ac\.in$' then
    raise exception 'Only BITS Google accounts are allowed.';
  end if;

  return new;
end;
$$;

drop trigger if exists task1_submission_identity_check on public.task1_submissions;
create trigger task1_submission_identity_check
before insert or update on public.task1_submissions
for each row execute function public.enforce_task1_submission_identity();

insert into public.recruitment_settings (task1_open)
select true
where not exists (select 1 from public.recruitment_settings);

alter table public.task1_submissions enable row level security;
alter table public.recruitment_settings enable row level security;

create policy "Authenticated users can insert task1 submissions"
on public.task1_submissions
for insert
with check (
  auth.uid() is not null
  and user_id = auth.uid()
  and name is not null
  and btrim(name) <> ''
  and bits_id is not null
  and btrim(bits_id) <> ''
  and email is not null
  and lower(email) = lower(coalesce((auth.jwt() ->> 'email'), ''))
  and email ~* '@pilani\.bits-pilani\.ac\.in$'
  and vertical in ('software', 'electrical', 'mechanical')
  and submission_link is not null
  and submission_link ~* '^https?://'
);

create policy "Public cannot read task1 submissions"
on public.task1_submissions
for select
using (false);

create policy "Public cannot update task1 submissions"
on public.task1_submissions
for update
using (false)
with check (false);

create policy "Public cannot delete task1 submissions"
on public.task1_submissions
for delete
using (false);

create policy "Public can read recruitment status"
on public.recruitment_settings
for select
using (true);

create policy "Public cannot insert recruitment settings"
on public.recruitment_settings
for insert
with check (false);

create policy "Public cannot update recruitment settings"
on public.recruitment_settings
for update
using (false)
with check (false);

create policy "Public cannot delete recruitment settings"
on public.recruitment_settings
for delete
using (false);
