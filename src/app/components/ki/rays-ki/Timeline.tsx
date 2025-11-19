"use client";

import { useState, useEffect, useMemo } from "react";
import { TimelineItem } from "@/types/timeline";
import {
  fetchPublicTimelineData,
  getTimelineRange,
  formatTimelineDate,
} from "@/lib/api/publicTimeline";
import TimelineModal from "./TimelineModal";

type TimelineProps = {
  className?: string;
};

export default function Timeline({ className = "" }: TimelineProps) {
  // ============================================================
  // SPIRAL CONFIGURATION - Change these values to adjust spiral!
  // ============================================================
  const TOTAL_ROTATIONS = 11; // Number of complete rotations (try 5, 7, 11, etc.)
  const START_RADIUS = 180; // Desktop outer radius (earliest capture)
  const END_RADIUS = 30; // Desktop inner radius (most recent capture)
  // ============================================================

  const [items, setItems] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleTypes, setVisibleTypes] = useState<Set<string>>(
    new Set(["capture", "media", "document"])
  );
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Load data on mount
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchPublicTimelineData();
      setItems(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // Filter items based on visible types
  const filteredItems = useMemo(() => {
    return items.filter((item) => visibleTypes.has(item.type));
  }, [items, visibleTypes]);

  // Get date range for labels
  const dateRange = useMemo(() => {
    return getTimelineRange(filteredItems);
  }, [filteredItems]);

  const toggleType = (type: string) => {
    const newVisible = new Set(visibleTypes);
    if (newVisible.has(type)) {
      newVisible.delete(type);
    } else {
      newVisible.add(type);
    }
    setVisibleTypes(newVisible);
  };

  // Handle modal navigation
  const handleNavigation = (direction: "prev" | "next") => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (direction === "prev" && currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else if (
      direction === "next" &&
      currentIndex < filteredItems.length - 1
    ) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  // Calculate spiral position for an item based on time
  const getSpiralPosition = (item: TimelineItem, allItems: TimelineItem[]) => {
    if (allItems.length === 0 || !dateRange) return { x: 0, y: 0, angle: 0 };

    // Calculate time position (0 = earliest, 1 = most recent)
    const startTime = dateRange.start.getTime();
    const endTime = dateRange.end.getTime();
    const itemTime = new Date(item.timestamp).getTime();
    const timeProgress = (itemTime - startTime) / (endTime - startTime);

    // Spiral inward: outer (0) to inner (1)
    const angle = TOTAL_ROTATIONS * 2 * Math.PI * timeProgress; // Clockwise
    const radius = START_RADIUS - (START_RADIUS - END_RADIUS) * timeProgress;

    // Calculate x, y coordinates (clockwise from top)
    const x = radius * Math.sin(angle);
    const y = -radius * Math.cos(angle);

    return { x, y, angle, radius };
  };

  // Get color for item type
  const getItemColor = (type: string): string => {
    switch (type) {
      case "capture":
        return "var(--accent)"; // red
      case "media":
        return "var(--accent-2)"; // teal
      case "document":
        return "#D4A574"; // gold
      default:
        return "var(--ui-2)";
    }
  };

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="text-center py-16">
          <p className="text-[var(--tx-2)] italic">Loading timeline...</p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <div className="text-center py-16">
          <p className="text-[var(--tx-2)] italic">
            No public captures yet. The journey begins soon...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-[var(--accent)] italic mb-4">
          The Journey
        </h2>
        <p className="text-lg text-[var(--tx-2)] italic">
          Every capture, every moment, telling the story of Ki
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={() => toggleType("capture")}
          className={`px-4 py-2 rounded-lg transition-all italic ${
            visibleTypes.has("capture")
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--bg-2)] text-[var(--tx-2)] hover:bg-[var(--ui)]"
          }`}
        >
          Captures
        </button>
        <button
          onClick={() => toggleType("media")}
          className={`px-4 py-2 rounded-lg transition-all italic ${
            visibleTypes.has("media")
              ? "bg-[var(--accent-2)] text-white"
              : "bg-[var(--bg-2)] text-[var(--tx-2)] hover:bg-[var(--ui)]"
          }`}
        >
          Media
        </button>
        <button
          onClick={() => toggleType("document")}
          className={`px-4 py-2 rounded-lg transition-all italic ${
            visibleTypes.has("document")
              ? "bg-[#D4A574] text-white"
              : "bg-[var(--bg-2)] text-[var(--tx-2)] hover:bg-[var(--ui)]"
          }`}
        >
          Journals
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[var(--tx-2)] italic">
            No items match your filters. Try selecting different types.
          </p>
        </div>
      ) : (
        <>
          {/* Spiral Timeline */}
          <div className="w-full py-8 px-8">
            <div className="flex flex-col items-center">
              {/* Desktop: Larger spiral */}
              <div className="hidden md:block relative w-full max-w-[600px] h-[600px]">
                {/* Spiral guide circles (visual reference) */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="-200 -200 400 400"
                  style={{ overflow: "visible" }}
                >
                  {/* Draw spiral path */}
                  <path
                    d={(() => {
                      const steps = 1100; // Increased for smoother curves

                      let path = "";
                      for (let i = 0; i <= steps; i++) {
                        const progress = i / steps;
                        const angle = TOTAL_ROTATIONS * 2 * Math.PI * progress;
                        const radius =
                          START_RADIUS - (START_RADIUS - END_RADIUS) * progress;
                        const x = radius * Math.sin(angle);
                        const y = -radius * Math.cos(angle);

                        if (i === 0) {
                          path += `M ${x} ${y}`;
                        } else {
                          path += ` L ${x} ${y}`;
                        }
                      }
                      return path;
                    })()}
                    fill="none"
                    stroke="var(--ui-2)"
                    strokeWidth="1"
                    opacity="0.6"
                  />

                  {/* Data points */}
                  {filteredItems.map((item) => {
                    const pos = getSpiralPosition(item, filteredItems);
                    const color = getItemColor(item.type);
                    const isHovered = hoveredItem === item.id;

                    return (
                      <circle
                        key={item.id}
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? "10" : "6"}
                        fill={color}
                        className="cursor-pointer transition-all"
                        style={{
                          filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.2))",
                        }}
                        onClick={() => setSelectedItem(item)}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      />
                    );
                  })}

                  {/* Hover labels - render on top of everything */}
                  {filteredItems.map((item) => {
                    const pos = getSpiralPosition(item, filteredItems);
                    const isHovered = hoveredItem === item.id;

                    if (!isHovered) return null;

                    return (
                      <g key={`hover-${item.id}`}>
                        {/* Badge background - rectangle with hard edges */}
                        <rect
                          x={pos.x - 40}
                          y={pos.y - 32}
                          width="80"
                          height="20"
                          fill="var(--bg-2)"
                          stroke="var(--ui-2)"
                          strokeWidth="1"
                          className="pointer-events-none"
                          style={{
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                          }}
                        />
                        {/* Date text - centered vertically */}
                        <text
                          x={pos.x}
                          y={pos.y - 22}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs fill-[var(--tx)] pointer-events-none italic"
                          style={{
                            fontSize: "11px",
                            fontStyle: "italic",
                            fontWeight: "500",
                          }}
                        >
                          {new Date(item.timestamp).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Center label (most recent) */}
                {dateRange && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-xs text-[var(--tx-2)] italic">Now</div>
                    <div className="text-xs text-[var(--tx-3)] italic">
                      {formatTimelineDate(dateRange.end, "short")}
                    </div>
                  </div>
                )}

                {/* Outer label (earliest) */}
                {dateRange && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2 text-center">
                    <div className="text-xs text-[var(--tx-2)] italic">
                      Start
                    </div>
                    <div className="text-xs text-[var(--tx-3)] italic">
                      {formatTimelineDate(dateRange.start, "short")}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile: Smaller spiral */}
              <div className="md:hidden relative w-full max-w-[300px] h-[300px]">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="-120 -120 240 240"
                  style={{ overflow: "visible" }}
                >
                  {/* Draw spiral path */}
                  <path
                    d={(() => {
                      // Mobile uses scaled down version
                      const mobileStartRadius = 110;
                      const mobileEndRadius = 20;
                      const steps = 500; // Increased for smoother curves

                      let path = "";
                      for (let i = 0; i <= steps; i++) {
                        const progress = i / steps;
                        const angle = TOTAL_ROTATIONS * 2 * Math.PI * progress;
                        const radius =
                          mobileStartRadius -
                          (mobileStartRadius - mobileEndRadius) * progress;
                        const x = radius * Math.sin(angle);
                        const y = -radius * Math.cos(angle);

                        if (i === 0) {
                          path += `M ${x} ${y}`;
                        } else {
                          path += ` L ${x} ${y}`;
                        }
                      }
                      return path;
                    })()}
                    fill="none"
                    stroke="var(--ui-2)"
                    strokeWidth="1"
                    opacity="0.6"
                  />

                  {/* Data points */}
                  {filteredItems.map((item) => {
                    const pos = getSpiralPosition(item, filteredItems);
                    const color = getItemColor(item.type);
                    // Scale for mobile (110/180 ratio)
                    const scaledX = (pos.x * 110) / START_RADIUS;
                    const scaledY = (pos.y * 110) / START_RADIUS;
                    const isHovered = hoveredItem === item.id;

                    return (
                      <g key={item.id}>
                        <circle
                          cx={scaledX}
                          cy={scaledY}
                          r={isHovered ? "6" : "4"}
                          fill={color}
                          className="cursor-pointer transition-all"
                          style={{
                            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
                          }}
                          onClick={() => setSelectedItem(item)}
                          onTouchStart={() => setSelectedItem(item)}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Center label (most recent) */}
                {dateRange && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-[10px] text-[var(--tx-2)] italic">
                      Now
                    </div>
                    <div className="text-[9px] text-[var(--tx-3)] italic">
                      {formatTimelineDate(dateRange.end, "short")}
                    </div>
                  </div>
                )}

                {/* Outer label (earliest) */}
                {dateRange && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-1 text-center">
                    <div className="text-[10px] text-[var(--tx-2)] italic">
                      Start
                    </div>
                    <div className="text-[9px] text-[var(--tx-3)] italic">
                      {formatTimelineDate(dateRange.start, "short")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Timeline Modal */}
      <TimelineModal
        item={selectedItem}
        allItems={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={handleNavigation}
      />
    </div>
  );
}
