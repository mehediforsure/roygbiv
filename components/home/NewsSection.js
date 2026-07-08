import { newsItems } from "@/data/news"
import Link from "next/link"

export default function NewsSection() {
  return (
    <section className="section-spacing border-t border-zinc-800">
      <div className="container-custom">
        <h2 className="text-4xl font-bold">Latest News &amp; Interviews</h2>

        <div className="news-list">
          {newsItems.map((item) => (
            <article key={item.title} className="news-item">
              <div className="news-meta">
                <span>{item.date}</span>
                <span className="news-label">{item.category}</span>
              </div>
              <h3>
                <Link href="#">{item.title}</Link>
              </h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>

        <Link href="#" className="view-all">Browse All Articles →</Link>
      </div>
    </section>
  )
}
