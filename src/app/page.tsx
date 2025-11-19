"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ClickableWord from "./components/ClickableWord";
import SpinningIconCircle from "./components/SpinningIconCircle";
import StickyNavigation from "./components/StickyNavigation";
import KanbanBoard from "./components/kanban/KanbanBoard";
import Acknowledgements from "./components/ki/Acknowledgements";
import HorizontalLine from "./components/ui/HorizontalLine";
import BobbingKi from "./components/ki/BobbingKi";
import Timeline from "./components/ki/rays-ki/Timeline";
import { useTheme } from "./contexts/ThemeContext";
import KiOrigin from "./components/ki/KiOrigin";
import WhatIsKi from "./components/ki/WhatIsKi";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Main Content Area */}
      <main className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <section className="space-y-8">
            {/* THE STORY OF BUILDING Ki | me */}
            <div className="relative flex items-center justify-center py-8">
              {/* Ki logo centered */}
              <div className="flex items-center justify-center animate-rotate-in">
                <Image
                  src={
                    theme === "light"
                      ? "/assets/ki-light.png"
                      : "/assets/ki-dark.png"
                  }
                  alt="Ki Logo"
                  width={theme === "light" ? 75 : 75}
                  height={theme === "light" ? 75 : 75}
                  priority
                />
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* ------------------------------------------------------------ */}
            {/* ------------------------------------------------------------ */}
            {/* what Ki is */}
            <div id="what-is-ki" className="space-y-12">
              <KiOrigin />
              <WhatIsKi />
            </div>

            {/* HOW Ki WORKS */}
            <div id="how-it-works" className="space-y-6">
              <Timeline />
            </div>

            {/* BUILDING Ki */}
            <div id="about-the-builder" className="space-y-6">
              <div className="space-y-6">
                <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm">
                  <HorizontalLine />
                  <br />
                  <p className="text-xl leading-relaxed text-[var(--tx)] opacity-90 italic text-center">
                    · here you will find the living build documentation for Ki ·
                  </p>
                  <br />
                  <HorizontalLine />
                  <br />
                  <KanbanBoard />
                </div>
              </div>
            </div>

            {/* Thank you to everyone who has been a part of this journey. */}
            <Acknowledgements />

            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-base italic text-[var(--tx-2)] leading-none">
                built with
              </span>
              <div className="flex items-center">
                <Image
                  src={
                    theme === "light"
                      ? "/assets/ki-light.png"
                      : "/assets/ki-dark.png"
                  }
                  alt="Ki"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={scrollToTop} className="cursor-pointer">
                <BobbingKi />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
