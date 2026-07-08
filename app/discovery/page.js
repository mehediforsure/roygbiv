"use client"
import InteractiveSpectrum from "@/components/home/InteractiveSpectrum"
import { ArrowLeft, Sparkles, Music } from "lucide-react"
import Link from "next/link"

export default function DiscoveryPage() {
  return (
    <main className="min-h-screen py-12 md:py-20 relative overflow-hidden font-body bg-black text-[#EAECF0]">
      {/* Dynamic atmospheric ambient glow backdrops */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FE7F2D]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-[400px] h-[400px] bg-[#233D4D]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Back and Breadcrumb line */}
        <div className="mb-8 flex items-center justify-between border-b border-[#233D4D]/40 pb-5">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-retro-orange transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <span>Archive</span>
            <span>/</span>
            <span className="text-[#FE7F2D]">Discovery Engine</span>
          </div>
        </div>

        {/* Hero Section of the Discovery Page */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#233D4D]/25 border border-[#233D4D]/60 text-xs font-semibold text-retro-orange uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Sonic Laboratory</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] font-headline text-white">
            The <span className="text-[#FE7F2D]">roygbiv</span> Discovery Engine
          </h1>
          
          <p className="mt-4 text-zinc-300 text-base md:text-lg leading-relaxed font-normal">
            An interactive synthesizer and spectral wave controller designed to bridge Bangladeshi independent electronic musicians. Toggle color vibrations to generate custom frequencies, filter by matching genres, and instantly play generative ambient loops.
          </p>
        </div>

        {/* The Discovery Engine block */}
        <div className="w-full">
          <InteractiveSpectrum />
        </div>

        {/* Quick Help Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#233D4D]/30">
          <div className="p-5 rounded-2xl bg-[#233D4D]/5 border border-[#233D4D]/30">
            <div className="w-8 h-8 rounded-lg bg-retro-orange/10 flex items-center justify-center text-retro-orange mb-3">
              <span className="font-mono text-xs font-bold">01</span>
            </div>
            <h3 className="text-sm font-bold text-white font-headline">Select Spectrum Node</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
              Click any colored letter in the <strong>ROYGBIV</strong> controller to shift the synthesis frequency. Each node is linked to a distinctive artist style.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#233D4D]/5 border border-[#233D4D]/30">
            <div className="w-8 h-8 rounded-lg bg-retro-orange/10 flex items-center justify-center text-retro-orange mb-3">
              <span className="font-mono text-xs font-bold">02</span>
            </div>
            <h3 className="text-sm font-bold text-white font-headline">Enable Ambient Loop</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
              Toggle the generative heartbeat sequencer to start an algorithmic rhythm that visualizes and breathes matching synthesizer patterns.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#233D4D]/5 border border-[#233D4D]/30">
            <div className="w-8 h-8 rounded-lg bg-retro-orange/10 flex items-center justify-center text-retro-orange mb-3">
              <span className="font-mono text-xs font-bold">03</span>
            </div>
            <h3 className="text-sm font-bold text-white font-headline">Explore Matched Artists</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
              Review matching electronic acts in the visualizer card, inspect their unique wave parameters, and discover their catalog links.
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}
