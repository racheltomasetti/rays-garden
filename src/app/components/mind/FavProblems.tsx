"use client";

import { useState, useEffect, useRef } from "react";

interface Version {
  version: string;
  date: string;
  problems: string[];
}

interface FavProblemsData {
  versions: Version[];
}

export default function FavProblems() {
  const [data, setData] = useState<FavProblemsData | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch data from JSON
  useEffect(() => {
    fetch("/data/favproblems.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error loading favorite problems:", err));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDropdownOpen]);

  if (!data) {
    return (
      <div className="text-center" style={{ color: "var(--text)" }}>
        Loading...
      </div>
    );
  }

  const currentVersion = data.versions[selectedIndex];

  const handleVersionSelect = (index: number) => {
    setSelectedIndex(index);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Version Header with Dropdown */}
      <div className="text-center relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-xl font-bold mb-8 hover:opacity-70 transition-opacity inline-flex items-center gap-2 border border-ui-3 rounded-full px-6 py-3"
          style={{ color: "var(--text)" }}
        >
          {currentVersion.version} 
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease"
            }}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 rounded-lg shadow-lg overflow-hidden z-10"
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--ui-2)",
              minWidth: "160px"
            }}
          >
            {data.versions.map((version, index) => (
              <button
                key={index}
                onClick={() => handleVersionSelect(index)}
                className="w-full px-6 py-3 text-center hover:opacity-80 transition-opacity text-xl"
                style={{
                  color: index === selectedIndex ? "var(--accent)" : "var(--text)",
                  fontWeight: index === selectedIndex ? "bold" : "normal",
                  borderBottom: index < data.versions.length - 1 ? "1px solid var(--ui-2)" : "none"
                }}
              >
                {version.version} ({version.date})
              </button>
            ))}
          </div>
        )}
      </div>

      {/* The Problems List */}
      <ol
        className="space-y-6 list-decimal list-inside text-left text-xl italic pb-12"
        style={{ color: "var(--text)" }}
      >
        {currentVersion.problems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ol>
    </>
  );
}
