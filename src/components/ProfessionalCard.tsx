import "../CSS/ProfessionalCard.css";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Star, Phone, Mail, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Professional {
  id: string;
  name: string;
  title: string;
  specialty: string;
  approach: string[];
  location: string;
  experience: number;
  rating: number;
  reviewCount: number;
  photo: string;
  description: string;
  education: string[];
  languages: string[];
  contact: {
    phone?: string;
    email?: string;
    whatsapp?: string;
    website?: string;
  };
  availability: string;
  sessionTypes: string[];
}

interface ProfessionalCardProps {
  professional: Professional;
  onClick: () => void;
}

export function ProfessionalCard({ professional, onClick }: ProfessionalCardProps) {
  return (
    <Card className="pc-card" onClick={onClick}>
      <CardContent className="pc-card-content">
        <div className="pc-container">
          <ImageWithFallback
            src={professional.photo}
            alt={professional.name}
            className="pc-photo"
          />

          <div className="pc-main">
            <div className="pc-header">
              <div>
                <h3 className="pc-name">{professional.name}</h3>
                <p className="pc-title">{professional.title}</p>
              </div>
              <div className="pc-rating">
                <Star className="pc-star" />
                <span>{professional.rating}</span>
                <span className="pc-review-count">({professional.reviewCount})</span>
              </div>
            </div>

            <div className="pc-body">
              <div className="pc-location">
                <MapPin className="pc-icon" />
                {professional.location}
              </div>

              <div className="pc-badges">
                <Badge variant="secondary" className="pc-badge">
                  {professional.specialty}
                </Badge>
                {professional.approach.slice(0, 2).map((approach) => (
                  <Badge key={approach} variant="outline" className="pc-badge">
                    {approach}
                  </Badge>
                ))}
              </div>

              <p className="pc-description">{professional.description}</p>

              <div className="pc-footer">
                <span className="pc-experience">
                  {professional.experience} anos de experiência
                </span>

                <div className="pc-actions">
                  {professional.contact.phone && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="pc-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`tel:${professional.contact.phone}`);
                      }}
                    >
                      <Phone className="pc-action-icon" />
                    </Button>
                  )}
                  {professional.contact.whatsapp && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="pc-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://wa.me/${professional.contact.whatsapp}`);
                      }}
                    >
                      <MessageCircle className="pc-action-icon" />
                    </Button>
                  )}
                  {professional.contact.email && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="pc-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`mailto:${professional.contact.email}`);
                      }}
                    >
                      <Mail className="pc-action-icon" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
