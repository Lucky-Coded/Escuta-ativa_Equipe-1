import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./CSS/Login.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (!nome.trim()) return setError("Por favor informe seu nome.");
    if (!email.trim()) return setError("Por favor informe um email válido.");
    if (!senha) return setError("Por favor informe uma senha.");
    if (senha !== confirmaSenha) return setError("As senhas não conferem.");

    setLoading(true);

    localStorage.setItem(
      "escutaUser",
      JSON.stringify({
        email,
        username: nome,
        password: senha,
      })
    );

    setTimeout(() => {
      window.location.href = "/RegistroInfo";
    }, 500);
  };

  return (
    <div className="login-page">
      <Header />

      <main className="login-main">
        <div className="login-card">
          <h1 className="login-title">Criar Conta</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nome Completo</label>
              <input
                type="text"
                className="form-input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                className="form-input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirmar Senha</label>
              <input
                type="password"
                className="form-input"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
