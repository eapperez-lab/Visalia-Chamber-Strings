# Visalia Chamber Strings Website

React + Vite website for Visalia Chamber Strings.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL Vite gives you, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Use these defaults:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

## Important replacements

In `src/main.jsx`, replace:

```js
const LUDUS_TICKET_URL = 'https://your-ludus-ticket-link.com';
const CONTACT_EMAIL = 'hello@visaliachamberstrings.org';
```

with the client's real Ludus ticket URL and email address.

## Brand assets

Logo files live in `/public`:

- `vcs-green-logo.jpeg`
- `vcs-red-logo.png`

## Recommended next additions

- Add real musician headshots
- Add concert venue and time
- Add actual sponsor logos
- Add an embedded Ludus ticket widget or ticket link
- Add a donation/sponsorship form
