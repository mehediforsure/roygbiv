export default function MediaSection() {
  const blocks = [
    { type: "spotify", icon: "", label: "Aurthohin — Top Tracks", sub: "Spotify embed · Artist Spotlight" },
    { type: "spotify", icon: "", label: "BD Music — Monthly Picks", sub: "Updated monthly with best new releases" },
    { type: "youtube", icon: "", label: "Cryptic Fate — Exclusive Interview 2026", sub: "YouTube · Latest Interview" },
    { type: "youtube", icon: "", label: "Shironamhin — Live at Dhaka Indie Showcase", sub: "YouTube · Live Performance" },
  ]

  return (
    <section className="section-spacing border-t border-[#233D4D]/50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold"> Featured Listening</h2>
        <p className="mt-2 text-zinc-400">Stream directly or watch curated interviews and live performances.</p>

        <div className="media-grid">
          {blocks.map((b) => (
            <div key={b.label} className={`media-block media-block--${b.type}`}>
              <div className="media-icon">{b.icon}</div>
              <p className="media-label">{b.label}</p>
              <small className="media-sub">{b.sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
