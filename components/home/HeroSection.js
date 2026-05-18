import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container-custom">
        <div className="hero-eyebrow">
          Bangladesh's Independent Music Hub
        </div>

        <h1 className="hero-title mt-5">
          Discover, Connect &amp;{" "}
          <span className="hero-title-accent">Celebrate</span>
          <br />Bangladeshi Music
        </h1>

        <p className="hero-description">
          A cultural hub for artists, bands, organizers, and listeners. Independent platform for music discovery, event promotion, and community building.
        </p>

        <div className="hero-buttons">
          <Link href="/artists" className="primary-btn">
            Explore Artists
          </Link>
          <Link href="/events" className="secondary-btn">
            Upcoming Events
          </Link>
          <Link href="/releases" className="ghost-btn">
            Latest Releases
          </Link>
        </div>
      </div>
    </section>
  )
}
