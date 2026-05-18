import { upcomingEvents } from "@/data/events"
import { genreStats } from "@/data/genres"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Upcoming Events */}
      <div className="sb-box">
        <div className="sb-head"> Upcoming Events</div>
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

      {/* Genre Breakdown */}
      <div className="sb-box">
        <div className="sb-head"> Artists by Genre</div>
        <div className="sb-body">
          {genreStats.map((g) => (
            <div key={g.label} className="g-bar">
              <div className="g-label">
                <span>{g.label}</span>
                <span>{g.pct}%</span>
              </div>
              <div className="g-track">
                <div className="g-fill" style={{ width: `${g.pct}%` }}></div>
              </div>
            </div>
          ))}
          <Link href="#" className="view-all mt-2 inline-block">Browse by Genre →</Link>
        </div>
      </div>

      {/* Follow Social */}
      <div className="sb-box">
        <div className="sb-head"> Follow the Scene</div>
        <div className="sb-body">
          <div className="social-links">
            <a href="#" className="social-link"><span></span> Bluesky</a>
            <a href="#" className="social-link"><span></span> Instagram</a>
            <a href="#" className="social-link"><span></span> Facebook</a>
            <a href="#" className="social-link"><span></span> Discord</a>
          </div>
        </div>
      </div>

      {/* Artist CTA */}
      <div className="sb-box sb-cta">
        <div className="sb-head">Are You an Artist?</div>
        <div className="sb-body">
          <p className="small-note">
            Building the most complete archive of the Bangladeshi music scene. Get your band featured.
          </p>
          <Link href="#" className="primary-btn btn-full block text-center">
            Submit Your Profile
          </Link>
          <Link href="#" className="text-center block mt-2 text-xs text-zinc-400 hover:text-white">
            Submit an Event →
          </Link>
        </div>
      </div>
    </aside>
  )
}
