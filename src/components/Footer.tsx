import { Separator } from "./ui/separator";
import "../CSS/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <span>EA</span>
            </div>
            <span className="brand-name">Escuta Ativa</span>
            <p className="brand-description">
              Conectando pessoas a profissionais de saúde mental qualificados.
            </p>
          </div>

          <div className="footer-section">
            <h3>Para pacientes</h3>
            <ul>
              <li><a href="#">Encontrar profissional</a></li>
              <li><a href="#">Especialidades</a></li>
              <li><a href="#">Como funciona</a></li>
              <li><a href="#">Dúvidas frequentes</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Para profissionais</h3>
            <ul>
              <li><a href="#">Criar perfil</a></li>
              <li><a href="#">Planos</a></li>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Central de ajuda</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Empresa</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Imprensa</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>

        <Separator className="footer-separator" />

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Termos de uso</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Cookies</a>
          </div>
          <p>© 2025 Grupo 1. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
