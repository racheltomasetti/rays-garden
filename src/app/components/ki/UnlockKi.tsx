"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/app/contexts/ModalContext";

const WAITLIST_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdJq1LRqrQNw7W9mLErJ1EQ86mYHq6iWw5Q3aCcNY_5O5qcDg/viewform?usp=dialog";

export default function UnlockKi() {
  const [showModal, setShowModal] = useState(false);
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    // Check if modal has already been shown in this session
    const hasBeenShown = sessionStorage.getItem("unlockKiModalShown");
    if (hasBeenShown === "true") {
      return;
    }

    // Set timer for 3 minutes (180000ms)
    const timer = setTimeout(() => {
      setShowModal(true);
      setIsModalOpen(true);
      sessionStorage.setItem("unlockKiModalShown", "true");
    }, 180000); // 3 minutes

    return () => clearTimeout(timer);
  }, [setIsModalOpen]);

  const handleClose = () => {
    setShowModal(false);
    setIsModalOpen(false);
  };

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-var(--bg) p-4"
      onClick={handleClose}
    >
      <div
        className="bg-[var(--bg-2)] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[var(--ui-2)]">
          <div className="flex-1">
            <h2 className="text-5xl font-semibold text-[var(--accent-2)] italic text-center">
              Unlock Ki
            </h2>
            <br />
            <p className="text-md text-[var(--tx-2)] italic mt-1 text-center">
              Join the waitlist to be among the first to experience Ki
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-[var(--ui)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[var(--tx-2)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-6 text-center">
            <p className="text-lg text-[var(--tx)] italic">
              Be part of the journey.
            </p>
            <p className="text-lg text-[var(--tx)] italic">
              Sign up for early access to Ki.
            </p>
            <br />
            <Link
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-semibold transition-colors italic hover:cursor-pointer"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
