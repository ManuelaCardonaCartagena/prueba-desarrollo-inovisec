import { Home, FolderOpen, Settings, X } from 'lucide-react'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({
  open,
  onClose
}: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <h2>INOVISEC</h2>

        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <button className="sidebar-item">
          <Home size={20} />
          <span>Inicio</span>
        </button>

        <button className="sidebar-item">
          <FolderOpen size={20} />
          <span>Casos</span>
        </button>

        <button className="sidebar-item">
          <Settings size={20} />
          <span>Configuración</span>
        </button>
      </nav>
    </aside>
  )
}