# Zynux Deployment Guide

Two services to deploy: **zynux-cms** (Cloudflare Workers) and **zynux-website** (Cloudflare Pages).
Deploy the CMS first — you need its live URL before configuring the website.

---

## 1. Deploy CMS (zynux-cms)

### Prerequisites
- Wrangler CLI installed and logged in: `wrangler login`
- Cloudflare account with Workers, D1, and R2 enabled

### Steps

**1.1 Create the D1 database (first time only)**
```bash
wrangler d1 create zynux-db
```
Copy the returned `database_id` and update it in `wrangler.toml` if it differs from the current value.

**1.2 Create the R2 bucket (first time only)**
```bash
wrangler r2 bucket create zynux-media
```

**1.3 Run database migrations on production**
```bash
cd zynux-cms
npm run db:migrate:prod
```

**1.4 Set required secrets**
```bash
# Generate a strong random string (e.g. openssl rand -hex 32)
wrangler secret put JWT_SECRET

# Set to the deployed website URL (e.g. https://zynux.pages.dev)
# You can update this after the website is deployed
wrangler secret put CORS_ORIGINS
```

**1.5 Update wrangler.toml production env**

In `zynux-cms/wrangler.toml`, confirm the `[env.production]` block has the correct worker name:
```toml
[env.production]
name = "zynux-cms"
vars = { ENVIRONMENT = "production" }
```

**1.6 Deploy**
```bash
npm run deploy
```

Note the deployed URL shown in the output — it will look like:
`https://zynux-cms.<your-subdomain>.workers.dev`

---

## 2. Configure Website for Production (zynux-website)

Before deploying, two files need to be updated with the live CMS URL.

### 2.1 Update next.config.ts — image remote pattern

Replace the placeholder hostname with your actual deployed Worker URL:

```ts
// next.config.ts
{
  protocol: 'https',
  hostname: 'zynux-cms.<your-subdomain>.workers.dev', // ← update this
  port: '',
  pathname: '/**',
},
```

### 2.2 That's it for code changes — commit and push.

---

## 3. Deploy Website (Cloudflare Pages)

### Prerequisites
- `output: 'standalone'` in `next.config.ts` must be removed or changed to `'export'`
  for Cloudflare Pages static hosting, OR use `@cloudflare/next-on-pages` for full SSR support.
- Recommended: install the adapter and follow [Cloudflare's Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/).

### Steps

**3.1 Connect your repository in the Cloudflare Pages dashboard**
- Go to Workers & Pages → Create → Pages → Connect to Git
- Select the `zynux-website` repository

**3.2 Build settings**
| Setting | Value |
|---|---|
| Framework preset | Next.js |
| Build command | `npm run build` |
| Build output directory | `.next` |

**3.3 Set environment variables in the Pages dashboard**

| Variable | Value |
|---|---|
| `CMS_URL` | `https://zynux-cms.<your-subdomain>.workers.dev` |

> `CMS_URL` is read in `next.config.ts` at build time (for the `/cms-media` rewrite) and
> at runtime in `lib/cms/hero.ts`. Both must see it, so set it in the build environment.

**3.4 Deploy**

Trigger a deploy from the dashboard or push to your main branch.

---

## 4. Post-Deployment Checklist

- [ ] CMS admin accessible at `https://zynux-cms.<subdomain>.workers.dev/admin`
- [ ] Update `CORS_ORIGINS` secret on the CMS to the final website URL:
  ```bash
  cd zynux-cms
  wrangler secret put CORS_ORIGINS
  # enter: https://your-website.pages.dev
  ```
- [ ] Hero content created and published in the CMS admin
- [ ] Hero image uploaded via CMS media picker and saved to the hero entry
- [ ] Website homepage loads with correct heading, description, and background image from CMS
- [ ] Fallback works: temporarily set `CMS_URL` to a bad value — website should still render with fallback content

---

## Environment Variable Summary

### zynux-cms (set via `wrangler secret put`)
| Secret | Description |
|---|---|
| `JWT_SECRET` | Random secret for signing admin JWTs |
| `CORS_ORIGINS` | Website origin allowed to call the CMS API (e.g. `https://zynux.pages.dev`) |

### zynux-website (set in Cloudflare Pages dashboard)
| Variable | Description |
|---|---|
| `CMS_URL` | Full URL of the deployed CMS worker (no trailing slash) |
