"use client"

import { useEffect, useRef } from "react"

import { testimonials } from "@/lib/testimonials"
import { TestimonialCard } from "@/components/testimonial-card"

const AUTO_SCROLL_INTERVAL_MS = 3500
const RESUME_AFTER_INTERACTION_MS = 4000
const MOBILE_BREAKPOINT_PX = 640

export function TestimonialMarquee() {
  const tripled = [...testimonials, ...testimonials, ...testimonials]
  const tripledReversed = [
    ...[...testimonials].reverse(),
    ...[...testimonials].reverse(),
    ...[...testimonials].reverse(),
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index] as HTMLElement | undefined
    if (!card) return
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" })
  }

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startAutoScroll = () => {
    stopAutoScroll()
    intervalRef.current = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth >= MOBILE_BREAKPOINT_PX) return
      indexRef.current = (indexRef.current + 1) % testimonials.length
      scrollToIndex(indexRef.current)
    }, AUTO_SCROLL_INTERVAL_MS)
  }

  const handleUserInteraction = () => {
    stopAutoScroll()
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(startAutoScroll, RESUME_AFTER_INTERACTION_MS)
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      stopAutoScroll()
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative">
      {/* Mobile: swipeable single-card carousel with auto-scroll */}
      <div
        ref={scrollRef}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
        className="sm:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={`m-${i}`}
            {...t}
            className="flex-shrink-0 w-full snap-center px-1"
          />
        ))}
      </div>

      {/* Tablet / Desktop: auto-scrolling marquee (unchanged) */}
      <div className="hidden sm:block relative overflow-hidden space-y-4 sm:space-y-6">
        <div className="relative">
          <div className="flex gap-4 sm:gap-6 will-change-transform marquee-track marquee-left">
            {tripled.map((t, i) => (
              <TestimonialCard key={`l-${i}`} {...t} />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-4 sm:gap-6 will-change-transform marquee-track marquee-right">
            {tripledReversed.map((t, i) => (
              <TestimonialCard key={`r-${i}`} {...t} />
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-6 sm:w-16 md:w-32 h-full bg-gradient-to-r from-untitled-ui-gray900 via-untitled-ui-gray900/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-6 sm:w-16 md:w-32 h-full bg-gradient-to-l from-untitled-ui-gray900 via-untitled-ui-gray900/80 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  )
}