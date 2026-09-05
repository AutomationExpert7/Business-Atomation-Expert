import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 border-t border-untitled-ui-gray800 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Mobile / tablet stacked layout */}
        <div className="flex flex-col space-y-6 lg:hidden">
          <Link href="/">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="w-10 h-10 border-2 border-primary-accent rounded flex items-center justify-center">
                <div className="text-primary-accent font-bold text-sm">
                  <div className="text-xs leading-none">B+</div>
                  <div className="text-xs leading-none">AE</div>
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-semibold text-primary-accent text-center sm:text-left">
                Business Automations Expert
              </span>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-untitled-ui-gray500">
            <a
              href="tel:+15097923594"
              className="text-center sm:text-left hover:text-primary-accent transition-colors"
            >
              (509) 792-3594
            </a>

            <a
              href="mailto:farry@businessautomationsexpert.com"
              className="text-center sm:text-left break-all sm:break-normal hover:text-primary-accent transition-colors"
            >
              farry@businessautomationsexpert.com
            </a>
          </div>

          <div className="flex justify-center sm:justify-start">
            <Link href="/#consultation">
              <Button
                variant="outline"
                className="h-10 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-6 py-2 rounded-full font-medium w-full sm:w-auto"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-primary-accent rounded flex items-center justify-center">
                <div className="text-primary-accent font-bold text-sm">
                  <div className="text-xs leading-none">B+</div>
                  <div className="text-xs leading-none">AE</div>
                </div>
              </div>
              <span className="text-2xl font-semibold text-primary-accent">
                Business Automations Expert
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-8 text-sm text-untitled-ui-gray500">
            <a
              href="tel:+15097923594"
              className="hover:text-primary-accent transition-colors"
            >
              (509) 792-3594
            </a>

            <a
              href="mailto:farry@businessautomationsexpert.com"
              className="hover:text-primary-accent transition-colors"
            >
              farry@businessautomationsexpert.com
            </a>
          </div>

          <Link href="/#consultation">
            <Button
              variant="outline"
              className="h-10 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-6 py-2 rounded-full font-medium"
            >
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}