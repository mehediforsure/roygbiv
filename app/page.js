import HeroSection from "@/components/home/HeroSection"
import ReleasesSection from "@/components/sections/ReleasesSection"
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection"
import LatestNewsSection from "@/components/sections/LatestNewsSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="container-custom py-16 flex flex-col gap-16 md:gap-20">
        <ReleasesSection />
        <UpcomingEventsSection />
        <LatestNewsSection />
      </div>
    </>
  )
}
