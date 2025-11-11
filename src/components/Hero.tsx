import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import "../CSS/Hero.css";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text-area">
            <div className="hero-heading-group">
              <h1 className="hero-title">
                Conecte-se com <span className="highlight">profissionais</span> de saúde mental
              </h1>
              <p className="hero-subtitle">
                Encontre psicólogos, psicoanalistas e terapeutas qualificados na sua região.
                Uma plataforma confiável para cuidar da sua saúde mental.
              </p>
            </div>

            <div className="hero-buttons">
              <Button size="lg" className="hero-primary-button">
                <Search className="icon-search" />
                Encontrar profissional
              </Button>
              <a href="/login">
                <Button variant="outline" size="lg" className="hero-outline-button">
                  Sou um profissional
                </Button>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">500+</div>
                <div className="stat-label">Profissionais</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Especialidades</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1000+</div>
                <div className="stat-label">Conexões</div>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt="Profissional de saúde mental"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
