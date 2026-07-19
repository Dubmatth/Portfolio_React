# Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Projects" section to the portfolio showing Pomodeep (closed beta), positioned between Experiences and Skills.

**Architecture:** A new `projects` data array in `src/data/portfolio.js` (scalable for future entries), a new `Projects.js` section component following the existing `Experiences.js`/`Skills.js` pattern, wired into `ModernPortfolio.js` and `navItems` exactly like the other sections.

**Tech Stack:** React 19, Tailwind CSS, lucide-react icons, react-scripts test (Jest + Testing Library).

## Global Constraints

- Data model has exactly these fields: `id`, `name`, `tagline`, `description`, `status`, `link`, `technologies` — no extra fields (e.g. no `linkLabel`, no filtering/sort metadata).
- No project filtering or sorting UI.
- No screenshot carousel — a single icon per project card.
- The project icon is imported directly as a static asset in `Projects.js` (not data-driven) — acceptable since there is exactly one project today; revisit if a second project is added.
- Card visual style must reuse existing utility classes verbatim where equivalent elements already exist elsewhere (card shell from `Experiences.js`, tech pill style from `Experiences.js`) — no new one-off classes for things that already have a pattern.
- Status pill uses amber/yellow (`bg-amber-500/10 text-amber-300 border-amber-500/20`) to stay visually distinct from the purple tech-tag pills.

---

## Task 1: Add Projects data and nav entry

**Files:**
- Modify: `src/data/portfolio.js:11` (navItems array)
- Modify: `src/data/portfolio.js` (add `projects` export after the `experiences` array, which currently ends at line 84 with `];`)
- Test: `src/tests/App.test.js:11-16` (existing "renders all navigation items" test)

**Interfaces:**
- Consumes: nothing new.
- Produces: `export const projects` — an array of objects shaped `{ id: number, name: string, tagline: string, description: string, status: string, link: string, technologies: string[] }`, consumed by Task 2's `Projects.js`. `navItems` now includes `"projects"` between `"experiences"` and `"skills"`, consumed by `Navigation.js` (no changes needed there — it already maps generically over `navItems`).

- [ ] **Step 1: Write the failing test**

Edit `src/tests/App.test.js`. Change line 13 from:

```js
  ['Home', 'About', 'Experiences', 'Skills', 'Contact'].forEach((item) => {
```

to:

```js
  ['Home', 'About', 'Experiences', 'Projects', 'Skills', 'Contact'].forEach((item) => {
```

- [ ] **Step 2: Run test to verify it fails**

Run: `CI=true npx react-scripts test --watchAll=false -- App.test.js`
Expected: FAIL — `renders all navigation items` fails because no element contains the text "Projects".

- [ ] **Step 3: Add navItems entry and projects data**

In `src/data/portfolio.js`, change line 11 from:

```js
export const navItems = ["home", "about", "experiences", "skills", "contact"];
```

to:

```js
export const navItems = ["home", "about", "experiences", "projects", "skills", "contact"];
```

Then, immediately after the `experiences` array's closing `];` (currently line 84), insert:

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

- [ ] **Step 4: Run test to verify it passes**

Run: `CI=true npx react-scripts test --watchAll=false -- App.test.js`
Expected: PASS — all 5 tests pass, including "renders all navigation items". (It passes at this point because `Navigation.js` renders every entry of `navItems` regardless of whether a matching section component exists yet.)

- [ ] **Step 5: Commit**

```bash
git add src/data/portfolio.js src/tests/App.test.js
git commit -m "feat: add Projects data and nav entry"
```

---

## Task 2: Create Projects component and wire it into the page

**Files:**
- Create: `src/components/Projects.js`
- Modify: `src/components/ModernPortfolio.js`
- Test: `src/tests/App.test.js` (new test)

**Interfaces:**
- Consumes: `projects` and `navItems` from `../data/portfolio` (Task 1), `pomodeepIcon` from `../assets/pomodeep-icon.png` (already present in the repo — added during the design phase), `ExternalLink` from `lucide-react`.
- Produces: default export `Projects` — a React component with props `{ projectsRef: React.RefObject, isLoaded: boolean }`, rendering a `<section>`. Consumed by `ModernPortfolio.js`.

- [ ] **Step 1: Write the failing test**

Add this test to `src/tests/App.test.js` (after the last existing test, before the final closing of the file):

```js
test('renders the Pomodeep project', () => {
  render(<App />);
  expect(screen.getByText('Pomodeep')).toBeInTheDocument();
  expect(screen.getByText('Closed Beta')).toBeInTheDocument();
  expect(screen.getByText('Visit pomodeep.app')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `CI=true npx react-scripts test --watchAll=false -- App.test.js`
Expected: FAIL — `renders the Pomodeep project` fails because there is no `Projects` component rendering this content yet.

- [ ] **Step 3: Create the Projects component**

Create `src/components/Projects.js`:

```jsx
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import pomodeepIcon from "../assets/pomodeep-icon.png";

const Projects = ({ projectsRef, isLoaded }) => {
  return (
    <section ref={projectsRef} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">What I'm building right now</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={pomodeepIcon}
                  alt={`${project.name} icon`}
                  className="w-16 h-16 rounded-2xl shrink-0"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-purple-300 italic text-sm mt-1">{project.tagline}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-500/10 text-purple-200 rounded-full border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium transition-colors"
              >
                Visit {project.link.replace(/^https?:\/\//, "")}
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

- [ ] **Step 4: Wire Projects into ModernPortfolio**

In `src/components/ModernPortfolio.js`, make these four changes:

Change the imports block from:

```js
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
```

to:

```js
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
```

Change the refs block from:

```js
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
```

to:

```js
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
```

Change the scroll-spy `sections` array from:

```js
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "experiences", ref: experiencesRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ];
```

to:

```js
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "experiences", ref: experiencesRef },
        { id: "projects", ref: projectsRef },
        { id: "skills", ref: skillsRef },
        { id: "contact", ref: contactRef },
      ];
```

Change the `scrollToSection` refs map from:

```js
    const refs = {
      home: heroRef,
      about: aboutRef,
      experiences: experiencesRef,
      skills: skillsRef,
      contact: contactRef,
    };
```

to:

```js
    const refs = {
      home: heroRef,
      about: aboutRef,
      experiences: experiencesRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };
```

Change the JSX render block from:

```jsx
      <Hero heroRef={heroRef} isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <About aboutRef={aboutRef} />
      <Experiences experiencesRef={experiencesRef} isLoaded={isLoaded} />
      <Skills skillsRef={skillsRef} isLoaded={isLoaded} />
      <Contact contactRef={contactRef} />
```

to:

```jsx
      <Hero heroRef={heroRef} isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <About aboutRef={aboutRef} />
      <Experiences experiencesRef={experiencesRef} isLoaded={isLoaded} />
      <Projects projectsRef={projectsRef} isLoaded={isLoaded} />
      <Skills skillsRef={skillsRef} isLoaded={isLoaded} />
      <Contact contactRef={contactRef} />
```

- [ ] **Step 5: Run test to verify it passes**

Run: `CI=true npx react-scripts test --watchAll=false -- App.test.js`
Expected: PASS — all 6 tests pass, including "renders the Pomodeep project".

- [ ] **Step 6: Run the full build to confirm no compile errors**

Run: `CI=true npm run build`
Expected: "Compiled successfully." with no warnings about the new files.

- [ ] **Step 7: Commit**

```bash
git add src/components/Projects.js src/components/ModernPortfolio.js src/tests/App.test.js
git commit -m "feat: add Projects section showing Pomodeep

Fixes #14"
```
