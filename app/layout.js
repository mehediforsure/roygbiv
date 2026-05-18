import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Shobdo — Bangladesh's Independent Music Hub",
  description: "Discover, archive and celebrate Bangladeshi independent music culture. Artists, events, releases and more."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
