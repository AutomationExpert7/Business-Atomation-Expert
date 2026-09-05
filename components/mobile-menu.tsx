"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "#", label: "BLOG" },
  { href: "/team", label: "TEAM" },
]

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  if (href === "#") return false
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function MobileMenuButton() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 lg:hidden text-primary-accent hover:bg-primary-accent/10 mobile-menu-btn"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={`mobile-menu-overlay${open ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false)
        }}
      >
        <div className="mobile-menu-panel">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`mobile-menu-link${isLinkActive(pathname, link.href) ? " active-link" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="mobile-menu-cta-wrap"
            onClick={() => setOpen(false)}
          >
            <button type="button" className="mobile-menu-cta">
              Book Consultation
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}