# GitHub Copilot Instructions — CodeForChange 2.0

## About This Project
**CodeForChange 2.0** is the official event website for Cloud Native Durgapur's hackathon.
Repository: `CNCF-DURGAPUR/CodeCrest2.0`

## Stack
- Next.js 15 App Router + React 19
- Tailwind CSS 4
- Motion (Framer Motion v12) via `motion/react`
- GSAP 3 for timeline/scroll animations
- React Three Fiber + Three.js + OGL for WebGL/3D
- JavaScript only (no TypeScript)

## Coding Guidelines

### Language & Syntax
- Always use **JavaScript** (`.js` / `.jsx`) — never suggest TypeScript
- Use ES modules (`import`/`export`) — no CommonJS `require()`
- Use modern JS: optional chaining, nullish coalescing, destructuring, async/await

### React & Next.js
- Use **App Router** conventions (`layout.js`, `page.js`, `loading.jsx`)
- Add `"use client"` only when hooks or browser APIs are used
- Use `next/image` for all images — never raw `<img>` tags
- Use `next/link` for internal navigation — never `<a href>`
- Lazy load 3D/WebGL components: `dynamic(() => import(...), { ssr: false })`

### Folder Conventions
| Path | Purpose |
|---|---|
| `src/app/` | Pages and layouts (App Router) |
| `src/ui/` | Reusable UI components |
| `src/app/<route>/` | Route-specific components |
| `pictures/` | Source images (imported via JS) |
| `public/` | Static assets served as-is |

### Styling
- Use **Tailwind CSS** utility classes
- Dark theme — backgrounds should be dark; use glassmorphism for cards
- Avoid inline styles except for dynamic/computed values
- Don't use CSS-in-JS libraries

### Animations
- Use `motion` from `motion/react` for declarative animations
- Use `gsap` for imperative scroll/timeline animations
- Keep transitions smooth — use easing curves

### Performance
- Memoize expensive components with `React.memo`
- Split large components into smaller ones
- Don't import entire libraries if only one utility is needed

## What Copilot Should Avoid
- Suggesting TypeScript types or `.ts`/`.tsx` files
- Using `pages/` directory structure
- Using `framer-motion` directly — use `motion/react` instead
- Adding unnecessary `useEffect` for things achievable with derived state
- Generating placeholder/lorem ipsum content — use real event-related contexts

## CI/CD Context
- **GitHub Actions**: Runs `npx next lint --dir src` + `npm run build` on push/PR to `main`
- **Vercel**: Auto-deploys on push to `main` → https://code-crest2-0.vercel.app
- Ensure all suggestions keep the build passing
