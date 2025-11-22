"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { poppins } from "@/app/fonts";

interface GardenEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GardenEntryModal({
  isOpen,
  onClose,
}: GardenEntryModalProps) {
  const router = useRouter();

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleEnterGarden = () => {
    router.push("/garden");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.33)" }}
    >
      {/* Modal Container */}
      <div
        className="relative w-11/12 max-w-md p-8 pb-12 rounded-lg shadow-2xl animate-scale-in"
        style={{
          backgroundColor: "var(--bg)",
          border: "2px solid var(--ui-2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        <div style={{ color: "var(--tx)" }}>
          <h2
            className={`text-4xl font-bold text-center ${poppins.className}`}
            style={{ color: "var(--accent)" }}
          >
            welcome
          </h2>

          <div className={`space-y-6 ${poppins.className}`}>
            <p
              className="text-2xl leading-relaxed italic text-center"
              style={{ color: "var(--tx)" }}
            >
              to my
              <br />
              <span
                className="font-bold text-3xl"
                style={{ color: "var(--accent-2)" }}
              >
                mind garden
              </span>
            </p>
          </div>

          {/* Enter Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleEnterGarden}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all ${poppins.className}`}
              style={{
                backgroundColor: "var(--accent)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              enter my mind
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
