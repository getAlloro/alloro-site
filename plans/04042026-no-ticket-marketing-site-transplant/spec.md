# Marketing Site Transplant — Sandbox → alloro-site

## Why
The sandbox branch of the alloro repo contains a fully-built marketing site (9 pages + 3 blog posts + shared layout components) that belongs in the public-facing alloro-site repo. Extracting it lets the site be developed and deployed independently.

## What
All marketing pages and components are copied from the `sandbox` branch of the alloro repo into alloro-site, API calls are adapted to target the correct external domains, routing is wired, and old pages are marked deprecated. alloro-site gets a new commit with the complete marketing site running as-is.

## Context

**Source branch:** `sandbox` @ `a19ec285` (confirmed up to date with origin)

**Files extracted from sandbox:**
- `frontend/src/api/tracking.ts`
- `frontend/src/components/marketing/BlogEmailCapture.tsx`
- `frontend/src/components/marketing/MarketingFooter.tsx`
- `frontend/src/components/marketing/MarketingHeader.tsx`
- `frontend/src/components/marketing/MarketingLayout.tsx`
- `frontend/src/pages/marketing/AboutPage.tsx`
- `frontend/src/pages/marketing/Blog.tsx`
- `frontend/src/pages/marketing/HomePage.tsx`
- `frontend/src/pages/marketing/HowItWorks.tsx`
- `frontend/src/pages/marketing/PricingPage.tsx`
- `frontend/src/pages/marketing/ProductPage.tsx`
- `frontend/src/pages/marketing/RisePage.tsx`
- `frontend/src/pages/marketing/Story.tsx`
- `frontend/src/pages/marketing/WhoItsFor.tsx`
- `frontend/src/pages/marketing/blog/GoogleBusinessProfileScore.tsx`
- `frontend/src/pages/marketing/blog/TheSecondJobProblem.tsx`
- `frontend/src/pages/marketing/blog/WhyYourCompetitorKeepsShowingUp.tsx`

**Destination repo:** `~/Desktop/alloro-site`
- Already has: `react-router-dom`, `lucide-react`, `framer-motion`, Vite + React + TS
- Runs locally at `localhost:5050`
- No existing `src/api/` dir

**Existing pages (kept, marked deprecated):**
- `src/pages/Home.tsx` — old component-based homepage
- `src/pages/About.tsx` — old about page

**External service URLs:**
- API backend: `https://app.getalloro.com/api` (dev: proxied via Vite → `localhost:3000`)
- Audit/checkup tool: `https://audit.getalloro.com`
- Marketing site canonical base: `https://getalloro.com`

## Constraints

**Must:**
- Preserve all copied files byte-for-byte except for the adaptations listed in T3
- Keep old pages with `@deprecated` JSDoc — do not delete
- Use env vars for all external URLs
- Vite proxy must route `/api` → `localhost:3000` in dev so local testing works

**Must not:**
- Modify any alloro repo (sandbox branch or otherwise)
- Add new npm dependencies
- Refactor or clean up files beyond what's listed
- Delete any existing alloro-site files

**Out of scope:**
- Foundation page (`/foundation`) — nav link becomes external `<a>` to `app.getalloro.com/foundation`
- Backend CORS configuration (alloro-site calling app.getalloro.com needs CORS headers on the backend — separate concern)
- Deployment / DNS config

## Risk

**Level:** 2

**Risks identified:**
- `MarketingHeader` imports `getPriorityItem` (hooks/useLocalStorage) and `isSuperAdminEmail` (constants/superAdmins) — neither exists in alloro-site, and cross-domain localStorage is inaccessible anyway → **Mitigation:** Strip auth-detection logic from header entirely; always render unauthenticated state ("Free Checkup")
- `navigate('/checkup')` in `HomePage.tsx` uses react-router which stays within the site → **Mitigation:** Replace with `window.location.href` pointing to `audit.getalloro.com`
- `/api/*` fetch calls are relative (work in alloro app via same-origin proxy) but will 404 on a standalone site → **Mitigation:** `VITE_API_BASE` env var + Vite dev proxy

## Tasks

### T1: Extract marketing files from sandbox branch
**Do:** Read all 17 source files from `alloro` repo sandbox branch and write to alloro-site under the same relative structure (`src/api/`, `src/pages/marketing/`, `src/components/marketing/`). Files copied verbatim — no edits yet.
**Files:** `src/api/tracking.ts`, `src/pages/marketing/*.tsx`, `src/pages/marketing/blog/*.tsx`, `src/components/marketing/*.tsx`
**Verify:** All 17 files exist in alloro-site at the correct paths

### T2: Create API config + env setup + Vite proxy
**Do:**
- Create `src/api/config.ts` exporting `API_BASE` (`import.meta.env.VITE_API_BASE ?? ""`) and `AUDIT_BASE` (`import.meta.env.VITE_AUDIT_BASE ?? "https://audit.getalloro.com"`)
- Create `.env.example` with `VITE_API_BASE=https://app.getalloro.com` and `VITE_AUDIT_BASE=https://audit.getalloro.com`
- Create `.env.local` with `VITE_API_BASE=` (empty — proxy handles it in dev) and `VITE_AUDIT_BASE=http://localhost:5173` (or leave as prod URL for local testing)
- Update `vite.config.ts`: add `server.proxy` → `/api` proxied to `http://localhost:3000`
**Files:** `src/api/config.ts`, `.env.example`, `.env.local`, `vite.config.ts`
**Verify:** `vite.config.ts` has proxy block; `.env.example` committed; `.env.local` in `.gitignore`

### T3: Adapt copied files for alloro-site context
**Do:**
1. `src/api/tracking.ts` — replace `fetch("/api/checkup/track", ...)` with `fetch(\`${API_BASE}/api/checkup/track\`, ...)`; import `API_BASE` from `./config`
2. `src/pages/marketing/HomePage.tsx` — replace `fetch("/api/checkup/geo", ...)` and `fetch("/api/places/autocomplete", ...)` with `API_BASE`-prefixed URLs; replace both `navigate(\`/checkup?...\`)` calls with `window.location.href = \`${AUDIT_BASE}/checkup?...\``; remove `useNavigate` import if unused after change; import both from `../api/config` (adjusted path)
3. `src/components/marketing/BlogEmailCapture.tsx` — prefix `/api/checkup/email` fetch with `API_BASE`; import from `../api/config`
4. `src/components/marketing/MarketingHeader.tsx` — remove `getPriorityItem` and `isSuperAdminEmail` imports; remove auth-state variables and conditional rendering; always render "Free Checkup" CTA as `<a href={AUDIT_BASE}>` (not `<Link>`); change `/foundation` nav entry to `<a href="https://app.getalloro.com/foundation">`; import `AUDIT_BASE` from `../api/config`
5. `src/components/marketing/MarketingLayout.tsx` — no fetch calls; no changes needed (already has `BASE_URL = "https://getalloro.com"` hardcoded which is correct)
**Files:** `src/api/tracking.ts`, `src/pages/marketing/HomePage.tsx`, `src/components/marketing/BlogEmailCapture.tsx`, `src/components/marketing/MarketingHeader.tsx`
**Verify:** `grep -r "/api/" src/pages/marketing src/components/marketing src/api` returns no bare `/api/` fetch calls; no `getPriorityItem` or `isSuperAdminEmail` references

### T4: Wire App.tsx routes + deprecate old pages
**Do:**
- Add `@deprecated` JSDoc comment block to top of `src/pages/Home.tsx` and `src/pages/About.tsx`
- Update `src/App.tsx`: import and add routes for all 9 marketing pages + 3 blog posts; `/` → `marketing/HomePage`; `/about` → `marketing/AboutPage`; keep `/terms`, `/privacy`, `/alloro-protect`, `/success` unchanged
- New routes: `/how-it-works`, `/pricing`, `/product`, `/rise`, `/story`, `/who-its-for`, `/blog`, `/blog/google-business-profile-score`, `/blog/the-second-job-problem`, `/blog/why-your-competitor-keeps-showing-up`
**Files:** `src/App.tsx`, `src/pages/Home.tsx`, `src/pages/About.tsx`
**Verify:** `App.tsx` has 13 new route entries; old pages have deprecation comments

### T5: TypeScript verification
**Do:** Run `npx tsc --noEmit` in alloro-site; fix any errors introduced by this work
**Files:** any files with TS errors
**Verify:** `npx tsc --noEmit` exits 0

## Done
- [ ] `npx tsc --noEmit` passes
- [ ] Manual: `npm run dev` — `localhost:5050/` loads new homepage
- [ ] Manual: `localhost:5050/blog` loads blog index
- [ ] Manual: `localhost:5050/how-it-works` loads page
- [ ] No existing routes broken (`/terms`, `/privacy`, `/alloro-protect`, `/success`)
- [ ] No bare `/api/` fetch calls in transplanted files
- [ ] `.env.local` not committed; `.env.example` is committed
