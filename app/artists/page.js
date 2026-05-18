import { artists } from "@/data/artists"
import ArtistCard from "@/components/cards/ArtistCard"

export default function ArtistsPage() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h1 className="text-5xl font-bold">Artists &amp; Bands</h1>
        <p className="mt-4 text-zinc-400">Discover independent Bangladeshi musicians and bands.</p>

        <div className="artist-grid">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  )
}
