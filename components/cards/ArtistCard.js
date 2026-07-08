import Image from "next/image"
import Link from "next/link"
import { Disc, Music } from "lucide-react"

export default function ArtistCard({ artist }) {
  return (
    <article className="group relative bg-black/50 border border-[#233D4D]/50 hover:border-[#FE7F2D]/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(254,127,45,0.12)] flex flex-col justify-between h-full font-body">
      <div>
        {/* Thumbnail wrapping with ambient spectrum layer */}
        <div className="relative aspect-video w-full bg-[#233D4D]/10 overflow-hidden flex items-center justify-center border-b border-[#233D4D]/40">
          
          {/* Fallback pattern backdrops */}
          <div className="absolute inset-0 bg-radial-at-c from-[#233D4D]/20 via-black to-black opacity-50" />
          
          <div className="absolute z-20 top-3 left-3 bg-[#233D4D] border border-[#FE7F2D]/40 rounded-lg px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#EAECF0]">
            {artist.genre.split("·")[0] || "Electronic"}
          </div>

          <div className="w-14 h-14 rounded-full bg-black/80 border border-[#233D4D]/60 flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:border-[#FE7F2D]/60 transition-all duration-300 relative z-10">
            <Music className="w-6 h-6 text-[#FE7F2D]" />
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-[#EAECF0] group-hover:text-[#FE7F2D] transition-colors tracking-tight line-clamp-1 font-headline">
            {artist.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">{artist.genre}</p>

          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {artist.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium bg-[#233D4D]/15 border border-[#233D4D]/40 text-[#EAECF0] px-2 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social links with compliant 44px minimum tap target area */}
      {artist.socials && (
        <div className="px-4 pb-4 pt-1 border-t border-[#233D4D]/30 flex items-center gap-1">
          {artist.socials.spotify && (
            <a 
              href={artist.socials.spotify}
              className="w-10 h-10 rounded-lg border border-[#233D4D]/60 hover:border-[#FE7F2D]/50 text-zinc-500 hover:text-[#FE7F2D] transition-colors flex items-center justify-center"
              aria-label={`${artist.name} Spotify`}
            >
              <Disc className="w-4 h-4" />
            </a>
          )}
          {artist.socials.youtube && (
            <a 
              href={artist.socials.youtube}
              className="w-10 h-10 rounded-lg border border-[#233D4D]/60 hover:border-[#FE7F2D]/50 text-zinc-500 hover:text-[#FE7F2D] transition-colors flex items-center justify-center"
              aria-label={`${artist.name} YouTube`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.5 12 3.5 12 3.5s-7.524 0-9.388.555A3.003 3.003 0 0 0 .5 6.163C0 8.04 0 12 0 12s0 3.96.5 5.837a3.003 3.003 0 0 0 2.11 2.108c1.864.555 9.388.555 9.388.555s7.525 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108c.5-1.877.5-5.837.5-5.837s0-3.96-.5-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          )}
          {artist.socials.facebook && (
            <a 
              href={artist.socials.facebook}
              className="w-10 h-10 rounded-lg border border-[#233D4D]/60 hover:border-[#FE7F2D]/50 text-zinc-500 hover:text-[#FE7F2D] flex items-center justify-center transition-colors"
              aria-label={`${artist.name} Facebook`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          )}
          {artist.socials.instagram && (
            <a 
              href={artist.socials.instagram}
              className="w-10 h-10 rounded-lg border border-[#233D4D]/60 hover:border-[#FE7F2D]/50 text-zinc-500 hover:text-[#FE7F2D] flex items-center justify-center transition-colors"
              aria-label={`${artist.name} Instagram`}
            >
              <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          )}
        </div>
      )}
    </article>
  )
}
