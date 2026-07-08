import { Sparkles, Radio, HelpCircle, ArrowUpRight, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden font-body">
      {/* Background radial ambient navy glow */}
      <div className="absolute top-0 left-10 w-[400px] h-[400px] bg-[#233D4D]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="border-b border-[#233D4D]/50 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE7F2D] block">Behind the Waves</span>
          <h1 className="text-4xl md:text-5xl font-black mt-1 font-headline text-[#EAECF0]">About roygbiv</h1>
          <p className="mt-3 text-zinc-400 max-w-xl">
            Learn more about the mission, spectrum parameters, and independent curation driving the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-8">
          
          {/* Main Story Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#233D4D]/5 border border-[#233D4D]/50 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-[#EAECF0] tracking-tight font-headline">The Spectral Mission</h2>
              
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm md:text-base font-normal">
                <strong className="text-white font-semibold">roygbiv</strong> is an independent digital archive and interactive discovery engine for Bangladesh's alternative electronic music scene. 
              </p>
              
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm md:text-base font-normal">
                Just as the visible spectrum refracts white light into Red, Orange, Yellow, Green, Blue, Indigo, and Violet, our platform seeks to map the diverse spectrum of independent music culture in Dhaka—ranging from experimental noise synthesis, modular soundscapes, rock-electronic crossovers, indie pop beats, and late-night underground club culture.
              </p>

              <div className="mt-6 border-t border-[#233D4D]/40 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#233D4D] bg-black p-[1.5px] animate-pulse">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-mono text-[#FE7F2D]">
                      R
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Curated Under Noise Constraints</span>
                    <span className="text-[10px] font-mono text-retro-orange/80 uppercase tracking-widest mt-0.5 block">Version 2.0.0 (Cosmic Edition)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#233D4D]/5 border border-[#233D4D]/35">
                <HelpCircle className="w-5 h-5 text-retro-orange mb-2" />
                <h3 className="text-sm font-bold text-white font-headline">Why "roygbiv"?</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
                  It represents the full color spectrum of sound. Each wave is unique, alternative, and bridges genres often ignored by mainstream media.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#233D4D]/5 border border-[#233D4D]/35">
                <Radio className="w-5 h-5 text-retro-orange mb-2 animate-pulse" />
                <h3 className="text-sm font-bold text-white font-headline">Interactive Synthesizer</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
                  Use our live tactile spectrum module on the homepage to generate musical frequencies and discover matching music profiles.
                </p>
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#233D4D]/5 border border-[#233D4D]/50 rounded-2xl p-5 md:p-6">
              <h3 className="text-base font-bold text-white mb-4 font-headline">Scene Integration</h3>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="#" 
                  className="flex items-center justify-between p-3 rounded-xl bg-black border border-[#233D4D]/45 hover:border-retro-orange transition-colors text-xs text-zinc-300 font-semibold group"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-retro-orange fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Open Source Archive</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-retro-orange transition-transform" />
                </a>

                <a 
                  href="mailto:mehediforsure@gmail.com" 
                  className="flex items-center justify-between p-3 rounded-xl bg-black border border-[#233D4D]/45 hover:border-retro-orange transition-colors text-xs text-zinc-300 font-semibold group"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-retro-orange" />
                    <span>Submit Artist Profile</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-retro-orange transition-transform" />
                </a>
              </div>

              <p className="text-[11px] text-zinc-500 mt-5 italic leading-relaxed">
                Want to expand this database? Submit an electronic artist, live band, upcoming concert schedule, or release track via email link above.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
