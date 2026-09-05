import type { CaseStudySummary } from "@/lib/case-studies"

export function CaseStudyCard({
  category,
  title,
  description,
  results,
}: CaseStudySummary) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl bg-untitled-ui-gray800/50 border border-untitled-ui-gray700 h-full">
      <div>
        <span className="inline-flex items-center rounded-full border font-semibold border-transparent bg-untitled-ui-gray700 text-untitled-ui-gray300 text-xs px-3 py-1 mb-4">
          {category}
        </span>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-untitled-ui-gray300 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {results.map((result) => (
          <span
            key={result}
            className="text-xs px-3 py-1 rounded-full border border-primary-accent text-primary-accent"
          >
            {result}
          </span>
        ))}
      </div>
    </div>
  )
}