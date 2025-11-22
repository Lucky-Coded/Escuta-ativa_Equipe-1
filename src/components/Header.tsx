import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import "../CSS/Header.css";

type UserData = {
  id?: string;
  username: string;
  email: string;
  password?: string;
  profileImage?: string | null;
};

export function Header() {
  const [user, setUser] = useState<UserData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("escutaUser");
    if (data) setUser(JSON.parse(data));
  }, []);

  const getInitial = () => {
    if (!user?.username) return "?";
    return user.username.charAt(0).toUpperCase();
  };

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
            <a href="/Contato" className="nav-link">Contato</a>
          </nav>

          <div className="header-actions">

            {!user && (
              <a href="/login">
                <Button variant="outline" className="professional-btn">
                  Sou um profissional
                </Button>
              </a>
            )}

            {user && (
              <div className="header-user">
                <div
                  className="user-avatar"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {user.profileImage ? (
                    <img
                      src={`http://localhost:3001/${user.profileImage}`}
                      alt="user"
                      className="avatar-img"
                    />
                  ) : (
                    <span className="avatar-initial">{getInitial()}</span>
                  )}
                </div>

                {menuOpen && (
                  <div className="user-popup">
                    <p className="user-name">{user.username}</p>

                    <button
                      className="logout-btn"
                      onClick={() => {
                        localStorage.removeItem("escutaUser");
                        localStorage.removeItem("escutaUserID");
                        window.location.reload();
                      }}
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
