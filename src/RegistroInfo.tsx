import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./CSS/Login.css";

export default function RegistroInfo() {
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    password: "",
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
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const userBasic = localStorage.getItem("escutaUser");
    const storedID = localStorage.getItem("escutaUserID");

    if (userBasic) {
      const data = JSON.parse(userBasic);
      setFormData(prev => ({
        ...prev,
        id: storedID || "",
        username: data.username || "",
        email: data.email || "",
        password: data.password || "",
      }));
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFilePfp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, pfp: file }));
  };

  const handleFileDiplomas = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || null;
    setFormData(prev => ({ ...prev, diplomas: files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (key === "pfp" && formData.pfp) {
          payload.append("pfp", formData.pfp);
        } else if (key === "diplomas" && formData.diplomas) {
          Array.from(formData.diplomas).forEach(file => payload.append("diplomas", file));
        } else {
          payload.append(key, (formData as any)[key]);
        }
      }

      const res = await fetch("http://localhost:3001/register", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Perfil atualizado com sucesso!");

        localStorage.setItem(
          "escutaUser",
          JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            profileImage: data.profileImage || null,
          })
        );

        setFormData(prev => ({
          ...prev,
          title: "",
          specialty: "",
          approach: "",
          location: "",
          experience: "",
          pfp: null,
          description: "",
          diplomas: null,
          languages: "",
          phone: "",
          contactEmail: "",
          whatsapp: "",
          disponibility: "",
          sessionType: "",
        }));
      } else {
        setError(data.message || "Erro ao registrar informações");
      }
    } catch (err: any) {
      setError("Erro na conexão com o servidor");
    }
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
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Título</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Especialidade</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="" disabled>Selecione a especialidade</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Aproximação</label>
              <select
                name="approach"
                value={formData.approach}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="" disabled>Selecione a aproximação</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Localização</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Meses de experiência</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Imagem de Perfil</label>
              <input type="file" name="pfp" accept="image/*" onChange={handleFilePfp} className="form-input" />
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
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Diplomas</label>
              <input type="file" name="diplomas" multiple onChange={handleFileDiplomas} className="form-input" />
              {formData.diplomas && formData.diplomas.length > 0 && (
                <div style={{ marginTop: 8, fontSize: "0.875rem", color: "#6b7280" }}>
                  {formData.diplomas.length} arquivo(s) selecionado(s)
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Idiomas</label>
              <select
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="" disabled>Selecione os idiomas</option>
                <option value="portugues">Português</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">Espanhol</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email de contato</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Disponibilidade</label>
              <input
                type="text"
                name="disponibility"
                value={formData.disponibility}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tipo de Sessão</label>
              <select
                name="sessionType"
                value={formData.sessionType}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="" disabled>Selecione o tipo de sessão</option>
                <option value="online">Online</option>
                <option value="presencial">Presencial</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>

            {error && <div className="form-error">{error}</div>}
            {success && <div className="form-success">{success}</div>}

            <button type="submit" className="form-button">Registrar</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
