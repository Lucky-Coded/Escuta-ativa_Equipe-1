import { useState } from "react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Search, MapPin, Filter } from "lucide-react";
import "../CSS/SearchFilters.css";

export function SearchFilters({ onSearch }) {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [approach, setApproach] = useState("");

  const handleSearch = () => {
    onSearch({ query, specialty, location, approach });
  };

  return (
    <section className="filters-section">
      <div className="filters-container">
        <div className="filters-content">
          <div className="filters-header">
            <h2 className="filters-title">Encontre o profissional ideal</h2>
            <div className="filters-info">
              <Filter className="filters-icon" />
              Filtros avançados
            </div>
          </div>

          <div className="filters-grid">
            <div className="filters-query">
  <div className="input-wrapper">
    <Search className="input-icon" />
    <Input
      placeholder="Nome ou especialidade..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="input-field"
    />
  </div>
</div>

           <Select value={specialty} onValueChange={setSpecialty}>
            
               <SelectTrigger>
           <SelectValue placeholder="Especialidade" />
           </SelectTrigger>
              <SelectContent>
                <SelectItem value="Psicologia Clínica">Psicologia Clínica</SelectItem>
                <SelectItem value="Psicanálise">Psicanálise</SelectItem>
                <SelectItem value="Terapia Cognitiva">Terapia Cognitiva</SelectItem>
                <SelectItem value="Terapia Psicodinâmica">Terapia Psicodinâmica</SelectItem>
                <SelectItem value="Psicologia Infantil">Psicologia Infantil</SelectItem>
                <SelectItem value="Terapia Familiar">Terapia Familiar</SelectItem>
                <SelectItem value="Neuropsicologia">Neuropsicologia</SelectItem>
                <SelectItem value="Psiquiatria">Psiquiatria</SelectItem>
                </SelectContent>
            </Select>

            <div className="input-wrapper">
              <MapPin className="input-icon" />
              <Input
                placeholder="Cidade ou estado..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input-field"
              />
            </div>
          
          <div className="approach-grid">
            <Select value={approach} onValueChange={setApproach}>
              <SelectTrigger>
                <SelectValue placeholder="Abordagem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comportamental">Comportamental</SelectItem>
                <SelectItem value="humanista">Humanista</SelectItem>
                <SelectItem value="psicanalista">Psicanalítica</SelectItem>
                <SelectItem value="sistemica">Sistêmica</SelectItem>
                <SelectItem value="gestalt">Gestalt</SelectItem>
                <SelectItem value="cognitiva">Cognitiva</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
          <Button onClick={handleSearch} className="filters-button">
              Buscar
            </Button>
        </div>
      </div>
    </section>
  );
}
