import type { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Business Automations Expert",
  description: "Ai Automations for Business",
}

export default function ContactUsPage() {
  return (
    <>
      {/* Decorative background layer specific to the contact page */}
      <div
        className="fixed bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(253, 221, 189, 0.3) 0%, rgba(253, 221, 189, 0.15) 30%, rgba(253, 221, 189, 0.05) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Hero */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
              <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                  Let&apos;s <span className="text-primary-accent">automate</span>{" "}
                  your business
                  <br className="hidden sm:block" />
                  together
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-untitled-ui-gray300 mb-6 sm:mb-8 leading-relaxed max-w-xl lg:max-w-none">
                  Ready to transform your business processes? Get in touch
                  with our automation experts and discover how we can help
                  streamline your operations.
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-3 xl:gap-4 justify-center lg:justify-start">
                  {[
                    "Free consultation",
                    "24-hour response time",
                    "Custom solutions",
                  ].map((label) => (
                    <div
                      key={label}
                      className="flex items-center justify-center lg:justify-start space-x-3 text-untitled-ui-gray300"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-sm sm:text-base">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end max-w-lg lg:max-w-none">
                <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl">
                  <Image
                    src="/bg-pattern.webp"
                    alt="3D illustration of modern workspace with automation tools"
                    width={600}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Please use the form below to tell us a bit more
              </h2>
              <p className="text-lg sm:text-xl text-untitled-ui-gray300 px-4">
                about{" "}
                <span className="text-primary-accent font-medium">
                  why you are reaching out to us.
                </span>
              </p>
            </div>

            <Card className="bg-untitled-ui-gray800/50 border-untitled-ui-gray700 rounded-2xl sm:rounded-3xl">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                <ContactForm />
              </CardContent>
            </Card>

            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-untitled-ui-gray300 leading-tight px-4">
                Want to secure the future sustainability
                <br className="hidden sm:block" />
                and scalability of your business?
              </h3>
              <p className="text-base sm:text-lg text-primary-accent font-medium mb-6 sm:mb-8 uppercase tracking-wide">
                Let us help you
              </p>
              <a href="/#consultation">
                <Button
                  variant="outline"
                  className="h-11 w-full sm:w-auto bg-transparent border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary font-medium py-3 sm:py-4 px-8 sm:px-12 rounded-full text-sm sm:text-base uppercase tracking-wide transition-all duration-300"
                >
                  Set up a Consultation
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}