import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./CSS/Login.css";

export default function RegistroInfo() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    title: "",
    specialty: "",
    approach: "",
    location: "",
    experience: "",
    pfp: null as File | null,
    description: "",
    diplomas: null as FileList | null,
    languages: "",
    phone: "",
    contactEmail: "",
    whatsapp: "",
    disponibility: "",
    sessionType: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilePfp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prev) => ({ ...prev, pfp: file || null }));
  };

  const handleFileDiplomas = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData((prev) => ({ ...prev, diplomas: files }));
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não conferem.");
      return;
    }

    console.log("RegistroInfo: formulário não funcional (visual apenas)");
  };

  return (
    <div className="login-page">
      <Header />

      <main className="login-main">
        <div className="login-card">
          <h1 className="login-title">Registro de Especialista</h1>

          <form
            id="registerForm"
            encType="multipart/form-data"
            className="login-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label className="form-label">Nome</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nome"
                value={formData.username}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Título"
                value={formData.title}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Especialidade</label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="" disabled>
                  Selecione a especialidade
                </option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Aproximação</label>
              <select
                id="approach"
                name="approach"
                value={formData.approach}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="" disabled>
                  Selecione a aproximação
                </option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Localização</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Localização"
                value={formData.location}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Meses de experiência</label>
              <input
                type="number"
                id="experience"
                name="experience"
                placeholder="Meses de experiência"
                value={formData.experience}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Imagem de Perfil</label>
              <input
                type="file"
                id="pfp"
                name="pfp"
                accept="image/*"
                onChange={handleFilePfp}
                className="form-input"
              />
              {formData.pfp && (
                <img
                  src={URL.createObjectURL(formData.pfp)}
                  alt="preview"
                  style={{ marginTop: 8, maxWidth: "100%", borderRadius: 6, maxHeight: 150 }}
                />
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Descrição do perfil</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição do perfil"
                value={formData.description}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Diplomas</label>
              <input
                type="file"
                id="diplomas"
                name="diplomas"
                multiple
                onChange={handleFileDiplomas}
                className="form-input"
              />
              {formData.diplomas && formData.diplomas.length > 0 && (
                <div style={{ marginTop: 8, fontSize: "0.875rem", color: "#6b7280" }}>
                  {formData.diplomas.length} arquivo(s) selecionado(s)
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Idiomas</label>
              <select
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="" disabled>
                  Selecione os idiomas
                </option>
                <option value="portugues">Português</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email de contato</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder="Email de contato"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">WhatsApp</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="WhatsApp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Disponibilidade</label>
              <input
                type="text"
                id="disponibility"
                name="disponibility"
                placeholder="Disponibilidade"
                value={formData.disponibility}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tipo de Sessão</label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="" disabled>
                  Selecione o tipo de sessão
                </option>
                <option value="online">Online</option>
                <option value="presencial">Presencial</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>

            {error && <div className="form-error">{error}</div>}

            <button type="submit" className="form-button">
              Registrar
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
