import { MapPinned } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-mark">
          <MapPinned size={14} />
        </span>

        <div className="footer-copy">
          <strong>INOVISEC</strong>
          <span>Sistema de gestión y seguimiento de casos</span>
        </div>
      </div>

      <div className="footer-meta">
        <span>Manuela Cardona Cartagena</span>

        <span className="footer-divider" />

        <span>© 2026 INOVISEC</span>
      </div>
    </footer>
  )
}