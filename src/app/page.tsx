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
import Waitlist from "./components/ki/Waitlist";
import KiDemo from "./components/ki/KiDemo";
import Socials from "./components/ki/Socials";

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
            <HorizontalLine />

            {/* HOW Ki WORKS */}
            <div id="how-it-works" className="space-y-6">
              {/* KiDEMO goes here */}
              <KiDemo />
              <Timeline />
            </div>

            {/* BUILDING Ki */}
            <div id="about-the-builder" className="space-y-6">
              <div className="space-y-6">
                <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm">
                  <p className="text-3xl leading-relaxed text-[var(--accent-2)] opacity-90 font-semibold text-center italic">
                    Join us in building
                  </p>

                  <p className="text-6xl leading-relaxed text-[var(--accent-2)] opacity-90 text-center font-bold">
                    ~ • Ki • ~
                  </p>
                  <br />
                  <Socials />
                  <br />
                  <br />
                  <HorizontalLine />
                  <br />
                  <KanbanBoard />
                  <br />
                  <HorizontalLine />
                  <br />
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
