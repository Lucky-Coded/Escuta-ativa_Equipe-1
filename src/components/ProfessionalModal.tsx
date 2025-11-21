import "../CSS/ProfessionalModal.css";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Clock,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Professional } from "./ProfessionalCard";

interface ProfessionalModalProps {
  professional: Professional | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfessionalModal({
  professional,
  open,
  onOpenChange,
}: ProfessionalModalProps) {
  if (!professional) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="pm-modal">
        <DialogHeader>
          <DialogTitle className="pm-sr-only">
            Perfil de {professional.name}
          </DialogTitle>
        </DialogHeader>

        <div className="pm-body">

          <div className="pm-header">
            <ImageWithFallback
              src={professional.photo}
              alt={professional.name}
              className="pm-photo"
            />

            <div className="pm-header-content">
              <div className="pm-header-top">
                <div>
                  <h1 className="pm-name">{professional.name}</h1>
                  <p className="pm-title">{professional.title}</p>
                  <div className="pm-location">
                    <MapPin className="pm-icon" />
                    <span>{professional.location}</span>
                  </div>
                </div>

                <div className="pm-rating">
                  <Star className="pm-star" />
                  <span className="pm-rating-value">{professional.rating}</span>
                  <span className="pm-rating-count">
                    ({professional.reviewCount} avaliações)
                  </span>
                </div>
              </div>

              <div className="pm-details">
                <div className="pm-detail-item">
                  <Users className="pm-icon" />
                  {professional.experience} anos de experiência
                </div>
                <div className="pm-detail-item">
                  <Clock className="pm-icon" />
                  {professional.availability}
                </div>
              </div>
            </div>
          </div>

          <div className="pm-contact-buttons">
            {professional.contact.phone && (
              <Button
                onClick={() =>
                  window.open(`tel:${professional.contact.phone}`)
                }
                className="pm-contact-button"
              >
                <Phone className="pm-icon" />
                <span>Ligar</span>
              </Button>
            )}
            {professional.contact.whatsapp && (
              <Button
                variant="outline"
                onClick={() =>
                  window.open(`https://wa.me/${professional.contact.whatsapp}`)
                }
                className="pm-contact-button"
              >
                <MessageCircle className="pm-icon" />
                <span>WhatsApp</span>
              </Button>
            )}
            {professional.contact.email && (
              <Button
                variant="outline"
                onClick={() =>
                  window.open(`mailto:${professional.contact.email}`)
                }
                className="pm-contact-button"
              >
                <Mail className="pm-icon" />
                <span>E-mail</span>
              </Button>
            )}
            {professional.contact.website && (
              <Button
                variant="outline"
                onClick={() => window.open(professional.contact.website)}
                className="pm-contact-button"
              >
                <Globe className="pm-icon" />
                <span>Website</span>
              </Button>
            )}
          </div>

          <Separator />

          <div>
            <h2 className="pm-section-title">Sobre</h2>
            <p className="pm-description">{professional.description}</p>
          </div>

          <div className="pm-two-column">
            <div>
              <h3 className="pm-sub-title">Especialidade</h3>
              <Badge variant="secondary" className="pm-badge">
                {professional.specialty}
              </Badge>
            </div>

            <div>
              <h3 className="pm-sub-title">Abordagens</h3>
              <div className="pm-badge-list">
                {professional.approach.map((approach) => (
                  <Badge key={approach} variant="outline" className="pm-badge">
                    {approach}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="pm-sub-title">Formação</h3>
            <ul className="pm-education-list">
              {professional.education.map((education, index) => (
                <li key={index} className="pm-education-item">
                  <span className="pm-bullet" />
                  {education}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="pm-sub-title">Tipos de atendimento</h3>
            <div className="pm-badge-list">
              {professional.sessionTypes.map((type) => (
                <Badge key={type} variant="outline" className="pm-badge">
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="pm-sub-title">Idiomas</h3>
            <div className="pm-badge-list">
              {professional.languages.map((language) => (
                <Badge key={language} variant="secondary" className="pm-badge">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
