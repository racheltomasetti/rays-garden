"use client";

import { useEffect } from "react";
import { X, Info } from "lucide-react";
import { useModal } from "@/app/contexts/ModalContext";
import HorizontalLine from "../ui/HorizontalLine";
import BobbingKi from "./BobbingKi";
import SpinningKi from "./SpinningKi";

interface SiteNavModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteNavModal({ isOpen, onClose }: SiteNavModalProps) {
  const { setIsModalOpen } = useModal();

  const handleClose = () => {
    onClose();
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-[var(--bg-2)] rounded-xl shadow-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 md:space-y-8">
          {/* Quick Navigation */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <HorizontalLine />
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--accent)] text-center italic">
              Site Tips & Tricks
            </h3>
            <HorizontalLine />
            <div className="space-y-2 sm:space-y-3 text-[var(--tx)]">
              <div className="bg-[var(--ui-2)] rounded-lg p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                <p className="font-semibold text-sm sm:text-base text-[var(--accent-2)] text-center">
                  Quick Navigation
                </p>
                <p className="text-sm sm:text-base text-[var(--tx-2)] text-center">
                  Click{" "}
                  <span className="inline-flex align-middle scale-75 sm:scale-100">
                    <BobbingKi />
                  </span>{" "}
                  to quickly navigate between sections.
                </p>
              </div>
              <div className="bg-[var(--ui-2)] rounded-lg p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                <p className="font-semibold text-sm sm:text-base text-[var(--accent-2)] text-center">
                  Dive Deeper
                </p>
                <p className="text-sm sm:text-base text-[var(--tx-2)] text-center">
                  Click{" "}
                  <span className="inline-flex align-middle scale-75 sm:scale-100">
                    <SpinningKi />
                  </span>{" "}
                  to explore more about Ki.
                </p>
              </div>
              <div className="bg-[var(--ui-2)] rounded-lg p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                <p className="font-semibold text-sm sm:text-base text-[var(--accent-2)] text-center">
                  Keyboard Shortcuts
                </p>
                <p className="text-sm sm:text-base text-[var(--tx-2)] text-center">
                  On desktop, press <span className="font-semibold">D</span> or{" "}
                  <span className="font-semibold">L</span> to toggle light |
                  dark mode.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-[var(--tx-2)] italic">
              Press <span className="font-semibold">ESC</span> or click outside
              to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
