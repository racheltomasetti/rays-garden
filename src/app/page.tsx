"use client";

import Image from "next/image";
import ClickableWord from "./components/ClickableWord";
import SpinningIconCircle from "./components/SpinningIconCircle";
import StickyNavigation from "./components/StickyNavigation";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Main Content Area */}
      <main className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <section className="space-y-8">
            {/* THE STORY OF BUILDING ki | me */}

            {/* Spinning icon circle with ki header */}
            <div className="relative flex items-center justify-center py-8">
              {/* Spinning circle of icons */}
              <SpinningIconCircle />

              {/* ki header centered in the circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-[var(--accent)] text-center whitespace-nowrap">
                  ki
                </h1>
              </div>
            </div>
            {/* bobbing ki */}

            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}
            {/* bobbing ki */}
            {/* <div className="flex justify-center">
              <Image
                src="/icon.png"
                alt="ki logo"
                width={50}
                height={50}
                className="rounded-full animate-bob"
                priority
              />
            </div> */}

            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            <p className="text-base leading-relaxed text-[var(--tx-2)] italic text-center">
              here you will find the living documentation of ki as it is being
              built.
            </p>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* Key Vision */}
            {/* <p className="text-lg md:text-xl text-[var(--tx)] text-center font-bold">
              <span className="text-[var(--accent-2)] italic">
                unlock the mind
              </span>{" "}
              <span className="text-[var(--accent)] italic">
                return to Self · ~
              </span>
            </p> */}

            {/* what ki is */}
            <div id="what-is-ki" className="space-y-6">
              <h2 className="text-4xl text-[var(--accent-2)] italic text-center">
                what is{" "}
                <span className="font-bold text-[var(--accent)]">
                  <ClickableWord
                    word=" ki"
                    definition="the universal life force that connects us all --- vital energy that flows through all living things --- LOVE"
                    etymology="From Chinese 'qì' (氣) meaning `air, breath, gas, spirit, vital energy`. The character originally depicted vapor or steam rising, representing the subtle life force that animates all beings. Also written as 'chi' or 'ki' (Japanese pronunciation)."
                    additionalContext={
                      <>
                        <p>
                          K·I is your core essence—the vital energy at your
                          center when everything else is stripped away. Just as
                          qi flows through the body in traditional Chinese
                          medicine, your K·I is the life force within you that
                          seeks expression. Through daily practice in the NOW,
                          K·I cultivates Self-LOVE in the pursuit of LOVE.
                        </p>
                      </>
                    }
                    accentColor="accent-2"
                  />
                </span>{" "}
              </h2>

              <h3 className="text-3xl font-bold text-[var(--tx)] italic text-center">
                ·{" "}
                <ClickableWord
                  word="AI"
                  definition="Artificial Intelligence; technology capable of processing information, recognizing patterns, and augmenting human cognitive capabilities. Intelligence on tap."
                  etymology="
'Artificial' from Latin 'artificialis' meaning 'of or belonging to art,' from 'artificium' (craftsmanship, art, skill), from 'artifex' (craftsman, artist). 'Intelligence' from Latin 'intelligentia' meaning `understanding, knowledge,` from 'intelligere' (to understand), literally `to choose between,` from 'inter' (between) + 'legere' (to choose, read). First used together in 1955 at the Dartmouth Conference to describe machines that could simulate human intelligence."
                  additionalContext={
                    <>
                      <p>
                        AI is the how—some of the magic that makes ki possible.
                        AI can process vast amounts of your thoughts, find
                        patterns you cannot see, synthesize scattered ideas into
                        coherence, and help you visualize the narrative of your
                        becoming. But AI is only transformative when used as a
                        tool, not as a replacement for your own thinking. In ki,
                        AI augments your living practice by doing what it does
                        best—processing large amounts of various data streams,
                        revealing connections, reflecting patterns, organizing
                        streams of consciousness—while you remain the author of
                        your life. The combination of your mind + AI creates a
                        system where technology serves transformation, where
                        digital processing illuminates the daily work of showing
                        up for yourself. AI makes it possible to bring multiple
                        streams of data together, crafting a living narrative of
                        your journey back to Self.
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
                        In ki, Self (capital S) represents the destination and
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
              <h3 className="text-3xl font-bold text-[var(--tx)] italic text-center">
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
                        lost in them. ki helps you anchor in the NOW by
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

              <h3 className="text-3xl font-bold text-[var(--tx)] italic text-center">
                ~ · with{" "}
                <ClickableWord
                  word="LOVE"
                  definition="A way of being and living characterized by presence, acceptance, compassion, and connection—both with yourself and the world around you. Not merely an emotion, but a practice and orientation toward life."
                  etymology="From Old English 'lufu' meaning `love, affection, friendliness,` from Proto-Germanic '*lubō'. Related to Latin 'libet' (it pleases) and 'lubido' (desire). The capitalization emphasizes LOVE as being unconditional, a philosophy and practice rather than just a feeling."
                  additionalContext={
                    <>
                      <p>
                        LOVE is the why—the philosophy underlying ki. Making
                        LOVE a way of life means choosing presence over
                        distraction, self-compassion over self-criticism,
                        curiosity over judgment. It is the energy you bring to
                        the daily practice of showing up for yourself. Through
                        living with ki, you learn to approach your thoughts,
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

              <br />
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* how it works */}
            <div id="how-it-works" className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center">
                how it works
              </h2>
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* about the builder */}
            <div id="about-the-builder" className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center">
                about the builder
              </h2>
            </div>
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />
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

            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            <h1 className="text-base mt-4 text-[var(--accent-2)] text-center italic">
              built with{" "}
              <span className="font-bold text-[var(--accent)]">ki</span>
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
