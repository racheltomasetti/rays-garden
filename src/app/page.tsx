import HeaderWithKi from "./components/HeaderWithKi";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 -mt-1 -mb-1">
          <HeaderWithKi />
        </div>
      </header>

      {/* Stream of Consciousness Content */}
      <main className="w-full px-6 py-6">
        <div className="max-w-none text-[var(--tx)]">
          {/* ki journal */}
          <h2 className="text-xl font-bold mb-4">Tuesday, January 27, 2026 @ 2:07 pm</h2>
          {/* horizontal rule */}
          <hr className="my-4 border-t border-[var(--ui-2)]" />
          <p className="text-lg lg:text-xl leading-relaxed">
            i have been trying to figure out what this website is going to be. 
            <br/>i keep restarting and restructuring. 
            <br/>nothing ever feels right.
            <br/> all i want to do is build and capture the process. 
            <br/> to share what i am learning as i am building.
            <br/>
            <br/> but for some reason, i can&apos;t seem to get out of my damn head.
            <br/> but then i had a thought today: 
            <br/> <em>what would life look like if i stopped playing scared and started sharing as if i wanted to be heard?</em>
            <br/>
            <br/> because i am dying to be heard.
            <br/> it took me so long to finally share what i&apos;ve been building.
            <br/> to share ki.
            <br/> but i am still holding back.
            <br/> because i am afraid. 
            <br/> but afraid of what? of being heard, seen?
            <br/>
            <br/> no more of this. 
            <br/>i&apos;m tired of feeling this way. 
            <br/> decided this will be my ki journal.
            <br/> a stream of consciousness while building ki.
          </p>
        </div>
      </main>
    </div>
  );
}
