"use client";

import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Link
        href="https://www.instagram.com/unlock.ki/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
        aria-label="Visit our Instagram"
      >
        <Instagram className="w-7 h-7" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/createki/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
        aria-label="Visit our LinkedIn"
      >
        <Linkedin className="w-7 h-7" />
      </Link>
      <Link
        href="https://github.com/racheltomasetti"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors"
        aria-label="Visit our GitHub"
      >
        <Github className="w-7 h-7" />
      </Link>
    </div>
  );
}
