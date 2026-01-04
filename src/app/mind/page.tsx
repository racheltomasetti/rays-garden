"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import iconImage from "@/app/icon.png";
import DecryptedText from "@/components/DecryptedText";

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
            text="welcome to my mind"
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
        <div className="w-3/4 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-left" style={{ color: "var(--text)" }}>MY 12 WHYS</h2>
          <ol className="space-y-4 list-decimal list-inside text-left" style={{ color: "var(--text)" }}>
          <li>HOW DO WE EXPERIENCE ALL THAT LIFE HAS TO OFFER?</li>
          <li>WHAT IS UNIVERSALLY TRUE?</li>
          <li>WHAT INSPIRES ME?</li>
          <li>WHEN DO I FEEL MOST ALIVE?</li>
          <li>WHAT DOES IT TAKE TO BUILD MINDSET?</li>
          <li>WHAT IS MY STORY?</li>
          <li>WHAT DO I WANT MY STORY TO BE?</li>
          <li>HOW DO I SHARE KI?</li>
          <li>WHAT FUTURE DO I ENVISION?</li>
          <li>ARE MY MIND, BODY, AND HEART IN ALIGNMENT?</li>
          <li>HOW CAN I UNLOCK THE MIND?</li>
          <li>DID I GIVE MY ALL TODAY?</li>
          </ol>
        </div>

      </div>
    </>
  );
}

