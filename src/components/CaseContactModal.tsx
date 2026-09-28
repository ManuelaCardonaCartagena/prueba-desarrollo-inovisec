import { useState } from "react";
import { CheckCircle2, MessageSquare, Phone, UserRound, X } from "lucide-react";

import type { CaseItem } from "../types";

interface ContactModalProps {
  caseItem: CaseItem;
  onClose: () => void;
}

export default function ContactModal({ caseItem, onClose }: ContactModalProps) {
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSent(true);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="modal-label">CONTACTAR</span>

            <h2>{caseItem.contact}</h2>
          </div>

          <button
            className="modal-close modal-close-light"
            onClick={onClose}
            aria-label="Cerrar contacto"
          >
            <X size={22} />
          </button>
        </div>

        {!sent ? (
          <>
            <div className="contact-person">
              <div className="contact-avatar">
                <UserRound size={22} />
              </div>

              <div>
                <strong>{caseItem.contact}</strong>

                <span>Responsable del caso {caseItem.code}</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>Teléfono</span>

                <strong>{caseItem.phone}</strong>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-message">Mensaje</label>

              <textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={`Escribe un mensaje para ${caseItem.contact}...`}
                rows={5}
                required
              />

              <div className="contact-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={onClose}
                >
                  Cancelar
                </button>

                <button type="submit" className="primary-button">
                  <MessageSquare size={17} />
                  Enviar mensaje
                </button>
              </div>
            </form>

            <a className="contact-call-button" href={`tel:${caseItem.phone}`}>
              <Phone size={16} />
              Llamar a {caseItem.contact}
            </a>
          </>
        ) : (
          <div className="contact-success">
            <div className="contact-success-icon">
              <CheckCircle2 size={32} />
            </div>

            <h3>Mensaje preparado</h3>

            <p>
              El mensaje para <strong>{caseItem.contact}</strong> ha sido
              registrado correctamente en esta demostración.
            </p>

            <button className="primary-button" onClick={onClose}>
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
