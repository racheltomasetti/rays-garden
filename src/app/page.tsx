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
          <h1 className="text-2xl sm:text-3xl font-bold w-full max-w-3xl ">
            building ki
          </h1>
          {/* horizontal rule */}
          <hr className="w-full border-t border-[#100f0f]/30" />
          {/* ki journal entry */}
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

          {/* previous entry */}
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
