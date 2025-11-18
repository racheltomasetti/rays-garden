"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BobbingKi from "./ki/BobbingKi";

export default function StickyNavigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["what-is-ki", "how-it-works", "about-the-builder"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate height of the sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getButtonClassName = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `text-sm md:text-lg lg:text-2xl transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? "text-[var(--accent)] font-bold"
        : "text-[var(--tx-2)] hover:text-[var(--accent)] font-medium hover:font-bold"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg)] border-b border-[var(--ui-2)] backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center py-4 gap-3">
          {/* Logo in the center */}
          <div>
            <BobbingKi />
          </div>

          {/* Navigation links centered below */}
          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection("what-is-ki")}
              className={getButtonClassName("what-is-ki")}
            >
              what is Ki
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={getButtonClassName("how-it-works")}
            >
              how Ki works
            </button>
            <button
              onClick={() => scrollToSection("about-the-builder")}
              className={getButtonClassName("about-the-builder")}
            >
              building Ki
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
