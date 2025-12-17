"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BobbingKi from "./ki/BobbingKi";
import { useModal } from "@/app/contexts/ModalContext";
import { Info } from "lucide-react";
import SiteNavModal from "./ki/SiteNavModal";

export default function StickyNavigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isSiteNavModalOpen, setIsSiteNavModalOpen] = useState(false);
  const { isModalOpen, setIsModalOpen } = useModal();

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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const getButtonClassName = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `text-md md:text-lg lg:text-xl transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? "text-[var(--accent)] font-bold"
        : "text-[var(--tx-2)] hover:text-[var(--accent)] font-medium hover:font-bold"
    }`;
  };

  const handleOpenSiteNavModal = () => {
    setIsSiteNavModalOpen(true);
    setIsModalOpen(true);
  };

  const handleCloseSiteNavModal = () => {
    setIsSiteNavModalOpen(false);
    setIsModalOpen(false);
  };

  if (isModalOpen && !isSiteNavModalOpen) return null;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[var(--bg)] border-b border-[var(--ui-2)] backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center py-4 gap-3 relative">
            {/* Info icon in top right with tooltip */}
            <div className="absolute top-4 right-0 group">
              <button
                onClick={handleOpenSiteNavModal}
                className="p-2 rounded-lg hover:bg-[var(--ui)] transition-colors relative"
                aria-label="Site navigation guide"
              >
                <Info className="w-5 h-5 text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors" />

                {/* Tooltip */}
                <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-[var(--accent)] text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    Site tips & tricks
                    {/* Arrow */}
                    <div
                      className="absolute bottom-full right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent"
                      style={{ borderBottomColor: "var(--accent)" }}
                    />
                  </div>
                </div>
              </button>
            </div>

            {/* Logo in the center */}
            <button onClick={scrollToBottom} className="cursor-pointer">
              <BobbingKi />
            </button>

            {/* Navigation links centered below */}
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <button
                onClick={() => scrollToSection("what-is-ki")}
                className={getButtonClassName("what-is-ki")}
              >
                What is Ki
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className={getButtonClassName("how-it-works")}
              >
                How Ki Works
              </button>
              <button
                onClick={() => scrollToSection("about-the-builder")}
                className={getButtonClassName("about-the-builder")}
              >
                Building Ki
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SiteNavModal
        isOpen={isSiteNavModalOpen}
        onClose={handleCloseSiteNavModal}
      />
    </>
  );
}
