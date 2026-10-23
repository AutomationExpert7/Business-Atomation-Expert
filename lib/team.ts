export interface TeamMember {
  name: string
  slug: string
  role: string
  avatar: string
  bookingUrl?: string
}

export const team: TeamMember[] = [
  {
    name: "Laiba",
    slug: "meet-laiba",
    role: "Founder Business Automation Expert",
    avatar: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Farry",
    slug: "meet-farry",
    role: "RevOps Consultant | CRM Specialist",
    avatar: "https://i.pravatar.cc/300?img=33",
  },
  {
    name: "Aqsa",
    slug: "meet-aqsa",
    role: "Tech Support Engineer",
    avatar: "https://i.pravatar.cc/300?img=44",
    bookingUrl:
      "https://bookings.cloud.microsoft/book/AqsaBooking@businessautomationsexpert.com/?ismsaljsauthenabled",
  },
  {
    name: "Shazzy",
    slug: "meet-shazzy",
    role: "Lead Automation Engineer",
    avatar: "https://i.pravatar.cc/300?img=45",
  },
  {
    name: "Jazzy",
    slug: "meet-jazzy",
    role: "Business Processes Consultant",
    avatar: "https://i.pravatar.cc/300?img=68",
  },
  {
    name: "M.Arslan",
    slug: "meet-m-arslan",
    role: "Workflows & RPA Developers",
    avatar: "https://i.pravatar.cc/300?img=12",
  },
]