"use client";

import { useEffect } from "react";
import { X, Info } from "lucide-react";
import { useModal } from "@/app/contexts/ModalContext";
import HorizontalLine from "../ui/HorizontalLine";
import BobbingKi from "./BobbingKi";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-[var(--bg-2)] rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[var(--accent)] text-center">
              Site Navigation
            </h3>
            <HorizontalLine />
            <h3 className="text-xl font-semibold text-[var(--tx-2)] text-center italic">
              Tips & Tricks
            </h3>
            <HorizontalLine />
            <div className="space-y-3 text-[var(--tx)]">
              <div className="bg-[var(--ui-2)] rounded-lg p-4 space-y-2">
                <p className="font-semibold text-[var(--accent-2)] text-center">
                  Top to Bottom
                </p>
                <p className="text-[var(--tx-2)] text-center">
                  Click{" "}
                  <span className="inline-flex align-middle">
                    <BobbingKi />
                  </span>{" "}
                  at the top of the page to quickly scroll to the bottom.
                </p>
              </div>
              <div className="bg-[var(--ui-2)] rounded-lg p-4 space-y-2">
                <p className="font-semibold text-[var(--accent-2)] text-center">
                  Bottom to Top
                </p>
                <p className="text-[var(--tx-2)] text-center">
                  Click{" "}
                  <span className="inline-flex align-middle">
                    <BobbingKi />
                  </span>{" "}
                  at the bottom of the page to quickly scroll back to the top.
                </p>
              </div>
              <div className="bg-[var(--ui-2)] rounded-lg p-4 space-y-2">
                <p className="font-semibold text-[var(--accent-2)] text-center">
                  Keyboard Shortcuts
                </p>
                <p className="text-[var(--tx-2)] text-center">
                  On desktop, press <span className="font-semibold">D</span> or{" "}
                  <span className="font-semibold">L</span> to toggle light |
                  dark mode.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-[var(--tx-2)] italic">
              Press <span className="font-semibold">ESC</span> or click outside
              to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
