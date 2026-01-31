"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const LEFT_LINKS = [
  { href: "https://github.com/racheltomasetti", label: "GitHub", Icon: Github },
  { href: "https://www.instagram.com/raybuilds021/", label: "Instagram", Icon: Instagram },
] as const;

const RIGHT_LINKS = [
  { href: "https://www.linkedin.com/in/racheltomasetti/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@raybuilds021", label: "YouTube", Icon: Youtube },
] as const;

export default function Connect() {
  return (
    <div className="flex items-center justify-center gap-5">
      {LEFT_LINKS.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#100f0f] hover:opacity-70 transition-opacity"
          aria-label={label}
        >
          <Icon size={22} strokeWidth={1.5} />
        </Link>
      ))}
      <Link
        href="https://www.unlock-ki.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#100f0f] hover:opacity-70 transition-opacity flex items-center justify-center"
        aria-label="Unlock Ki"
      >
        <Image
          src="/assets/logo-dark.png"
          alt="Unlock Ki"
          width={28}
          height={28}
          className="object-contain"
        />
      </Link>
      {RIGHT_LINKS.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#100f0f] hover:opacity-70 transition-opacity"
          aria-label={label}
        >
          <Icon size={22} strokeWidth={1.5} />
        </Link>
      ))}
    </div>
  );
}
