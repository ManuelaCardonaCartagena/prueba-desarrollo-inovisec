import { useEffect, useRef, useState } from "react";
import { Bell, CheckCircle2, Clock3, FilePlus2, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Nuevo caso registrado",
    message: "Se registró un nuevo caso en el sistema.",
    time: "Hace 8 min",
    icon: FilePlus2,
    unread: true,
  },
  {
    id: 2,
    title: "Caso actualizado",
    message: "El caso INV-002 fue actualizado.",
    time: "Hace 24 min",
    icon: CheckCircle2,
    unread: true,
  },
  {
    id: 3,
    title: "Actividad pendiente",
    message: "Tienes una actividad pendiente por revisar.",
    time: "Hace 1 h",
    icon: Clock3,
    unread: true,
  },
];

export default function NotificationsMenu() {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(
    (notification) => notification.unread && !read.includes(notification.id),
  ).length;

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const markAllAsRead = () => {
    setRead(notifications.map((notification) => notification.id));
  };

  const markAsRead = (id: number) => {
    setRead((current) => (current.includes(id) ? current : [...current, id]));
  };

  return (
    <div className="notifications-container" ref={containerRef}>
      <button
        className={`icon-button notification ${
          open ? "notification-active" : ""
        }`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Cerrar notificaciones" : "Mostrar notificaciones"}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Bell size={19} />

        {unreadCount > 0 && <span className="notification-dot" />}
      </button>

      {open && (
        <div
          className="notifications-dropdown"
          role="dialog"
          aria-label="Notificaciones"
        >
          <div className="notifications-header">
            <div>
              <span className="eyebrow accent">ACTIVIDAD</span>

              <h3>Notificaciones</h3>
            </div>

            <button
              className="notification-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar notificaciones"
            >
              <X size={17} />
            </button>
          </div>

          <div className="notifications-summary">
            <span>
              {unreadCount > 0 ? `${unreadCount} sin leer` : "Todo al día"}
            </span>

            {unreadCount > 0 && (
              <button onClick={markAllAsRead}>Marcar como leídas</button>
            )}
          </div>

          <div className="notifications-list">
            {notifications.map((notification) => {
              const Icon = notification.icon;

              const isUnread =
                notification.unread && !read.includes(notification.id);

              return (
                <button
                  key={notification.id}
                  className={`notification-item ${isUnread ? "unread" : ""}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <span className="notification-item-icon">
                    <Icon size={16} />
                  </span>

                  <span className="notification-item-content">
                    <strong>{notification.title}</strong>

                    <span>{notification.message}</span>

                    <small>{notification.time}</small>
                  </span>

                  {isUnread && <i className="notification-unread-dot" />}
                </button>
              );
            })}
          </div>

          <div className="notifications-footer">
            <span>Actualizado recientemente</span>
          </div>
        </div>
      )}
    </div>
  );
}
