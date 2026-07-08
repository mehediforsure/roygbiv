import Link from "next/link"
import { Disc, Radio, Mail, Globe, Sparkles } from "lucide-react"

const footerCols = [
  {
    heading: "Discover",
    links: [
      { href: "/discovery", label: "Spectrum Synth" },
      { href: "/artists", label: "Artists" },
      { href: "/releases", label: "Releases" },
      { href: "/genres", label: "Genres" }
    ]
  },
  {
    heading: "Archive",
    links: [
      { href: "/events", label: "Events" },
      { href: "/about", label: "About" }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="site-footer bg-black border-t border-zinc-800 pt-16 pb-28 md:pb-12 mt-12 font-body">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12">
        
        {/* Brand details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full border border-zinc-800 p-[1.5px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src="/asset/roygbiv_grey-logo.png" 
                  alt="roygbiv logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white hover:text-white font-headline transition-colors">
              roygbiv
            </span>
          </div>
          
          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            Documenting, archiving, and celebrating the spectral diversity of independent synthesizers, bands, and underground club culture in Bangladesh.
          </p>

          <div className="flex items-center gap-2.5 mt-2">
            <a href="#" className="w-9 h-9 rounded-lg border border-zinc-800 hover:border-white flex items-center justify-center text-zinc-500 hover:text-white transition-colors" aria-label="Github link">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:mehediforsure@gmail.com" className="w-9 h-9 rounded-lg border border-zinc-800 hover:border-white flex items-center justify-center text-zinc-500 hover:text-white transition-colors" aria-label="Mail link">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link categories */}
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          {footerCols.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom info banner */}
      <div className="border-t border-zinc-800 pt-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
          <span>© 2026 roygbiv · Bangladeshi Electronic Music Archive</span>
        </div>
      </div>
    </footer>
  )
}
