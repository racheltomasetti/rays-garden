import HeaderWithKi from "./components/HeaderWithKi";
import AboutMe from "./components/AboutMe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f1e6]">
      {/* Header */}
      <header className="border-b border-[#100f0f]/30 bg-[#f6f1e6]">
        <div className="max-w-6xl mx-auto px-6 pt-1 pb-4">
          <HeaderWithKi />
        </div>
      </header>
      

      {/* About Me */}
      <AboutMe />

      {/* Sun separator */}
      <div className="w-full max-w-4xl mx-auto px-6 flex justify-center py-4">
        <Image
          src="/assets/sun.png"
          alt=""
          width={80}
          height={80}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
          aria-hidden
        />
      </div>

      {/* Stream of Consciousness Content */}
      <main className="w-full pt-4 pb-6">
        <div className="w-full max-w-4xl mx-auto px-6 text-[#100f0f] text-center flex flex-col items-center">
          <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm flex flex-col items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold w-full py-4">
              building ki
            </h1>

            {/* 02/04/2026 entry */}
            <article className="w-full flex flex-col items-center">
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Wednesday, February 04, 2026 @ 2:36 pm</h2>
          <hr className="w-full border-t border-[#100f0f]/30" />
            <br/>
              <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-left italic mt-3">~ 49 hours into fast</p>
              <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-left mt-3"><strong>current state:</strong> hunger has subsided, desire to eat mainly from love of food, energy levels are stable despite lack of sleep, head is clear</p>
                <br/>
              <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-center mt-3 italic">Ki&apos;s tools are designed to unlock the power of the mind, with terra being the first. a tool built to help women believe in their bodies & become the CEO of their health. 
                <br/>
                <br/>for so long, my cycle was an afterthought. i did not understand what was happening in my own body. as i became increasingly curious & aware of my mind, i inevitably began to explore my body (as they are one & the same). 
                <br/>
                <br/> now, i view my cycle as my superpower. the ultimate tool for understanding my Self. a portal into my mind & body. this is what we are building with terra, Ki, & all that is to come.</p>
            </div>
          </article>

          {/* 02/03/2026 entry */}
          <article className="w-full flex flex-col items-center">
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Tuesday, February 03, 2026 @ 3:28 am</h2>
            <hr className="w-full border-t border-[#100f0f]/30" />
            <br/>
              <div className="flex justify-center">
                <Image 
                  src="/assets/3-03-26.PNG" 
                  alt="3/3/26 entry" 
                  width={800} 
                  height={600}
                  className="w-full max-w-[200px] h-auto rounded-xl"
                />
              </div>
              <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-center italic mt-3">13:57:57 into fast</p>
            </div>
          </article>

          {/* 01/28/2026 entry */}
          <article className="w-full flex flex-col items-center">
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Wednesday, January 28, 2026 @ 7:45 PM</h2>
            <hr className="w-full border-t border-[#100f0f]/30" />
              <div className="flex justify-center">
                <Image 
                  src="/assets/terra-ki-connection.png" 
                  alt="How it is all connected - terra feeds into Ki, terra is ki" 
                  width={800} 
                  height={600}
                  className="w-full max-w-sm h-auto rounded-lg"
                />
              </div>
            </div>
          </article>

          {/* 01/27/2026 entry */}
          <article className="w-full flex flex-col items-center">
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Tuesday, January 27, 2026 @ 2:07 pm</h2>
            <hr className="w-full border-t border-[#100f0f]/30" />
            <br/>
              <div className="flex flex-col gap-4">
                <p className="text-lg lg:text-xl leading-relaxed text-center">
                  all i want to do is build & share what i am learning.
                  <br /> so this will be where i build & share ki.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/assets/journal-on-rocks.png"
                    alt="Journaling on rocks by the water"
                    width={240}
                    height={240}
                    className="w-[140px] aspect-square rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>
            </div>
          </article>

          </div>
        </div>
      </main>
    </div>
  );
}
