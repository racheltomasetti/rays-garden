import HeaderWithKi from "./components/HeaderWithKi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f1e6]">
      {/* Header */}
      <header className="border-b border-[#100f0f] bg-[#f6f1e6]">
        <div className="max-w-6xl mx-auto px-6 -mt-1 -mb-1">
          <HeaderWithKi />
        </div>
      </header>

      {/* Stream of Consciousness Content */}
      <main className="w-full px-6 py-6">
        <div className="max-w-none text-[#100f0f]">
          {/* ki journal */}
          <h2 className="text-xl font-bold mb-4">Wednesday, January 28, 2026 @ 7:45 PM</h2>
          {/* horizontal rule */}
          <hr className="my-4 border-t border-[#100f0f]" />
          <div className="flex justify-center mb-6">
            <Image 
              src="/assets/terra-ki-connection.png" 
              alt="How it is all connected - terra feeds into Ki, terra is ki" 
              width={800} 
              height={600}
              className="w-full max-w-3xl h-auto"
            />
          </div>
          {/* horizontal rule */}
          <hr className="my-4 border-t border-[#100f0f]" />
          {/* previous entry */}
          <h2 className="text-xl font-bold mb-4">Tuesday, January 27, 2026 @ 2:07 pm</h2>
          {/* horizontal rule */}
          <hr className="my-4 border-t border-[#100f0f]" />
          <p className="text-lg lg:text-xl leading-relaxed">
            <br/> all i want to do is build &
            <br/> share what i am learning.
            <br/>
            <br/> so this will be my ki journal
            <br/> building & sharing ki.
          </p>
        </div>
      </main>
    </div>
  );
}
