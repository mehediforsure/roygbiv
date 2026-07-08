"use client"
import { useState, useEffect, useRef } from "react"
import { Play, Pause, Music, Volume2, Sparkles, User, Disc, Radio, RefreshCw } from "lucide-react"
import { artists } from "@/data/artists"
import { releases } from "@/data/releases"

const spectrumData = [
  {
    key: "red",
    color: "#FFFFFF",
    glowColor: "rgba(255, 255, 255, 0.4)",
    name: "Pure White Pulse",
    freq: 261.63, // C4
    artistId: "sanaul-kabir",
    vibe: "Experimental / Ambient",
    description: "Sanaul Kabir Shanto's deep cinematic electronic soundscapes."
  },
  {
    key: "orange",
    color: "#E4E4E7",
    glowColor: "rgba(228, 228, 231, 0.4)",
    name: "Warm Silver Pulse",
    freq: 293.66, // D4
    artistId: "owned",
    vibe: "Rock-Electronic Fusion",
    description: "Owned's high-energy overdrive and industrial bass synthesis."
  },
  {
    key: "yellow",
    color: "#A1A1AA",
    glowColor: "rgba(161, 161, 170, 0.3)",
    name: "Light Grey Slate",
    freq: 329.63, // E4
    artistId: "betelguese",
    vibe: "Space Wave / Progressive",
    description: "Betelguese's interstellar, celestial synthesizer patterns."
  },
  {
    key: "green",
    color: "#71717A",
    glowColor: "rgba(113, 113, 122, 0.3)",
    name: "Medium Grey Synth",
    freq: 349.23, // F4
    artistId: "karnival",
    vibe: "Progressive / Post-Rock",
    description: "Karnival's hypnotic, layered organic structures."
  },
  {
    key: "blue",
    color: "#3F3F46",
    glowColor: "rgba(63, 63, 70, 0.3)",
    name: "Charcoal Wave",
    freq: 392.00, // G4
    artistId: "dads-in-the-park",
    vibe: "Indie Pop & Electro",
    description: "Dads In The Park's soaring melodic retro electro lines."
  },
  {
    key: "indigo",
    color: "#27272A",
    glowColor: "rgba(39, 39, 42, 0.4)",
    name: "Slate Synth",
    freq: 440.00, // A4
    artistId: "eida",
    vibe: "Electronic Rock",
    description: "Eida's glitchy rhythms and punchy basslines."
  },
  {
    key: "violet",
    color: "#18181B",
    glowColor: "rgba(24, 24, 27, 0.4)",
    name: "Deep Charcoal Wave",
    freq: 493.88, // B4
    artistId: "all-live-djs",
    vibe: "Deep Techno / Club Set",
    description: "Dhaka's underground techno clubs & modular sound selectors."
  }
]

export default function InteractiveSpectrum() {
  const [activeColor, setActiveColor] = useState(spectrumData[0])
  const [isPlayingBeat, setIsPlayingBeat] = useState(false)
  const [visualizerBars, setVisualizerBars] = useState(Array(15).fill(20))
  const [synthVolume, setSynthVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  
  const audioContextRef = useRef(null)
  const beatIntervalRef = useRef(null)
  const beatStepRef = useRef(0)

  // Initialize Web Audio API lazily on first gesture
  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume()
    }
  }

  // Handle playing individual synthesized note with exponential envelope
  const playTone = (freq) => {
    initAudio()
    if (isMuted) return

    const ctx = audioContextRef.current
    if (!ctx) return

    try {
      const osc = ctx.createOscillator()
      const subOsc = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = "triangle"
      osc.frequency.setValueAtTime(freq, ctx.currentTime)

      subOsc.type = "sine"
      subOsc.frequency.setValueAtTime(freq / 2, ctx.currentTime)

      filter.type = "lowpass"
      filter.frequency.setValueAtTime(800, ctx.currentTime)

      // Envelope: fast attack, exponential release
      const now = ctx.currentTime
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(synthVolume, now + 0.08)
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.0)

      osc.connect(filter)
      subOsc.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(ctx.destination)

      osc.start(now)
      subOsc.start(now)
      osc.stop(now + 1.0)
      subOsc.stop(now + 1.0)

      // Dynamic visualizer burst
      animateVisualizer(freq)
    } catch (e) {
      console.warn("Audio node generation failed", e)
    }
  }

  // Render a lovely reactive equalizing visualizer block
  const animateVisualizer = (seedFreq = 300) => {
    const nextBars = visualizerBars.map(() => {
      const scale = Math.sin(Date.now() + seedFreq) * 0.5 + 0.5
      return Math.floor(scale * 75) + 15
    })
    setVisualizerBars(nextBars)
  }

  // Smooth visualizer animation when idle or playing beat
  useEffect(() => {
    const timer = setInterval(() => {
      setVisualizerBars((prev) =>
        prev.map((b) => {
          const decay = Math.max(10, b - 4)
          const playPulse = isPlayingBeat ? Math.floor(Math.random() * 40) + 10 : 0
          return Math.min(95, decay + playPulse)
        })
      )
    }, 70)
    return () => clearInterval(timer)
  }, [isPlayingBeat])

  // Custom synthesized electronic beat engine
  const toggleBeat = () => {
    initAudio()
    if (isPlayingBeat) {
      clearInterval(beatIntervalRef.current)
      setIsPlayingBeat(false)
    } else {
      setIsPlayingBeat(true)
      beatStepRef.current = 0
      
      beatIntervalRef.current = setInterval(() => {
        const ctx = audioContextRef.current
        if (!ctx) return
        const step = beatStepRef.current

        try {
          const now = ctx.currentTime

          // Procedural Kick Drum on 1 and 3 (steps 0, 4, 8, 12)
          if (step % 4 === 0) {
            const kickOsc = ctx.createOscillator()
            const kickGain = ctx.createGain()
            kickOsc.frequency.setValueAtTime(150, now)
            kickOsc.frequency.exponentialRampToValueAtTime(0.01, now + 0.2)
            kickGain.gain.setValueAtTime(0.35, now)
            kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)
            kickOsc.connect(kickGain)
            kickGain.connect(ctx.destination)
            kickOsc.start(now)
            kickOsc.stop(now + 0.25)
          }

          // Procedural High-Hat on even beats
          if (step % 2 === 2) {
            const hatOsc = ctx.createOscillator()
            const hatGain = ctx.createGain()
            hatOsc.type = "triangle"
            hatOsc.frequency.setValueAtTime(10000, now)
            hatGain.gain.setValueAtTime(0.06, now)
            hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)
            hatOsc.connect(hatGain)
            hatGain.connect(ctx.destination)
            hatOsc.start(now)
            hatOsc.stop(now + 0.06)
          }

          // Procedural Arpeggiator based on current spectrum selection
          if (step % 2 === 0) {
            const arpIndex = (step / 2) % spectrumData.length
            const activeColorFreq = activeColor.freq
            const scaleFactors = [1, 1.2, 1.5, 1.8]
            const factor = scaleFactors[step % scaleFactors.length]
            const noteFreq = activeColorFreq * factor

            const arpOsc = ctx.createOscillator()
            const arpGain = ctx.createGain()
            arpOsc.type = "sine"
            arpOsc.frequency.setValueAtTime(noteFreq, now)
            arpGain.gain.setValueAtTime(0.06, now)
            arpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)
            arpOsc.connect(arpGain)
            arpGain.connect(ctx.destination)
            arpOsc.start(now)
            arpOsc.stop(now + 0.35)
          }
        } catch (e) {
          console.warn(e)
        }

        beatStepRef.current = (step + 1) % 16
      }, 150)
    }
  }

  useEffect(() => {
    return () => clearInterval(beatIntervalRef.current)
  }, [])

  // Find matching artist details
  const matchingArtist = artists.find((a) => a.id === activeColor.artistId)

  return (
    <div id="interactive-spectrum-card" className="w-full bg-zinc-950/20 border border-zinc-800 rounded-3xl p-5 md:p-6 backdrop-blur-md relative overflow-hidden mb-8">
      {/* Decorative spectrum bar glow */}
      <div 
        className="absolute top-0 inset-x-0 h-[2px] transition-all duration-500" 
        style={{ background: `linear-gradient(90deg, ${activeColor.color} 0%, rgba(39,39,42,0) 100%)` }}
      />

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        
        {/* Left Side: Tactile spectrum keys and controls */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1 text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> 
                Tactile Spectrum Synth
              </span>
              <span className="text-zinc-500 text-xs font-mono">Tap & play notes</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              The <span style={{ color: activeColor.color }}>ROYGBIV</span> Discovery Engine
            </h3>
            
            <p className="text-zinc-400 text-sm mt-2 max-w-md">
              Tap the spectral colors below to synthesize custom music frequencies and reveal matching artists shaping the Bangladeshi electronic scene.
            </p>
          </div>

          {/* Interactive Colored Spectrum Bars */}
          <div className="my-5 flex flex-col gap-2">
            <div className="grid grid-cols-7 gap-1.5 md:gap-2">
              {spectrumData.map((item) => {
                const isActive = activeColor.key === item.key
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveColor(item)
                      playTone(item.freq)
                    }}
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: isActive ? `0 0 20px ${item.glowColor}` : "none"
                    }}
                    className={`h-16 md:h-20 rounded-xl transition-all duration-150 transform hover:scale-[1.05] active:scale-[0.95] flex flex-col justify-end p-2 ${
                      isActive ? "ring-2 ring-white/60 scale-[1.02]" : "opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Play ${item.name}`}
                  >
                    <span className="text-[10px] font-mono font-bold text-black bg-white/70 px-1 rounded self-center truncate max-w-full">
                      {item.key.slice(0, 1).toUpperCase()}
                    </span>
                  </button>
                )
              })}
            </div>
            <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1 px-1">
              <span>Low Freq</span>
              <span>High Freq</span>
            </div>
          </div>

          {/* Beat controls */}
          <div className="flex flex-wrap items-center gap-3 bg-black/60 p-3 rounded-2xl border border-zinc-800 font-body">
            <button
              onClick={toggleBeat}
              style={{ borderColor: activeColor.color }}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-sm font-semibold rounded-xl transition-colors border border-zinc-800 text-white"
            >
              {isPlayingBeat ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Mute Spectrum Beat</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white animate-bounce" />
                  <span>Generative Ambient Beat</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-3 ml-auto">
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="text-zinc-400 hover:text-white transition-colors"
                title={isMuted ? "Unmute sounds" : "Mute sounds"}
              >
                <Volume2 className={`w-4 h-4 ${isMuted ? "opacity-30 line-through" : ""}`} />
              </button>
              <input
                type="range"
                min="0.05"
                max="0.6"
                step="0.05"
                value={synthVolume}
                onChange={(e) => setSynthVolume(parseFloat(e.target.value))}
                className="w-16 md:w-20 accent-zinc-400 h-1 rounded-lg cursor-pointer bg-zinc-800"
                aria-label="Volume slider"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Visualizer and matching artist details */}
        <div className="w-full lg:w-[320px] flex flex-col justify-between bg-black/80 border border-zinc-800 rounded-2xl p-4 font-body">
          <div className="flex flex-col gap-4">
            
            {/* Visualizer bars */}
            <div className="h-16 flex items-end justify-between px-2 gap-[3px] border-b border-zinc-800/60 pb-3">
              {visualizerBars.map((height, idx) => (
                <div
                  key={idx}
                  style={{ 
                    height: `${height}%`,
                    backgroundColor: activeColor.color,
                    boxShadow: `0 0 10px ${activeColor.glowColor}`
                  }}
                  className="flex-1 rounded-full transition-all duration-70"
                />
              ))}
            </div>

            {/* Selected frequency information */}
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Selected Tone Vibe</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeColor.color }} />
                <span className="text-sm font-bold text-zinc-200">{activeColor.name} · {activeColor.freq}Hz</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">{activeColor.vibe}</p>
            </div>
          </div>

          {/* Render matching artist in spectrum */}
          <div className="mt-4 border-t border-zinc-800/50 pt-3">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Featured Pioneer</span>
            
            {matchingArtist ? (
              <div 
                key={matchingArtist.id}
                className="flex items-center gap-3 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-black/40 relative flex-shrink-0 flex items-center justify-center border border-zinc-800">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{matchingArtist.name}</h4>
                  <p className="text-[11px] text-zinc-400 truncate">{matchingArtist.genre}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-black/40 relative flex-shrink-0 flex items-center justify-center border border-zinc-800">
                  <Radio className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">Club Sets & DJ Hub</h4>
                  <p className="text-[11px] text-zinc-400 truncate">Techno, Electro & modular sets</p>
                </div>
              </div>
            )}
            
            <p className="text-[11px] text-zinc-500 mt-2 italic">
              {activeColor.description}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
