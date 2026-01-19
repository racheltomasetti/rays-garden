"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";

export default function MindPage() {
  const { theme } = useTheme();
  const logoImage =
    theme === "dark" ? "/assets/logo-light.png" : "/assets/logo-dark.png";

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Link
        href="/"
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src={logoImage}
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}

