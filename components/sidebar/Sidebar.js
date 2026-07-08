import { upcomingEvents } from "@/data/events"
import { newsItems } from "@/data/news"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Upcoming Events */}
      <div className="sb-box">
        <div className="sb-head">Upcoming Events</div>
        <div className="sb-body">
          <ul className="ev-list">
            {upcomingEvents.map((ev) => (
              <li key={ev.name} className="ev-item">
                <div className="ev-date-block">
                  <div className="ev-mon">{ev.month}</div>
                  <div className="ev-day">{ev.day}</div>
                </div>
                <div>
                  <div className="ev-name">{ev.name}</div>
                  <div className="ev-venue">
                    {ev.venue}{ev.interested ? ` · ${ev.interested} interested` : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/events" className="view-all mt-2 inline-block">Full Schedule →</Link>
        </div>
      </div>

      {/* Latest News & Interviews */}
      <div className="sb-box">
        <div className="sb-head">Latest News &amp; Interviews</div>
        <div className="sb-body">
          <ul className="flex flex-col gap-4">
            {newsItems.slice(0, 3).map((item) => (
              <li key={item.title} className="border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono mb-1">
                  <span>{item.date}</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300 font-medium">{item.category}</span>
                </div>
                <h4 className="text-xs font-semibold text-white hover:text-zinc-400 transition-colors line-clamp-2 leading-snug">
                  <Link href="#">{item.title}</Link>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Follow Social */}
      <div className="sb-box">
        <div className="sb-head">Follow the Scene</div>
        <div className="sb-body">
          <div className="social-links">
            <a href="#" className="social-link"><span></span> Bluesky</a>
            <a href="#" className="social-link"><span></span> Instagram</a>
            <a href="#" className="social-link"><span></span> Facebook</a>
            <a href="#" className="social-link"><span></span> Discord</a>
          </div>
        </div>
      </div>
    </aside>
  )
}
