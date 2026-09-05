import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

import "./globals.css"

export const metadata: Metadata = {
  title: "Business Automations Expert",
  description: "Ai Automations for Business",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-dark-primary text-untitled-ui-white overflow-x-hidden relative">
          <div
            className="fixed inset-0 opacity-15 pointer-events-none z-0"
            style={{
              backgroundImage: "url('/images/bg-pattern.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              filter: "brightness(0.7) contrast(1.3) hue-rotate(45deg)",
              width: "100vw",
              height: "100vh",
            }}
          />

          {/* Fixed header, rendered above all page content */}
          <div className="fixed inset-x-0 top-0 z-50">
            <Nav />
          </div>

          {/* Invisible spacer matching the header's exact height, so
              page content doesn't get hidden underneath the fixed header */}
          <div aria-hidden="true" className="invisible pointer-events-none">
            <Nav />
          </div>

          {children}

          <Footer />
        </div>
      </body>
    </html>
  )
}