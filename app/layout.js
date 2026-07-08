import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Fraunces, Sora } from "next/font/google"
import { Suspense } from "react"
import dynamic from "next/dynamic"

const BottomBar = dynamic(() => import("@/components/layout/BottomBar"), {
  ssr: false,
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata = {
  title: "ROYGBIV — Bangladesh's Electronic Music Hub",
  description: "Discover, archive and celebrate Bangladeshi electronic music culture. Artists, releases, genres and events from the scene."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <body className="pb-24 md:pb-0 min-h-screen bg-black text-[#EAECF0]">
        <Header />
        {children}
        <Suspense fallback={null}>
          <BottomBar />
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}

