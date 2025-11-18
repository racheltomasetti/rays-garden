"use client";

import Image from "next/image";
import ClickableWord from "./components/ClickableWord";
import SpinningIconCircle from "./components/SpinningIconCircle";
import StickyNavigation from "./components/StickyNavigation";
import KanbanBoard from "./components/kanban/KanbanBoard";
import Acknowledgements from "./components/ki/Acknowledgements";
import HorizontalLine from "./components/ui/HorizontalLine";
import BobbingKi from "./components/ki/BobbingKi";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Sticky Navigation */}
      <StickyNavigation />

      {/* Main Content Area */}
      <main className="w-full px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <section className="space-y-8">
            <div className="flex justify-center">
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
            </div>
            {/* THE STORY OF BUILDING Ki | me */}
            <div className="relative flex items-center justify-center py-8">
              {/* Ki header centered in the circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-8xl font-bold italic text-[var(--accent)] text-center whitespace-nowrap">
                  Ki
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
            </div>
            {/* ------------------------------------------------------------ */}
            {/* ------------------------------------------------------------ */}
            {/* ------------------------------------------------------------ */}
            {/* what Ki is */}
            <div id="what-is-ki" className="space-y-12">
              {/* Header */}
              {/* <h2 className="text-6xl font-bold text-[var(--accent)] italic text-center">
                what is <span className="font-bold">Ki</span>?
              </h2> */}

              {/* Etymology - Origin of ki */}
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm space-y-6">
                  <h3 className="text-3xl font-bold text-[var(--accent-2)] italic">
                    the origin of Ki
                  </h3>

                  <p className="text-xl leading-relaxed text-[var(--tx-2)] italic">
                    Ki (氣/気) is an ancient East Asian concept meaning life
                    force, vital energy, breath. it is the invisible current
                    that flows through all living things—the essence of being
                    alive and conscious.
                  </p>

                  <p className="text-xl leading-relaxed text-[var(--tx-2)] italic">
                    <span className="font-bold text-[var(--accent)]">
                      in traditional practice, cultivating Ki means harmonizing
                      mind, body, and spirit.
                    </span>{" "}
                    it is developed through presence, breath, and intentional
                    practice. when your Ki flows freely, you are aligned with
                    your true nature.
                  </p>

                  <p className="text-xl leading-relaxed text-[var(--tx-2)] italic">
                    this is exactly what the tool does: it helps you cultivate
                    your life force through daily practice, harmonizing your
                    mind and body, unlocking the unlimited power that has always
                    existed within you.
                  </p>
                </div>
              </div>
              <br />
            </div>
            <div className="flex justify-center">
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
            </div>
            {/* HOW Ki WORKS */}
            <div id="how-it-works" className="space-y-6">
              {/* <h2 className="text-6xl font-bold text-[var(--accent)] italic text-center">
                how Ki works
              </h2> */}
            </div>
            <div className="flex justify-center">
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
            </div>
            {/* BUILDING Ki */}
            <div id="about-the-builder" className="space-y-6">
              <div className="space-y-6">
                {/* <p className="text-6xl leading-relaxed text-[var(--accent)] font-bold italic text-center max-w-2xl mx-auto mb-6">
                  building Ki
                </p> */}
                <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm">
                  <HorizontalLine />
                  <br />
                  <p className="text-2xl leading-relaxed text-[var(--tx)] opacity-90 italic text-center">
                    · here you will find the living build documentation for Ki ·
                  </p>
                  <br />
                  <HorizontalLine />
                  <br />
                  <KanbanBoard />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
            </div>
            {/* Thank you to everyone who has been a part of this journey. */}
            <Acknowledgements />
            <div className="flex justify-center">
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
              <BobbingKi />
            </div>
            <h1 className="text-base mt-4 text-[var(--tx-2)]  text-center italic">
              built with{" "}
              <span className="font-bold text-[var(--accent)]">Ki</span>
            </h1>
            <BobbingKi />
          </section>
        </div>
      </main>
    </div>
  );
}
