import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <span className="nav-name">raybuilds021</span>
      </nav>

      <div className="hero" id="home">
        <h1 className="hero-building-ki">
          <Link href="/ki" className="hero-building">Building</Link>{" "}
          <Link href="/ki" className="hero-ki">Ki</Link>
        </h1>
      </div>
    </div>
  );
}
