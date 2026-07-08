"use client"

import { useEffect } from "react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-[#EAECF0] flex flex-col items-center justify-center font-body p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-black font-headline text-white mb-4">Something went wrong</h1>
      <p className="text-zinc-400 max-w-md mb-8">
        An error occurred during synthesis. Please try resetting the spectrum.
      </p>
      <button 
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-bold text-sm cursor-pointer"
      >
        Try Again
      </button>
    </div>
  )
}
