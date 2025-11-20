"use client";

export default function KiDemo() {
  return (
    <div className="space-y-8">
      <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm">
        <h2 className="text-6xl text-[var(--accent)] mb-3 text-center">
          <span className="font-semibold">• Ki •</span>{" "}
        </h2>
        <h2 className="text-3xl text-[var(--accent)] mb-6 text-center font-semibold">
          <span className="italic">in action</span>
        </h2>

        <div className="space-y-8">
          {/* Web Demo */}
          <div className="space-y-3">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/WrS9v6tLC4A"
                title="Ki Web Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
