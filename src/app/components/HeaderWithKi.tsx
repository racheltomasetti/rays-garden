"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";

export default function HeaderWithKi() {
  const { theme } = useTheme();
  const kiImage =
    theme === "dark" ? "/assets/ki-dark.png" : "/assets/ki-light.png";

  return (
    <div className="flex justify-center">
      <Link href="/garden" className="cursor-pointer hover:opacity-80 transition-opacity">
        <Image
          src={kiImage}
          alt="Ki"
          width={75}
          height={75}
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}
