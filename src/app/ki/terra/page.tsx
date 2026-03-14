import Link from "next/link";

export const metadata = {
  title: "Terra — Ki",
  description: "Terra: cycle tracking and pattern visualization for women who want to understand their bodies.",
};

export default function TerraPage() {
  return (
    <div className="container">

      <nav>
        <Link href="/ki" className="nav-name" style={{ textDecoration: "none" }}>← ki</Link>
        <ul className="nav-links">
          <li><a href="https://unlock-ki.com" target="_blank" rel="noopener noreferrer">visit ki ↗</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="hero">
        <p className="hero-eyebrow">ki · cycle app</p>
        <h1 className="hero-name" style={{ color: "var(--red)" }}>Terra</h1>
        <div className="hero-line" />
        <p className="hero-text">the cycle app i always wished existed.</p>
      </div>

      <hr className="divider" />

      {/* The Idea */}
      <section>
        <p className="section-label">the source of truth</p>
        <div className="about-text">
          <p>here lies the core source of truth for building the cycle app I always wished existed.</p>
          <p>For so long, my cycle was an afterthought. I did not understand what was happening in my own body. As I became increasingly curious of my mind, I inevitably began to explore my body.</p>
          <p>Now, I understand that <em style={{ color: "var(--red)" }}>my cycle is my superpower.</em> the ultimate tool for understanding my Self. a portal into my mind &amp; body.</p>
        </div>
      </section>

      <hr className="divider" />

      {/* What it does */}
      <section>
        <p className="section-label">what terra does</p>
        <div className="about-text">
          <p>Terra is Ki&apos;s first app — a tool built to help women believe in their bodies &amp; become the CEO of their health.</p>
          <p>cycle tracking and pattern visualization for women who want to truly understand their bodies. not just log symptoms — but <em style={{ color: "var(--red)" }}>see the intelligence already living inside them.</em></p>
        </div>
        <div className="about-detail" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <p className="detail-value">→ track your cycle phases with intention</p>
            <p className="detail-value">→ visualize patterns across mood, energy, and body</p>
            <p className="detail-value">→ understand your hormonal rhythms as intelligence, not obstacles</p>
            <p className="detail-value">→ build a living map of your Self over time</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Why */}
      <section>
        <p className="section-label">why it&apos;s being built</p>
        <div className="about-text">
          <p><em style={{ color: "var(--red)" }}>building what I wish existed.</em></p>
          <p>this is the essence of Ki — tools that emerge not from market gaps, but from lived questions. Terra is the first answer.</p>
        </div>
        <div className="about-detail">
          <div>
            <p className="detail-label">status</p>
            <p className="detail-value">in development</p>
          </div>
          <div>
            <p className="detail-label">part of</p>
            <p className="detail-value">Ki LLC<br />since September 2025</p>
          </div>
        </div>
      </section>

      <footer>
        <span className="footer-copy">© 2026 rachel tomasetti</span>
        <span className="footer-email"><a href="mailto:ray@unlock-ki.com">ray@unlock-ki.com</a></span>
      </footer>

    </div>
  );
}
