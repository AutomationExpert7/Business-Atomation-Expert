import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 border-t border-untitled-ui-gray800 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Mobile / tablet stacked layout */}
        <div className="flex flex-col items-center text-center space-y-6 lg:hidden">
          <Link href="/">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 border-2 border-primary-accent rounded flex items-center justify-center">
                <div className="text-primary-accent font-bold text-sm">
                  <div className="text-xs leading-none">B+</div>
                  <div className="text-xs leading-none">AE</div>
                </div>
              </div>

              <span className="text-xl sm:text-2xl font-semibold text-primary-accent">
                Business Automations Expert
              </span>
            </div>
          </Link>

          <p className="text-sm text-untitled-ui-gray300 max-w-sm leading-relaxed">
            Business Automation &amp; RevOps experts helping teams
            eliminate manual work and unify their CRM, sales, marketing
            and operations into one system that runs itself.
          </p>

          <div className="flex flex-col items-center space-y-3 text-sm text-untitled-ui-gray300 pt-1">

            <a
              href="tel:+12312789640"
              className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+1 2312 789 640 (US)</span>
            </a>

            <a
              href="tel:+441925257106"
              className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+44 1925 257 106 (UK)</span>
            </a>

            <a
              href="tel:+61480811022"
              className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+61 480 811 022 (Australia)</span>
            </a>

              <a
            href="mailto:laiba@businessautomationsexpert.com"
            className="flex items-center space-x-2 break-all sm:break-normal text-sm text-untitled-ui-gray300 hover:text-primary-accent transition-colors"
          >
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span>laiba@businessautomationsexpert.com</span>
          </a>
          </div>

          <div className="flex justify-center">
            <Link href="/#consultation">
              <Button
                variant="outline"
                className="h-10 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-6 py-2 rounded-full font-medium w-full sm:w-auto"
              >
                Book Consultation
              </Button>
            </Link>
          </div>

          <p className="text-xs text-untitled-ui-gray500 pt-4 border-t border-untitled-ui-gray800 w-full">
            © {new Date().getFullYear()} Business Automations Expert. All
            rights reserved.
          </p>
        </div>

        {/* Desktop layout */}
        <div>
          <div className="hidden lg:flex justify-between items-start">
            <div className="flex flex-col space-y-4 max-w-xs">
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

              <p className="text-sm text-untitled-ui-gray300 leading-relaxed">
                Business Automation &amp; RevOps experts helping teams
              
                eliminate manual work and unify their CRM, sales,

                marketing and operations into one system that runs
                
                itself.
              </p>
            </div>

            <div className="flex flex-col space-y-3 text-sm text-untitled-ui-gray300">
              <a
                href="tel:+12312789640"
                className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 2312 789 640 (US)</span>
              </a>

              <a
                href="tel:+441925257106"
                className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+44 1925 257 106 (UK)</span>
              </a>

              <a
                href="tel:+61480811022"
                className="flex items-center space-x-2 hover:text-primary-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+61 480 811 022 (Australia)</span>
              </a>

              <a
                href="mailto:laiba@businessautomationsexpert.com"
                className="flex items-center space-x-2 hover:text-primary-accent transition-colors pt-2"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>laiba@businessautomationsexpert.com</span>
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
      </div>
    </footer>
  )
}