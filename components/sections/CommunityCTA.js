import Link from "next/link"

export default function CommunityCTA() {
  return (
    <section className="community-section">
      <div className="container-custom text-center">
        <span className="coming-badge">Coming Soon</span>
        <h2 className="text-4xl font-bold mt-4">Community Discussions</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          A dedicated space for fans, artists, and organizers to discuss music, share news, and connect — building credibility and culture first, then community features.
        </p>
        <Link href="#" className="primary-btn inline-block mt-6">
          Get Notified When It Launches
        </Link>
      </div>
    </section>
  )
}
