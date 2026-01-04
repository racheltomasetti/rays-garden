"use client";

import { useRouter } from "next/navigation";
import { poppins } from "@/app/fonts";

export default function EnterButton() {
  const router = useRouter();

  const handleEnterMind = () => {
    router.push("/mind");
  };

  return (
    <button
      onClick={handleEnterMind}
      className={`fixed left-1/2 bottom-[20%] px-8 py-3 rounded-lg font-semibold text-lg transition-all flex items-center gap-2 z-40 ${poppins.className}`}
      style={{
        backgroundColor: "var(--accent)",
        color: "white",
        transform: "translateX(-50%)",
        transformOrigin: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.9";
        e.currentTarget.style.transform = "translateX(-50%) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateX(-50%) scale(1)";
      }}
    >
      <span><em>into the mind</em></span>
    </button>
  );
}

