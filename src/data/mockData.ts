import { Professional } from "../components/ProfessionalCard";

export const mockProfessionals: Professional[] = [
  {
    id: "1",
    name: "Dra. Maria Silva",
    title: "Psicóloga Clínica",
    specialty: "Psicologia Clínica",
    approach: ["Terapia Cognitivo-Comportamental", "Humanista"],
    location: "São Paulo, SP",
    experience: 12,
    rating: 4.7,
    reviewCount: 127,
    photo: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1141",
    description: "Especialista em transtornos de ansiedade e depressão com mais de uma década de experiência. Utilizo abordagens baseadas em evidências para ajudar meus pacientes a desenvolverem estratégias eficazes de enfrentamento.",
    education: [
      "Doutorado em Psicologia Clínica - USP",
      "Mestrado em Psicologia - PUC-SP",
      "Especialização em TCC - Instituto Beck"
    ],
    languages: ["Português", "Inglês", "Espanhol"],
    contact: {
      phone: "+55 11 99999-0001",
      email: "dra.maria@exemplo.com",
      whatsapp: "5511999990001",
      website: "https://dramariasilva.com.br"
    },
    availability: "Segunda a sexta, 8h às 18h",
    sessionTypes: ["Presencial", "Online", "Domiciliar"]
  },
  {
    id: "2",
    name: "Dr. João Santos",
    title: "Psicanalista",
    specialty: "Psicanálise",
    approach: ["Psicanálise Freudiana", "Lacaniana"],
    location: "Rio de Janeiro, RJ",
    experience: 7,
    rating: 4.6,
    reviewCount: 89,
    photo: "https://images.unsplash.com/photo-1653327876541-95133a48158c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687 ",
    description: "Psicanalista com vasta experiência em análise de adultos e adolescentes. Trabalho com questões relacionadas ao inconsciente, sintomas neuróticos e desenvolvimento da personalidade.",
    education: [
      "Formação em Psicanálise - Sociedade Brasileira de Psicanálise",
      "Mestrado em Psicanálise - UERJ",
      "Graduação em Psicologia - UFRJ"
    ],
    languages: ["Português", "Francês"],
    contact: {
      phone: "+55 21 99999-0002",
      email: "dr.joao@exemplo.com",
      whatsapp: "5521999990002"
    },
    availability: "Terça a sábado, 9h às 19h",
    sessionTypes: ["Presencial"]
  },
  {
    id: "3",
    name: "Dra. Ana Costa",
    title: "Psicóloga Infantil",
    specialty: "Psicologia Infantil",
    approach: ["Ludoterapia", "Terapia Familiar", "Comportamental"],
    location: "Belo Horizonte, MG",
    experience: 8,
    rating: 4.4,
    reviewCount: 156,
    photo: "https://plus.unsplash.com/premium_photo-1679440415220-0830913ff645?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    description: "Especializada no atendimento de crianças e adolescentes, trabalho com questões como TDAH, autismo, ansiedade infantil e dificuldades escolares. Utilizo técnicas lúdicas e envolvimento familiar.",
    education: [
      "Especialização em Psicologia Infantil - PUC-MG",
      "Formação em Ludoterapia - Instituto Junguiano",
      "Graduação em Psicologia - UFMG"
    ],
    languages: ["Português", "Alemão"],
    contact: {
      phone: "+55 31 99999-0003",
      email: "dra.ana@exemplo.com",
      whatsapp: "5531999990003",
      website: "https://psicologiainfantilbh.com.br"
    },
    availability: "Segunda a quinta, 13h às 19h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "4",
    name: "Dr. Carlos Oliveira",
    title: "Neuropsicólogo",
    specialty: "Neuropsicologia",
    approach: ["Reabilitação Cognitiva", "Avaliação Neuropsicológica"],
    location: "Porto Alegre, RS",
    experience: 7,
    rating: 4.2,
    reviewCount: 73,
    photo: "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    description: "Neuropsicólogo especializado em avaliação e reabilitação de funções cognitivas. Atendo pacientes com lesões cerebrais, demências, TDAH e dificuldades de aprendizagem.",
    education: [
      "Doutorado em Neurociências - UFRGS",
      "Especialização em Neuropsicologia - Hospital de Clínicas",
      "Graduação em Psicologia - PUCRS"
    ],
    languages: ["Português"],
    contact: {
      phone: "+55 51 99999-0004",
      email: "dr.carlos@exemplo.com",
      whatsapp: "5551999990004"
    },
    availability: "Segunda a sexta, 8h às 17h",
    sessionTypes: ["Presencial"]
  },
  {
    id: "5",
    name: "Dra. Fernanda Lima",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "Brasília, DF",
    experience: 10,
    rating: 4.5,
    reviewCount: 94,
    photo: "https://images.unsplash.com/photo-1581322929625-f4aab333778a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Especialização em Terapia Familiar e de Casal - Instituto Familiae",
      "Formação em Constelação Familiar - Instituto Bert Hellinger",
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português"],
    contact: {
      phone: "+55 61 99999-0005",
      email: "dra.fernanda@exemplo.com",
      whatsapp: "5561999990005",
      website: "https://terapiacasalbrasilia.com.br"
    },
    availability: "Segunda a sábado, 9h às 20h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "6",
    name: "Dr. Roberto Mendes",
    title: "Psiquiatra",
    specialty: "Psiquiatria",
    approach: ["Psicofarmacologia", "Psiquiatria Integrativa"],
    location: "Salvador, BA",
    experience: 12,
    rating: 4.6,
    reviewCount: 112,
    photo: "https://images.unsplash.com/photo-1622977318832-82321bdd509f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1503",
    description: "Psiquiatra com experiência no tratamento de transtornos do humor, ansiedade, esquizofrenia e bipolaridade. Combino tratamento medicamentoso com abordagens terapêuticas integradas.",
    education: [
      "Residência em Psiquiatria - Hospital São João de Deus",
      "Graduação em Medicina - UFBA",
      "Fellowship em Psicofarmacologia - Harvard Medical School"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 71 99999-0006",
      email: "dr.roberto@exemplo.com",
      whatsapp: "5571999990006"
    },
    availability: "Segunda a sexta, 7h às 16h",
    sessionTypes: ["Presencial", "Teleconsulta"]
  }
];