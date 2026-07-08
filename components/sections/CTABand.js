import Link from "next/link"

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold">Explore the Sound of Bangladesh's Electronic Scene</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          From ambient and downtempo to techno and experimental production — discover the artists shaping Bangladesh's electronic music culture.
        </p>
        <div className="cta-btns">
          <Link href="/genres" className="secondary-btn">Browse Genres</Link>
          <Link href="/releases" className="ghost-btn">Latest Releases</Link>
        </div>
      </div>
    </section>
  )
}
