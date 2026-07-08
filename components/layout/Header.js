"use client"
import Link from "next/link"
import { useState } from "react"
import { X, Sparkles } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/discovery", label: "Spectrum Synth" },
  { href: "/artists", label: "Artists" },
  { href: "/releases", label: "Releases" },
  { href: "/genres", label: "Genres" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container-custom navbar">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full border border-zinc-800 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:border-white">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src="/asset/roygbiv_grey-logo.png" 
                  alt="roygbiv logo" 
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white hover:text-white transition-all font-headline">
              roygbiv
            </span>
          </Link>

          {/* Unified Hamburger Menu Trigger - visible across all viewports */}
          <button
            className="flex flex-col gap-1.5 p-2 rounded-xl border border-zinc-800 bg-black/40 hover:border-white hover:bg-zinc-900 transition-all cursor-pointer group"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="block w-6 h-0.5 bg-white group-hover:bg-white transition-colors" />
            <span className="block w-6 h-0.5 bg-white group-hover:bg-white transition-colors" />
            <span className="block w-4 h-0.5 bg-white group-hover:bg-white group-hover:w-6 transition-all duration-300" />
          </button>
        </div>
      </header>

      {/* Modern sliding drawer menu */}
      <div className={`fixed inset-0 z-[200] ${open ? 'pointer-events-auto visible' : 'pointer-events-none invisible'}`}>
        {/* Elegant faded backdrop overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 cursor-pointer ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Sliding Drawer Container */}
        <div
          className={`absolute top-0 right-0 w-full max-w-[350px] h-full bg-black border-l border-zinc-800 p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col gap-8">
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Menu Spectrum</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg border border-zinc-800 hover:border-white text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="flex flex-col gap-2 font-body">
              {navLinks.map((l) => {
                const isSynth = l.href === "/discovery"
                return (
                  <div key={l.label}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all border ${
                        isSynth 
                          ? "bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white hover:border-white" 
                          : "border-transparent hover:bg-zinc-900 hover:border-zinc-800 text-[#EAECF0] hover:text-white"
                      }`}
                    >
                      <span className="text-sm md:text-base font-semibold">{l.label}</span>
                      {isSynth && <Sparkles className="w-4 h-4 text-white animate-pulse" />}
                    </Link>
                  </div>
                )
              })}
            </nav>
          </div>

          {/* Drawer Footer Information */}
          <div className="pt-6 border-t border-zinc-800 text-center font-mono">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">roygbiv archive v2.0</span>
            <span className="text-[9px] text-zinc-400 block mt-1">Bangladeshi Electronic Music Archive</span>
          </div>
        </div>
      </div>
    </>
  )
}

