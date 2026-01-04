"use client";

import { perpetua } from "@/app/fonts";

interface GardenEntryModalProps {
  isOpen: boolean;
}

export default function GardenEntryModal({
  isOpen,
}: GardenEntryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-1/2 bottom-[10%] z-40 animate-fade-in ${perpetua.className}`}
      style={{
        transform: "translateX(-50%)",
        transformOrigin: "center",
      }}
    >
      {/* Tooltip Container */}
      <div
        className="px-6 py-4 rounded-lg shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: "var(--bg)",
          border: "2px solid var(--ui-2)",
          color: "var(--tx)",
          opacity: 0.95,
        }}
      >
        <p className="text-center text-lg font-medium">
          Click on the <br /><span className="font-semibold italic" style={{ color: "var(--re)" }}>red lighthouse</span>
        </p>
      </div>
    </div>
  );
}
