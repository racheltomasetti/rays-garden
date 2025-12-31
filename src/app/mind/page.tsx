"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import { poppins } from "@/app/fonts";
import Image from "next/image";

export default function MindPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: "var(--bg)" }}>
      <Image
        src="/assets/red-flowers.png"
        alt="Red flowers"
        width={175}
        height={175}
        className="object-contain"
      />
    </div>
  );
}

