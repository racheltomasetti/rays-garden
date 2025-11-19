import BobbingKi from "./BobbingKi";
import Image from "next/image";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function WhatIsKi() {
  const { theme } = useTheme();
  return (
    <div className="space-y-6">
      {/* What Ki Does */}
      <div className="bg-[var(--bg)] rounded-lg p-6 md:p-8 space-y-4 text-center">
        <h3 className="text-2xl font-bold text-[var(--accent)]">
          AI toolkit for the <span className="italic">Self</span>
        </h3>
        <p className="text-xl italic leading-relaxed text-[var(--tx)]">
          Explore, Create, & Connect.
        </p>
        {/* Flow of Knowledge */}
        <div className="py-6 flex flex-col items-center justify-center gap-2 text-base text-lg">
          <span className="text-[var(--tx)]">
            <span className="italic">Thoughts</span>
          </span>
          <span className="text-[var(--accent)]">↓</span>
          <span className="text-[var(--tx)] italic font-semibold">
            Knowledge
          </span>
          <span className="text-[var(--accent)]">↓</span>
          <span className="text-[var(--tx)] italic font-bold">Wisdom</span>
        </div>
        <p className="text-2xl font-bold italic text-[var(--accent)]">
          Where mind and body are one.
        </p>
        <br />
        {/* merge */}
        <Image
          src={
            theme === "light"
              ? "/assets/merge-light.png"
              : "/assets/merge-dark.png"
          }
          alt="merge"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
      {/* The Goldilocks Zone */}
      <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm space-y-4 text-center">
        <h3 className="text-3xl text-[var(--accent)]">The Sweet Spot</h3>
        <p className="text-lg leading-relaxed text-[var(--tx)]">
          Two of our most powerful tools—
          <span className="italic font-bold">mind</span> and{" "}
          <span className="italic font-bold">technology</span>—hold unlimited
          potential.
        </p>
        <p className="text-lg leading-relaxed text-[var(--tx-2)]">
          But the mind can spiral into{" "}
          <span className="italic">overthinking</span> and{" "}
          <span className="italic">disconnection</span>. Technology can{" "}
          <span className="italic">fragment attention </span> and{" "}
          <span className="italic">replace human agency</span>.
        </p>
        <p className="text-lg leading-relaxed text-[var(--tx)] italic">
          Ki lives in the{" "}
          <span className="font-semibold">
            Goldilocks zone: utilizing technology{" "}
            <span className="text-[var(--accent)]"> to become superhuman.</span>
          </span>{" "}
        </p>
        <br />
      </div>
    </div>
  );
}
