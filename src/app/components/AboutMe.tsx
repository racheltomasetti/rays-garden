import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-4" aria-labelledby="about-me-heading">
      <div className="rounded-2xl border border-[#100f0f]/15 bg-[#f6f1e6]/40 p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-4 text-[#100f0f] text-center">
          <h2 id="about-me-heading" className="text-2xl font-bold">
            welcome!
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            my name is ray and i am building ki, a toolkit for the{" "}
            <Link
              href="https://ai.hubermanlab.com/s/CXLLsQOw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terra)] font-bold hover:underline"
            >
              Self
            </Link>
            . in may 2023, i had no purpose or direction & knew something needed to change. i started journaling, running, building. i stopped scrolling, overthinking, obsessing.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            i began discovering the power of the mind & now all i want to do is <em>unlock it</em>. this website is a glimpse into my mind as i do so.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            <strong>current focus:{" "}
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
