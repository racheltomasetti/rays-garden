"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import iconImage from "@/app/icon.png";
import DecryptedText from "@/app/components/DecryptedText";

export default function MindPage() {
  const { theme } = useTheme();
  const iconSize = 75;

  return (
    <>
      <style jsx>{`
        @keyframes bob {
          0%, 100% {
            transform: translate(-50%, -20%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -20%) translateY(-8px);
          }
        }
        .bobbing {
          animation: bob 4s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen w-full flex flex-col items-center justify-start pt-8 md:pt-12" style={{ backgroundColor: "var(--bg)" }}>
        <div className="relative">
          <Image
            src="/assets/red-flowers.png"
            alt="Red flowers"
            width={88}
            height={88}
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
        <hr className="w-3/4 mt-8 mb-8" style={{ borderColor: "var(--text)", opacity: 0.3 }} />
        <div style={{ width: "100%", overflow: "hidden", display: "flex", justifyContent: "center" }}>
          <DecryptedText
            text="Welcome to Ki"
            speed={80}
            animateOn="view"
            sequential={true}
            revealDirection="start"
            className="italic text-3xl mb-8 font-medium"
            encryptedClassName="italic text-3xl mb-8 font-medium"
            parentClassName="block"
            style={{ 
              color: "var(--text)", 
              overflow: "hidden", 
              width: "fit-content", 
              minWidth: "fit-content",
              paddingRight: "4px",
              textRendering: "optimizeLegibility",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          />
        </div>
        <hr className="w-3/4 mt-8 mb-8" style={{ borderColor: "var(--text)", opacity: 0.3 }} />
        <div className="w-3/4 max-w-2xl flex justify-center">
          <a
            href="/mind/12-favorite-problems"
            className="px-8 py-4 text-xl font-bold rounded-lg hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "var(--accent)",
              color: "#DAD8CE"
            }}
          >
            12 Favorite Problems
          </a>
        </div>

      </div>
    </>
  );
}

