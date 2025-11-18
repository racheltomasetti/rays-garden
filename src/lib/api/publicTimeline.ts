import { createClient } from "@/lib/supabase/client";
import { Capture, MediaItem, Document, TimelineItem } from "@/types/timeline";

/**
 * Fetches all public timeline data from Supabase
 * Combines captures, media items, and documents into a single chronological timeline
 * @returns Array of timeline items sorted by timestamp (earliest to latest)
 */
export async function fetchPublicTimelineData(): Promise<TimelineItem[]> {
  const supabase = createClient();

  try {
    // Fetch public captures
    const { data: captures, error: capturesError } = await supabase
      .from("captures")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: true });

    if (capturesError) {
      console.error("Error fetching captures:", capturesError);
    }

    // Fetch public media
    const { data: media, error: mediaError } = await supabase
      .from("media_items")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: true });

    if (mediaError) {
      console.error("Error fetching media:", mediaError);
    }

    // Fetch public documents
    const { data: documents, error: documentsError } = await supabase
      .from("documents")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: true });

    if (documentsError) {
      console.error("Error fetching documents:", documentsError);
    }

    // Combine and transform into timeline items
    const timelineItems: TimelineItem[] = [
      ...(captures || []).map((c: Capture) => ({
        id: c.id,
        type: "capture" as const,
        timestamp: c.created_at,
        data: c,
      })),
      ...(media || []).map((m: MediaItem) => ({
        id: m.id,
        type: "media" as const,
        timestamp: m.original_date || m.created_at,
        data: m,
      })),
      ...(documents || []).map((d: Document) => ({
        id: d.id,
        type: "document" as const,
        timestamp: d.created_at,
        data: d,
      })),
    ];

    // Sort chronologically (earliest to latest)
    return timelineItems.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  } catch (error) {
    console.error("Error fetching public timeline data:", error);
    return [];
  }
}

/**
 * Gets the date range of the timeline (earliest to latest)
 * @param items Array of timeline items
 * @returns Object with start and end dates, or null if no items
 */
export function getTimelineRange(
  items: TimelineItem[]
): { start: Date; end: Date } | null {
  if (items.length === 0) return null;

  const timestamps = items.map((item) => new Date(item.timestamp).getTime());
  const start = new Date(Math.min(...timestamps));
  const end = new Date(Math.max(...timestamps));

  return { start, end };
}

/**
 * Formats a date for timeline display
 * @param date Date to format
 * @param format "short" or "long"
 * @returns Formatted date string
 */
export function formatTimelineDate(
  date: Date,
  format: "short" | "long" = "short"
): string {
  if (format === "short") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
