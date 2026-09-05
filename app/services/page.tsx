import type { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Services | Business Automations Expert",
  description:
    "Business Automation and RevOps services from Business Automations Expert",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-4 sm:px-8 py-16 text-center z-10">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <Image
            src="/images/green-ring-2.webp"
            alt="Background decoration"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Our <span className="text-primary-accent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-untitled-ui-gray300 max-w-3xl mx-auto">
            Business Automation and RevOps built for growing teams — we
            connect your CRM, sales, marketing and operations into one system
            that runs itself.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="cs-section-gap px-4 sm:px-8 relative z-10">
        <div className="svc-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-untitled-ui-gray800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            Not sure which service you need?
          </h2>
          <p className="text-primary-accent font-bold mb-8 sm:mb-10 tracking-wider text-xs sm:text-sm">
            LET US HELP YOU
          </p>
          <a href="/#consultation">
            <Button
              variant="outline"
              className="h-11 border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Set up a Consultation
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}