import Image from "next/image";

export default function RaysGarden() {
  return (
    <div className="container">

      <nav>
        <span className="nav-name">raybuilds021</span>
        <ul className="nav-links">
          <li><a href="https://unlock-ki.com" target="_blank" rel="noopener noreferrer">unlock ki ↗</a></li>
        </ul>
      </nav>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
        <a href="https://unlock-ki.com" target="_blank" rel="noopener noreferrer" className="logo-link">
          <Image src="/assets/logo-dark.png" alt="Ki" width={220} height={220} style={{ width: "clamp(140px, 20vw, 220px)", height: "auto" }} priority />
        </a>
      </div>

    </div>
  );
}
