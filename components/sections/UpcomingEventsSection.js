import { upcomingEvents } from "@/data/events"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function UpcomingEventsSection() {
  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Live Archives</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1 font-headline">Upcoming Events</h2>
        </div>
        <Link href="/events" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors mt-2 sm:mt-0 flex items-center gap-1.5 group font-medium">
          <span>Full Schedule</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {upcomingEvents.map((ev) => (
          <div 
            key={ev.name} 
            className="flex items-center gap-4 sm:gap-6 p-4 border border-zinc-800/80 bg-zinc-950/40 rounded-2xl hover:border-white transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 min-w-[70px] h-[70px]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">{ev.month}</span>
              <span className="text-xl font-extrabold text-white font-headline leading-tight">{ev.day}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-bold text-white hover:text-zinc-300 transition-colors truncate">
                {ev.name}
              </h4>
              <p className="text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{ev.venue}</span>
                {ev.interested && (
                  <>
                    <span className="text-zinc-600 font-mono">·</span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800/60">
                      {ev.interested} interested
                    </span>
                  </>
                )}
              </p>
            </div>

            <div className="hidden sm:block">
              <span className="px-4 py-2 rounded-xl border border-zinc-800 hover:border-white hover:bg-white hover:text-black text-xs font-semibold text-zinc-400 transition-all cursor-pointer">
                Get Details
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
