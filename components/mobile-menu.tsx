"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "#", label: "BLOG" },
  { href: "/team", label: "TEAM" },
  { href: "/contact-us", label: "CONTACT US" },
]

export function MobileMenuButton() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }
    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-8 [&_svg]:shrink-0 h-12 w-12 lg:hidden text-primary-accent hover:bg-primary-accent/10 mobile-menu-btn"
      >
        <Menu className="h-8 w-8" />
      </button>

      {mounted &&
        createPortal(
          <div
            className={`mobile-menu-overlay${open ? " open" : ""}`}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false)
            }}
          >
            <div className="mobile-menu-panel">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="mobile-menu-close"
              >
                <X className="h-6 w-6" />
              </button>

              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#consultation"
                className="mobile-menu-cta-wrap"
                onClick={() => setOpen(false)}
              >
                <button type="button" className="mobile-menu-cta">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}