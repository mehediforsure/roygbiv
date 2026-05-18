import Image from "next/image"
import Link from "next/link"

export default function ArtistCard({ artist }) {
  return (
    <article className="artist-card">
      <div className="artist-thumb-wrap">
        <Image
          src={artist.image}
          alt={artist.name}
          width={500}
          height={300}
          className="artist-img"
        />
      </div>

      <div className="artist-content">
        <h3 className="text-xl font-semibold leading-tight">{artist.name}</h3>
        <p className="artist-genre">{artist.genre}</p>

        <div className="artist-tags">
          {artist.tags.map((tag) => (
            <span key={tag} className="artist-tag">{tag}</span>
          ))}
        </div>

        {artist.socials && (
          <div className="artist-socials">
            {artist.socials.spotify && <a href={artist.socials.spotify}>Spotify</a>}
            {artist.socials.youtube && <a href={artist.socials.youtube}>YouTube</a>}
            {artist.socials.facebook && <a href={artist.socials.facebook}>FB</a>}
            {artist.socials.instagram && <a href={artist.socials.instagram}>IG</a>}
          </div>
        )}
      </div>
    </article>
  )
}
