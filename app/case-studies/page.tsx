import type { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { CaseStudyCard } from "@/components/case-study-card"
import {
  caseStudyStats,
  featuredCaseStudy,
  caseStudies,
  caseStudyQuotes,
} from "@/lib/case-studies"
import { CaseStudyQuoteCard } from "@/components/case-study-quote"

export const metadata: Metadata = {
  title: "Case Studies | Business Automations Expert",
  description:
    "Real automation results from real Business Automations Expert clients",
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-8 py-16 text-center z-10">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Case <span className="text-primary-accent">Studies</span>
          </h1>
          <p className="text-lg md:text-xl text-untitled-ui-gray300 mb-4 max-w-3xl mx-auto">
            Real businesses, real bottlenecks, real automations. Here&apos;s
            how our team turned repetitive manual work into systems that run
            themselves — and what it meant for the people who used to do that
            work by hand.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section
        className="cs-section-gap relative z-10"
        style={{ paddingLeft: "16px", paddingRight: "16px" }}
      >
        <div className="cs-stats-grid">
          {caseStudyStats.map((stat) => (
            <div key={stat.label}>
              <p className="cs-stats-num">{stat.number}</p>
              <p className="cs-stats-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured case study */}
      <section className="cs-section-gap px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-untitled-ui-gray800/40 border border-untitled-ui-gray700 rounded-3xl p-8 md:p-12">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full border font-semibold transition-colors border-transparent bg-primary-accent text-dark-primary text-xs px-3 py-1">
                {featuredCaseStudy.category}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {featuredCaseStudy.title}
              </h2>
              <p className="text-untitled-ui-gray300 text-base leading-relaxed">
                {featuredCaseStudy.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {featuredCaseStudy.results.map((result) => (
                  <span
                    key={result}
                    className="inline-flex items-center rounded-full border border-primary-accent text-primary-accent text-sm px-4 py-1.5"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.imageAlt}
                  width={480}
                  height={320}
                  className="w-full h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-green-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="cs-section-gap px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            More client <span className="text-primary-accent">success stories</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial quotes */}
      <section className="cs-section-gap px-4 sm:px-8 bg-untitled-ui-gray900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            In their <span className="text-primary-accent">own words</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudyQuotes.map((q) => (
              <CaseStudyQuoteCard key={q.name} {...q} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center bg-untitled-ui-gray800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            Ready to become our next success story?
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