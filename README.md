# ZSleep Landing Page

This is a [Next.js](https://nextjs.org) landing page for the ZSleep sleep tracking and meditation app.

## Features

- Beautiful, responsive landing page with sleep app content
- Privacy Policy page
- Terms of Service page
- Contact form with email functionality
- Mobile-friendly design with Tailwind CSS
- Dark theme with blue/cyan gradient branding

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email (Contact Form)

The contact form requires SMTP configuration to send emails. Follow these steps:

#### Copy the environment template:
```bash
cp .env.example .env.local
```

#### Configure for ProtonMail (recommended):
If using ProtonMail:
1. Go to account settings and generate an app-specific password
2. Update `.env.local`:
```
SMTP_HOST=smtp.protonmail.com
SMTP_PORT=587
SMTP_USER=your-email@protonmail.com
SMTP_PASS=your-app-password
SMTP_SECURE=false
```

#### Configure for Gmail:
If using Gmail:
1. Enable 2-factor authentication
2. Generate an app password at https://myaccount.google.com/apppasswords
3. Update `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_SECURE=false
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `app/page.tsx` - Home/landing page
- `app/privacy/page.tsx` - Privacy Policy
- `app/terms/page.tsx` - Terms of Service
- `app/contact/page.tsx` - Contact form
- `app/api/send-email/route.ts` - Email API endpoint

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Required variables in `.env.local`:
- `SMTP_HOST` - SMTP server address
- `SMTP_PORT` - SMTP port (587 for TLS, 465 for SSL)
- `SMTP_USER` - Email address for sending
- `SMTP_PASS` - Email password or app password
- `SMTP_SECURE` - Boolean (true for 465, false for 587)

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel project settings
4. Deploy

### Other Platforms
For deployment on other platforms, ensure:
- Node.js 18+ is available
- Environment variables are set
- Build command: `npm run build`
- Start command: `npm start`

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework
- [Tailwind CSS 4](https://tailwindcss.com) - Styling
- [Lucide React](https://lucide.dev) - Icons
- [Nodemailer](https://nodemailer.com) - Email sending

## Notes

- The contact form sends emails to `kaitoteam@proton.me`
- Users also receive a confirmation email
- Input validation is performed on both client and server
- All email content is HTML-formatted with professional styling
