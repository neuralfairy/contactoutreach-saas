import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contactoutreach Solutions - B2B Lead Generation Platform",
  description: "Advanced B2B lead generation using AI-powered targeting and intent signals",
  metadataBase: new URL("https://contactoutreach.com"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Contactoutreach Solutions",
              description: "B2B Lead Generation Agency",
              url: "https://contactoutreach.com",
              logo: "https://contactoutreach.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Reno",
                addressRegion: "NV",
                addressCountry: "US",
              },
              sameAs: ["https://salescentri.com"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
