# E-CAP NGO Website - Next.js Application

## 🎯 Overview

Modern, responsive website for **E-CAP (என்னும் வழிகாட்டி)** - Employment Career Awareness Program, a non-profit organization dedicated to guiding students towards successful careers.

### Key Features

- ✨ **Modern Design**: Distinctive warm humanitarian aesthetic with earthy tones
- 🎨 **Responsive**: Fully mobile-responsive design
- ⚡ **Performance**: Built with Next.js 14 for optimal performance
- 🎭 **Animations**: Smooth Framer Motion animations
- 📧 **Contact Form**: EmailJS integration for contact submissions
- ♿ **Accessible**: WCAG compliant, semantic HTML
- 🌐 **Bilingual**: English and Tamil language support
- 🎨 **Tailwind CSS**: Utility-first styling with custom design system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- EmailJS account (for contact form functionality)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd ecap-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Then update the EmailJS credentials in `.env`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### EmailJS Setup

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create an Email Service**
   - Go to Email Services
   - Add Email Service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create an Email Template**
   - Go to Email Templates
   - Create New Template
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Organization: {{organization}}
     
     Message:
     {{message}}
     ```
   - Note the Template ID

4. **Get your Public Key**
   - Go to Account > General
   - Copy your Public Key

5. **Update .env file** with your IDs and key

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
ecap-nextjs/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Programs.tsx
│   │       ├── Impact.tsx
│   │       ├── Partners.tsx
│   │       ├── Team.tsx
│   │       └── Contact.tsx
│   └── hooks/                 # Custom React hooks
│       └── useInView.ts
├── public/
│   └── images/                # Static images
│       ├── partners/
│       └── team/
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Color Palette

- **Primary** (Warm Orange): Career guidance and action
- **Earth** (Warm Browns): Trust and stability
- **Ocean** (Blues): Growth and possibility
- **Coral** (Vibrant Orange-Red): Energy and impact

### Typography

- **Display**: Playfair Display (headings)
- **Body**: Commissioner (body text)
- **Accent**: Work Sans (UI elements)
- **Tamil**: Mukta Malar (Tamil text)

### Components

Custom components following the design system:
- `btn-primary` - Primary call-to-action button
- `btn-secondary` - Secondary button
- `heading-1` to `heading-4` - Heading styles
- `body-large` - Large body text
- `card-hover` - Interactive card animations

## 📝 Content Management

### Adding Images

1. Place images in `public/images/` directory
2. Use Next.js Image component for optimization:
   ```tsx
   import Image from 'next/image';
   <Image src="/images/your-image.jpg" alt="Description" width={800} height={600} />
   ```

### Updating Team Members

Edit `src/components/sections/Team.tsx`:
```tsx
const teamMembers = [
  {
    name: 'Name',
    role: 'Role',
    bio: 'Bio',
    image: '/images/team/photo.jpg',
    linkedin: 'https://linkedin.com/in/username',
    email: 'email@example.com',
  },
  // Add more members...
];
```

### Updating Programs

Edit `src/components/sections/Programs.tsx` to modify program details.

### Updating Partners

Edit `src/components/sections/Partners.tsx` to add/update partner institutions.

## 🔧 Customization

### Colors

Update `tailwind.config.ts` to modify the color scheme:
```typescript
colors: {
  primary: { ... },
  earth: { ... },
  // etc.
}
```

### Fonts

Update font imports in `src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Traditional hosting with Node.js

## 📊 Performance Optimization

- Next.js Image optimization
- Lazy loading components
- Code splitting
- Minified production build
- Static page generation where possible

## 🐛 Troubleshooting

### EmailJS not working

1. Check environment variables are set correctly
2. Verify EmailJS service is active
3. Check browser console for errors
4. Ensure template variables match your EmailJS template

### Build errors

1. Clear `.next` folder: `rm -rf .next`
2. Delete `node_modules`: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

## 📄 License

This project is created for E-CAP NGO. All rights reserved.

## 👥 Credits

- **Design & Development**: Built with modern web technologies
- **E-CAP Team**: Content and guidance
- **Open Source**: Next.js, Tailwind CSS, Framer Motion, EmailJS

## 🤝 Contributing

To contribute to this project:

1. Make changes in a separate branch
2. Test thoroughly
3. Submit changes for review
4. Ensure all environment variables are documented

## 📞 Support

For technical support or questions:
- Email: ecapofficial@outlook.com
- Phone: +91 97864 06411

---

**Built with ❤️ for E-CAP - Empowering Students, Building Futures**

மாற்றத்திற்கான விதையாய் நாம் இருப்போம் (Let's be the seeds of change)
