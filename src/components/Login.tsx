import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  UserRound,
} from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const username_valid = "Admin";
  const password_valid = "Inovisec-123";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Ingresa tu usuario y contraseña para continuar.");

      return;
    }

    if (username !== username_valid || password !== password_valid) {
      setError("Usuario o contraseña incorrectos.");

      return;
    }
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);

      onLogin();
    }, 550);
  };

  return (
    <main className="login-page">
      <section className="login-brand">
        <div className="brand-mark large">
          <MapPinned size={30} />
        </div>

        <span className="eyebrow">INOVISEC</span>

        <h1>Case Map</h1>

        <p>
          Plataforma de visualización y seguimiento de casos georreferenciados.
        </p>

        <div className="login-feature-list">
          <div>
            <ShieldCheck size={18} />
            Información centralizada
          </div>

          <div>
            <MapPinned size={18} />
            Visualización geográfica
          </div>

          <div>
            <LockKeyhole size={18} />
            Acceso seguro
          </div>
        </div>
      </section>

      <section className="login-card-wrap">
        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-card-header">
            <span className="eyebrow accent">PLATAFORMA</span>

            <h2>Iniciar sesión</h2>

            <p>Ingresa tus credenciales para acceder al panel.</p>
          </div>

          <label className="field-label" htmlFor="username">
            Usuario
          </label>

          <div className="input-wrap">
            <UserRound size={18} />

            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              autoComplete="username"
            />
          </div>

          <label className="field-label" htmlFor="password">
            Contraseña
          </label>

          <div className="input-wrap">
            <LockKeyhole size={18} />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoComplete="current-password"
            />

            <button
              type="button"
              className="icon-button input-action"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <div className="form-error">{error}</div>}

          <button
            type="submit"
            className="primary-button full"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>
      </section>
    </main>
  );
}
