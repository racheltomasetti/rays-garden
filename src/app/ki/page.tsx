import Link from "next/link";

export const metadata = {
  title: "Ki — raybuilds021",
  description: "Ki: an AI toolkit for the Self.",
};

export default function KiPage() {
  return (
    <div className="container">

      <nav>
        <Link href="/" className="nav-name" style={{ textDecoration: "none" }}>← raybuilds021</Link>
        <ul className="nav-links">
          <li><a href="https://unlock-ki.com" target="_blank" rel="noopener noreferrer">visit ki ↗</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="hero">
        <p className="hero-eyebrow">AI toolkit · self</p>
        <h1 className="hero-name"><em>Ki</em></h1>
        <div className="hero-line" />
        <p className="hero-text">where mind and body are one.</p>
      </div>

      <hr className="divider" />

      {/* Etymology */}
      <section>
        <p className="section-label">the origin</p>
        <div className="about-text">
          <p>ki (氣/気) is an ancient East Asian concept meaning life force, vital energy, breath. it is the invisible current that flows through all living things — the essence of being alive and conscious.</p>
          <p>in traditional practice, cultivating ki means <em>harmonizing mind, body, and spirit.</em> it is developed through presence, breath, and intentional practice. when your ki flows freely, you are aligned with your true nature.</p>
          <p>this is exactly what the tool does: it helps you cultivate your life force through daily practice, harmonizing your mind and body, unlocking the unlimited power that has always existed within you.</p>
        </div>
      </section>

      <hr className="divider" />

      {/* What Ki is */}
      <section>
        <p className="section-label">ki as a digital space</p>
        <div className="about-text">
          <p>Ki is a tool to explore your mind. a space where thoughts become knowledge, and knowledge becomes wisdom.</p>
          <p>it recognizes that <em>mind and body are one.</em> your hormonal cycles, your energy levels, your emotional states — these aren&apos;t obstacles to productivity. they are intelligence. Ki meets you where your body is, adapting to support your natural rhythms.</p>
          <p>through AI, Ki becomes a mirror for your consciousness.</p>
        </div>
        <div className="about-detail" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <p className="detail-value">→ capture thoughts as they arise — ideas, questions, emotions, learnings</p>
            <p className="detail-value">→ expand thoughts into deeper understanding through AI-powered exploration</p>
            <p className="detail-value">→ cultivate wisdom by recognizing patterns across time</p>
            <p className="detail-value">→ share your journey, contributing to collective consciousness</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Goldilocks */}
      <section>
        <p className="section-label">the goldilocks zone</p>
        <div className="about-text">
          <p>our greatest tools can also be our downfall. technology can fragment our attention, distort our self-perception, disconnect us from our bodies. AI can hallucinate, manipulate, replace human agency.</p>
          <p><em>Ki exists in the goldilocks zone: technology that makes us superhuman without losing our humanity.</em> it augments consciousness without replacing it. it accelerates growth without bypassing the journey. it provides intelligence on tap while honoring the wisdom that can only come from lived experience.</p>
          <p>this is AI for the Self. a tool that helps you become who you already are.</p>
        </div>
      </section>

      <hr className="divider" />

      {/* Apps */}
      <section>
        <p className="section-label">apps</p>
        <div>
          <Link className="work-item" href="/ki/terra">
            <div>
              <p className="work-title" style={{ color: "var(--red)" }}>Terra</p>
              <p className="work-desc">Ki&apos;s first app. cycle tracking and pattern visualization<br />for women who want to understand their bodies.</p>
            </div>
            <span className="work-arrow" style={{ color: "var(--red)" }}>→</span>
          </Link>
        </div>
      </section>

      <footer>
        <span className="footer-copy">© 2026 rachel tomasetti</span>
        <span className="footer-email"><a href="mailto:ray@unlock-ki.com">ray@unlock-ki.com</a></span>
      </footer>

    </div>
  );
}
