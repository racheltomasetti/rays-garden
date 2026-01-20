"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";

export default function PostHeader() {
  const { theme } = useTheme();
  const kiImage =
    theme === "dark" ? "/assets/ki-dark.png" : "/assets/ki-light.png";

  return (
    <div className="border-b border-[var(--ui-2)]">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          <Link
            href="/"
            className="text-[var(--tx)] hover:font-bold transition-colors inline-flex items-center gap-2"
          >
            ← back
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src={kiImage}
              alt="Ki"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <div className="w-16"></div>
        </div>
      </div>
    </div>
  );
}
