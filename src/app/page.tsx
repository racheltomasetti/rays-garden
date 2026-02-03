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

      {/* Stream of Consciousness Content */}
      <main className="w-full px-6 py-6">
        <div className="max-w-none text-[#100f0f] text-center flex flex-col items-center gap-8">
          <div className="relative w-full max-w-3xl flex justify-center items-center py-8">
            <Image
              src="/assets/glow.png"
              alt=""
              width={320}
              height={320}
              className="absolute inset-0 m-auto w-48 h-48 sm:w-64 sm:h-64 opacity-50 object-contain"
              aria-hidden
            />
            <h1 className="relative z-10 text-2xl sm:text-3xl font-bold">
              building ki
            </h1>
          </div>
          {/* horizontal rule */}

          {/* ***************************************************** */}
          {/* ***************************************************** */}
          {/* ***************************************************** */}

          <hr className="w-full border-t border-[#100f0f]/30" />
          
          {/* 02/02/2026 entry */}
          <article className="w-full max-w-3xl flex flex-col items-center">
            <h2 className="text-xl font-bold mb-3">Monday, February 03, 2026 @ 3:28 am</h2>
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
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
          <article className="w-full max-w-3xl flex flex-col items-center">
            <h2 className="text-xl font-bold mb-3">Wednesday, January 28, 2026 @ 7:45 PM</h2>
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
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
          <article className="w-full max-w-3xl flex flex-col items-center">
            <h2 className="text-xl font-bold mb-3">Tuesday, January 27, 2026 @ 2:07 pm</h2>
            <div className="w-full rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
              <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-left">
                all i want to do is build & share what i am learning.
                <br /> so this will be where i build & share ki.
              </p>
            </div>
          </article>

          
        </div>
      </main>
    </div>
  );
}
