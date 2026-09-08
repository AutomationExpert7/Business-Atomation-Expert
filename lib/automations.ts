export interface AutomationItem {
  title: string
  description: string
}

export interface AutomationCategory {
  title: string
  items: AutomationItem[]
}

export const automationCategories: AutomationCategory[] = [
  {
    title: "CRM Process Automation",
    items: [
      {
        title: "Lead Capture & Routing",
        description:
          "New leads get pulled automatically from your forms, ads and inbox messages the moment they arrive, then scored and routed to the right rep in seconds. It doesn't matter where the lead came from, they land with the right person instantly.",
      },
      {
        title: "Deal Pipeline Sync",
        description:
          "Every deal stage, value and owner stays perfectly in sync across your CRM, spreadsheets and reporting dashboards without anyone touching a thing. Updates show up everywhere automatically, so leadership always sees accurate numbers.",
      },
      {
        title: "Contact Data Enrichment",
        description:
          "New contacts get enriched automatically with company size, role, industry and other firmographic details the second they enter your CRM. Your sales team walks into every conversation already knowing who they're talking to.",
      },
      {
        title: "Renewal & Upsell Reminders",
        description:
          "Renewal, upsell and re-engagement tasks trigger automatically based on contract dates and account activity, so nothing is left to memory. Your account managers always know exactly which client needs a call next, well before an opportunity slips away.",
      },
    ],
  },
  {
    title: "Administrative Functions",
    items: [
      {
        title: "Invoice Processing",
        description:
          "Invoices generate, send and reconcile themselves automatically the moment a deal closes or a milestone is hit, no spreadsheets and no manual entry involved. Your finance team gets clean, accurate books every billing cycle without chasing a single document.",
      },
      {
        title: "Customer Onboarding",
        description:
          "From a signed deal to a fully set up client, contracts, CRM records and kickoff tasks trigger automatically in the background. Your team stops re-entering the same details across three different tools and starts giving every new client a smoother first experience.",
      },
      {
        title: "Helpdesk Ticketing",
        description:
          "Tickets get routed to the right agent automatically, statuses update themselves and customers get timely check-ins without anyone manually chasing a thread. Support stays proactive and clients stay happy without your team scrambling to keep up.",
      },
      {
        title: "Employee Onboarding",
        description:
          "New hires get automated document submissions, training schedules and team introductions from their very first day, without HR touching a single spreadsheet. Onboarding feels organized and professional instead of scattered across five different emails.",
      },
    ],
  },
  {
    title: "Sales & Marketing",
    items: [
      {
        title: "Social Media Scheduling",
        description:
          "Content gets planned in advance and published automatically across every platform from one place, while engagement and performance get tracked without any manual reporting. Your marketing team stays consistent without spending hours posting every single day.",
      },
      {
        title: "Sales Follow-Up",
        description:
          "Reminders, follow up emails and touch points get triggered automatically based on how a lead behaves, so nothing ever goes cold in someone's inbox. Reps get nudged at exactly the right moment instead of relying on memory or a messy spreadsheet.",
      },
      {
        title: "Event Registrations",
        description:
          "Sign ups, attendee management, reminder emails and post event feedback all run automatically from one connected workflow. Your team spends less time on logistics and back and forth emails, and more time actually running a great event.",
      },
      {
        title: "Email Campaign Automation",
        description:
          "Drip campaigns nurture every lead automatically based on their real behavior and engagement, not a generic one size fits all schedule. Sales only steps in once a lead is actually ready to buy, while everyone else keeps getting nurtured in the background.",
      },
    ],
  },
]