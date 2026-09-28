import { useState } from "react";
import { Filter, LogOut, Menu, PanelRightClose, PanelRightOpen, Search, SlidersHorizontal, X} from "lucide-react";

import type { CaseItem, FilterState } from "../types";

import CaseMap from "./CaseMap";
import CasePanel from "./CasePanel";
import Footer from "./Footer";
import NotificationsMenu from "./Notifications";
import StatsBar from "./StatsBar";

interface DashboardProps {
  cases: CaseItem[];
  selectedCase: CaseItem;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onSelectCase: (item: CaseItem) => void;
  onLogout: () => void;
}

export default function Dashboard({
  cases,
  selectedCase,
  filters,
  onFiltersChange,
  onSelectCase,
  onLogout,
}: DashboardProps) {
  const [panelOpen, setPanelOpen] = useState(true);
  const [mobileFilters, setMobileFilters] = useState(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-left">
          <button className="mobile-menu icon-button" aria-label="Abrir menú">
            <Menu size={20} />
          </button>

          <div className="brand-mark">
            <SlidersHorizontal size={20} />
          </div>

          <div className="brand-copy">
            <strong>INOVISEC</strong>
            <span>CASE MAP</span>
          </div>
        </div>

        <div className="topbar-right">
          <NotificationsMenu />

          <div className="user-chip">
            <div className="avatar">AD</div>

            <div className="user-meta">
              <strong>Administrador</strong>
              <span>Analista</span>
            </div>

          </div>

          <button className="logout-button" onClick={onLogout}>
            <LogOut size={17} />
            Salir
          </button>
        </div>
      </header>

      <main className="dashboard">
        <div className="dashboard-heading">
          <div>
            <span className="eyebrow accent">MONITOREO</span>

            <h1>Casos georreferenciados</h1>

            <p>
              Visualiza, filtra y consulta la información de los casos
              registrados.
            </p>
          </div>

          <button
            className="secondary-button filter-mobile-button"
            onClick={() => setMobileFilters((value) => !value)}
          >
            <Filter size={17} />
            Filtros
          </button>
        </div>

        <StatsBar />

        <section
          className={`filter-bar ${mobileFilters ? "filter-bar-open" : ""}`}
        >
          <div className="search-box">
            <Search size={18} />

            <input
              value={filters.search}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  search: e.target.value,
                })
              }
              placeholder="Buscar por nombre, código, ciudad..."
            />

            {filters.search && (
              <button
                className="icon-button tiny"
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    search: "",
                  })
                }
                aria-label="Limpiar búsqueda"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <select
            value={filters.status}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                status: e.target.value as FilterState["status"],
              })
            }
          >
            <option value="all">Todos los estados</option>

            <option value="active">Activo</option>

            <option value="pending">Pendiente</option>

            <option value="closed">Cerrado</option>
          </select>

          <select
            value={filters.priority}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                priority: e.target.value as FilterState["priority"],
              })
            }
          >
            <option value="all">Todas las prioridades</option>

            <option value="high">Alta</option>

            <option value="medium">Media</option>

            <option value="low">Baja</option>
          </select>

          <div className="filter-result">
            <Filter size={16} />
            {cases.length} resultados
          </div>
        </section>

        <section className={`workspace ${panelOpen ? "" : "panel-closed"}`}>
          <CaseMap
            cases={cases}
            selectedCase={selectedCase}
            onSelectCase={onSelectCase}
          />

          <button
            className="panel-toggle"
            onClick={() => setPanelOpen((value) => !value)}
            aria-label={panelOpen ? "Cerrar panel" : "Abrir panel"}
          >
            {panelOpen ? (
              <PanelRightClose size={19} />
            ) : (
              <PanelRightOpen size={19} />
            )}
          </button>

          {panelOpen && <CasePanel selectedCase={selectedCase} />}
        </section>
      </main>

      <Footer />
    </div>
  );
}
