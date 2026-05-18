"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const navLinks = [
  { href: "/artists", label: "Artists" },
  { href: "/events", label: "Events" },
  { href: "/releases", label: "Releases" },
  { href: "#", label: "Interviews" },
  { href: "#", label: "Merch" },
  { href: "#", label: "Community" },
  { href: "#", label: "Archive" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container-custom navbar">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/asset/shobdo-logo.png"
              alt="Shobdo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold tracking-tight">Shobdo</span>
          </Link>

          <nav className="nav-links hidden md:flex">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <button
              onClick={() => setOpen(false)}
              className="self-end text-zinc-400 hover:text-white text-2xl mb-4"
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-lg text-zinc-300 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              
            </nav>
          </div>
          <div className="mobile-drawer-overlay" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  )
}
