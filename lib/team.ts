export interface TeamMember {
  name: string
  slug: string
  role: string
  avatar: string
}

export const team: TeamMember[] = [
  {
    name: "M.Arslan",
    slug: "m-arslan",
    role: "Founder & Lead Automation Engineer",
    avatar: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Laiba",
    slug: "laiba",
    role: "RevOps & CRM Strategist",
    avatar: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Farry",
    slug: "farry",
    role: "Integrations & API Specialist",
    avatar: "https://i.pravatar.cc/300?img=33",
  },
  {
    name: "Shazzy",
    slug: "shazzy",
    role: "Workflow & RPA Developer",
    avatar: "https://i.pravatar.cc/300?img=45",
  },
  {
    name: "Jazzy",
    slug: "jazzy",
    role: "Process Consultant",
    avatar: "https://i.pravatar.cc/300?img=68",
  },
  {
    name: "Aqsa",
    slug: "aqsa",
    role: "Client Success Manager",
    avatar: "https://i.pravatar.cc/300?img=44",
  },
]