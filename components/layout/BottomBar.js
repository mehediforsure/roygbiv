"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Disc, Calendar, Sparkles } from "lucide-react"

const bottomLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discovery", label: "Discovery", icon: Sparkles },
  { href: "/artists", label: "Artists", icon: Users },
  { href: "/releases", label: "Releases", icon: Disc },
  { href: "/events", label: "Events", icon: Calendar },
]

export default function BottomBar() {
  const pathname = usePathname()

  return (
    <div id="mobile-floating-bottom-bar" className="md:hidden fixed bottom-4 inset-x-4 z-[150] pointer-events-none font-body">
      <nav className="w-full max-w-md mx-auto bg-black/90 backdrop-blur-lg border border-[#233D4D]/80 rounded-2xl px-3 py-2 flex justify-around items-center shadow-2xl pointer-events-auto">
        {bottomLinks.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all relative ${
                isActive ? "text-retro-orange scale-110" : "text-zinc-400 hover:text-retro-orange"
              }`}
              style={{ minWidth: "50px", minHeight: "44px" }}
            >
              <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : "stroke-[1.8px]"}`} />
              <span className="text-[9px] font-medium tracking-wide">{item.label}</span>
              
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-retro-orange rounded-full" />
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
