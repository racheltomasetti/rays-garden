"use client";

import { KanbanCard as KanbanCardType, Project } from "@/app/types/kanban";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
  title: string;
  cards: KanbanCardType[];
  projects: { [key: string]: Project };
}

export default function KanbanColumn({
  title,
  cards,
  projects,
}: KanbanColumnProps) {
  return (
    <div className="flex flex-col min-w-[280px] flex-1">
      {/* Column Header */}
      <div className="bg-[var(--ui)] rounded-t-lg p-4 border-b-2 border-[var(--ui-2)] shadow-sm">
        <h3 className="text-2xl italic text-[var(--tx)] text-center">
          {title}
        </h3>
        <p className="text-xs text-[var(--tx-3)] text-center mt-1">
          {cards.length} {cards.length === 1 ? "task" : "tasks"}
        </p>
      </div>

      {/* Cards Container */}
      <div className="bg-[var(--ui)] rounded-b-lg p-4 space-y-3 min-h-[200px] flex-1">
        {cards.length === 0 ? (
          <div className="flex items-center justify-center h-full text-[var(--tx-3)] italic text-sm">
            No tasks
          </div>
        ) : (
          cards.map((card) => (
            <KanbanCard
              key={card.id}
              card={card}
              project={projects[card.project]}
            />
          ))
        )}
      </div>
    </div>
  );
}
