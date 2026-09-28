import { Activity, AlertTriangle, CheckCircle2, Clock3 } from 'lucide-react'

const stats = [
  { label: 'Casos totales', value: '24', icon: Activity },
  { label: 'Activos', value: '12', icon: CheckCircle2 },
  { label: 'Pendientes', value: '08', icon: Clock3 },
  { label: 'Alta prioridad', value: '04', icon: AlertTriangle },
]

export default function StatsBar() {
  return (
    <div className="stats-grid">
      {stats.map(({ label, value, icon: Icon }) => (
        <div className="stat-card" key={label}>
          <div className="stat-icon"><Icon size={19} /></div>
          <div>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        </div>
      ))}
    </div>
  )
}