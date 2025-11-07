"use client";
import Image from "next/image";

export default function StickyNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg)] border-b border-[var(--ui-2)] backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo on the left */}
          <div className="flex justify-center">
            <Image
              src="/icon.png"
              alt="ki logo"
              width={40}
              height={40}
              className="rounded-full animate-bob"
              priority
            />
          </div>

          {/* Navigation links on the right */}
          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection("what-is-ki")}
              className="text-xs md:text-base text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors duration-200 font-medium"
            >
              what is ki
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-xs md:text-base text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              how it works
            </button>
            <button
              onClick={() => scrollToSection("about-the-builder")}
              className="text-xs md:text-base text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors duration-200 font-medium whitespace-nowrap"
            >
              about the builder
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
