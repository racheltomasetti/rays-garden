"use client";

import { KeyRound } from "lucide-react";
import Link from "next/link";
import HorizontalLine from "../ui/HorizontalLine";
import SpinningKi from "./SpinningKi";

export default function Socials() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      <HorizontalLine />
      <br />
      {/* Unlock Ki */}
      <p className="text-lg text-[var(--tx)] italic">
        It&apos;s time to unlock Ki.
      </p>

      {/* next */}
      <Link
        href="https://www.unlock-ki.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
        aria-label="Unlock Ki"
      >
        <SpinningKi />
      </Link>
    </div>
  );
}
