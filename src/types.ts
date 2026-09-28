export type CaseStatus = 'active' | 'pending' | 'closed'
export type CasePriority = 'high' | 'medium' | 'low'

export interface CaseItem {
  id: string
  code: string
  name: string
  category: string
  description: string
  date: string
  updatedAt: string
  address: string
  city: string
  status: CaseStatus
  priority: CasePriority
  latitude: number
  longitude: number
  image: string
  tags: string[]
  contact: string
  phone: string
}

export interface FilterState {
  search: string
  status: 'all' | CaseStatus
  priority: 'all' | CasePriority
}