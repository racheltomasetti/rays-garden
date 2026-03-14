import Link from "next/link";

export default function Home() {
  return (
    <div className="container">

      <nav>
        <span className="nav-name">raybuilds021</span>
        <ul className="nav-links">
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#work">work</a></li>
          <li><a href="#links">links</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="hero" id="home">
        <p className="hero-eyebrow">WORK IN PROGRESS</p>
        <p className="hero-eyebrow">builder · founder</p>
        <h1 className="hero-name">Rachel<br /><em>Tomasetti</em></h1>
        <div className="hero-line" />
        <p className="hero-text">building tools to unlock the mind</p>
        <p className="hero-location">connecticut → miami</p>
      </div>

      <hr className="divider" />

      {/* About */}
      <section id="about">
        <p className="section-label">about</p>
        <div className="about-text">
          <p>I&apos;ve always been drawn to the interior — the mind, how it works, what it holds, what it&apos;s capable of becoming.</p>
          <p>On May 28, 2023, something shifted. I began going inward deliberately — journaling, running, cycle awareness, presence. Three years of lived experimentation became the foundation for Ki.</p>
          <p>Ki is not a startup that emerged from a market gap. It emerged from a question I couldn&apos;t stop asking: <em>what is a human being actually capable of, when they truly understand themselves?</em></p>
        </div>
        <div className="about-detail">
          <div>
            <p className="detail-label">feeling</p>
            <p className="detail-value">Grounded</p>
            <p className="detail-value">Grateful</p>
          </div>
          <div>
            <p className="detail-label">building</p>
            <p className="detail-value">Terra</p>
            <p className="detail-value">Ki</p>

          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Work */}
      <section id="work">
        <p className="section-label">work</p>
        <div>
          <Link className="work-item" href="/ki">
            <div>
              <p className="work-title">Ki</p>
              <p className="work-desc">Self toolkit</p>
            </div>
            <span className="work-arrow">→</span>
          </Link>
        </div>
      </section>


      {/* Links */}
      <section id="links">
        <p className="section-label">find me</p>
        <div>
          <a className="link-row" href="https://unlock-ki.com" target="_blank" rel="noopener noreferrer">
            <div className="link-left">
              <span className="link-label">ki</span>
              <span className="link-handle">unlock-ki.com</span>
            </div>
            <span className="link-arrow">↗</span>
          </a>
          <a className="link-row" href="https://instagram.com/raybuilds021" target="_blank" rel="noopener noreferrer">
            <div className="link-left">
              <span className="link-label">instagram</span>
              <span className="link-handle">@raybuilds021</span>
            </div>
            <span className="link-arrow">↗</span>
          </a>
          <a className="link-row" href="https://linkedin.com/in/racheltomasetti" target="_blank" rel="noopener noreferrer">
            <div className="link-left">
              <span className="link-label">linkedin</span>
              <span className="link-handle">racheltomasetti</span>
            </div>
            <span className="link-arrow">↗</span>
          </a>
          <div className="link-row" style={{ cursor: "default", opacity: 0.25 }}>
            <div className="link-left">
              <span className="link-label">youtube</span>
              <span className="link-handle">coming soon</span>
            </div>
            <span className="link-arrow">—</span>
          </div>
          <div className="link-row" style={{ cursor: "default", opacity: 0.25 }}>
            <div className="link-left">
              <span className="link-label">substack</span>
              <span className="link-handle">coming soon</span>
            </div>
            <span className="link-arrow">—</span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Notes / Log */}
      {/* <section id="notes">
        <p className="section-label">building ki</p>
        <div>

          <div className="notes-entry">
            <p className="notes-date">Monday, February 09, 2026 @ 12:55 am</p>
            <div className="notes-body">
              <p>please count me out i beg. i love being underestimated. to be fair, i have not given much of an opportunity for anyone to understand what is at play. it took hannah working with me for 3 months to begin to understand the vision. but you must understand that i have operated alone for... always. i am extremely independent. i struggle to open up. but i am working on letting go of my ego. a very uncomfortable &amp; humbling process.</p>
            </div>
          </div>

          <div className="notes-entry">
            <p className="notes-date">Wednesday, February 04, 2026 @ 2:36 pm</p>
            <div className="notes-body">
              <p>~ 49 hours into fast</p>
              <p><strong>[current physical state]</strong><br />hunger has subsided, desire to eat mainly from love of food, energy levels are stable despite lack of sleep, head is clear</p>
              <p><strong>The time is now.</strong></p>
              <p>Ki&apos;s tools are designed to unlock the power of the mind, with terra being the first: a tool built to help women believe in their bodies &amp; become the CEO of their health.</p>
              <p>For so long, my cycle was an afterthought. I did not understand what was happening in my own body. As I became increasingly curious of my mind, I inevitably began to explore my body.</p>
              <p>Now, I understand that my cycle is my superpower. The ultimate tool for understanding my Self. A portal into my mind &amp; body. This is what we are building with terra, Ki, &amp; all that is to come.</p>
              <p><strong>Time to build.</strong></p>
            </div>
          </div>

          <div className="notes-entry">
            <p className="notes-date">Tuesday, February 03, 2026 @ 3:28 am</p>
            <div className="notes-body">
              <p>13:57:57 into fast</p>
              <p><strong>[current build state]</strong></p>
              <Image
                src="/assets/3-03-26.PNG"
                alt="build state 2/3/26"
                width={200}
                height={300}
                className="notes-image"
              />
            </div>
          </div>

          <div className="notes-entry">
            <p className="notes-date">Wednesday, January 28, 2026 @ 7:45 pm</p>
            <div className="notes-body">
              <Image
                src="/assets/terra-ki-connection.png"
                alt="How it is all connected — terra feeds into Ki, terra is ki"
                width={400}
                height={300}
                className="notes-image"
                style={{ maxWidth: "320px" }}
              />
            </div>
          </div>

          <div className="notes-entry">
            <p className="notes-date">Tuesday, January 27, 2026 @ 2:07 pm</p>
            <div className="notes-body">
              <p>All I want to do is build &amp; share what I am learning, so this will be where I build &amp; share ki.</p>
              <Image
                src="/assets/journal-on-rocks.png"
                alt="Journaling on rocks by the water"
                width={200}
                height={200}
                className="notes-image"
              />
            </div>
          </div>
        </div>
      </section> */}

      <footer>
        <span className="footer-copy">© 2026 rachel tomasetti</span>
        <span className="footer-email"><a href="mailto:build.ray.build@gmail.com">ray@unlock-ki.com</a></span>
      </footer>

    </div>
  );
}
