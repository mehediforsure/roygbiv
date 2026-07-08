"use client"
import { useState } from "react"
import { artists } from "@/data/artists"
import ArtistCard from "@/components/cards/ArtistCard"
import { Search, SlidersHorizontal, Users, Filter } from "lucide-react"

export default function ArtistsPage() {
  const [search, setSearch] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")

  // Extract all unique base genres
  const genresList = ["All", ...new Set(artists.flatMap(a => a.genre.split("·").map(g => g.trim())))]

  // Filter artists
  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(search.toLowerCase()) || 
                          artist.genre.toLowerCase().includes(search.toLowerCase()) ||
                          artist.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    
    const matchesGenre = selectedGenre === "All" || artist.genre.toLowerCase().includes(selectedGenre.toLowerCase())

    return matchesSearch && matchesGenre
  })

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="border-b border-zinc-800 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Independent Directory</span>
          <h1 className="text-4xl md:text-5xl font-black mt-1">Artists &amp; Bands</h1>
          <p className="mt-3 text-zinc-400 max-w-xl">Discover independent Bangladeshi electronic musicians, synthesizers, alternative rock icons, and sound designers.</p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 bg-zinc-950/40 p-4 rounded-2xl border border-zinc-800/80">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by artist name, genre, tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 focus:border-zinc-600 focus:outline-none rounded-xl text-sm text-zinc-200 transition-colors placeholder-zinc-500"
              style={{ minHeight: "44px" }}
            />
          </div>

          {/* Genre chips for quick mobile tap */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none max-w-full">
            <span className="text-xs text-zinc-500 font-mono shrink-0 hidden md:inline flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {genresList.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold select-none transition-all active:scale-95 shrink-0 ${
                  selectedGenre === genre
                    ? "bg-white text-black font-bold"
                    : "bg-zinc-900 hover:bg-zinc-850 text-zinc-400 border border-zinc-800/80 hover:text-white"
                }`}
                style={{ minHeight: "36px" }}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results grid */}
        {filteredArtists.length > 0 ? (
          <div className="artist-grid mt-6">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-zinc-850 rounded-2xl">
            <Users className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm">No artists found matching your filters.</p>
            <button 
              onClick={() => { setSearch(""); setSelectedGenre("All"); }} 
              className="mt-4 text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
