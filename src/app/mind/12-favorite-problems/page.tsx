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

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: "var(--accent)" }}>
        MY 12 FAVORITE PROBLEMS
      </h1>

      {/* Content Container */}
      <div className="w-full max-w-3xl space-y-8">
        {/* Blurb */}
        <div className="text-left space-y-4" style={{ color: "var(--text)" }}>
          <p className="text-lg leading-relaxed">
            The concept of "12 Favorite Problems" is a powerful framework for continuous learning and innovation.
            By maintaining a list of open-ended questions that genuinely intrigue you, you create a mental filter
            that helps you recognize relevant insights and connections in your daily life.
          </p>
          <p className="text-lg leading-relaxed">
            These questions serve as North Stars—guiding your curiosity, shaping your learning, and helping you
            make sense of new information as it relates to what matters most to you.
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
            Click here to read more
          </a>
        </div>

        <hr className="w-full my-8" style={{ borderColor: "var(--text)", opacity: 0.3 }} />

        {/* Version Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text)" }}>
            V3.1 (01/05/26)
          </h2>
        </div>

        {/* The 12 Problems */}
        <ol className="space-y-6 list-decimal list-inside text-left text-xl font-semibold pb-12" style={{ color: "var(--text)" }}>
          <li>HOW CAN WE DESIGN A UNIVERSAL SYSTEM FOR BUILDING SELF BELIEF?</li>
          <li>HOW CAN I ACCURATELY CAPTURE & SHARE THE EVOLUTION OF MY MIND IN REAL-TIME?</li>
          <li>WHAT MAKES ME FEEL MOST ALIVE?</li>
          <li>HOW CAN I CREATE MY DESIRED CHANGE?</li>
          <li>HOW CAN TECHNOLOGY BE USED TO CONNECT MIND, BODY, & SOUL?</li>
          <li>HOW CAN I SHARE KI?</li>
          <li>HOW CAN I LIVE IN THE FLOW, FINDING THE BALANCE BETWEEN LETTING & MAKING THINGS HAPPEN?</li>
          <li>HOW CAN WE CONSISTENTLY CONVERT THINKING INTO ACTION, EVEN WHEN THE PATH AHEAD IS UNCLEAR?</li>
          <li>HOW CAN I REMAIN IN THE NOW?</li>
          <li>WHO AM I WHEN EVERYTHING PHYSICAL & TEMPORARY IS STRIPPED AWAY?</li>
          <li>WHAT DOES IT TAKE TO CHANGE?</li>
          <li>HOW CAN I MAKE IT MAGIC?</li>
        </ol>
      </div>
    </div>
  );
}
