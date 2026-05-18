import Link from "next/link"

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold">Are You a Musician or Organizer?</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          We're collaborating with artists and event organizers to build the most complete hub for Bangladesh's independent music scene.
        </p>
        <div className="cta-btns">
          <Link href="#" className="secondary-btn">Submit an Event</Link>
          <Link href="#" className="ghost-btn">Collaborate With Us</Link>
        </div>
      </div>
    </section>
  )
}
