# Projects section — design spec

## Context

The portfolio (GitHub issue #14) has no section showcasing personal projects — it was removed in a past refactor in favor of the Experiences timeline. Matthieu wants to add his iOS/Android app **Pomodeep** even though it's still in closed beta, to show current, active work alongside the professional experience timeline.

Pomodeep details (sourced from the private `Dubmatth/Pomodeep` repo and its live landing page `pomodeep.app`):

- Cross-platform Pomodoro + task management app (React Native/Expo, Node.js/Express backend, PostgreSQL/Prisma, JWT auth)
- Tagline: "Finally finish what you start."
- Status: closed beta (invite-only) for iOS and Android
- Public landing page with a beta signup form: `https://pomodeep.app`
- Real app icon exists in the repo (`FRONT/assets/images/app-icon-1024x1024.png`) and is visually consistent with the portfolio's dark/gradient theme — confirmed to be the current icon (the one on the landing page is outdated per Matthieu)

## Goals

- Add a "Projects" section to the single-page portfolio, positioned between Experiences and Skills in both page layout and nav.
- Showcase Pomodeep with enough detail to be credible (description, tech stack, status, link) without overstating its availability (it's beta, not shipped).
- Keep the data structure scalable so future projects can be appended without redesigning the section.

## Non-goals

- No project filtering/sorting UI (removed from the site previously as a fabricated feature — not reintroducing it).
- No screenshots/carousel — a single icon is enough for one project; can be revisited if/when more projects are added.

## Data model

New export in `src/data/portfolio.js`:

```js
export const projects = [
  {
    id: 1,
    name: "Pomodeep",
    tagline: "Finally finish what you start.",
    description:
      "A Pomodoro-based productivity app combining a smart timer, task management, focus sounds and statistics — built cross-platform for iOS and Android.",
    status: "Closed Beta",
    link: "https://pomodeep.app",
    technologies: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
];
```

Icon is imported directly in the component (like `About.js` does for the profile photo), not stored as a data field, since it's a static asset per project for now: `src/assets/pomodeep-icon.png` (256×256, resized from the repo's 1024×1024 source).

## Component

New `src/components/Projects.js`, following the existing section component pattern (`Experiences.js`/`Skills.js`): receives a `projectsRef` and `isLoaded` prop, wrapped in a `<section>` with the same gradient `<h2>` heading style.

Layout: responsive grid (`grid md:grid-cols-2 gap-8`), one card per project, using the same card shell as other sections (`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10`). A single project today renders as one card in a two-column grid — acceptable and scales cleanly when a second project is added later.

Card contents, top to bottom:
1. Icon (rounded, ~64px) + name + status pill badge, laid out horizontally. Status pill uses an amber/yellow accent (`bg-amber-500/10 text-amber-300 border-amber-500/20`) to read as "in progress" rather than the purple used for tech tags, avoiding confusion with completed work.
2. Tagline, italic, purple-300.
3. Description paragraph, same style as Experience's `context` text.
4. Technology chips, reusing the exact pill style from `Experiences.js`.
5. Link row: `<a href={project.link} target="_blank" rel="noopener noreferrer">` styled as a text link with a lucide `ExternalLink` icon, reading "Visit pomodeep.app".

## Integration points

- `src/components/ModernPortfolio.js`: add `projectsRef`, add to the `sections` array used by scroll-spy (between `experiences` and `skills`), render `<Projects projectsRef={projectsRef} isLoaded={isLoaded} />` between `<Experiences />` and `<Skills />`.
- `src/data/portfolio.js`: add `"projects"` to `navItems` array between `"experiences"` and `"skills"`.
- `src/components/Navigation.js` and mobile menu: no changes needed — both already map over `navItems` generically.

## Testing

Extend `src/tests/App.test.js`'s existing "renders all navigation items" test to include "Projects" in the expected list (currently hardcodes `['Home', 'About', 'Experiences', 'Skills', 'Contact']`).

## Open questions / risks

None outstanding — all prior open questions (icon choice, nav position, link behavior) were resolved with the user before writing this spec.
