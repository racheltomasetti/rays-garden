"use client";

import Image from "next/image";
import ClickableWord from "./components/ClickableWord";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Main Content Area - This will be built out as you add content */}
      <main className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <section className="space-y-8">
            {/* THE STORY OF BUILDING K·I | ME */}

            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-1/2 mx-auto opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-3/4 mx-auto opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            <div className="p-2 flex items-center justify-center gap-4">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center whitespace-nowrap ">
                ~ K·I ~
              </h1>
            </div>

            {/* Key Vision */}
            <p className="text-lg md:text-xl text-[var(--tx)] text-center font-bold">
              <span className="text-[var(--accent-2)] italic">
                ~ · unlock the mind
              </span>{" "}
              |{" "}
              <span className="text-[var(--accent)] italic">
                return to Self · ~
              </span>
            </p>

            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-3/4 mx-auto opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-1/2 mx-auto opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* living documentation disclaimer */}
            <p className="text-base leading-relaxed text-[var(--tx-2)] italic text-center">
              here you will find the living documentation of ~ K·I ~ as it is
              being built.
            </p>

            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            {/* origin story section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center ">
                  · origin story of ~ K·I ~ ·
                </h2>

                <h3 className="text-2xl font-bold text-[var(--accent-2)] italic text-center">
                  · falling ·
                </h3>
                <p className="text-sm italic text-[var(--tx-2)] text-center">
                  [march 2022] {"{"}mindset ~ i have life all figured out.{"}"}
                </p>

                <p className="text-base leading-relaxed">
                  freshman year consisted of a series of blackouts. one of the{" "}
                  <em>freakiest neurological occurences</em> also happens to be
                  categorized as a fun night out. my experience of consciousness
                  became a <strong>disjointed one</strong>, alternating
                  intervals of awareness and emptiness, the gaps swelling from
                  hours into days. i desperately wanted to find my place, to fit
                  in, and to make the most of my time in college, often coined
                  as the <em>best years of your life.</em>
                </p>
                <p className="text-base leading-relaxed">
                  and i did find my place, and these have become some of my best
                  years, with <em>the best yet to come</em>. but the way that i
                  was going about it was all wrong. and at the pace i was going,{" "}
                  <strong>something was bound to break</strong>.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>and break i did.</strong> a string of two particular
                  blackouts, the first a catalyst for the second, shook me to my
                  core. in the first, i came out of the blackout with a man i
                  did not recognize on top of me in a place i had never been
                  before. seven hours of my memory ---{" "}
                  <strong>poof ! gone !</strong> the next morning, as i tried to
                  grapple with what had happened, i remember being filled with
                  such{" "}
                  <em>
                    shame, guilt, blame, Self-<strong>hate</strong>... how did i
                    let this happen? i am disgusting. i <strong>hate</strong>{" "}
                    every cell in my being.
                  </em>{" "}
                  i remember thinking how excited i was for seven years to pass
                  so that all of my body&apos;s cells could regenerate and i
                  would be reborn a new person. that i could erase this memory
                  from my body.
                </p>
              </div>

              <div className="space-y-4">
                {/* Photo */}
                <div className="flex justify-center py-6">
                  <Image
                    src="/story/media/photos/rocky-ferry.jpg"
                    alt="Rocky Ferry"
                    width={200}
                    height={150}
                    className="rounded-md"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[var(--accent-2)] italic text-center">
                  ~ falling still ~
                </h3>
                <p className="text-base leading-relaxed">
                  following this blackout, i fell deeper into my destructive
                  habits. despite what had happened, i continued to be{" "}
                  <em>careless with my mind and my body</em>.{" "}
                  <strong>pushing myself past my limits </strong>until on a
                  Saturday like any other, i took it further than i had before.
                  to the point where my friends had to rush my incoherent self
                  to the hospital. where i threw up in the uber and my limp body
                  had to be loaded onto a stretcher and into the ambulance.
                  where they had to cut the jeans from my body and put me
                  through an MRI to see if i&apos;d caused any permanent damage
                  to my brain.
                </p>
                <p className="text-base leading-relaxed">
                  none of this i remembered, of course.
                </p>
                <p className="text-base leading-relaxed">
                  when i came to in the hospital bed, one of the first things i
                  remember thinking was ---{" "}
                  <em>
                    <strong>where are my jeans?</strong>
                  </em>
                </p>
              </div>

              {/* Horizontal divider */}
              <hr className="border-t border-[var(--ui-2)] w-3/4 mx-auto opacity-70" />

              <div className="text-center space-y-2 py-6">
                <p className="text-base text-[var(--accent)]">
                  to be so broken
                </p>
                <p className="text-base text-[var(--accent)]">to have</p>
                <p className="text-base text-[var(--accent)] tracking-widest font-bold">
                  f a l l e n
                </p>
                <p className="text-base text-[var(--accent)] font-bold">
                  so deeply
                </p>
                <p className="text-base text-[var(--accent-2)]">
                  that the only thing
                </p>
                <p className="text-base text-[var(--accent-2)]">
                  you can do is
                </p>
                <p className="text-base text-[var(--accent-2)] tracking-widest font-bold">
                  r i s e
                </p>
                <p className="text-base text-[var(--accent-2)] font-bold">
                  into a new you
                </p>
                <p className="text-base italic mt-4 text-[var(--accent)] font-bold">
                  (
                  <ClickableWord
                    word="phoenix"
                    definition="A mythical bird that cyclically regenerates or is otherwise born again. Associated with the sun, a phoenix obtains new life by rising from the ashes of its predecessor."
                    etymology="From Greek 'phoinix' (φοῖνιξ) meaning 'purple-red' or 'Phoenician'. In Greek mythology, the phoenix was a long-lived bird that was reborn from its own ashes."
                    additionalContext={
                      <>
                        <p className="mb-2">
                          The phoenix represents transformation, renewal, and
                          the triumph of life over death. It symbolizes the
                          ability to rise from ones own destruction, emerging
                          stronger and more beautiful than before.
                        </p>
                        <p>
                          In your journey, the phoenix represents the profound
                          transformation that comes from confronting your
                          darkest moments and using them as fuel for rebirth.
                        </p>
                      </>
                    }
                  />
                  )
                </p>
                <br />
                <p className="text-base mt-4 text-[var(--tx-2)] italic">
                  [yung pueblo ~ inward]
                </p>
              </div>
            </div>
            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>

            {/* BUILDING K·I */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--tx)] opacity-80 italic text-center">
                and NOW ?
              </h2>

              <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center">
                {" "}
                i am
              </h2>

              <h2 className="text-4xl font-bold text-[var(--accent)] italic text-center">
                BUILDING{" "}
                <ClickableWord
                  word=" ~ K·I ~"
                  definition="the universal life force that connects us all --- vital energy that flows through all living things --- LOVE"
                  etymology="From Chinese 'qì' (氣) meaning `air, breath, gas, spirit, vital energy`. The character originally depicted vapor or steam rising, representing the subtle life force that animates all beings. Also written as 'chi' or 'ki' (Japanese pronunciation)."
                  additionalContext={
                    <>
                      <p>
                        K·I is your core essence—the vital energy at your center
                        when everything else is stripped away. Just as qi flows
                        through the body in traditional Chinese medicine, your
                        K·I is the life force within you that seeks expression.
                        Through daily practice in the NOW, K·I cultivates
                        Self-LOVE in the pursuit of LOVE.
                      </p>
                    </>
                  }
                  accentColor="accent-2"
                />{" "}
              </h2>

              <h3 className="text-3xl font-bold text-[var(--accent-2)] italic text-center">
                ·{" "}
                <ClickableWord
                  word="AI"
                  definition="Artificial Intelligence; technology capable of processing information, recognizing patterns, and augmenting human cognitive capabilities. Intelligence on tap."
                  etymology="
'Artificial' from Latin 'artificialis' meaning 'of or belonging to art,' from 'artificium' (craftsmanship, art, skill), from 'artifex' (craftsman, artist). 'Intelligence' from Latin 'intelligentia' meaning `understanding, knowledge,` from 'intelligere' (to understand), literally `to choose between,` from 'inter' (between) + 'legere' (to choose, read). First used together in 1955 at the Dartmouth Conference to describe machines that could simulate human intelligence."
                  additionalContext={
                    <>
                      <p>
                        AI is the how—some of the magic that makes K·I possible.
                        AI can process vast amounts of your thoughts, find
                        patterns you cannot see, synthesize scattered ideas into
                        coherence, and help you visualize the narrative of your
                        becoming. But AI is only transformative when used as a
                        tool, not as a replacement for your own thinking. In
                        K·I, AI augments your living practice by doing what it
                        does best—processing large amounts of various data
                        streams, revealing connections, reflecting patterns,
                        organizing streams of consciousness—while you remain the
                        author of your life. The combination of your mind + AI
                        creates a system where technology serves transformation,
                        where digital processing illuminates the daily work of
                        showing up for yourself. AI makes it possible to bring
                        multiple streams of data together, crafting a living
                        narrative of your journey back to Self.
                      </p>
                    </>
                  }
                  accentColor="accent"
                />{" "}
                <ClickableWord
                  word="JOURNAL"
                  definition="A daily record; a personal space for capturing thoughts, experiences, emotions, and ideas. A tool for self-reflection and transformation that documents the journey of becoming."
                  etymology="Old French 'jornal' (12th century), derived from Latin 'diurnalis' meaning `daily,` from 'diurnus' (of the day), from 'dies' (day). Originally meant `that which belongs to the day.` The word shares its root with 'journey'—both originally referred to a day's passage, whether through pages or miles."
                  additionalContext={
                    <>
                      <p>
                        The journal is your daily practice of showing up. It is
                        where you think, explore curiosities, capture dreams,
                        process emotions, and excavate truth. Through consistent
                        daily presence, the journal becomes a mirror—revealing
                        patterns, clearing mental clutter, and helping you strip
                        away ego to reconnect with your essential Self. When
                        powered by AI, the journal transforms from static pages
                        into a living system that can process, synthesize, and
                        illuminate the narrative of your becoming. It is both
                        the what and the how—the container for your daily work
                        and the method of transformation itself.
                      </p>
                    </>
                  }
                  accentColor="accent"
                />{" "}
                for the{" "}
                <ClickableWord
                  word="Self"
                  definition="The core essence of who you are beneath conditioning, ego, and habitual thinking. Your authentic nature stripped of all that is not truly you. The unchanging awareness at your center."
                  etymology="From Old English 'self, seolf, sylf' meaning `one's own person,` from Proto-Germanic '*selbaz'. The capitalization distinguishes this deeper essence from the lowercase 'self' of ego and personality. The capital S Self points to what remains when everything else falls away."
                  additionalContext={
                    <>
                      <p>
                        In K·I, Self (capital S) represents the destination and
                        the practice. Through daily journaling and clearing the
                        mind, you move past the noise of ego and societal
                        conditioning to discover your core essence—your KI. This
                        is not self-improvement but self-remembering. It is the
                        who you are building this for: the individual seeking to
                        reconnect with their authentic nature, to live from
                        their center rather than from reaction or habit. The
                        Self is what emerges when you consistently show up in
                        the NOW.
                      </p>
                    </>
                  }
                  accentColor="accent"
                />{" "}
                ·
              </h3>
              <h3 className="text-3xl font-bold text-[var(--accent-2)] italic text-center">
                ~ making{" "}
                <ClickableWord
                  word="NOW"
                  definition="The present moment; the only point in time where life actually occurs and where choice exists. The eternal instant that contains all possibility."
                  etymology="
From Old English 'nu' meaning `now, at present,` from Proto-Germanic '* QWZS  QWnu'. Related to Latin 'nunc' and Greek 'nun', all representing the immediate present moment. The capitalization emphasizes its significance as both a temporal location and a state of consciousness."
                  additionalContext={
                    <>
                      <p>
                        The NOW is where the transformation happens. Each
                        thought capture is an act of arriving here, in this
                        moment, clearing away the mental chatter about past and
                        future that pulls you away from your Self. Showing up
                        daily in the NOW means meeting yourself exactly where
                        you are without judgment—observing your thoughts,
                        emotions, and patterns with presence rather than getting
                        lost in them. K·I helps you anchor in the NOW by
                        capturing what is alive in you right now, creating a
                        practice of returning to presence. The NOW is both the
                        practice and the gift: when you are here, you are free
                        from the ego&apos;s stories and can access your
                        essential nature.
                      </p>
                    </>
                  }
                  accentColor="accent"
                />{" "}
                a daily practice ~
              </h3>

              <h3 className="text-3xl font-bold text-[var(--accent-2)] italic text-center">
                ~ · with{" "}
                <ClickableWord
                  word="LOVE"
                  definition="A way of being and living characterized by presence, acceptance, compassion, and connection—both with yourself and the world around you. Not merely an emotion, but a practice and orientation toward life."
                  etymology="From Old English 'lufu' meaning `love, affection, friendliness,` from Proto-Germanic '*lubō'. Related to Latin 'libet' (it pleases) and 'lubido' (desire). The capitalization emphasizes LOVE as being unconditional, a philosophy and practice rather than just a feeling."
                  additionalContext={
                    <>
                      <p>
                        LOVE is the why—the philosophy underlying K·I. Making
                        LOVE a way of life means choosing presence over
                        distraction, self-compassion over self-criticism,
                        curiosity over judgment. It is the energy you bring to
                        the daily practice of showing up for yourself. Through
                        living with K·I, you learn to approach your thoughts,
                        emotions, and experiences with loving awareness rather
                        than harsh judgment. LOVE becomes the lens through which
                        you see yourself and craft your life. It transforms the
                        tool from a thought capture device into a practice of
                        radical self-acceptance and intentional living.
                      </p>
                    </>
                  }
                  accentColor="accent"
                />{" "}
                as a way of life · ~
              </h3>

              <p className="text-sm italic text-[var(--tx-2)] text-center">
                [NOW] {"{"}mind setting ~ LOVE{"}"}
              </p>

              {/* Photo */}
              <div className="flex flex-col items-center py-6">
                <Image
                  src="/story/media/photos/love.jpg"
                  alt="Self-love mandala"
                  width={500}
                  height={500}
                  quality={95}
                  className="rounded-md"
                />
                <p className="text-sm italic text-[var(--tx-2)] mt-3">
                  ~ LOVE is the key ~
                </p>
              </div>

              {/* Quote */}
              <div className="text-center py-4 max-w-2xl mx-auto">
                <h3 className="text-xl leading-relaxed italic font-bold text-[var(--tx)]">
                  <span className="text-[var(--accent-2)]">
                    when we strive to become better than we are, everything
                    around us becomes better too ...
                  </span>{" "}
                  <span className="text-[var(--accent)]">
                    and when we love, we always strive to become better than we
                    are.
                  </span>
                </h3>
                <p className="text-base mt-4 text-[var(--tx-2)] italic">
                  [paulo coelho ~ the alchemist]
                </p>
              </div>

              {/* Horizontal divider */}
              <hr className="border-t border-[var(--ui-2)] w-3/4 mx-auto opacity-70" />

              <div className="text-center space-y-2 py-6">
                <p className="text-base text-[var(--tx)]">
                  it may have taken a long time,
                </p>
                <p className="text-base text-[var(--tx)]">
                  but in the end it did not matter.
                </p>
                <p className="text-base text-[var(--tx)]">
                  after much healing through
                </p>
                <p className="text-base text-[var(--tx)]">
                  <strong>self-observation</strong> she now had
                </p>
                <p className="text-base text-[var(--tx)]">
                  <em>strength</em>, she now had <em>courage</em>,
                </p>
                <p className="text-base text-[var(--tx)]">
                  and the <em>wisdom</em> to wield her new
                </p>
                <p className="text-base text-[var(--tx)]">
                  magic with virtue.{" "}
                  <span className="text-[var(--accent)] italic">
                    no longer did
                  </span>
                </p>
                <p className="text-base text-[var(--accent)] italic">
                  she run from her pain or her
                </p>
                <p className="text-base text-[var(--accent)] italic">
                  troubles, no longer did she allow
                </p>
                <p className="text-base text-[var(--accent)]">
                  delusions to capture her mind, no
                </p>
                <p className="text-base text-[var(--accent)] italic ">
                  longer did she doubt that{" "}
                  <span className="text-[var(--accent-2)] font-bold">
                    the greatest
                  </span>
                </p>
                <p className="text-base text-[var(--accent-2)] font-bold italic">
                  healer she has ever met is her own
                </p>
                <p className="text-base text-[var(--accent-2)] font-bold italic">
                  unconditional love.
                </p>
                <br />
                <p className="text-base italic mt-4 text-[var(--accent-2)] font-bold">
                  (you are a healer)
                </p>
                <br />
                <p className="text-base mt-4 text-[var(--tx-2)] italic">
                  [yung pueblo ~ inward]
                </p>
              </div>

              <br />
              {/* Icon at top center */}
              <div className="flex justify-center">
                <Image
                  src="/icon.png"
                  alt="K·I Logo"
                  width={50}
                  height={50}
                  className="rounded-full animate-bob"
                  priority
                />
              </div>
            </div>

            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>

            {/* building me */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center">
                ~ · BUILDING ME · ~
              </h2>

              <div className="max-w-3xl mx-auto space-y-4 text-center">
                <p className="text-base leading-relaxed">
                  i know—we jumped from the beginning to here, and you might be
                  wondering: how did we get here?
                </p>
                <p className="text-base leading-relaxed font-semibold">
                  everything. every single day.
                </p>
                {/* Video showcase */}
                <div className="flex flex-col items-center py-6">
                  <div className="w-full max-w-[200px] aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/3EUnAy8VjAA?autoplay=1&mute=1&loop=1&playlist=3EUnAy8VjAA&controls=0"
                      title="Building Me"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-sm italic text-[var(--tx-2)] mt-3 text-center">
                    [august 27, 2022 - november 3, 2025]
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  three years of learning, growing, building, breaking. rewiring
                  habits one day at a time. running until my body found a love
                  for movement. capturing my thoughts even when i had no idea
                  what to write. learning that my mind and body were never
                  separate. realizing my cycle wasn&apos;t something to manage
                  but a tool for understanding myself. building Self-belief
                  brick by brick when no one else could see what i was creating.
                </p>

                <p className="text-base leading-relaxed text-[var(--tx)]">
                  struggling to start. feeling stuck, lost, confused. being
                  misunderstood by the people closest to me. questioning
                  everything. doubting myself.
                </p>
                <p className="text-base leading-relaxed">
                  and then—i started building. i stopped getting caught up in my
                  head and started doing.
                </p>
                <p className="text-base leading-relaxed font-semibold text-[var(--accent-2)]">
                  that&apos;s when everything fell into place.
                </p>

                {/* the time is now */}
                <div className="py-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/story/media/photos/the-time-is-now.png"
                      alt="The time is now - GitHub contributions"
                      width={800}
                      height={400}
                      quality={95}
                      className="rounded-md"
                    />
                    <p className="text-sm italic text-[var(--tx-2)] mt-4 text-center max-w-2xl">
                      the power of NOW. the green squares show when i was
                      building—pushing code, showing up daily. the gray stretch
                      of boxes reveals when i kept dreaming, felt frustrated and
                      lost, but was not building. then on{" "}
                      <span className="font-bold text-[var(--accent)]">
                        september 21, 2024
                      </span>
                      , i started building consistently. and that&apos;s when
                      everything fell into place.
                    </p>
                    <a
                      href="https://github.com/racheltomasetti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent-2)] hover:font-bold hover:underline transition-colors duration-200 text-sm font-medium mt-2 italic"
                    >
                      view my github →
                    </a>
                  </div>
                </div>

                <p className="text-base leading-relaxed">
                  because building K·I and building me were never separate
                  journeys. they are one and the same. all of my experiences,
                  light and dark, were building blocks for the journey. every
                  feature i built taught me something about how i work, what i
                  need, who i am. the building of this tool is shaping me as
                  much as i am shaping it.
                </p>
                <p className="text-base leading-relaxed font-semibold text-[var(--accent-2)]">
                  so that is how we got here.
                </p>
                <p className="text-base leading-relaxed font-semibold text-[var(--accent-2)]">
                  and that is how you get there, wherever it is you desire.
                </p>
                <p className="text-base leading-relaxed text-[var(--accent)] italic font-bold">
                  one day at a time.
                </p>
                <p className="text-base leading-relaxed text-[var(--accent)] italic font-bold">
                  live in the NOW.
                </p>
              </div>
              {/* Icon at top center */}
              <div className="flex justify-center">
                <Image
                  src="/icon.png"
                  alt="K·I Logo"
                  width={50}
                  height={50}
                  className="rounded-full animate-bob"
                  priority
                />
              </div>
              {/* Horizontal divider */}
              <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
              {/* Icon at top center */}
              <div className="flex justify-center">
                <Image
                  src="/icon.png"
                  alt="K·I Logo"
                  width={50}
                  height={50}
                  className="rounded-full animate-bob"
                  priority
                />
              </div>
              <br />
              {/* Photo */}
              <div className="flex flex-col items-center py-3">
                <Image
                  src="/story/media/photos/future-is-now.jpg"
                  alt="The future is now"
                  width={600}
                  height={400}
                  quality={95}
                  className="rounded-md"
                />
                <p className="text-sm italic text-[var(--tx-2)] mt-3 text-center">
                  ~ the future is NOW ~
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="text-center py-4 max-w-2xl mx-auto">
              <h3 className="text-xl leading-relaxed italic font-bold text-[var(--tx)]">
                <span className="text-[var(--tx)]">
                  and it may be that what we have is a world not on the verge of
                  flying apart, but an uncreated one --- still in shapeless
                  fragments waiting to be put together properly.
                </span>{" "}
                <span className="text-[var(--accent)]">
                  i imagine that when we want something better, we may have it:
                  at perhaps no greater price than we have already paid for the
                  worse.
                </span>
              </h3>
              <p className="text-base mt-4 text-[var(--tx-2)] italic">
                [katherine anne porter ~ the future is now]
              </p>
              <br />
            </div>
            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            {/* acknowledgements section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center">
                · ~ Acknowledgements ~ ·
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-base leading-relaxed italic font-bold text-[var(--accent-2)]">
                  i would be remiss if i did not take the time to thank all who
                  have made me who i am today.
                </p>
                <p className="text-base leading-relaxed italic font-bold text-[var(--accent-2)]">
                  for filling my life with{" "}
                  <span className="font-bold text-[var(--accent)]">
                    such love, curiousity, beauty, joy, inspiration...
                  </span>
                </p>
                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-[var(--accent-2)]">
                      Thank you to
                    </span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Dad, Mom, Hannah, Grace, Danielle, Dune, Ellie,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                    for your endless compassion and kindness to all. for your
                    strength and courage, your unconditional love, and for
                    always believing in me. for sharing your curiosities and
                    inspiring me in your pursuit of Self and your dreams. and
                    for showing me what it means to love selflessly.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-[var(--accent-2)]">
                      Thank you to
                    </span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Anna Skare, Anna Snyders, Ben Paluk, Cadence Dimen, Callie
                      Mulligan, Caroline Crawford, Chloe Manke, Connor Dunham,
                      Corinne Kelly, Emory Haines, Grace Liu, Hoodoo Brown BBQ,
                      Humza Raza, Jamie Narciso, Katherine Weiner, Leah
                      Castaneda, Luke Barrientos, Maggie Rush, Michael Zvon,
                      Miranda Bialek, Morgan Krempasky, Nate Joseph, Nick
                      Agliardo, Owen Gaydos, Prakul Singh, Pramiti Dubey,
                      Prateek Mishra, Sam Lattanze, Sam Yoon, Sammy Tolani,
                      Sebastian Baez, Shea Coughlin, Skyler Kahng, Sydney
                      Giordano, Tasha Riek, Taylor Dutil, Tyler Greene, Zoey
                      Lee,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                    for your friendship and support. for creating a safe place
                    for my heart—a space where I could learn, grow, and expand
                    my curiosities. for your generosity and kindness. for the
                    endless memories. for DANCE. for sharing your heart and mind
                    with me and reminding me of the importance of now. for your
                    light, and for inspiring me every day.
                  </p>
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-[var(--accent-2)]">
                      Thank you to
                    </span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Dr. Michael Alaia & Team, Professional PT,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                    for helping me heal my body and mind.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-[var(--accent-2)]">
                      Thank you to
                    </span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Miami,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                    for creating the perfect environment for me to grow.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      University of Miami | ITD,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                    for helping me explore and expand my curiousities.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Devika Milner, Jeffrey Duerk, and Lokesh Ramamoorthi,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    who provided continuous guidance and helped me in building
                    belief in my Self.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Roni Kennedy, Anna Munson, Katherine Kuang, Quin McGowan,
                      Andrew Lentchner, Anthony Santoro, Nico Gallardo, and
                      Grant Martin,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    for your friendship and insights inside and outside of the
                    classroom.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Marcia Weldon and Michelle Destefano,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    for being incredible role models and teachers.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Eddie Gonzalez,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    for igniting my curiousity in beautiful design.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Jorge Morejon,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    for sharing your story, knowledge, and inspiring me with how
                    you live.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Momma B,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    for your kindness and for sharing your love with others.
                  </p>
                  <p className="text-base leading-relaxed pl-8">
                    <span className="font-bold text-[var(--accent-2)]">to</span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Coconut Grove Run Club, Coffee & Chill Miami, UM Girl
                      Gains, KTP,
                    </span>
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic pl-8">
                    for welcoming me with open arms and building communities
                    overflowing with energy that played a huge role in my
                    growth.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed">
                    <span className="font-bold text-[var(--accent-2)]">
                      Thank you to
                    </span>{" "}
                    <span className="font-bold text-[var(--accent)]">
                      Andrew Huberman, David Senra, Katherine Anne Porter,
                      mushrooms, Paulo Coelho, Sara Blakely, Steve Jobs, Wim
                      Hof, yung pueblo, Y Combinator Team, and all other
                      teachers,
                    </span>{" "}
                  </p>
                  <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                    for the work that you do, whose knowledge and stories
                    provide clarity, inspiration, and guidance every day in the
                    building of K · I.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed italic text-[var(--accent)]">
                    A special thank you to{" "}
                    <span className="font-bold">Maddison Miller</span> for
                    sharing your story and creating space for me to share mine.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed font-bold text-[var(--accent)]">
                    Thank you to my <span className="italic">Self</span>.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-base leading-relaxed font-bold text-[var(--accent-2)]">
                    Thank you to all others not named who have touched | will
                    touch my heart.
                  </p>
                  <p className="text-base leading-relaxed font-bold text-[var(--accent-2)]">
                    Thank you to anyone who is courageously pursuing their
                    dreams, living and leading with love, sharing and spreading
                    it.
                  </p>
                  <p className="text-base leading-relaxed italic text-[var(--tx-2)]">
                    i would not be the person i am today without all of you.
                  </p>

                  <br />
                  <p className="text-base leading-relaxed font-semibold text-[var(--accent)]">
                    you are my hero—this is for you.
                  </p>
                </div>
              </div>
            </div>
            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>

            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* Icon at top center */}
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="K·I Logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div>
            <h1 className="text-base mt-4 text-[var(--tx)] font-bold text-center">
              <span className="text-[var(--accent)]">BUILT WITH LOVE</span> |{" "}
              <span className="text-[var(--accent-2)]">BUILT WITH ~ K·I ~</span>
            </h1>

            {/* Demo Section */}
            {/* <div className="space-y-4">
              <h2 className="text-3xl md:text-2xl font-bold text-center">
                demo
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">mobile</h3>
                  <video
                    className="w-full max-w-xs rounded-lg shadow-lg"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/demos/ki-mobile-demo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">web</h3>
                  <div className="w-full max-w-xs h-64 rounded-lg shadow-lg bg-[var(--ui)] flex items-center justify-center">
                    <p className="text-[var(--tx-3)]">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Add more content sections here */}
          </section>
        </div>
      </main>
    </div>
  );
}
