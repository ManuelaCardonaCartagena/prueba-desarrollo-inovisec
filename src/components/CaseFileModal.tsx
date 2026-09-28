import { X } from "lucide-react";
import type { CaseItem } from "../types";

interface CaseFileModalProps {
  caseItem: CaseItem;
  onClose: () => void;
}

export default function CaseFileModal({
  caseItem,
  onClose,
}: CaseFileModalProps) {
  return (
    <div className="modal-overlay">
      <div className="case-file-modal">
        <div className="modal-header">
          <div>
            <span className="modal-label">Expediente</span>

            <h2>{caseItem.code}</h2>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Cerrar expediente"
          >
            <X size={22} />
          </button>
        </div>

        <div className="case-file-content">
          <p>
            <strong>Nombre:</strong> {caseItem.name}
          </p>

          <p>
            <strong>Categoría:</strong> {caseItem.category}
          </p>

          <p>
            <strong>Descripción:</strong> {caseItem.description}
          </p>

          <p>
            <strong>Estado:</strong> {caseItem.status}
          </p>

          <p>
            <strong>Prioridad:</strong> {caseItem.priority}
          </p>

          <p>
            <strong>Dirección:</strong> {caseItem.address}
          </p>

          <p>
            <strong>Ciudad:</strong> {caseItem.city}
          </p>

          <p>
            <strong>Contacto:</strong> {caseItem.contact}
          </p>

          <p>
            <strong>Teléfono:</strong> {caseItem.phone}
          </p>
        </div>

        <button className="modal-action" onClick={onClose}>
          Cerrar expediente
        </button>
      </div>
    </div>
  );
}
