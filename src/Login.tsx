import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { accounts } from "./data/accounts";
import "./CSS/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    setLoading(true);

    setTimeout(() => {
      const user = accounts.find(
        (a) => a.email.toLowerCase() === email.toLowerCase() && a.password === password
      );

      if (!user) {
        setError("Email ou senha invalido.");
        setLoading(false);
        return;
      }

      try {
        localStorage.setItem("escutaUser", JSON.stringify({ email: user.email, name: user.name }));
      } catch (e) {}

      window.location.href = "/";
    }, 500);
  };

  return (
    <div className="login-page">
      <Header />

      <main className="login-main">
        <div className="login-card">
          <h1 className="login-title">Bem-vindo ao Escuta Ativa, especialista!</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="text"
                placeholder="seuemail@exemplo.com"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className="forgot-password">
            Esqueceu sua senha?{" "}
            <a href="#" className="forgot-link">
              Clique aqui
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}