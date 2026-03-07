# E-CAP NGO Website

## 🎯 Current Structure

```
ecap/
├── ecap-nextjs/        ← NEW MODERN WEBSITE (use this!)
├── images/             ← Original images (migrate to ecap-nextjs/public/images/)
├── old-site-backup/    ← Old HTML/CSS website (backup only)
├── SKILL.md            ← Design guidelines
└── README.md           ← This file
```

## ⚡ Quick Start

### Work with the NEW website:

```bash
cd ecap-nextjs
npm install
npm run dev
```

Visit http://localhost:3000

Full documentation in `ecap-nextjs/QUICKSTART.md`

## 📦 What's Where

### ✅ New Website (Active Development)
**Location**: `ecap-nextjs/`
- Modern Next.js 14 application
- TypeScript + Tailwind CSS
- EmailJS contact form
- Responsive design
- Full documentation included

### 📸 Images (To Migrate)
**Location**: `images/`
- Copy these to `ecap-nextjs/public/images/`
- See migration guide: `ecap-nextjs/MIGRATION.md`

### 🗄️ Old Website (Backup)
**Location**: `old-site-backup/`
- Legacy HTML/CSS files
- Kept for reference only
- **Do not modify these files**
- Can be deleted after successful migration

## 🚀 Next Steps

1. **Migrate Images**
   ```bash
   cp -r images/* ecap-nextjs/public/images/
   ```

2. **Configure EmailJS** (5 minutes)
   - See `ecap-nextjs/QUICKSTART.md`

3. **Test Locally**
   ```bash
   cd ecap-nextjs
   npm run dev
   ```

4. **Deploy** (when ready)
   - See `ecap-nextjs/DEPLOYMENT.md`

## 📚 Documentation

All documentation is in `ecap-nextjs/`:
- `QUICKSTART.md` - Get started in 5 minutes
- `README.md` - Full setup guide
- `MIGRATION.md` - Migrate from old site
- `DEPLOYMENT.md` - Deploy to production
- `ROADMAP.md` - Future features

## 🗑️ Cleanup (After Migration)

Once you've successfully deployed the new site, you can delete:
```bash
rm -rf old-site-backup/
```

## 📞 Support

- Email: ecapofficial@outlook.com
- Phone: +91 97864 06411

---

**Work in progress? Use the `ecap-nextjs/` folder exclusively.**
