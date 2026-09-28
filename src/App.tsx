import { useMemo, useState } from "react";
import { cases } from "./data/cases";
import type { CaseItem, FilterState } from "./types";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const SESSION_KEY = "inovisec_session";

export default function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem(SESSION_KEY) === "true";
  });

  const [selectedCase, setSelectedCase] = useState<CaseItem>(cases[0]);

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "all",
    priority: "all",
  });

  const filteredCases = useMemo(() => {
    const term = filters.search.trim().toLowerCase();

    return cases.filter((item) => {
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.code.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.city.toLowerCase().includes(term);

      const matchesStatus =
        filters.status === "all" || item.status === filters.status;

      const matchesPriority =
        filters.priority === "all" || item.priority === filters.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [filters]);

  function handleLogin() {
    localStorage.setItem(SESSION_KEY, "true");

    setAuthenticated(true);
  }

  function handleLogout() {
    localStorage.removeItem(SESSION_KEY);

    setAuthenticated(false);

    setFilters({
      search: "",
      status: "all",
      priority: "all",
    });

    setSelectedCase(cases[0]);
  }

  if (!authenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Dashboard
      cases={filteredCases}
      selectedCase={selectedCase}
      filters={filters}
      onFiltersChange={setFilters}
      onSelectCase={setSelectedCase}
      onLogout={handleLogout}
    />
  );
}
