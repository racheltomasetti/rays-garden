"use client";

import { useState, ReactNode } from "react";
import WordModal from "./WordModal";

interface ClickableWordProps {
  word: string;
  title?: string;
  definition: string | ReactNode;
  etymology?: string;
  additionalContext?: ReactNode;
  accentColor?: "accent" | "accent-2";
}

export default function ClickableWord({
  word,
  title,
  definition,
  etymology,
  additionalContext,
  accentColor = "accent",
}: ClickableWordProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorClass =
    accentColor === "accent" ? "var(--accent)" : "var(--accent-2)";

  return (
    <>
      <span
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer transition-all duration-200 hover:font-bold hover:underline decoration-2 underline-offset-2 inline-block"
        style={{
          "--hover-color": colorClass,
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = colorClass;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "";
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        aria-label={`Click to learn more about ${word}`}
      >
        {word}
      </span>

      <WordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        word={word}
        title={title}
        definition={definition}
        etymology={etymology}
        additionalContext={additionalContext}
      />
    </>
  );
}
