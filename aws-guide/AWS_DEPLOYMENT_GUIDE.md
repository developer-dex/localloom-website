# LocalLoom Website — AWS Deployment Guide

## Architecture Overview

```
GoDaddy DNS → CloudFront (CDN + HTTPS) → S3 Bucket (static files)
                                            ↓
                                    Next.js Static Export (HTML/CSS/JS)
```

> **What is this?** Your marketing website is a Next.js app configured for static export. `next build` generates plain HTML/CSS/JS files in an `out/` folder. We host these on S3 + CloudFront — same approach as the admin panel, zero server needed.

**Estimated Monthly Cost: ~$1-3 USD**

---

## Prerequisites

1. AWS account (same one as backend/admin)
2. AWS CLI configured with `localloom` profile
3. Domain `localloom.com.au` in GoDaddy
4. Build works locally (`npm run build`)

---

## Step 1: Build the Website Locally

> I've added `output: "export"` to your `next.config.ts`. This makes Next.js generate a static `out/` folder instead of requiring a Node.js server.

```bash
cd /home/avesta/Documents/LocalLoom/localloom-website

# Install dependencies
npm install

# Build static export
npm run build
```

This creates an `out/` folder with your compiled static site.

---

## Step 2: Create S3 Bucket

### AWS Console UI Steps:

1. Go to AWS Console → **S3** → **Create bucket**
2. Bucket name: `localloom-website-prod`
3. Region: **Asia Pacific (Melbourne) ap-southeast-4**
4. Object Ownership: **ACLs disabled**
5. Block Public Access: **Uncheck all** (CloudFront needs to read files)
   - Check the acknowledgment box
6. Bucket Versioning: **Disabled**
7. Click **Create bucket**

### Enable Static Website Hosting:

8. Click on bucket → **Properties** tab
9. Scroll to **Static website hosting** → **Edit**
10. Enable: **Enabled**
11. Index document: `index.html`
12. Error document: `404.html`
13. Click **Save changes**

### Add Bucket Policy:

14. Go to **Permissions** tab → **Bucket policy** → **Edit**
15. Paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::localloom-website-prod/*"
    }
  ]
}
```

16. Click **Save changes**

---

## Step 3: Upload Build Files to S3

```bash
aws s3 sync out/ s3://localloom-website-prod --delete --region ap-southeast-4 --profile localloom
```

---

## Step 4: Create CloudFront Distribution

### AWS Console UI Steps:

1. Go to **CloudFront** → **Create distribution**

**Step 1: Get started**

2. Distribution name: `localloom-website`
3. Description: `LocalLoom Marketing Website`
4. Distribution type: **Single website or app**
5. Domain section: **Leave empty** (GoDaddy manages DNS)
6. Click **Next**

**Step 2: Specify origin**

7. Origin type: **Amazon S3**
8. S3 origin: Click **Browse S3** → Select `localloom-website-prod`
9. Origin path: Leave empty
10. "Allow private S3 bucket access to CloudFront": **Keep checked**
11. Origin settings: **Use recommended origin settings**
12. Click **Next**

**Step 3: Enable security**

13. Select **Do not enable security protections** (saves $14/month)
14. Click **Next**

**Step 4: Review and create**

15. Review settings → Click **Create distribution**
16. Wait ~5-10 minutes for "Deployed" status
17. Note the **Distribution domain name** (e.g., `d5678xyz.cloudfront.net`)

### After Creation — Configure:

**Set Default Root Object:**

18. Click distribution → **General** tab → **Edit**
19. Default root object: `index.html`
20. Click **Save changes**

**Set up Custom Error Pages:**

21. **Error pages** tab → **Create custom error response**:
    - HTTP error code: **403** → Response page: `/index.html` → HTTP response: **200**
22. Create another for **404** → Response page: `/404.html` → HTTP response: **404**

**Add Custom Domain:**

23. **General** tab → **Edit**
24. Alternate domain name: `localloom.com.au` and `www.localloom.com.au`
25. Custom SSL certificate: Select your ACM certificate (must be in **us-east-1**)
    - If you don't have one: Request in ACM (us-east-1 region) for `localloom.com.au` + `www.localloom.com.au`
    - Validate via DNS in GoDaddy (same process as admin panel)
26. Click **Save changes**

---

## Step 5: Configure DNS in GoDaddy

1. Log in to https://dcc.godaddy.com → Click `localloom.com.au` → **DNS**
2. Add/Edit records:

**For root domain (`localloom.com.au`):**
- Since GoDaddy doesn't support CNAME on root domain, you have two options:
  - Option A: Use GoDaddy's **Forwarding** to redirect `localloom.com.au` → `www.localloom.com.au`
  - Option B: Change the existing **A record** (`@`) to point to CloudFront (use `ANAME`/`ALIAS` if GoDaddy supports it, otherwise use forwarding)

**For www subdomain:**
3. Click **Add New Record**:
   - Type: **CNAME**
   - Name: `www`
   - Value: Your CloudFront domain (e.g., `d5678xyz.cloudfront.net`)
   - TTL: **600**
4. Click **Save**

> Simplest approach: Set up `www.localloom.com.au` → CloudFront via CNAME, then forward naked `localloom.com.au` → `www.localloom.com.au` using GoDaddy's forwarding feature.

---

## Step 6: Set Up CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Website to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-southeast-4

      - name: Deploy to S3
        run: aws s3 sync out/ s3://localloom-website-prod --delete

      - name: Invalidate CloudFront cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

### Add GitHub Secrets:

Go to GitHub repo → **Settings** → **Secrets and variables** → **Actions**:

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | Your localloom-deployer access key |
| `AWS_SECRET_ACCESS_KEY` | Your secret key |
| `CLOUDFRONT_DISTRIBUTION_ID` | Website CloudFront distribution ID |

---

## Deploying Manually

```bash
cd /home/avesta/Documents/LocalLoom/localloom-website

# Build
npm run build

# Upload to S3
aws s3 sync out/ s3://localloom-website-prod --delete --region ap-southeast-4 --profile localloom

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id <distribution-id> \
  --paths "/*" \
  --profile localloom
```

---

## Cost Breakdown (Monthly)

| Service | Cost |
|---------|------|
| S3 storage (~50MB) | ~$0.01 |
| CloudFront (low traffic) | ~$0.10-1.00 |
| SSL Certificate (ACM) | $0 |
| **Total** | **~$0.12 - $1** |

---

## Summary

| Resource | Purpose |
|----------|---------|
| S3 Bucket (`localloom-website-prod`) | Stores static HTML/CSS/JS |
| CloudFront Distribution | HTTPS + CDN + fast global delivery |
| ACM Certificate (us-east-1) | Free SSL for `localloom.com.au` |
| GoDaddy CNAME | Points `www` to CloudFront |
| GitHub Actions | Auto-deploy on push to main |


---

## Future: When You Add API Calls

### Client-Side API Calls (No Changes Needed)

If your website calls the backend API from the browser (using `fetch`, `axios`, `useEffect`, React Query, etc.), the current S3 + CloudFront setup works perfectly. Just:

1. Add `NEXT_PUBLIC_API_BASE_URL` to your build environment
2. Make sure backend CORS includes `https://localloom.com.au` and `https://www.localloom.com.au`
3. That's it — browser fetches data from your API, same as the admin panel

Example:
```tsx
// This works with static export — runs in the browser
const [tradies, setTradies] = useState([]);
useEffect(() => {
  fetch('https://api.localloom.com.au/api/v1/tradies')
    .then(res => res.json())
    .then(data => setTradies(data));
}, []);
```

### Server-Side Features (Requires Migration)

If you later need:
- `getServerSideProps` / Server Components that fetch data at request time
- Next.js API routes (`/api/*`)
- ISR (Incremental Static Regeneration)
- Middleware (auth redirects, geolocation)

Then you'll need to:
1. Remove `output: "export"` from `next.config.ts`
2. Switch from S3 + CloudFront to one of these:

| Option | Cost | Best for |
|--------|------|----------|
| **AWS Amplify** | ~$5-10/mo | Easiest migration, built-in SSR support for Next.js |
| **ECS Fargate** | ~$20/mo | Full control, Docker-based |
| **EC2 (same as backend)** | $0 extra | Run on existing EC2 alongside backend |

**Recommended future path:** AWS Amplify — it's designed for Next.js, handles SSR/ISR automatically, and you just connect your GitHub repo. Migration takes ~10 minutes.

For now, the S3 + CloudFront static deployment is the cheapest and simplest option. You can add client-side API calls at any time without changing the infrastructure.
