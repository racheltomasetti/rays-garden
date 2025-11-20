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
            {/* Info icon in top right */}
            <button
              onClick={handleOpenSiteNavModal}
              className="absolute top-4 right-0 p-2 rounded-lg hover:bg-[var(--ui)] transition-colors"
              aria-label="Site navigation guide"
            >
              <Info className="w-5 h-5 text-[var(--tx-2)] hover:text-[var(--accent)] transition-colors" />
            </button>

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
    <SiteNavModal isOpen={isSiteNavModalOpen} onClose={handleCloseSiteNavModal} />
    </>
  );
}
