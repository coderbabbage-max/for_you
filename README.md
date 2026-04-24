# For You — Four Months

A small, romantic React experience: soft motion, gentle gradients, and pages meant to be read slowly.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for sharing

```bash
npm run build
npm run preview
```

The `dist/` folder is static — you can host it on any static host (Netlify, Vercel, GitHub Pages, etc.).

## Optional background music

Add an audio file named **`music.mp3`** in the **`public/`** folder. A toggle appears in the top-right when the file loads successfully. Browsers may require a user tap before audio plays; use the toggle after entering the site.

## Replace placeholder photos

Edit **`src/data/memories.js`**: set each `image` to your own paths (for example `/us-beach.jpg` for files you add under `public/`).

## Stack

- React (function components) + Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- canvas-confetti
