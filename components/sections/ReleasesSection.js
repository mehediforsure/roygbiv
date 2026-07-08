import { releases } from "@/data/releases"
import Link from "next/link"
import { Disc, Play } from "lucide-react"

export default function ReleasesSection() {
  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Catalog Archives</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1 font-headline">Latest &amp; Upcoming Releases</h2>
        </div>
        <Link href="/releases" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors mt-2 sm:mt-0 flex items-center gap-1.5 group font-medium">
          <span>All Releases</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {releases.map((r, idx) => {
          const colors = [
            "text-white",
            "text-zinc-400",
            "text-zinc-600",
          ]
          const colorClass = colors[idx % colors.length]

          return (
            <div key={r.title} className="group relative bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-4 flex items-center gap-4 hover:border-white transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-zinc-800 relative overflow-hidden group-hover:border-zinc-500 transition-colors ${colorClass}`}>
                <Disc className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-white group-hover:text-zinc-300 transition-colors truncate font-headline">
                  {r.title}
                </h3>
                <p className="text-xs text-zinc-400 truncate mt-0.5">{r.artist}</p>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-zinc-500 font-mono">
                  <span className="bg-zinc-900 text-zinc-300 border border-zinc-800 px-1.5 py-0.5 rounded font-semibold">{r.type}</span>
                  <span>·</span>
                  <span>{r.year}</span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 group-hover:bg-white text-zinc-400 group-hover:text-black transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 cursor-pointer">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
