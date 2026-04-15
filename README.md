# RNLI CDIO Digital Sovereignty Strategy — An independent thought experiment

A thought experiment by [Mark Simpkins of Geekyoto](https://www.geekyoto.com/) exploring possible directions for the RNLI's Data and Technology strategy. Deployable to Vercel in under 2 minutes. Pure HTML/CSS/JS — no build step required.

## Structure

```
rnli-cdio-microsite/
├── vercel.json          # Vercel routing config (clean URLs)
├── index.html           # Homepage / landing
├── assets/
│   ├── style.css        # Shared design system
│   └── nav.js           # Navigation component
└── pages/
    ├── roadmap.html     # 24-month delivery roadmap
    ├── sovereignty.html # Digital sovereignty & Linux migration
    ├── maritime.html    # Maritime comms, GNSS & eLoran
    ├── civic-commons.html  # Civic data commons
    ├── open-data.html   # Open data strategy
    ├── fundraising.html # Fundraising analytics & propensity model
    ├── cast.html        # CAST integration
    └── annexes.html     # Technical annexes A–E
```

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# From the project directory
cd rnli-cdio-microsite
vercel

# Follow the prompts. Select:
# - Set up and deploy: Y
# - Which scope: your account
# - Link to existing project: N
# - Project name: rnli-cdio-strategy (or your choice)
# - Directory: ./  (current)
# - Override settings: N
```

Your site will be live at `https://rnli-cdio-strategy.vercel.app` (or your chosen name).

### Option 2: GitHub + Vercel (recommended for ongoing updates)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repository
4. Framework Preset: **Other**
5. Root Directory: `./` (the folder containing `vercel.json`)
6. Deploy

Vercel will auto-deploy on every push to `main`.

### Option 3: Drag and drop

Go to [vercel.com/new](https://vercel.com/new) and drag the `rnli-cdio-microsite` folder into the upload area.

## Custom domain

In Vercel Dashboard → Project → Settings → Domains, add your domain (e.g. `cdio.rnli-strategy.org.uk`).

## Pages

| URL | Content |
|-----|---------|
| `/` | Home — overview, quick navigation, OCOP alignment |
| `/roadmap` | 24-month delivery roadmap with phase structure and KPIs |
| `/sovereignty` | Digital sovereignty doctrine and Linux migration plan |
| `/maritime` | Maritime comms, FreeTAK, GNSS strategy, eLoran |
| `/civic-commons` | Civic Data Commons — four-layer architecture and legal framework |
| `/open-data` | Open data strategy — CC-BY transition and fundraising applications |
| `/fundraising` | Fundraising analytics — legacy propensity model, CiviCRM stack |
| `/cast` | CAST integration — resource mapping to every workstream |
| `/annexes` | Technical annexes A–E (eLoran, GNSS, Legal, Sovereign Stack, Threat Model) |

## Design system

Built on a maritime editorial aesthetic: dark navy base, foam and red accents, Playfair Display + Source Code Pro + Lato typography. No framework dependencies — pure CSS custom properties, responsive grid layouts, and vanilla JS navigation.

## Notes

- This is a strategy document, not an official RNLI publication
- All content is based on publicly available information and strategic analysis
- CAST references link to public CAST resources at wearecast.org.uk
- eLoran programme references sourced from UK government publications and Inside GNSS
- RNLI open data portal: data-rnli.opendata.arcgis.com

- Email: mark@geekyoto.com 
- Blog: https://www.geekyoto.com/

