import { testimonials } from "@/lib/testimonials"
import { TestimonialCard } from "@/components/testimonial-card"

export function TestimonialMarquee() {
  const tripled = [...testimonials, ...testimonials, ...testimonials]
  const tripledReversed = [
    ...[...testimonials].reverse(),
    ...[...testimonials].reverse(),
    ...[...testimonials].reverse(),
  ]

  return (
    <div className="relative overflow-hidden space-y-6">
      <div className="relative">
        <div className="flex gap-6 will-change-transform marquee-track marquee-left">
          {tripled.map((t, i) => (
            <TestimonialCard key={`l-${i}`} {...t} />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-6 will-change-transform marquee-track marquee-right">
          {tripledReversed.map((t, i) => (
            <TestimonialCard key={`r-${i}`} {...t} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-untitled-ui-gray900 via-untitled-ui-gray900/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-untitled-ui-gray900 via-untitled-ui-gray900/80 to-transparent z-10 pointer-events-none" />
    </div>
  )
}