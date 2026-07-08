import Link from "next/link"
import { Sparkles, Disc, Calendar, ArrowUpRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:py-24 border-b border-zinc-800 bg-black">
      {/* Background ambient grey glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-zinc-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="inline-flex items-center gap-2 bg-black border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-zinc-400 uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
          Bangladesh's Independent Electronic Music Hub
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mt-6 max-w-3xl text-white font-headline">
          Explore the <span className="text-zinc-400">Spectral Waves</span> of Underground Sound
        </h1>

        <p className="text-base md:text-lg text-zinc-300 mt-6 max-w-2xl leading-relaxed font-normal font-body">
          A meticulously crafted discovery platform and archive for Bangladesh's electronic music scene — profiling producers, live synth acts, DJs, and the sonic waves they build.
        </p>

        <div className="flex flex-wrap gap-3.5 mt-8 font-body">
          <Link 
            href="/artists" 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-bold text-sm shadow-lg active:scale-95"
          >
            <span>Explore Artists</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
          <Link 
            href="/discovery" 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800 transition-all font-bold text-sm shadow-lg active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-zinc-300" />
            <span>Launch Spectrum Synth</span>
          </Link>
          <Link 
            href="/events" 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all font-semibold text-sm active:scale-95"
          >
            <Calendar className="w-4 h-4 text-zinc-400" />
            <span>Upcoming Events</span>
          </Link>
          <Link 
            href="/releases" 
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all font-semibold text-sm active:scale-95"
          >
            <Disc className="w-4 h-4 text-zinc-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Latest Releases</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
