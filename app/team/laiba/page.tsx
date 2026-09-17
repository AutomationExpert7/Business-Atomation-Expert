import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule a Meeting with Laiba | Business Automations Expert",
  description: "Book a consultation with Laiba, RevOps & CRM Strategist at Business Automations Expert.",
}

export default function LaibaSchedulePage() {
  return (
    <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-untitled-ui-white">
          Schedule a meeting with{" "}
          <span className="text-primary-accent">Laiba</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-untitled-ui-white/70">
          Book time with our RevOps &amp; CRM Strategist to discuss your automation needs.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-dark-primary shadow-xl">
        <div className="w-full" style={{ height: "700px" }}>
          <iframe
            src="https://bookings.cloud.microsoft/book/Booking@businessautomationsexpert.com/?ismsaljsauthenabled"
            width="100%"
            height="100%"
            scrolling="yes"
            style={{ border: 0 }}
            title="Schedule a meeting with Laiba"
          />
        </div>
      </div>
    </main>
  )
}