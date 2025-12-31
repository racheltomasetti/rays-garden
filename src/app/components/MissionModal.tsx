"use client";

import { useEffect } from "react";
import { poppins } from "@/app/fonts";

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionModal({ isOpen, onClose }: MissionModalProps) {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.33)" }}
    >
      {/* Modal Container */}
      <div
        className="relative w-11/12 max-w-md rounded-lg shadow-2xl animate-scale-in flex items-center justify-center"
        style={{
          backgroundColor: "var(--bg)",
          border: "2px solid var(--ui-2)",
          minHeight: "200px",
          padding: "2rem 1.5rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center space-y-4" style={{ color: "var(--tx)" }}>
          <h2
            className={`text-3xl font-bold text-center ${poppins.className}`}
            style={{ color: "var(--accent)" }}
          >
            CORE MISSION
          </h2>

          <p
            className={`text-3xl leading-relaxed italic text-center ${poppins.className}`}
            style={{ color: "var(--tx)" }}
          >
            unlock the mind 
          </p>
        </div>

        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl transition-colors"
          style={{ color: "var(--tx-2)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--tx)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--tx-2)";
          }}
          aria-label="Close modal"
        >
          ×
        </button> */}
      </div>
    </div>
  );
}
