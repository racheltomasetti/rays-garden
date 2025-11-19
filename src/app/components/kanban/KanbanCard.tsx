"use client";

import { useState } from "react";
import { KanbanCard as KanbanCardType, Project } from "@/app/types/kanban";

interface KanbanCardProps {
  card: KanbanCardType;
  project: Project;
}

export default function KanbanCard({ card, project }: KanbanCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDateTime = (dateString: string | null) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Get the color class for this project (with fallback)
  const colorClass = project?.colorClass || "accent";
  const borderColorStyle =
    colorClass === "accent"
      ? "border-[var(--accent)]"
      : colorClass === "accent-2"
      ? "border-[var(--accent-2)]"
      : colorClass === "accent-3"
      ? "border-[var(--accent-3)]"
      : colorClass === "accent-4"
      ? "border-[var(--accent-4)]"
      : `border-[var(--${colorClass})]`;

  return (
    <div
      className={`
        bg-[var(--bg-2)]
        border-2
        ${borderColorStyle}
        rounded-md
        p-4
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-lg
        hover:bg-[var(--ui)]
        ${isExpanded ? "shadow-lg bg-[var(--ui)]" : ""}
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Header - Always Visible */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-[var(--tx)]">{card.title}</h3>
      </div>
      <br />
      {/* Dates */}
      <div className="text-[var(--tx-2)] italic">
        Created at: {formatDateTime(card.dateCreated)}
      </div>
      {card.dateCompleted && (
        <div className="text-green-700 italic">
          <span className="font-semibold">Completed at:</span>{" "}
          {formatDateTime(card.dateCompleted)}
        </div>
      )}

      {/* Expansion Indicator */}
      <div className="flex justify-center mt-2">
        <svg
          className={`w-4 h-4 text-[var(--tx-3)] transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 space-y-4 border-t border-[var(--ui-2)] pt-4">
          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
              Description
            </h4>
            <p className="text-sm text-[var(--tx-2)] leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Process Notes */}
          {card.processNotes && (
            <div>
              <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                Process Notes
              </h4>
              <p className="text-sm text-[var(--tx-2)] leading-relaxed italic">
                {card.processNotes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
