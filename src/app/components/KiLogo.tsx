"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";

export default function KiLogo() {
  const { theme } = useTheme();
  const kiImage =
    theme === "dark" ? "/assets/ki-dark.png" : "/assets/ki-light.png";

  return (
    <div className="flex justify-center">
      <Image
        src={kiImage}
        alt="Ki"
        width={75}
        height={75}
        className="object-contain"
        priority
      />
    </div>
  );
}
