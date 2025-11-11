import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./CSS/Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <Header />

      <main className="login-main">
        <div className="login-card">
          <h1 className="login-title">
            Bem-vindo especialista, ao Escuta Ativa
          </h1>

          <form className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="text"
                placeholder="seuemail@exemplo.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="form-input"
              />
            </div>

            <button type="submit" className="form-button">
              Entrar
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
