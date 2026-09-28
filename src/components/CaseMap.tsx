import { MapPin } from 'lucide-react'
import type { CaseItem } from '../types'

interface CaseMapProps {
  cases: CaseItem[]
  selectedCase: CaseItem
  onSelectCase: (item: CaseItem) => void
}

const mapPositions: Record<string, { left: string; top: string }> = {
  'case-001': { left: '46%', top: '37%' },
  'case-002': { left: '38%', top: '65%' },
  'case-003': { left: '76%', top: '57%' },
  'case-004': { left: '22%', top: '47%' },
  'case-005': { left: '67%', top: '25%' },
}

export default function CaseMap({ cases, selectedCase, onSelectCase }: CaseMapProps) {
  return (
    <div className="map-container">
      <div className="map-toolbar">
        <div className="map-title">
          <span className="live-dot" />
          Mapa de casos
        </div>
        <span className="map-mode">Vista estándar</span>
      </div>

      <div className="map-grid" />

      <div className="map-label label-1">MEDELLÍN</div>
      <div className="map-label label-2">BELLO</div>
      <div className="map-label label-3">RIONEGRO</div>
      <div className="map-road road-a" />
      <div className="map-road road-b" />
      <div className="map-road road-c" />

      {cases.map((item) => {
        const position = mapPositions[item.id] ?? { left: '50%', top: '50%' }
        const selected = item.id === selectedCase.id

        return (
          <button
            key={item.id}
            className={`map-marker ${selected ? 'selected' : ''} priority-${item.priority}`}
            style={position}
            onClick={() => onSelectCase(item)}
            title={item.name}
          >
            <span className="marker-pulse" />
            <MapPin size={18} fill="currentColor" />
            <span className="marker-tooltip">
              <strong>{item.code}</strong>
              {item.name}
            </span>
          </button>
        )
      })}

      {cases.length === 0 && (
        <div className="map-empty">
          <MapPin size={30} />
          <strong>Sin resultados</strong>
          <span>Prueba cambiando los filtros.</span>
        </div>
      )}


      <div className="map-legend">
        <span><i className="legend-dot high" /> Alta</span>
        <span><i className="legend-dot medium" /> Media</span>
        <span><i className="legend-dot low" /> Baja</span>
      </div>
    </div>
  )
}