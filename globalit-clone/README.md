# Global IT Technology - Homepage

React + Vite + Tailwind CSS v4 single-page site.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose Add New, then Project, and import the repository.
3. Keep the detected Vite settings (build command `npm run build`, output `dist`) and press Deploy.

Or with the CLI:

```bash
npm i -g vercel
vercel --prod
```

## Editing content

Company details, the services list and the stats live in `src/data.js`.
Theme colors are defined in `src/index.css` inside the `@theme` block.
