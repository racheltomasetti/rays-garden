"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import HomeNav from "@/app/components/HomeNav";
import type { Project, SiteSettings } from "@/sanity/lib/types";

const Garden = dynamic(() => import("@/app/components/garden/Garden"), {
  ssr: false,
  loading: () => <div className="home-garden-loading" />,
});

const LIGHTHOUSE_AUDIO_SRC = "/story/media/audio/heaven-on-earth.m4a";
const LIGHTHOUSE_AUDIO_VOLUME = 0.45;

function SectionFrame({ id, label }: { id: string; label: string }) {
  return (
    <section id={id} className="home-section">
      <p className="section-tag">{label}</p>
      <div className="section-frame" aria-hidden="true" />
    </section>
  );
}

function RaySection({ siteSettings }: { siteSettings: SiteSettings | null }) {
  if (!siteSettings || (!siteSettings.bio && !siteSettings.now)) {
    return <SectionFrame id="ray" label="##ray" />;
  }

  return (
    <section id="ray" className="home-section">
      <p className="section-tag">##ray</p>
      {siteSettings.bio && (
        <div className="about-text">
          {siteSettings.bio.split("\n").filter(Boolean).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
      {siteSettings.now && (
        <div className="about-detail" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <p className="detail-label">now</p>
            <p className="detail-value">{siteSettings.now}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function BuildsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <SectionFrame id="builds" label="##builds" />;
  }

  return (
    <section id="builds" className="home-section">
      <p className="section-tag">##builds</p>
      {projects.map((project, i) => {
        const num = String(i + 1).padStart(2, "0");
        const href = project.links?.[0]?.url;
        const content = (
          <>
            <span className="project-num">{num}</span>
            <div className="project-body">
              <div className="project-name">{project.title}</div>
              {project.summary && <p className="project-desc">{project.summary}</p>}
            </div>
            {href && <span className="project-arrow">&#8599;</span>}
          </>
        );

        return href ? (
          <a key={project._id} className="project-row" href={href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <div key={project._id} className="project-row">
            {content}
          </div>
        );
      })}
    </section>
  );
}

export default function HomeContent({
  siteSettings,
  projects,
}: {
  siteSettings: SiteSettings | null;
  projects: Project[];
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(LIGHTHOUSE_AUDIO_SRC);
    audio.preload = "metadata";
    audio.loop = false;
    audio.volume = LIGHTHOUSE_AUDIO_VOLUME;
    audioRef.current = audio;

    const handleEnded = () => {
      isPlayingRef.current = false;
      audio.currentTime = 0;
    };
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const playLighthouseAudio = () => {
    const audio = audioRef.current;
    if (!audio || isPlayingRef.current) return;

    isPlayingRef.current = true;
    audio.currentTime = 0;
    audio.play().catch(() => {
      isPlayingRef.current = false;
    });
  };

  return (
    <main className="home-page">
      <HomeNav />

      <section id="top" className="home-garden">
        <Garden onLighthouseClick={playLighthouseAudio} />
      </section>

      <div className="full-divider" />

      <RaySection siteSettings={siteSettings} />

      <div className="full-divider" />

      <BuildsSection projects={projects} />

      <div className="full-divider" />

      <SectionFrame id="ki" label="##ki" />
    </main>
  );
}
