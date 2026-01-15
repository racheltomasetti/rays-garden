"use client";

import Link from "next/link";
import SpinningKi from "./SpinningKi";

export default function Socials() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3">
      {/* Unlock Ki */}
      <p className="text-lg text-[var(--tx-2)] italic">Click </p>
      <Link
        href="https://www.unlock-ki.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
        aria-label="Unlock Ki"
      >
        <SpinningKi />
      </Link>
      <p className="text-lg text-[var(--tx-2)] italic">to access your Ki.</p>
      <br />
    </div>
  );
}
