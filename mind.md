# mind.md
### a record of every iteration, every attempt, every fragment of trying to capture what was inside

---

> *this document exists because before we gut everything, we preserve it.
> every version of this site was an honest attempt at expression.
> none of it was wasted.*

---

## the shape of things

This site has gone through many attempts. At the core, it was always the same question: **how do you put a mind on the internet?** Not a resume. Not a portfolio. Not a blog. The actual texture of how you think, what you believe, what you're building and why.

The answer kept changing. The question never did.

What follows is a record of the structure, content, and ideas that lived here — before the clean version begins.

---

## the keeper: three.js garden

The one thing that never gets removed. The 3D interactive garden scene lives at `/garden`.

**What it is:**
A Three.js scene rendered in WebGL. When you arrive, you're in a garden. There are yellow roses (15-25), trees, bushes, wildflowers, grass. Butterflies float. Pollen drifts. A sky shifts between warm daylight and deep navy night based on your theme.

At the center: **a red lighthouse.** (#C41E3A — cardinal red with white bands.) A beacon light rotates at 0.5–1.0 rad/sec. It pulses. Butterflies orbit it in sine-wave flight paths. Stars (3,333 of them) appear in dark mode. Mountains and ocean form the horizon.

**Why the lighthouse:**
It wasn't accidental. A lighthouse guides ships. It stays put while everything moves around it. It combines warning (red) with warmth. It is the architectural embodiment of: *I am here. I am steady. I can see you.*

**Technical details that matter:**
- Sky uses custom shader material (dynamic color switching between `#87CEEB` / `#1a1a2e`)
- Responsive canvas, pixel ratio limited at 2x for performance
- Mobile: reduced particles, simplified geometries
- Instanced meshes for repeated plant geometry
- Scene elements: `Lighthouse.ts`, `Plants.ts`, `Particles.ts`, `Mountains.ts`, `Ocean.ts`
- Custom hooks: `useThreeSetup.ts`
- Camera does subtle orbital drift

**The plan going forward:**
Click the lighthouse → something opens → takes you to `/raybuilds021` which is the actual site. The garden is the entrance. The door is the lighthouse.

---

## the routes that existed

| Route | What it was |
|-------|-------------|
| `/` | Homepage — went through many forms (see below) |
| `/garden` | 3D garden scene — THE KEEPER |
| `/mind` | Ki logo landing page, almost an easter egg |
| `/mind/12-favorite-problems` | Interactive dropdown: 12 questions Ray is obsessed with |
| `/ki/terra` | Terra project page — cycle tracking app |

---

## homepage iterations

The homepage (`/`) went through the most changes. Here's every version:

### iteration 1: "Building Ki" hero (current state)
A minimal page with just:
- Nav: `raybuilds021` + `unlock ki ↗` link
- Hero: big serif "**Building** Ki" in two colors
- A divider
- Everything else commented out

This was the "keep it simple" state. A holding page. A name and a title.

### iteration 2: full Ki philosophy page (commented out)
At some point the homepage had the full Ki philosophy built out in sections. All of this is now commented out in `page.tsx`:

**Section: origin story / etymology**
> ki (氣/気) is an ancient East Asian concept meaning life force, vital energy, breath. it is the invisible current that flows through all living things — the essence of being alive and conscious.
>
> in traditional practice, cultivating ki means harmonizing mind, body, and spirit. it is developed through presence, breath, and intentional practice. when your ki flows freely, you are aligned with your true nature.
>
> this is exactly what the tool does: it helps you cultivate your life force through daily practice, harmonizing your mind and body, unlocking the unlimited power that has always existed within you.

**Section: ki as a digital space**
> Ki is a tool to explore your mind. a space where thoughts become knowledge, and knowledge becomes wisdom.
>
> it recognizes that mind and body are one. your hormonal cycles, your energy levels, your emotional states — these aren't obstacles to productivity. they are intelligence. Ki meets you where your body is, adapting to support your natural rhythms.
>
> through AI, Ki becomes a mirror for your consciousness.

> → capture thoughts as they arise — ideas, questions, emotions, learnings
> → expand thoughts into deeper understanding through AI-powered exploration
> → cultivate wisdom by recognizing patterns across time
> → share your journey, contributing to collective consciousness

**Section: the goldilocks zone**
> our greatest tools can also be our downfall. technology can fragment our attention, distort our self-perception, disconnect us from our bodies. AI can hallucinate, manipulate, replace human agency.
>
> Ki exists in the goldilocks zone: technology that makes us superhuman without losing our humanity. it augments consciousness without replacing it. it accelerates growth without bypassing the journey. it provides intelligence on tap while honoring the wisdom that can only come from lived experience.
>
> this is AI for the Self. a tool that helps you become who you already are.

**Section: apps**
A link to `/ki/terra`:
> **Terra** — Ki's first app. cycle tracking and pattern visualization for women who want to understand their bodies. →

**Footer:**
> © 2026 raybuilds021
> build.ray.build@gmail.com

### iteration 3: the "feed" vision (documented, never built)
From `docs/rebrand.md` — the homepage was going to become **The Feed**: a chronological stream of posts (essays, reflections, build logs, stream notes, guides, ki updates, field notes). Like a publication. A living document. This was planned but never executed.

---

## the content that was written

### origin story
**File:** `src/story/origin-story.md`
**Theme:** crisis, falling, rock bottom, rising

---

> ### falling
>
> *[march 2022] {mindset ~ i have life all figured out.}*
>
> freshman year consisted of a series of blackouts. one of the freakiest neurological occurences also happens to be categorized as a fun night out. my experience of consciousness became a disjointed one, alternating intervals of awareness and emptiness, the gaps swelling from hours into days. i desparately wanted to find my place, to fit in, and to make the most of my time in college, often coined as the best years of your life.
>
> and i did find my place, and these have become some of my best years, with the best yet to come. but the way that i was going about it was all wrong. and at the pace i was going, something was bound to break.
>
> and break i did. a string of two particular blackouts, the first a catalyst for the second, shook me to my core. in the first, i came out of the blackout with a man i did not recognize on top of me in a place i had never been before. seven hours of my memory --- poof ! gone ! the next morning, as i tried to grapple with what had happened, i remember being filled with such shame, guilt, blame, Self-hate... how did i let this happen? i am disgusting. i hate every cell in my being. i remember thinking how excited i was for seven years to pass so that all of my body's cells could regenerate and i would be reborn a new person. that i could erase this memory from my body.
>
> ### falling still
>
> following this blackout, i fell deeper into my destructive habits. despite what had happened, i continued to be careless with my mind and my body. pushing myself past my limits. until on a Saturday like any other, i took it further than i had before. to the point where my friends had to rush my incoherent self to the hospital. where i threw up in the uber and my limp body had to be loaded onto a stretcher and into the ambulance. where they had to cut the jeans from my body and put me through an MRI to see if i'd caused any permanent damage to my brain.
>
> none of this i remembered, of course.
>
> when i came to in the hospital bed, one of the first things i remember thinking was --- *where are my jeans?*
>
> ---
>
> to be so broken
> to have
> f a l l e n
> so deeply
> that the only thing
> you can do is
> r i s e
> into a new you
>
> (phoenix)

---

### what is ki
**File:** `src/story/what-is-ki.md`
**Note:** Written as JSX/component syntax, not clean markdown — the content was being built directly into components

Three sections:
1. **the origin of ki** — etymology (氣/気), life force, vital energy, breath, invisible current, harmonizing mind/body/spirit
2. **ki as a digital space** — AI as mirror for consciousness, mind-body recognition, capturing / expanding / cultivating / sharing
3. **the goldilocks zone** — technology that makes us superhuman without losing humanity; augments without replacing; accelerates without bypassing

### love
**File:** `src/story/love.md`
**Theme:** healing, unconditional love as medicine

> it may have taken a long time,
> but in the end it did not matter.
> after much healing through
> self-observation she now had
> strength, she now had courage,
> and the wisdom to wield her new
> magic with virtue. no longer did
> she run from her pain or her
> troubles, no longer did she allow
> delusions to capture her mind, no
> longer did she doubt that the greatest
> healer she has ever met is her own
> unconditional love.
>
> (you are a healer)

### love2
**File:** `src/story/love2.md`
**Theme:** love driving growth (one line)

> when we strive to become better than we are, everything around us becomes better too ... and when we love, we always strive to become better than we are.

### future is now
**File:** `src/story/future-is-now.md`
**Theme:** possibility, uncreated world

> and it may be that what
> what we have is a world
> not on the verge of flying
> apart, but an uncreated one ---
> still in shapeless fragments
> waiting to be put together properly.
> i imagine that when we want
> something better, we may have
> it: at perhaps no greater price
> than we have already paid for the worse.

### building me
**File:** `src/story/buildingme.md`
**Theme:** the three years between crisis and creation

> I know—we jumped from the beginning to here, and you might be wondering: how did we get here?
> The truth is: everything contributed. Everything.
> Three years of daily showing up. Rewiring habits one morning at a time. Running until my body remembered what it felt like to be alive. Journaling through the fog until clarity emerged. Learning that my mind and body were never separate. Discovering my cycle wasn't something to manage but a tool for understanding myself. Building self-belief brick by brick when no one else could see what I was creating.
> Struggling to start. Feeling stuck, lost, confused. Being misunderstood by the people closest to me. Questioning everything. Doubting myself.
> And then—I started building. I stopped getting caught up in my head and started doing.
> That's when everything fell into place.
> Because building K·I and building me were never separate journeys. They are one and the same. Every line of code was an act of self-discovery. Every feature I built taught me something about how I work, what I need, who I am. The tool shaped me as much as I shaped it.
> That's how we got here. That's how you get there too.
> One day at a time. In the NOW.

### acknowledgements
**File:** `src/story/acknowledgements.md`
**Theme:** gratitude, community, everyone who contributed to becoming

> Thank you to Dad, Mom, Hannah, Grace, Danielle, Dune, Ellie — for your endless compassion and kindness to all. For your strength and courage, your unconditional love, and for always believing in me.
>
> Thank you to: Anna Skare, Anna Snyders, Ben Paluk, Cadence Dimen, Callie Mulligan, Caroline Crawford, Chloe Manke, Connor Dunham, Corinne Kelly, Emory Haines, Grace Liu, Hoodoo Brown BBQ, Humza Raza, Jamie Narciso, Katherine Weiner, Leah Castaneda, Luke Barrientos, Maggie Rush, Michael Zvon, Miranda Bialek, Morgan Krempasky, Nate Joseph, Nick Agliardo, Owen Gaydos, Pramiti Dubey, Sam Lattanze, Sam Yoon, Sammy Tolani, Sebastian Baez, Shea Coughlin, Skyler Kahng, Sydney Giordano, Tasha Riek, Taylor Dutil, Tyler Green, Zoey Lee
>
> For your friendship and support. For creating a safe place for my heart. For DANCE. For sharing your heart and mind with me.
>
> Thank you to Miami for creating the perfect environment for me to grow.
>
> To University of Miami | ITD — Devika Milner, Jeffrey Duerk, Lokesh Ramamoorthi, Roni Kennedy, Anna Munson, Katherine Kuang, Quin McGowan, Andrew Lentchner, Anthony Santoro, Nico Gallardo, Grant Martin for friendship and guidance.
>
> To Marcia Weldon and Michelle Destefano for being incredible role models and teachers.
>
> To Eddie Gonzalez for igniting my curiosity for beautiful design.
>
> To Jorge Morejon for sharing your story, knowledge, and inspiring me with how you live.
>
> To Momma B for your kindness and for sharing your love with others.
>
> To Coconut Grove Run Club, Coffee & Chill Miami, UM Girl Gains, UM KTP — for welcoming me with open arms.
>
> Thank you to Andrew Huberman, David Senra, Katherine Anne Porter, mushrooms, Paulo Coelho, Sara Blakely, Steve Jobs, Wim Hof, yung pueblo, Y Combinator Team — and all other teachers.
>
> A special thank you to Maddison Miller for sharing your story and creating space for me to share mine.
>
> Thank you to my Self for everything.
>
> And thank you to all others not named who have touched | will touch my heart. You are my hero — this is for you.

---

## the content that was started but never finished

### the-time-is-now.mdx
**File:** `content/essays/the-time-is-now.mdx`
Status: placeholder. Title only. "coming soon..."
The essay title is perfect — and the essay was never written.

### etymology.mdx
**File:** `content/ki/etymology.mdx`
Status: skeleton. "A living dictionary of the words and concepts that define the Ki way of being."
Had 20+ words laid out as section headers with `[Your definition here]` in every slot:

Self, body, build, create, cycle, dance, emotion, flow, focus, growth, intention, Ki, learn, life, love, mind, mindset, movement, opportunity, purpose, reality, Self-belief

The skeleton of an entire lexicon. Never populated.

### terra.mdx
**File:** `content/projects/terra.mdx`
Status: fragment. Barely anything.

> *Here lies the core source of truth for building the cycle app I always wished existed.*
> *I have been figuring out how to best capture the building process.*
> *This is it. The essence of Ki.*

Links to the Paul Graham "build what you wish existed" essay.

### vision.mdx
**File:** `content/ki/vision.mdx`
Status: placeholder. "coming soon..."

### master-builder-toolkit.mdx
**File:** `content/resources/master-builder-toolkit.mdx`
Status: placeholder. Title only. Never written.

---

## the ki components that were built

A full suite of React components in `src/app/components/ki/` — each one a section of the Ki philosophy page:

| Component | What it contained |
|-----------|------------------|
| `WhatIsKi.tsx` | AI toolkit explanation, goldilocks zone |
| `BobbingKi.tsx` | Animated Ki logo (bobbing) |
| `SpinningKi.tsx` | Animated Ki logo (spinning) |
| `Acknowledgements.tsx` | Gratitude section rendered as component |
| `BuilderNote.tsx` | Personal note from the builder |
| `AI.tsx` | "Goldilocks zone" — the tech philosophy |
| `LOVE.tsx` | Love and compassion section |
| `NOW.tsx` | Present moment / NOW page awareness |
| `KiOrigin.tsx` | Origin story component |
| `Connect.tsx` | Contact/connection info |

Also in other directories:
- `mind/FavProblems.tsx` — the 12 Favorite Problems interactive dropdown
- `story/OriginStory.tsx` — the origin story as a rendered component

---

## the philosophy that was documented

### the 10 pillars of Ki
**File:** `docs/pillars.md`

1. love
2. mind
3. body
4. soul
5. intention
6. presence
7. creation
8. consistency
9. technology
10. community

### the goldilocks zone
Ki exists in the goldilocks zone: technology that makes us superhuman without losing our humanity. Not Luddite rejection. Not techno-utopianism. The middle path where AI augments consciousness without replacing it.

### Ki as a product (builder-ki system)
A personal knowledge management system with:
- **Capture:** voice notes, photos, videos, daily logs, cycle tracking
- **Storage:** Supabase (PostgreSQL + file buckets)
- **Processing:** n8n + AI (Whisper transcription, Claude synthesis)
- **Visualization:** dashboard, daily view, document editor, "thinking partner" AI chat

The app was planned, partially built, documented extensively. It never launched publicly.

### Terra
A cycle tracking app. "Ki's first app." Built for women who want to understand their bodies — not manage them. Cycle as intelligence, not obstacle.

---

## the content categories that were planned

From `docs/rebrand.md`:
1. **Build Log** — dev updates, technical decisions, building in public
2. **Reflections** — personal evolution, philosophy, transformation
3. **Stream Notes** — building stream recaps
4. **Guides** — how-to's, frameworks, resources
5. **Ki Updates** — product announcements, feature releases, vision
6. **Field Notes** — quick thoughts, fragments, observations

---

## the pages that were planned but never built

| Page | Vision |
|------|--------|
| `/about` | Who Rachel is, the transformation journey end-to-end |
| `/ki` | Dedicated Ki philosophy page with all pillars |
| `/archive` | All posts filterable by category |
| `/now` | What's being focused on right now, updated regularly |

### The NOW page (documented in `docs/NOW.md`)
Was going to be a video-first experience. Each project gets a video message: The Why / What / How. Three projects at different stages: builder-ki, Terra, digital garden. Arrow key navigation between projects. Never built.

### The public timeline (documented in `docs/PUBLIC-KI.md`)
800+ lines of spec for a live view into Ray's actual captures/notes from the builder-ki system via Supabase. Showing the mind in real time. Three visualization options (linear timeline recommended). Never implemented.

### The stream (documented in `docs/LIVE-STREAM.md`)
Building live on stream. Documentation of the workflow. Never launched.

---

## the technology stack

What was here, what was tried, what was removed:

**Kept:**
- Next.js 15 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Three.js 0.180.0
- Framer Motion + Motion + GSAP (animation stack)
- Supabase (planned but not yet live)

**Removed along the way:**
- `next-mdx-remote` — removed in commit `a20f7b9`. Was going to power dynamic MDX rendering. Removed for simplicity.

**Custom:**
- Perpetua font (main serif typeface for elegant, editorial feel)
- Flexoki color system as base
- Custom shader materials for 3D sky gradient

---

## the color system

**Base (Flexoki — kept):**
- `--bg`: #100f0f (almost black)
- `--text`: #f6f1e6 (warm cream)
- `--muted`: #6b6760
- `--line`: #242220
- `--yellow`: #efcb68 (Ray's color — golden)
- `--red`: #c45c5c (Terra's color — brick)

**Planned accent rebrand (from `docs/rebrand.md`):**
- Terra: #9e2a2b (deeper brick red)
- Ray: #efcb68 (golden yellow — unchanged)
- Pacific: #58a4b0 (teal)
- Sage: #54783f (olive green)
- Dawn: #e0bad7 (dusty rose)

---

## the commit message arc

Reading the git log like a journal:

```
keep it simple
simplify
removing mdx-remote
raybuilds021
remove patience
patience
cycle is superpower
03/04/2026 log
some tweaks to structure
starting over
before
```

Each commit is a state of mind. `patience` then `remove patience`. `starting over`. `keep it simple`. The code was being simplified toward something essential while the content kept not quite landing.

---

## the recurring patterns — what was really being said

Across all the content, all the versions, all the attempts, the same things kept surfacing:

**1. The body is the starting point.**
Everything — the blackouts, the hospitalization, the recovery, the cycle tracking app — begins in the body. Not abstract consciousness. The actual physical body and what happens when you stop listening to it.

**2. Mind and body are one system.**
The cycle isn't a disruption to productivity. It is productivity data. Hormonal states, energy levels, emotional weather — all intelligence. Ki recognizes this.

**3. Love is the technology.**
Before any app, before any code — unconditional self-love was the tool that actually worked. Everything else (journaling, running, building) was downstream of that.

**4. The lighthouse stands still while everything else moves.**
Consistency as philosophy. Daily practice as foundation. Showing up when nobody sees you as the actual work.

**5. Building Ki = building self.**
Not metaphorically. Literally the same process. "Every line of code was an act of self-discovery." The tool and the builder shape each other.

**6. The world is uncreated, not broken.**
The "future-is-now" fragment — "an uncreated one, still in shapeless fragments, waiting to be put together properly." Possibility as the actual state of things.

**7. Community holds the individual.**
Dozens of names in acknowledgements. The gratitude list is longer than the essay. This is not a solo journey and it was never pretending to be.

**8. The goldilocks zone is the whole point.**
Neither reject technology nor surrender to it. Find the zone where it makes you more human, not less. This is Ki's entire reason for being.

---

## what was never quite captured

Across every iteration, every content attempt, every component and page — there was always something that didn't quite land. Not because the content was bad. Because the *form* kept being wrong.

- A philosophy page felt like a pitch deck.
- A blog felt like performance.
- Components felt like fragments without a home.
- The MDX system felt like overhead without payoff.
- The Ki sections got bigger and more explained and somehow less felt.

The garden never had this problem. The garden just *was*.

This is why we're starting over with the lighthouse as the door.

---

## what we keep

1. **The Three.js garden** — unchanged, untouched
2. **The story content** — all of it, preserved here
3. **The Ki philosophy** — distilled, not expanded
4. **The honesty** — this whole document

## what we build next

- A new route: `/raybuilds021` — the actual site, reached by clicking the lighthouse
- The garden becomes the entrance
- Everything that needs to be said gets said once, clearly, in the right form
- No more placeholders. Write it or don't have the section.

---

*last updated: 2026-04-16*
*this document is the memory. the site is what comes next.*
