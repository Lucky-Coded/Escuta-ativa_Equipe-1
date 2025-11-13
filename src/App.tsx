import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SearchFilters } from "./components/SearchFilters";
import { ProfessionalCard } from "./components/ProfessionalCard";
import { ProfessionalModal } from "./components/ProfessionalModal";
import { Footer } from "./components/Footer";
import { mockProfessionals } from "./data/mockData";
import "./CSS/App.css";

export default function App() {
  const [filters, setFilters] = useState({
    query: "",
    specialty: "",
    location: "",
    approach: ""
  });
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProfessionals = useMemo(() => {
    return mockProfessionals.filter(professional => {
      const matchesQuery =
        filters.query === "" ||
        professional.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        professional.specialty.toLowerCase().includes(filters.query.toLowerCase());

      const matchesSpecialty =
        filters.specialty === "" ||
        professional.specialty.toLowerCase().includes(filters.specialty.toLowerCase());

      const matchesLocation =
        filters.location === "" ||
        professional.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesApproach =
        filters.approach === "" ||
        professional.approach.some(approach =>
          approach.toLowerCase().includes(filters.approach.toLowerCase())
        );

      return matchesQuery && matchesSpecialty && matchesLocation && matchesApproach;
    });
  }, [filters]);

  const handleSearch = newFilters => {
    setFilters(newFilters);
  };

  const handleProfessionalClick = professional => {
    setSelectedProfessional(professional);
    setModalOpen(true);
  };

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <SearchFilters onSearch={handleSearch} />

      <section className="professionals-section">
        <div className="professionals-header">
          <div>
            <h2 className="professionals-title">Profissionais disponíveis</h2>
            <p className="professionals-count">
              {filteredProfessionals.length} profissionais encontrados
            </p>
          </div>
        </div>

        <div className="professionals-grid">
          {filteredProfessionals.map(professional => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              onClick={() => handleProfessionalClick(professional)}
            />
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">Nenhum profissional encontrado</h3>
            <p className="no-results-text">
              Tente ajustar os filtros de busca para encontrar mais resultados.
            </p>
          </div>
        )}
      </section>

      <ProfessionalModal
        professional={selectedProfessional}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />

      <Footer />
    </div>
  );
}
