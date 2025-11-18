import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import "../CSS/Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <a href="/#">
              <div className="logo-icon">
                <span className="logo-text">EA</span>
              </div>
            </a>
            <span className="site-name">Escuta Ativa</span>
          </div>

          <nav className="header-nav">
            <a href="#" className="nav-link">Profissionais</a>
            <a href="#" className="nav-link">Especialidades</a>
            <a href="/Sobre" className="nav-link">Sobre</a>
            <a href="#" className="nav-link">Contato</a>
          </nav>

          <div className="header-actions">
            <a href="/login">
              <Button variant="outline" className="professional-btn">
                Sou um profissional
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
