import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/lib/testimonials"

interface TestimonialCardProps extends Testimonial {
  className?: string
}

export function TestimonialCard({
  tags,
  quote,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <div className={className ?? "flex-shrink-0 w-64 sm:w-72 md:w-80"}>
      <Card className="bg-untitled-ui-gray800/50 border-untitled-ui-gray700 rounded-2xl h-full">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <Badge
                key={tag}
                className={
                  i === 0
                    ? "bg-primary-accent text-dark-primary text-xs px-2 py-1 rounded-full hover:bg-primary-accent/90 hover:text-dark-primary transition-colors"
                    : "bg-untitled-ui-gray700 text-untitled-ui-gray300 text-xs px-2 py-1 rounded-full hover:bg-untitled-ui-gray600 hover:text-untitled-ui-white transition-colors"
                }
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center space-x-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-primary-accent text-primary-accent"
              />
            ))}
          </div>
          <p className="text-untitled-ui-gray300 mb-6 text-sm leading-relaxed">
            {quote}
          </p>
          <div>
            <p className="font-semibold text-untitled-ui-white">{name}</p>
            <p className="text-sm text-untitled-ui-gray500">{role}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}