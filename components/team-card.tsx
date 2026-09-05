import Image from "next/image"
import Link from "next/link"

import type { TeamMember } from "@/lib/team"

export function TeamCard({ name, role, avatar }: TeamMember) {
  return (
    <div className="team-card">
      <div className="team-card-inner">
        <div className="team-avatar">
          <Image
            src={avatar}
            alt={`${name} headshot`}
            width={104}
            height={104}
          />
        </div>
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
        <Link className="team-btn" href="/contact-us">
          Schedule a Meeting
        </Link>
      </div>
    </div>
  )
}