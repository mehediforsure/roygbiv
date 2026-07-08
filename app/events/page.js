"use client"
import { useState, useEffect } from "react"
import { upcomingEvents } from "@/data/events"
import { Calendar, MapPin, Users, Heart, Check, Share2 } from "lucide-react"

export default function EventsPage() {
  const [rsvps, setRsvps] = useState({})
  const [copiedIndex, setCopiedIndex] = useState(null)

  // Load RSVPs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("roygbiv_event_rsvps")
      if (stored) {
        setRsvps(JSON.parse(stored))
      }
    } catch (e) {
      console.warn(e)
    }
  }, [])

  const toggleRsvp = (eventName) => {
    const updated = {
      ...rsvps,
      [eventName]: !rsvps[eventName]
    }
    setRsvps(updated)
    try {
      localStorage.setItem("roygbiv_event_rsvps", JSON.stringify(updated))
    } catch (e) {
      console.warn(e)
    }
  }

  const handleShare = (eventName, index) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`Check out ${eventName} on roygbiv Bangladeshi Electronic Music Hub!`)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    }
  }

  return (
    <section className="py-12 md:py-20 font-body">
      <div className="container-custom">
        <div className="border-b border-[#233D4D]/50 pb-6 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FE7F2D] block">Scene Schedule</span>
          <h1 className="text-4xl md:text-5xl font-black mt-1 font-headline text-white">Concerts &amp; Gigs</h1>
          <p className="mt-3 text-zinc-400 max-w-xl">Find upcoming independent electronic concerts, underground club nights, synth showcases, and festivals in Dhaka.</p>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          {upcomingEvents.map((ev, index) => {
            const isInterested = !!rsvps[ev.name]
            
            // Calculate dynamic count
            let displayInterested = ev.interested || "0+"
            if (isInterested) {
              const baseNum = parseInt(displayInterested) || 0
              displayInterested = `${baseNum + 1}+`
            }

            return (
              <div 
                key={ev.name} 
                className={`group relative bg-black border rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 transition-all duration-300 ${
                  isInterested 
                    ? "border-[#FE7F2D]/50 bg-[#233D4D]/10 shadow-[0_0_15px_rgba(254,127,45,0.05)]" 
                    : "border-[#233D4D]/50 hover:border-retro-orange hover:bg-[#233D4D]/5"
                }`}
              >
                {/* Date Badge */}
                <div className="flex sm:flex-col items-center justify-center bg-black rounded-xl p-3 text-center min-w-[64px] h-[64px] border border-[#233D4D]/50 group-hover:border-retro-orange transition-colors shrink-0">
                  <span className="text-[#FE7F2D] text-[10px] font-bold uppercase tracking-wider block sm:mb-0.5 shrink-0 px-2 sm:px-0">
                    {ev.month}
                  </span>
                  <span className="text-2xl font-black text-white leading-none">
                    {ev.day}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug line-clamp-2 font-headline">
                    {ev.name}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#233D4D] shrink-0" />
                      <span className="truncate">{ev.venue}</span>
                    </span>
                    {ev.interested && (
                      <span className="flex items-center gap-1 font-mono">
                        <Users className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span>{displayInterested} interested</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Responsive Touch Actions */}
                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-0 border-[#233D4D]/40 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => handleShare(ev.name, index)}
                    className="w-10 h-10 rounded-xl border border-[#233D4D]/50 hover:border-retro-orange hover:bg-[#233D4D]/10 text-zinc-400 hover:text-white transition-all flex items-center justify-center shrink-0"
                    title="Share event link"
                    aria-label="Share event"
                  >
                    <Share2 className={`w-4 h-4 ${copiedIndex === index ? "text-[#FE7F2D]" : ""}`} />
                  </button>

                  <button
                    onClick={() => toggleRsvp(ev.name)}
                    className={`flex items-center gap-2 px-4 h-10 rounded-xl text-sm font-semibold transition-all select-none active:scale-95 ${
                      isInterested
                        ? "bg-retro-orange text-black shadow-lg shadow-retro-orange/10"
                        : "bg-[#233D4D]/20 hover:bg-[#233D4D]/40 text-zinc-200 border border-[#233D4D]/60"
                    }`}
                  >
                    {isInterested ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3px]" />
                        <span>Interested</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 shrink-0" />
                        <span>Interested</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
