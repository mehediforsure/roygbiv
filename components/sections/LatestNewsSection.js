import { newsItems } from "@/data/news"
import Link from "next/link"

export default function LatestNewsSection() {
  return (
    <div className="font-body">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">Editorials</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1 font-headline">Latest News &amp; Interviews</h2>
        </div>
        <Link href="#" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors mt-2 sm:mt-0 flex items-center gap-1.5 group font-medium">
          <span>All Articles</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newsItems.slice(0, 4).map((item) => (
          <article 
            key={item.title} 
            className="group flex flex-col justify-between p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-white transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono mb-2">
                <span>{item.date}</span>
                <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300 font-medium">{item.category}</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-zinc-300 transition-colors line-clamp-2 leading-snug font-headline">
                <Link href="#">{item.title}</Link>
              </h3>
              <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                {item.excerpt}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-900/50 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors">
              <span>Read full piece</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
