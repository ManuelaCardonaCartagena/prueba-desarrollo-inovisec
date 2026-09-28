import { useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  Image as ImageIcon,
  MapPin,
  MessageSquare,
  Phone,
  UserRound,
  X,
} from "lucide-react";
import type { CaseItem } from "../types";

import CaseFileModal from "./CaseFileModal";
import ContactModal from "./CaseContactModal";

interface CasePanelProps {
  selectedCase: CaseItem;
}

const statusText = {
  active: "Activo",
  pending: "Pendiente",
  closed: "Cerrado",
};

const priorityText = {
  high: "Alta",
  medium: "Media",
  low: "Baja",
};

export default function CasePanel({ selectedCase }: CasePanelProps) {
  const [imageOpen, setImageOpen] = useState(false);

  const [caseFileOpen, setCaseFileOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <aside className="case-panel">
        <div className="case-panel-header">
          <div>
            <span className="eyebrow accent">CASO SELECCIONADO</span>

            <h2>{selectedCase.code}</h2>
          </div>

          <span className={`status-badge ${selectedCase.status}`}>
            {selectedCase.status === "active" && (
              <span className="status-dot" />
            )}

            {statusText[selectedCase.status]}
          </span>
        </div>

        <div
          className="case-image-wrap"
          onClick={() => setImageOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setImageOpen(true);
            }
          }}
        >
          <img src={selectedCase.image} alt={selectedCase.name} />

          <div className="image-overlay">
            <ImageIcon size={18} />
            Ver imagen
          </div>
        </div>

        <div className="case-panel-body">
          <div className="case-title-row">
            <div>
              <h3>{selectedCase.name}</h3>

              <span className="case-category">{selectedCase.category}</span>
            </div>

            <span className={`priority-badge ${selectedCase.priority}`}>
              {priorityText[selectedCase.priority]}
            </span>
          </div>

          <p className="case-description">{selectedCase.description}</p>

          <div className="detail-list">
            <div className="detail-item">
              <MapPin size={17} />

              <div>
                <span>Ubicación</span>

                <strong>
                  {selectedCase.address}, {selectedCase.city}
                </strong>
              </div>
            </div>

            <div className="detail-item">
              <CalendarDays size={17} />

              <div>
                <span>Fecha de registro</span>

                <strong>{selectedCase.date}</strong>
              </div>
            </div>

            <div className="detail-item">
              <Clock3 size={17} />

              <div>
                <span>Última actualización</span>

                <strong>{selectedCase.updatedAt}</strong>
              </div>
            </div>

            <div className="detail-item">
              <UserRound size={17} />

              <div>
                <span>Responsable</span>

                <strong>{selectedCase.contact}</strong>
              </div>
            </div>

            <div className="detail-item">
              <Phone size={17} />

              <div>
                <span>Contacto</span>

                <strong>{selectedCase.phone}</strong>
              </div>
            </div>
          </div>

          <div className="tags">
            {selectedCase.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="panel-actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => setCaseFileOpen(true)}
            >
              <FileText size={17} />

              <span>Ver expediente</span>

              <ChevronRight size={16} />
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={() => setContactOpen(true)}
            >
              <MessageSquare size={17} />

              <span>Contactar</span>
            </button>
          </div>

        </div>
      </aside>

      {imageOpen && (
        <div className="modal-backdrop" onClick={() => setImageOpen(false)}>
          <div
            className="image-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setImageOpen(false)}
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>

            <img src={selectedCase.image} alt={selectedCase.name} />

            <div className="modal-caption">
              <strong>{selectedCase.name}</strong>

              <span>
                {selectedCase.address}, {selectedCase.city}
              </span>
            </div>
          </div>
        </div>
      )}

      {caseFileOpen && (
        <CaseFileModal
          caseItem={selectedCase}
          onClose={() => setCaseFileOpen(false)}
        />
      )}

      {contactOpen && (
        <ContactModal
          caseItem={selectedCase}
          onClose={() => setContactOpen(false)}
        />
      )}
    </>
  );
}
