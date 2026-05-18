import { upcomingEvents } from "@/data/events"

export default function EventsPage() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h1 className="text-5xl font-bold">Events</h1>
        <p className="mt-4 text-zinc-400">Upcoming independent concerts, gigs and festivals.</p>

        <div className="mt-8 flex flex-col gap-4">
          {upcomingEvents.map((ev) => (
            <div key={ev.name} className="flex gap-4 items-center p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
              <div className="bg-zinc-800 rounded-xl p-3 text-center min-w-[56px]">
                <div className="text-orange-500 text-xs font-bold uppercase">{ev.month}</div>
                <div className="text-2xl font-black">{ev.day}</div>
              </div>
              <div>
                <div className="font-semibold">{ev.name}</div>
                <div className="text-zinc-500 text-sm mt-0.5">{ev.venue}{ev.interested ? ` · ${ev.interested} interested` : ""}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
