"use client"

import { useEffect } from "react"
import { X, Download } from "lucide-react"

import { getEmbedUrl, getDownloadUrl, type CaseStudyResource } from "@/lib/drive"

interface CaseStudyModalProps {
  resource: CaseStudyResource
  title: string
  onClose: () => void
}

export function CaseStudyModal({
  resource,
  title,
  onClose,
}: CaseStudyModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.classList.add("modal-open")

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("modal-open")
    }
  }, [onClose])

  const embedUrl = getEmbedUrl(resource)
  const downloadUrl = getDownloadUrl(resource)

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-untitled-ui-gray900 border border-untitled-ui-gray700 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-untitled-ui-gray700 flex-shrink-0">
          <h3 className="text-base sm:text-lg font-semibold truncate pr-4">
            {title}
          </h3>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-dark-primary transition-colors rounded-full px-3 sm:px-4 py-1.5 font-medium whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-untitled-ui-gray300 hover:text-primary-accent transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full min-h-[60vh]"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  )
}