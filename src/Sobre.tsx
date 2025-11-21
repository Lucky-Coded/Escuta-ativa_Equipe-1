import React, { useRef, useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./CSS/Sobre.css";

export default function Sobre() {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentMaxHeight, setContentMaxHeight] = useState<string>("7.5rem");

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        setContentMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setContentMaxHeight("7.5rem");
      }
    }
  }, [expanded]);

  function toggleExpanded() {
    setExpanded((s) => !s);
  }

  function toggleLike() {
    setLiked((s) => !s);
  }

  return (
    <div className="sobre-page">
      <Header />

      <main className="sobre-main">
        <div className="sobre-card">
          <h1 className="sobre-title">Sobre Nós</h1>

          <div
            className={`collapsible ${expanded ? "expanded" : "collapsed"}`}
            ref={contentRef}
            style={{ maxHeight: contentMaxHeight }}
            aria-expanded={expanded}
          >
            <p className="sobre-text">
              O <strong>Escuta Ativa</strong> é uma plataforma dedicada à escuta
              empática e ao acolhimento emocional, conectando especialistas e
              pessoas que buscam apoio de forma ética, humana e segura.
            </p>

            <p className="sobre-text">
              Nosso propósito é oferecer um espaço de confiança e apoio no
              autoconhecimento. Acreditamos que a terapia é uma ferramenta de
              apoio para o desenvolvimento emocional.
            </p>

            <p className="sobre-text">
              Nossa equipe é composta por profissionais comprometidos com a
              empatia e cuidados emocionais centrados no usuário.
            </p>
          </div>

          {/* AÇÕES */}
          <div className="actions-row">
            <button
              className="toggle-btn"
              onClick={toggleExpanded}
              aria-pressed={expanded}
            >
              {expanded ? "Contrair" : "Mostrar mais"}
            </button>

            <button
              className={`like-btn ${liked ? "liked" : ""}`}
              onClick={toggleLike}
              aria-pressed={liked}
              title={liked ? "Descurtir" : "Curtir"}
            >
              {liked ? "💚 Curtiu" : "🤍 Curtir"}
            </button>
          </div>
        </div>

        {/* ACORDEÕES */}
        <Accordion title="Nossa Missão">
          Promover a busca por profissionais da área de saúde mental, oferecendo
          uma ampla gama de abordagens terapêuticas para atender às necessidades
          individuais de cada usuário.
        </Accordion>

        <Accordion title="Nossos Valores">
          <ul className="sobre-list">
            <li>Empatia e respeito</li>
            <li>Ética e confidencialidade</li>
            <li>Comprometimento com o bem-estar</li>
            <li>Inovação e acessibilidade</li>
          </ul>
        </Accordion>
      </main>

      <Footer />
    </div>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState<string>("0px");

  useEffect(() => {
    if (ref.current) {
      setMaxH(open ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <div className="accordion-section">
      <button
        className="accordion-header"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="chev">{open ? "−" : "+"}</span>
      </button>

      <div className="accordion-content" ref={ref} style={{ maxHeight: maxH }}>
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}
