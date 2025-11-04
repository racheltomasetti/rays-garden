"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Main Content Area - This will be built out as you add content */}
      <main className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <section className="space-y-8">
            {/* THE STORY OF BUILDING K·I | ME */}
            <div className="p-2">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center whitespace-nowrap ">
                K·I
              </h1>
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

            {/* origin story section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[var(--accent)] italic text-center ">
                  ~ Origin Story ~
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
                  · falling still ·
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
              <hr className="border-t border-[var(--ui-2)] w-full opacity-70" />

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
                  (phoenix)
                </p>
                <br />
                <p className="text-base mt-4 text-[var(--tx-2)] italic">
                  [yung pueblo ~ inward]
                </p>
              </div>
            </div>

            {/* Horizontal divider */}
            <hr className="border-b border-[var(--ui-2)] w-full opacity-70" />

            {/* BUILDING K·I | ME */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-[var(--accent)] italic text-center">
                ~ BUILDING K·I | ME ~
              </h1>
              <br />
            </div>

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
