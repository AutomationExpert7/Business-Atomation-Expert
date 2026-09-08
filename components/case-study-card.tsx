"use client"

import { useState } from "react"
import { Eye, Download } from "lucide-react"

import { CaseStudyModal } from "@/components/case-study-modal"
import { getDownloadUrl } from "@/lib/drive"
import type { CaseStudySummary } from "@/lib/case-studies"

export function CaseStudyCard({
  category,
  title,
  description,
  results,
  resource,
}: CaseStudySummary) {
  const [open, setOpen] = useState(false)

  return (
    <>
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

        <div className="space-y-4">
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

          {resource && (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 text-sm border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary transition-colors rounded-full px-4 py-2 font-medium"
              >
                View
                <Eye className="w-4 h-4" />
              </button>

              <a
                href={getDownloadUrl(resource)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary transition-colors rounded-full px-4 py-2 font-medium"
              >
                Download
                <Download className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>

      {open && resource && (
        <CaseStudyModal
          resource={resource}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}