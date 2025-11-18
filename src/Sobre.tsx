import React from "react";
import { Header } from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import "./CSS/Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-page">
      <Header />

      <main className="sobre-main">
        <div className="sobre-card">
          <h1 className="sobre-title">Sobre Nós</h1>

          <p className="sobre-text">
            O <strong>Escuta Ativa</strong> é uma plataforma dedicada à escuta empática
            e ao acolhimento emocional, conectando especialistas e pessoas que
            buscam apoio de forma ética, humana e segura.
          </p>

          <p className="sobre-text">
            Nosso propósito é oferecer um espaço de confiança, no autoconhecimento.
             Acreditamos que a terapia — é de alta facilidade para o autoconhecimento, 
             assim fortalecemos o bem-estar emocional.
          </p>

          <p className="sobre-text">
            Nossa equipe é composta por profissionais comprometidos com a empatia, 
            e cuidados emocionais 
 
          </p>

          <h2 className="sobre-subtitle">Nossa Missão</h2>
          <p className="sobre-text">
            Promover maior busca por profisionais da aréa de saúde mental, 
            oferecendo uma ampla gama de abordagens terapêuticas  
            para atender às necessidades individuais de cada usuário.
          </p>

          <h2 className="sobre-subtitle">Nossos Valores</h2>
          <ul className="sobre-list">
            <li>Empatia e respeito</li>
            <li>Ética e confidencialidade</li>
            <li>Comprometimento com o bem-estar</li>
            <li>Inovação e acessibilidade</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}