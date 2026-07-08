export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-[#EAECF0] flex flex-col items-center justify-center font-body p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-black font-headline text-white mb-4">404 - Page Not Found</h1>
      <p className="text-zinc-400 max-w-md mb-8">
        The sonic frequency you are looking for has faded into the background or does not exist.
      </p>
      <a 
        href="/" 
        className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-bold text-sm"
      >
        Return to Home
      </a>
    </div>
  )
}
