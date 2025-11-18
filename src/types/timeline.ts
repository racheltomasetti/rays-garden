export type Capture = {
  id: string;
  type: string;
  note_type: string;
  transcription: string | null;
  file_url: string | null;
  created_at: string;
  log_date: string;
  cycle_day: number | null;
  is_public: boolean;
};

export type MediaItem = {
  id: string;
  file_url: string;
  file_type: "image" | "video";
  caption: string | null;
  tags: string[] | null;
  original_date: string;
  log_date: string | null;
  created_at: string;
  is_public: boolean;
};

export type Document = {
  id: string;
  title: string;
  content: object | null;
  created_at: string;
  updated_at: string;
  is_public: boolean;
  capture_id: string | null;
};

export type TimelineItem = {
  id: string;
  type: "capture" | "media" | "document";
  timestamp: string; // For sorting
  data: Capture | MediaItem | Document;
};