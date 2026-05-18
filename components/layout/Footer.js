import Link from "next/link"

const footerCols = [
  {
    heading: "Discover",
    links: ["Artists", "Bands", "Genres", "Archive"]
  },
  {
    heading: "Content",
    links: ["News", "Interviews", "Reviews", "Releases"]
  },
  {
    heading: "Events & Merch",
    links: ["Event Calendar", "Submit Event", "Artist Merch", "Promotions"]
  },
  {
    heading: "Platform",
    links: ["Submit Profile", "Community", "About", "Contact"]
  }
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-custom footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand">Shobdo</div>
          <div className="footer-tagline">
            Documenting, promoting and strengthening the Bangladeshi independent music culture.
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"></a>
            <a href="#" aria-label="Instagram"></a>
            <a href="#" aria-label="TikTok"></a>
            <a href="#" aria-label="YouTube"></a>
          </div>
        </div>

        <div className="footer-links">
          {footerCols.map((col) => (
            <div key={col.heading} className="f-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><Link href="#">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-custom footer-bottom-inner">
          <span className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </span>
          <span>© 2026 Shobdo — Independent Bangladeshi Music Archive</span>
        </div>
      </div>
    </footer>
  )
}
