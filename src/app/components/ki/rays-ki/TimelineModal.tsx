"use client";

import { useEffect } from "react";
import { TimelineItem, Capture, MediaItem, Document } from "@/types/timeline";
import { X } from "lucide-react";

type TimelineModalProps = {
  item: TimelineItem | null;
  onClose: () => void;
};

export default function TimelineModal({ item, onClose }: TimelineModalProps) {
  // Keyboard navigation (only Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;

      if (e.key === "Escape") {
        onClose();
      }
    };

    if (item) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const renderContent = () => {
    switch (item.type) {
      case "capture": {
        const capture = item.data as Capture;
        return (
          <div className="space-y-4">
            {capture.file_url && (
              <div className="bg-[var(--bg-2)] rounded-lg p-4">
                <audio controls className="w-full">
                  <source src={capture.file_url} type="audio/m4a" />
                  <source src={capture.file_url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            {capture.transcription && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--tx-2)] mb-2 uppercase italic">
                  Transcription
                </h3>
                <div className="bg-[var(--bg-2)] rounded-lg p-4">
                  <p className="text-[var(--tx)] leading-relaxed whitespace-pre-wrap italic">
                    {capture.transcription}
                  </p>
                </div>
              </div>
            )}
            {capture.note_type && (
              <div className="text-sm text-[var(--tx-2)] italic">
                Type: {capture.note_type}
              </div>
            )}
          </div>
        );
      }

      case "media": {
        const media = item.data as MediaItem;
        return (
          <div className="space-y-4">
            <div className="bg-[var(--bg-2)] rounded-lg overflow-hidden flex items-center justify-center">
              {media.file_type === "image" ? (
                <img
                  src={media.file_url}
                  alt={media.caption || "Media"}
                  className="max-h-[60vh] w-full object-contain"
                />
              ) : (
                <video
                  src={media.file_url}
                  controls
                  className="max-h-[60vh] w-full object-contain"
                />
              )}
            </div>
            {media.caption && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--tx-2)] mb-2 uppercase italic">
                  Caption
                </h3>
                <p className="text-[var(--tx)] italic">{media.caption}</p>
              </div>
            )}
            {media.tags && media.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {media.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[var(--bg-2)] text-[var(--accent-2)] text-sm rounded-full italic border border-[var(--accent-2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      }

      case "document": {
        const doc = item.data as Document;
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--accent)] text-center">
              {doc.title}
            </h2>
            <div className="bg-[var(--bg-2)] rounded-lg p-4">
              <p className="text-[var(--tx-2)] italic text-xl text-center">
                coming soon...
              </p>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case "capture":
        return "var(--accent)";
      case "media":
        return "var(--accent-2)";
      case "document":
        return "#D4A574";
      default:
        return "var(--tx-2)";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[var(--bg)] rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[var(--ui-2)]">
          <div className="flex-1">
            <p
              className="text-sm text-[var(--tx-2)] italic text-center"
              style={{ color: getTypeColor(item.type) }}
            >
              {formatTimestamp(item.timestamp)}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>

        {/* Footer */}
        <div className="flex items-center justify-center p-6 border-t border-[var(--ui-2)]">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[var(--bg-2)] hover:bg-[var(--ui)] text-[var(--tx)] transition-colors italic"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
