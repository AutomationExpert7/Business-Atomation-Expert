import type { CaseStudyResource } from "@/lib/drive"

export interface CaseStudyStat {
  number: string
  label: string
}

export const caseStudyStats: CaseStudyStat[] = [
  { number: "150+", label: "Automations Delivered" },
  { number: "12,000+", label: "Hours Saved Annually" },
  { number: "40+", label: "Businesses Served" },
  { number: "98%", label: "Client Retention" },
]

export interface FeaturedCaseStudy {
  category: string
  title: string
  description: string
  results: string[]
  image: string
  imageAlt: string
}

export const featuredCaseStudy: FeaturedCaseStudy = {
  category: "Featured · Real Estate",
  title:
    "From 3 Days to 3 Minutes: Automating Lead Routing for a Growing Brokerage",
  description:
    "A 40-agent brokerage was losing leads because new inquiries sat in a shared inbox for days before anyone followed up. We built an automated intake system that pulls leads from the website, ads and referral partners, scores them and routes each one to the right agent within seconds, with instant SMS notifications.",
  results: [
    "83% faster first response",
    "27% more leads converted",
    "20 hrs/week saved",
  ],
  // image: "/images/digital-automation.webp",
   image: "/images/CRM-software-screen-data.jpg",
  imageAlt: "Automated lead routing dashboard for a real estate brokerage",
}

const DEFAULT_CASE_STUDY_RESOURCE: CaseStudyResource = {
  type: "doc",
  url: "https://docs.google.com/document/d/1AZo77jShakPZqEqy2TAA1pOW3VPEOpWt/edit?usp=sharing&ouid=111996887553512990806&rtpof=true&sd=true",
}

export interface CaseStudySummary {
  category: string
  title: string
  description: string
  results: string[]
  resource?: CaseStudyResource
}

export const caseStudies: CaseStudySummary[] = [
  {
    category: "E-commerce",
    title: "Same-Day Invoicing for a 6-Figure Online Retailer",
    description:
      "Orders, refunds and supplier invoices lived in three disconnected tools. We connected Shopify, QuickBooks and the supplier portal so invoices generate and reconcile automatically the moment an order ships.",
    results: ["Invoicing time cut 90%", "Zero reconciliation errors"],
    resource: DEFAULT_CASE_STUDY_RESOURCE,
  },
  {
    category: "Healthcare Admin",
    title: "Cutting Patient Intake Paperwork by Two-Thirds",
    description:
      "Front-desk staff were re-typing the same intake data into three systems per patient. We built a single digital intake form that syncs directly to the EHR and billing software, with automatic insurance verification.",
    results: ["65% less admin time", "Same-day insurance checks"],
    resource: DEFAULT_CASE_STUDY_RESOURCE,
  },
  {
    category: "Financial Services",
    title: "Automated Client Onboarding for a Wealth Advisory Firm",
    description:
      "New-client paperwork, compliance checks and CRM setup took advisors nearly a full day each. Our workflow now handles document collection, e-signatures and CRM creation automatically, flagging only what needs a human eye.",
    results: ["Onboarding: 1 day → 45 min", "100% audit-ready records"],
    resource: DEFAULT_CASE_STUDY_RESOURCE,
  },
  {
    category: "Marketing Agency",
    title: "Scaling Client Reporting Without Hiring",
    description:
      "A marketing agency was spending two full days a month building client reports by hand across a dozen accounts. We automated data pulls from every ad platform into branded, auto-scheduled reports.",
    results: ["40+ hrs/month reclaimed", "Scaled to 3x clients, same team"],
    resource: DEFAULT_CASE_STUDY_RESOURCE,
  },
  {
    category: "Professional Services",
    title: "Ending Double Data Entry Between CRM and Project Tools",
    description:
      "Every closed deal meant re-entering the same client details into a separate project management tool. We built a two-way sync so a closed-won deal spins up a fully staffed project automatically.",
    results: ["8 hrs/week saved", "Zero missed handoffs"],
    resource: DEFAULT_CASE_STUDY_RESOURCE,
  },
  {
    category: "Retail Operations",
    title: "Real-Time Inventory Sync Across 5 Sales Channels",
    description:
      "Overselling was a constant problem across the client's website, Amazon, and three retail partners. We connected every channel to one source of truth so stock levels update everywhere the instant an order comes in.",
    results: ["Overselling incidents: 0", "Stock updates in real time"],
    resource: DEFAULT_CASE_STUDY_RESOURCE,
  },
]

export interface CaseStudyQuote {
  quote: string
  name: string
  company: string
}

export const caseStudyQuotes: CaseStudyQuote[] = [
  {
    quote:
      "The lead routing system alone paid for itself in the first month. Our agents finally get leads while they're still hot.",
    name: "Broker/Owner",
    company: "Real Estate Brokerage",
  },
  {
    quote:
      "We went from dreading month-end invoicing to barely thinking about it. It just happens now, correctly, every time.",
    name: "Operations Manager",
    company: "Online Retailer",
  },
  {
    quote:
      "Our advisors got a full day back per new client. That's time they now spend actually advising, not filing paperwork.",
    name: "Managing Partner",
    company: "Wealth Advisory Firm",
  },
]