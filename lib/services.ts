export interface ServiceItem {
  tag: string
  title: string
  description: string
  icon:
    | "grid"
    | "target"
    | "chart"
    | "onboarding"
    | "invoice"
    | "mail"
    | "trending"
    | "sync"
    | "support"
}

export const services: ServiceItem[] = [
  {
    tag: "RevOps",
    icon: "grid",
    title: "CRM & Sales Pipeline Automation",
    description:
      "We clean up and automate your CRM so every deal stage, task and follow-up moves itself — no more manually updating pipelines.",
  },
  {
    tag: "Sales",
    icon: "target",
    title: "Lead Routing & Qualification",
    description:
      "New leads get scored and routed to the right rep in seconds, from any source — website, ads or referral partners.",
  },
  {
    tag: "RevOps",
    icon: "chart",
    title: "RevOps Reporting & Dashboards",
    description:
      "Live dashboards that pull revenue, pipeline and forecast data from every tool into a single source of truth.",
  },
  {
    tag: "Operations",
    icon: "onboarding",
    title: "Client Onboarding Automation",
    description:
      "From signed deal to fully set-up client — contracts, CRM records and kickoff tasks trigger automatically.",
  },
  {
    tag: "Finance",
    icon: "invoice",
    title: "Invoicing & Billing Automation",
    description:
      "Invoices generate, send and reconcile themselves the moment a deal closes or a milestone is hit.",
  },
  {
    tag: "Marketing",
    icon: "mail",
    title: "Marketing & Lead Nurture Automation",
    description:
      "Automated email and SMS sequences that nurture leads based on behavior, so sales only talks to ready buyers.",
  },
  {
    tag: "Sales",
    icon: "trending",
    title: "Sales Follow-Up & Enablement",
    description:
      "Automated reminders, sequences and playbooks that make sure no lead or deal ever goes cold.",
  },
  {
    tag: "RevOps",
    icon: "sync",
    title: "System & Data Integration",
    description:
      "We connect your CRM, ERP and finance tools so data syncs both ways — zero double entry, zero errors.",
  },
  {
    tag: "Support",
    icon: "support",
    title: "Customer Support & Retention Automation",
    description:
      "Ticket routing, renewal reminders and check-in workflows that keep clients happy without manual chasing.",
  },
]