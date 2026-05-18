import HeroSection from "@/components/home/HeroSection"
import FeaturedArtists from "@/components/home/FeaturedArtists"
import NewsSection from "@/components/home/NewsSection"
import Sidebar from "@/components/sidebar/Sidebar"
import ReleasesSection from "@/components/sections/ReleasesSection"
import MediaSection from "@/components/sections/MediaSection"
import CommunityCTA from "@/components/sections/CommunityCTA"
import CTABand from "@/components/sections/CTABand"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="two-col container-custom">
        <main className="two-col-main">
          <FeaturedArtists />
          <NewsSection />
        </main>
        <Sidebar />
      </div>

      <MediaSection />
      <ReleasesSection />
      <CommunityCTA />
      <CTABand />
    </>
  )
}
