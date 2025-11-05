"use client";

import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface WordModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: string;
  title?: string;
  definition: string | ReactNode;
  etymology?: string;
  additionalContext?: ReactNode;
}

export default function WordModal({
  isOpen,
  onClose,
  word,
  title,
  definition,
  etymology,
  additionalContext,
}: WordModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render modal using portal to avoid nesting issues
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal content */}
      <div
        className="relative bg-[var(--bg-2)] border border-[var(--ui-2)] rounded-lg shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[var(--bg-2)] border-b border-[var(--ui-2)] px-6 py-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[var(--accent)] italic">
            {title || word}
          </h3>
          <button
            onClick={onClose}
            className="text-[var(--tx-2)] hover:text-[var(--tx)] transition-colors text-2xl leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">
          {/* Definition */}
          <div>
            <h4 className="text-sm uppercase tracking-wide text-[var(--tx-3)] mb-2 font-semibold">
              Definition
            </h4>
            <div className="text-base leading-relaxed text-[var(--tx)]">
              {definition}
            </div>
          </div>

          {/* Etymology */}
          {etymology && (
            <div>
              <h4 className="text-sm uppercase tracking-wide text-[var(--tx-3)] mb-2 font-semibold">
                Etymology
              </h4>
              <p className="text-base leading-relaxed text-[var(--tx-2)] italic">
                {etymology}
              </p>
            </div>
          )}

          {/* Additional Context */}
          {additionalContext && (
            <div>
              <h4 className="text-sm uppercase tracking-wide text-[var(--tx-3)] mb-2 font-semibold">
                Context
              </h4>
              <div className="text-base leading-relaxed text-[var(--tx)]">
                {additionalContext}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-2)] border-t border-[var(--ui-2)] px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:opacity-90 transition-opacity font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
