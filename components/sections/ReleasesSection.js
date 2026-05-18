import { releases } from "@/data/releases"
import Link from "next/link"

export default function ReleasesSection() {
  return (
    <section className="section-spacing border-t border-zinc-800">
      <div className="container-custom">
        <h2 className="text-4xl font-bold"> Latest &amp; Upcoming Releases</h2>

        <div className="releases-grid">
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

        <Link href="/releases" className="view-all">All Releases →</Link>
      </div>
    </section>
  )
}
