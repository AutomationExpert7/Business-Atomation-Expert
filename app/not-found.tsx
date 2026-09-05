import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        404 — <span className="text-primary-accent">Page not found</span>
      </h1>
      <p className="text-untitled-ui-gray300 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-primary-accent border-b-2 border-primary-accent pb-1"
      >
        Back to home
      </Link>
    </div>
  )
}