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
          "Automatically pull leads from forms, ads and inboxes, then route each one to the right rep in seconds.",
      },
      {
        title: "Deal Pipeline Sync",
        description:
          "Keep deal stages, values and owners in sync across your CRM, spreadsheets and reporting dashboards.",
      },
      {
        title: "Contact Data Enrichment",
        description:
          "Auto-enrich new contacts with company, role and firmographic data the moment they enter your CRM.",
      },
      {
        title: "Renewal & Upsell Reminders",
        description:
          "Trigger timely renewal, upsell and re-engagement tasks so opportunities never slip through the cracks.",
      },
    ],
  },
  {
    title: "Administrative Functions",
    items: [
      {
        title: "Invoice Processing",
        description:
          "Convert paper invoices to digital; streamline approvals, payments and archiving.",
      },
      {
        title: "Customer Onboarding",
        description:
          "Efficiently welcome new clients; automate data collection, verification and follow-up.",
      },
      {
        title: "Helpdesk Ticketing",
        description:
          "Improve support; auto-assign tickets, update statuses and communicate.",
      },
      {
        title: "Employee Onboarding",
        description:
          "Streamline hires with automated document submissions, training schedules and introductions.",
      },
    ],
  },
  {
    title: "Sales & Marketing",
    items: [
      {
        title: "Social Media Scheduling",
        description:
          "Plan content; auto-publish across platforms, analyze engagement and report.",
      },
      {
        title: "Sales Follow-Up",
        description: "Never miss a lead; automate reminders, emails and touch-points.",
      },
      {
        title: "Event Registrations",
        description:
          "Simplify sign-ups; manage attendees, send reminders and gather feedback.",
      },
      {
        title: "Email Campaign Automation",
        description:
          "Build drip campaigns that nurture leads automatically based on behavior and engagement.",
      },
    ],
  },
]