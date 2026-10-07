# Orchid By Huma — Production React/Vite Website

Official production website for **Orchid By Huma** ([orchidbyhuma.com](https://orchidbyhuma.com)), a luxury beauty salon and spa situated in Katy, Texas.

---

## ✦ Business Information

- **Business Name**: Orchid By Huma
- **Address**: 1105 South Mason Rd, Katy, Texas 77450
- **Primary Phone**: (281) 206-0151
- **Secondary Phone**: (713) 714-7774
- **Email**: orchbyhuma@gmail.com
- **Operating Hours**:
  - Monday – Saturday: 10:00 AM – 6:30 PM
  - Sunday: 12:00 PM – 5:00 PM
- **Google Rating**: 4.8 / 5.0 (Verified Google Reviews)

---

## ✦ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: Client-side history routing with SPA rewrites (`vercel.json`)
- **SEO & Structured Data**: Dynamic OpenGraph, Twitter Cards, Schema.org JSON-LD (BeautySalon, HairSalon, DaySpa, LocalBusiness), XML Sitemap, and Robots.txt

---

## ✦ Authentic Salon Photography Assets

All imagery uses verified photographs of Orchid By Huma:
- `spa-treatment-room.jpg` — Private clinical skincare and massage suite
- `salon-interior-hair.jpg` — Hair styling floor and styling mirrors
- `orchid-reception-salon.jpg` — Reception lounge and client welcome area
- `hair-wash-styling.jpg` — Hair wash and conditioning basins
- `facial-treatment.jpg` — Clinical HydraFacial and skincare treatments
- `hair-styling-balayage.jpg` — Dimensional balayage and highlights
- `bridal-makeup.jpg` — Luxury bridal glam and occasion styling
- `spa-wellness.jpg` — Aromatherapy massage and relaxation suite
- `hero-salon-spa.jpg` — Salon interior ambiance

---

## ✦ Pages & Routes

- `/` — Homepage (Hero, About, Categories, Photography Showcase, Signature Services, Testimonials, Katy Local Service Area, FAQs, Booking CTA)
- `/about` — About Orchid By Huma (10+ Years Experience, Philosophy, Sanitation, Team)
- `/services` — Comprehensive Services Directory & Interactive Filter Tabs
- `/services/facials-skincare` — Facials & Skincare Category Hub
- `/services/hair` — Haircut & Blowout Services Hub
- `/services/hair-color` — Balayage, Highlights & Color Hub
- `/services/threading-waxing` — Threading & Body Waxing Hub
- `/services/bridal` — Bridal & Occasion Makeup Hub
- `/services/brows-lashes` — Brows, Lash Lifts & Lamination Hub
- `/services/spa` — Spa & Massage Wellness Hub
- `/gallery` — Authentic Salon & Spa Photo Gallery with Lightbox Viewer
- `/reviews` — Verified Google Reviews (4.8 ★) & Client Testimonials
- `/pricing` — Transparent Salon Menu & Starting Prices
- `/contact` — Contact, Phone Numbers, Operating Hours & Google Map
- `/book` (or `/appointment`) — Online Appointment Booking Request Portal

---

## ✦ Deployment Guide: GitHub → Vercel

### Step 1: Push Code to GitHub
1. Initialize git (if not already done) and create your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production Orchid By Huma React website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/orchid-by-huma.git
   git push -u origin main
   ```

### Step 2: Import Repository into Vercel
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New...** → **Project**.
3. Select your `orchid-by-huma` GitHub repository.
4. Vercel automatically detects **Vite** framework settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

### Step 3: Connect Custom Domain (`orchidbyhuma.com`)
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Add `orchidbyhuma.com` and `www.orchidbyhuma.com`.
3. In your domain registrar (or DNS host), configure the DNS records as prompted by Vercel:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
4. Vercel will issue and renew free SSL certificates automatically.

---

## ✦ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build check
npm run build

# Preview production build locally
npm run preview
```
