"use client";

import { useEffect, useState } from "react";
import { KanbanData } from "@/app/types/kanban";
import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  const [kanbanData, setKanbanData] = useState<KanbanData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/kanban.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load kanban data");
        }
        return response.json();
      })
      .then((data: KanbanData) => {
        setKanbanData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-[var(--tx-2)] italic">Loading...</p>
      </div>
    );
  }

  if (error || !kanbanData) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-[var(--tx-2)] italic">
          Error loading kanban board: {error}
        </p>
      </div>
    );
  }

  // Filter cards by status
  const todoCards = kanbanData.cards.filter((card) => card.status === "todo");
  const doingCards = kanbanData.cards.filter((card) => card.status === "doing");
  const doneCards = kanbanData.cards.filter((card) => card.status === "done");

  return (
    <div className="w-full space-y-6">
      {/* Color Key */}
      <div className="flex flex-wrap items-center justify-center gap-4 pb-4 border-b border-[var(--ui-2)]">
        <span className="text-sm font-semibold text-[var(--tx-2)] italic">
          Projects:
        </span>
        {Object.entries(kanbanData.projects).map(([key, project]) => (
          <a
            key={key}
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer group relative"
            title={project.projectDescription}
          >
            <div
              className="w-4 h-4 rounded border-2"
              style={{ backgroundColor: `var(--${project.colorClass})` }}
            />
            <span className="text-sm text-[var(--tx)] hover:underline">
              {project.name}
            </span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[var(--ui-3)] text-[var(--tx)] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {project.projectDescription}
            </span>
          </a>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KanbanColumn
          title="to do"
          cards={todoCards}
          projects={kanbanData.projects}
        />
        <KanbanColumn
          title="NOW"
          cards={doingCards}
          projects={kanbanData.projects}
        />
        <KanbanColumn
          title="done"
          cards={doneCards}
          projects={kanbanData.projects}
        />
      </div>
    </div>
  );
}
