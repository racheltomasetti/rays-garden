"use client";

import Link from "next/link";

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

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center italic" style={{ color: "var(--accent)" }}>
            My 12 Favorite Problems
        </h1>
        {/* Version Header */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-8" style={{ color: "var(--text)" }}>
            V3.1 (01/05/26)
          </h2>
        </div>

        {/* The 12 Problems */}
        <ol className="space-y-6 list-decimal list-inside text-left text-xl font-semibold italic pb-12" style={{ color: "var(--text)" }}>
          <li>How can we design a universal system for building self belief?</li>
          <li>How can I accurately capture & share the evolution of my mind in real-time?</li>
          <li>What makes me feel most alive?</li>
          <li>How can I create my desired change?</li>
          <li>How can technology be used to connect mind, body, & soul?</li>
          <li>How can I share ki?</li>
          <li>How can I live in the flow, finding the balance between letting & making things happen?</li>
          <li>How can we consistently convert thinking into action, even when the path ahead is unclear?</li>
          <li>How can I remain in the now?</li>
          <li>Who am I when everything physical & temporary is stripped away?</li>
          <li>What does it take to change?</li>
          <li>How can I make it magic?</li>
        </ol>
      </div>
    </div>
  );
}
