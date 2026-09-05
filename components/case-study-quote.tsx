import { Star } from "lucide-react"

import type { CaseStudyQuote } from "@/lib/case-studies"

export function CaseStudyQuoteCard({ quote, name, company }: CaseStudyQuote) {
  return (
    <div className="p-6 rounded-2xl bg-untitled-ui-gray800/50 border border-untitled-ui-gray700">
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-primary-accent text-primary-accent"
          />
        ))}
      </div>
      <p className="text-untitled-ui-gray300 text-sm leading-relaxed mb-6">
        {quote}
      </p>
      <p className="font-semibold text-untitled-ui-white">{name}</p>
      <p className="text-sm text-untitled-ui-gray500">{company}</p>
    </div>
  )
}