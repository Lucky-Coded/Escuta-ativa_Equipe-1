import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./CSS/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Email ou senha inválido.");
        setLoading(false);
        return;
      }

      localStorage.setItem("escutaUser", JSON.stringify(data.user));

      window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "Erro na conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Header />

      <main className="login-main">
        <div className="login-card">
          <h1 className="login-title">Bem-vindo especialista, ao Escuta Ativa</h1>

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

            <button
              type="button"
              className="form-button"
              onClick={() => {
                window.location.href = "/Cadastro";
              }}
            >
              Cadastrar
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
