import { releases } from "@/data/releases"
import { Disc, Play, Filter, Calendar } from "lucide-react"

export default function ReleasesPage() {
  return (
    <section className="py-12 md:py-20 font-body">
      <div className="container-custom">
        <div className="border-b border-[#233D4D]/50 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-retro-orange block">Catalog Collection</span>
          <h1 className="text-4xl md:text-5xl font-black mt-1 font-headline text-white">Releases</h1>
          <p className="mt-3 text-zinc-400 max-w-xl">Albums, EPs, singles, and underground modular sound sessions from Bangladeshi independent producers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {releases.map((r, idx) => {
            const colors = [
              "text-retro-orange",
              "text-zinc-400",
              "text-[#233D4D]",
            ]
            const colorClass = colors[idx % colors.length]

            return (
              <div key={r.title} className="group relative bg-black border border-[#233D4D]/50 rounded-2xl p-5 flex items-center gap-4 hover:border-retro-orange hover:bg-[#233D4D]/5 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-black flex items-center justify-center border border-[#233D4D]/50 relative overflow-hidden group-hover:border-retro-orange transition-colors ${colorClass}`}>
                  <Disc className="w-7 h-7 animate-spin" style={{ animationDuration: '9s' }} />
                </div>
                
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-white group-hover:text-retro-orange transition-colors truncate font-headline">
                    {r.title}
                  </h3>
                  <p className="text-sm text-zinc-400 truncate mt-0.5">{r.artist}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500 font-mono">
                    <span className="bg-[#233D4D]/25 px-2 py-0.5 rounded text-zinc-400 font-semibold">{r.type}</span>
                    <span>·</span>
                    <span>{r.year}</span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#233D4D]/20 group-hover:bg-retro-orange text-zinc-400 group-hover:text-black transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 cursor-pointer">
                  <Play className="w-4 h-4 fill-current" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
 