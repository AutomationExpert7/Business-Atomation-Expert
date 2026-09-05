"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { MobileMenuButton } from "@/components/mobile-menu"

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/team", label: "TEAM" },
  { href: "/contact-us", label: "CONTACT US" },
]

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Nav() {
  const pathname = usePathname()

  const getLinkClass = (href: string, base: string) =>
    isLinkActive(pathname, href)
      ? "text-primary-accent border-b-2 border-primary-accent pb-1 whitespace-nowrap"
      : `${base} pb-1 whitespace-nowrap`

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-20 bg-dark-primary/95 backdrop-blur-md">
      <Link href="/">
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary-accent rounded flex items-center justify-center">
            <div className="text-primary-accent font-bold text-xs sm:text-sm">
              <div className="text-xs leading-none">B+</div>
              <div className="text-xs leading-none">AE</div>
            </div>
          </div>
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary-accent leading-tight">
            <span className="block sm:inline">Business Automations</span>
            <span className="block sm:inline sm:ml-1">Expert</span>
          </span>
        </div>
      </Link>

      {/* Desktop nav (xl+) */}
      <div className="hidden xl:flex items-center space-x-8 2xl:space-x-12 text-sm font-medium">
        <Link
          href="/"
          className={getLinkClass("/", "hover:text-primary-accent")}
        >
          HOME
        </Link>

        <Link
          href="/services"
          className={getLinkClass("/services", "hover:text-primary-accent")}
        >
          SERVICES
        </Link>

        <Link
          href="/case-studies"
          className={getLinkClass(
            "/case-studies",
            "hover:text-primary-accent"
          )}
        >
          CASE STUDIES
        </Link>

        <a className="hover:text-primary-accent whitespace-nowrap" href="#">
          BLOG
        </a>

        <Link
          href="/team"
          className={getLinkClass("/team", "hover:text-primary-accent")}
        >
          TEAM
        </Link>

                  <Link
            href="/contact-us"
            className={getLinkClass("/contact-us", "hover:text-primary-accent")}
          >
            CONTACT US
          </Link>

      </div>

      <Link href="/#consultation" className="hidden xl:block flex-shrink-0">
        <Button
          variant="outline"
          className="h-10 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-6 py-2 rounded-full font-medium whitespace-nowrap"
        >
          Book Consultation
        </Button>
      </Link>

      {/* Tablet nav (lg only) */}
      <div className="hidden lg:flex xl:hidden items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={getLinkClass("/", "hover:text-primary-accent")}
        >
          HOME
        </Link>

        <Link
          href="/services"
          className={getLinkClass("/services", "hover:text-primary-accent")}
        >
          SERVICES
        </Link>

        <Link
          href="/case-studies"
          className={getLinkClass(
            "/case-studies",
            "hover:text-primary-accent"
          )}
        >
          CASE STUDIES
        </Link>

        <a className="hover:text-primary-accent" href="#">
          BLOG
        </a>

        <Link
          href="/team"
          className={getLinkClass("/team", "hover:text-primary-accent")}
        >
          TEAM
        </Link>

          <Link
          href="/contact-us"
          className={getLinkClass("/contact-us", "hover:text-primary-accent")}
        >
          CONTACT US
        </Link>

        <MobileMenuButton />
      </div>

      {/* Mobile row (below lg) */}
      <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
        <Link href="#consultation" className="hidden sm:block">
          <Button
            variant="outline"
            className="h-10 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap"
          >
            Book
          </Button>
        </Link>

        <MobileMenuButton />
      </div>
    </nav>
  )
}