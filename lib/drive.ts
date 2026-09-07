export interface CaseStudyResource {
  type: "doc" | "sheet" | "pdf" | "video"
  url: string
}

function extractDriveId(url: string): string | null {
  const dMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (dMatch) return dMatch[1]

  const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (idMatch) return idMatch[1]

  return null
}

export function getEmbedUrl(resource: CaseStudyResource): string {
  const id = extractDriveId(resource.url)
  if (!id) return resource.url

  switch (resource.type) {
    case "doc":
      return `https://docs.google.com/document/d/${id}/preview`
    case "sheet":
      return `https://docs.google.com/spreadsheets/d/${id}/preview`
    case "pdf":
    case "video":
      return `https://drive.google.com/file/d/${id}/preview`
    default:
      return resource.url
  }
}

export function getDownloadUrl(resource: CaseStudyResource): string {
  const id = extractDriveId(resource.url)
  if (!id) return resource.url

  switch (resource.type) {
    case "doc":
      return `https://docs.google.com/document/d/${id}/export?format=pdf`
    case "sheet":
      return `https://docs.google.com/spreadsheets/d/${id}/export?format=xlsx`
    case "pdf":
    case "video":
      return `https://drive.google.com/uc?export=download&id=${id}`
    default:
      return resource.url
  }
}