import Image from "next/image";
export default function NOW() {
  return (
    <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm">
      <div className="flex flex-col items-center py-3">
        <Image
          src="/story/media/photos/future-is-now.jpg"
          alt="The future is now"
          width={600}
          height={400}
          quality={95}
          className="rounded-md"
        />

        {/* Quote */}
        <div className="text-center py-4 max-w-2xl mx-auto">
          <p className="text-base mt-4 text-[var(--tx-2)] italic">
            [
            <span className="font-bold text-[var(--accent-2)]">
              katherine anne porter
            </span>{" "}
            ~{" "}
            <span className="font-bold text-[var(--accent)]">
              the future is now
            </span>
            ]
          </p>
          <br />
          <br />
          <h3 className="text-3xl leading-relaxed italic text-[var(--tx-2)]">
            and it may be that what we have is a world not on the verge of
            flying apart, but{" "}
            <span className="font-bold text-[var(--accent)]">
              an uncreated one
            </span>{" "}
            --- still in shapeless fragments waiting to be put together
            properly.
          </h3>
          <br />
          <br />
        </div>

        <br />
      </div>
      <h2 className="text-5xl text-[var(--tx)] italic text-center">
        · build in the{" "}
        <span className="font-bold text-[var(--accent-2)]">NOW</span>·
      </h2>
    </div>
  );
}
