import { genreStats } from "@/data/genres"
import { Radio, Music, Volume2, Award, Zap } from "lucide-react"

export default function GenresPage() {
  const genreDetails = {
    "Electronic Rock": {
      desc: "Distorted heavy guitars layered with complex digital arpeggiators and synthesizer pads.",
      icon: Zap,
      color: "bg-retro-orange"
    },
    "Rock": {
      desc: "Traditional alternative independent band sounds with driving progressive rhythms.",
      icon: Award,
      color: "bg-zinc-500"
    },
    "Pop / Indie": {
      desc: "Clean independent electro-acoustic melodies and soaring synth lines.",
      icon: Music,
      color: "bg-[#233D4D]"
    },
    "Experimental": {
      desc: "Avant-garde sounds, modular synthesizers, and non-linear glitch patterns.",
      icon: Radio,
      color: "bg-retro-orange"
    },
    "Rock/Electronic": {
      desc: "Cross-genre space soundscapes and alternative rock textures.",
      icon: Volume2,
      color: "bg-[#233D4D]"
    }
  }

  return (
    <section className="py-12 md:py-20 font-body">
      <div className="container-custom">
        <div className="border-b border-[#233D4D]/50 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-retro-orange block">Sonic Breakdown</span>
          <h1 className="text-4xl md:text-5xl font-black mt-1 font-headline text-white">Genres</h1>
          <p className="mt-3 text-zinc-400 max-w-xl">
            A spectrum breakdown of the core sounds and synthesis shaping Bangladesh's modern alternative electronic music scene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8">
          {/* Progress chart */}
          <div className="bg-black border border-[#233D4D]/50 rounded-2xl p-5 md:p-6 backdrop-blur-md">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-headline">
              <span className="w-2.5 h-2.5 rounded-full bg-retro-orange" />
              Scene Distribution
            </h2>
            
            <div className="flex flex-col gap-5">
              {genreStats.map((g) => {
                const details = genreDetails[g.label] || {
                  desc: "",
                  icon: Music,
                  color: "bg-zinc-500"
                }

                return (
                  <div key={g.label} className="w-full">
                    <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1.5 font-mono">
                      <span>{g.label}</span>
                      <span>{g.pct}%</span>
                    </div>
                    <div className="w-full bg-black h-3 rounded-full overflow-hidden border border-[#233D4D]/50 p-[1px]">
                      <div 
                        className={`h-full rounded-full ${details.color} transition-all duration-1000 shadow-sm`} 
                        style={{ width: `${g.pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Description blocks */}
          <div className="flex flex-col gap-4">
            {genreStats.map((g) => {
              const details = genreDetails[g.label] || {
                desc: "Alternative independent styles.",
                icon: Music,
                color: "bg-zinc-500"
              }
              const Icon = details.icon

              return (
                <div key={g.label} className="flex gap-4 p-4 rounded-xl bg-[#233D4D]/5 border border-[#233D4D]/35">
                  <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center border border-[#233D4D]/40 bg-black text-[#FE7F2D]`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-headline">{g.label}</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {details.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
