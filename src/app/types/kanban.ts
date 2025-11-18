export interface KanbanCard {
  id: string;
  title: string;
  linkUrl: string;
  description: string;
  processNotes: string;
  project: "builder-ki" | "website" | "ray-Ki" | "Ki";
  status: "todo" | "doing" | "done";
  dateCreated: string;
  dateCompleted: string | null;
}

export interface Project {
  name: string;
  colorClass: string;
  linkUrl: string;
  projectDescription: string;
}

export interface KanbanData {
  projects: {
    [key: string]: Project;
  };
  cards: KanbanCard[];
}
