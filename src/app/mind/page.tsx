"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import { poppins } from "@/app/fonts";
import Image from "next/image";
import iconImage from "@/app/icon.png";

export default function MindPage() {
  const { theme } = useTheme();
  const iconSize = 150;

  return (
    <>
      <style jsx>{`
        @keyframes bob {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
        .bobbing {
          animation: bob 4s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen w-full flex flex-col items-center justify-center" style={{ backgroundColor: "var(--bg)" }}>
        <p className="italic text-xl mb-8" style={{ color: "var(--text)" }}>welcome into my mind</p>
        <div className="relative">
          <Image
            src="/assets/red-flowers.png"
            alt="Red flowers"
            width={175}
            height={175}
            className="object-contain"
          />
          <div 
            className="absolute left-1/2 top-1/2 bobbing" 
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
          >
            <Image
              src={iconImage}
              alt="Icon"
              width={iconSize}
              height={iconSize}
              className="object-contain opacity-85 w-full h-full"
            />
          </div>
        </div>
        <p className="italic text-lg mt-8" style={{ color: "var(--text)" }}>let&apos;s have some fun, shall we?</p>
      </div>
    </>
  );
}

