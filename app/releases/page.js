import { releases } from "@/data/releases"

export default function ReleasesPage() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h1 className="text-5xl font-bold">Releases</h1>
        <p className="mt-4 text-zinc-400">Albums, singles and underground releases from Bangladeshi artists.</p>

        <div className="releases-grid mt-8">
          {releases.map((r) => (
            <div key={r.title} className="release-card">
              <div className="release-art">{r.icon}</div>
              <div>
                <div className="release-title">{r.title}</div>
                <div className="release-artist">{r.artist}</div>
                <div className="release-type">{r.type} · {r.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 