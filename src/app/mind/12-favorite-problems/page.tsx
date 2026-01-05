"use client";

import Link from "next/link";
import FavProblems from "@/app/components/mind/FavProblems";

export default function FavoriteProblemsPage() {

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-8 md:pt-12 px-4" style={{ backgroundColor: "var(--bg)" }}>
      {/* Back Arrow */}
      <div className="w-full max-w-4xl mb-8">
        <Link
          href="/mind"
          className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ color: "var(--text)" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span className="text-lg">Back</span>
        </Link>
      </div>
       {/* Title */}
       <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center italic" style={{ color: "var(--accent)" }}>
            My 12 Favorite Problems
        </h1>
      <hr className="w-full mb-8" style={{ borderColor: "var(--text)", opacity: 0.3 }} />

      {/* Content Container */}
      <div className="w-full max-w-3xl space-y-4">
        {/* Blurb */}
        <div className="text-center space-y-4" style={{ color: "var(--text)" }}>
          <p className="text-xl leading-relaxed italic">
            Inspired by Richard Feynman&apos;s <br />12 Favorite Problems
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center py-4">
          <a
            href="https://fortelabs.com/blog/12-favorite-problems-how-to-spark-genius-with-the-power-of-open-questions/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold rounded-lg hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "var(--accent)",
              color: "#DAD8CE"
            }}
          >
            Click here for more
          </a>
        </div>

        <hr className="w-full my-8" style={{ borderColor: "var(--text)", opacity: 0.3 }} />

        {/* Favorite Problems Component */}
        <FavProblems />
      </div>
    </div>
  );
}
