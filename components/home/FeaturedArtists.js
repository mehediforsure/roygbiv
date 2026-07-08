import { artists } from "@/data/artists"
import ArtistCard from "@/components/cards/ArtistCard"
import Link from "next/link"

export default function FeaturedArtists() {
  return (
    <section className="section-spacing border-t border-zinc-800">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-4xl font-bold">Featured Artists &amp; Bands</h2>
          
        </div>

        <div className="artist-grid">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        <Link href="/artists" className="view-all">View All Artists →</Link>
      </div>
    </section>
  )
}
