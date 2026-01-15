import Image from "next/image";
export default function LOVE() {
  return (
    <>
      {/* miyagi your mind */}
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

      <div className="text-center py-4 max-w-2xl mx-auto">
        <h3 className="text-xl leading-relaxed italic font-bold text-[var(--tx)]">
          <span className="text-[var(--accent-2)]">
            when we strive to become better than we are, everything around us
            becomes better too ...
          </span>{" "}
          <span className="text-[var(--accent)]">
            and when we love, we always strive to become better than we are.
          </span>
        </h3>
        <p className="text-base mt-4 text-[var(--tx-2)] italic">
          [paulo coelho ~ the alchemist]
        </p>
      </div>
    </>
  );
}
