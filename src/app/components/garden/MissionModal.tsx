"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { perpetua } from "@/app/fonts";

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionModal({ isOpen, onClose }: MissionModalProps) {
  const router = useRouter();

  const handleUnlockMind = () => {
    router.push("/mind");
  };

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
        className="relative w-[300px] rounded-lg shadow-2xl animate-scale-in flex items-center justify-center"
        style={{
          backgroundColor: "var(--bg)",
          border: "2px solid var(--ui-2)",
          minHeight: "100px",
          padding: "2rem 1.5rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        <div className="flex flex-col items-center justify-center space-y-4" style={{ color: "var(--tx)" }}>
          <h2
            className={`text-4xl font-bold text-center ${perpetua.className}`}
            style={{ color: "var(--accent)" }}
          >
            CORE MISSION
          </h2>

          <button
            onClick={handleUnlockMind}
            className={`text-4xl leading-relaxed font-semibold text-center cursor-pointer hover:opacity-80 transition-opacity rounded-lg whitespace-nowrap bg-foreground/5 ${perpetua.className}`}
            style={{ 
              color: "var(--tx)",
              border: "2px solid var(--ui-2)",
              padding: "0.75rem 1.5rem"
            }}
          >
            <em>unlock the mind</em>
          </button>
        </div>
      </div>
    </div>
  );
}
