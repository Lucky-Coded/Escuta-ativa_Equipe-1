import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import "./CSS/contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato-container">
      <Header />

      <h1>Contato</h1>
      <p className="contato-subtitle">
        Entre em contato conosco pelos canais abaixo:
      </p>

      <div className="contato-info">
        
        <div className="contato-item">
          <h2>Email</h2>
          <p>grupoAtiva@escutaAtiva.com.br</p>
        </div>

        <div className="contato-item">
          <h2>Telefone</h2>
          <p>(11) 11984675475</p>
        </div>

        <div className="contato-item">
          <h2>Endereço</h2>
          <p>Voluntarios da Patria, 2887 — São Paulo, SP</p>
        </div>

        <div className="contato-item">
          <h2>Redes Sociais</h2>
          <ul className="social-list">
            <li>
              <a href="https://instagram.com/psicologia" target="_blank">
                <Instagram className="icon" />
                Instagram
              </a>
            </li>

            <li>
              <a href="https://wa.me/551135301977" target="_blank">
                <MessageCircle className="icon" />
                WhatsApp
              </a>
            </li>

            <li>
              <a href="https://facebook.com/seuperfil" target="_blank">
                <Facebook className="icon" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </section>
  );
}
