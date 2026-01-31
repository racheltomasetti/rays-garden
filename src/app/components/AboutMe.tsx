import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8" aria-labelledby="about-me-heading">
      <div className="rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-6">
        <div className="order-2 lg:order-1 flex-shrink-0 flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-3 lg:gap-4">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border border-[#100f0f]/15 shadow-md flex-shrink-0">
            <Image
              src="/assets/about-me-2.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 112px, 176px"
              priority
            />
          </div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border border-[#100f0f]/15 shadow-md flex-shrink-0">
            <Image
              src="/assets/about-me-3.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 112px, 176px"
            />
          </div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border border-[#100f0f]/15 shadow-md flex-shrink-0">
            <Image
              src="/assets/about-me.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 112px, 176px"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col gap-4 text-[#100f0f] text-center lg:text-left">
          <h2 id="about-me-heading" className="text-2xl font-bold">
            a bit about me
          </h2>
          <p className="text-lg leading-relaxed">
           hey! my name is ray and i am building ki, 
           <br/> an ai-powered toolkit for the{" "}
            <Link
              href="https://ai.hubermanlab.com/s/CXLLsQOw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terra)] font-bold hover:underline"
            >
              Self
            </Link>
            . 
           <br/>
           <br/> in may 2023, i was lost with no purpose or direction. 
           <br/> so i made the decision to change everything. 
           <br/> 
           <br/> i started journaling, running, learning, building. 
           <br/> i stopped scrolling, smoking (temporarily), overthinking, obsessing. 
          </p>
          <p className="text-lg leading-relaxed">
            through this process, i discovered the unlimited power of the mind. 
            <br/> and since then, have been obsessed with unlocking it.
            <br/>
            <br/>my mission is simple: <em>to unlock the mind.</em>
            <br/>how? <strong>by building ai tools for the</strong>{" "}
            <Link
              href="https://ai.hubermanlab.com/s/CXLLsQOw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terra)] font-bold hover:underline"
            >
              Self
            </Link>
            .
            <br/>
            <br/>this website is where i document the journey. 
            <br/><strong>current focus:{" "}
            <Link
              href="https://www.unlock-ki.com/terra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terra)] font-bold hover:underline"
            >
              terra
            </Link>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
