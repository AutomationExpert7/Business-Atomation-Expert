import {
  LayoutGrid,
  Target,
  BarChart3,
  UserCheck,
  Receipt,
  Mail,
  TrendingUp,
  RefreshCw,
  MessageSquare,
} from "lucide-react"

import type { ServiceItem } from "@/lib/services"

const iconMap = {
  grid: LayoutGrid,
  target: Target,
  chart: BarChart3,
  onboarding: UserCheck,
  invoice: Receipt,
  mail: Mail,
  trending: TrendingUp,
  sync: RefreshCw,
  support: MessageSquare,
}

export function ServiceCard({ tag, title, description, icon }: ServiceItem) {
  const Icon = iconMap[icon]

  return (
    <div className="svc-card">
      <div className="svc-card-inner">
        <div className="svc-icon">
          <Icon size={26} />
        </div>
        <span className="svc-tag">{tag}</span>
        <h3 className="svc-title">{title}</h3>
        <p className="svc-desc">{description}</p>
      </div>
    </div>
  )
}