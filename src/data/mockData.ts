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
  },
  {
    id: "8",
    name: "Dr. Fellipe Lorde",
    title: "Psicóloga Clínica",
    specialty: "Terapia Clínica",
    approach: ["Terapia Cognitivo-Comportamental", "Humanista"],
    location: "São João, MG",
    experience: 11,
    rating: 4.0,
    reviewCount: 105,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Especialista em transtornos de ansiedade e depressão com mais de uma década de experiência. Utilizo abordagens baseadas em evidências para ajudar meus pacientes a desenvolverem estratégias eficazes de enfrentamento.",
    education: [
      "Residência em Psicatria - Hospital Crelson da Silva",
      "Graduação em Medicina - REPO",
    ],
    languages: ["Português", "Espanhol"],
    contact: {
      phone: "‪+55 71 99999-0008‬",
      email: "dr.fellipe@exemplo.com",
      whatsapp: "5571999990008"
    },
    availability: "Segunda a sexta, 9h às 18h",
    sessionTypes: ["Teleconsulta"]
  },
  {
    id: "9",
    name: "Dr. Gustavo Luffi",
    title: "Psicanalista",
    specialty: "Psicanálise",
    approach: ["Psicanálise Freudiana", "Lacaniana"],
    location: "Rio de Janeiro, RJ",
    experience: 10,
    rating: 4.5,
    reviewCount: 70,
    photo: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Psicanalista com vasta experiência em análise de adultos e adolescentes. Trabalho com questões relacionadas ao inconsciente, sintomas neuróticos e desenvolvimento da personalidade.",
    education: [
     "Mestrado em Psicanálise - UERJ",
      "Graduação em Psicologia - UFRJ",
    ],
    languages: ["Português", "Espanhol"],
    contact: {
      phone: "‪+55 71 99999-0009‬",
      email: "dr.gustavo@exemplo.com",
      whatsapp: "5571999990009"
    },
    availability: "Segunda a sexta, 8h às 18h",
    sessionTypes: ["Teleconsulta", "Presencial"]
  },
   {
    id: "10",
    name: "Dra. Madeline Hornete",
    title: "Psicóloga Infantil",
    specialty: "Psicologia Infantil",
    approach: ["Ludoterapia", "Terapia Familiar", "Comportamental"],
    location: "Curitiba, PR",
    experience: 8,
    rating: 4.4,
    reviewCount: 156,
    photo:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    description: "Especializada no atendimento de crianças e adolescentes, trabalho com questões como TDAH, autismo, ansiedade infantil e dificuldades escolares. Utilizo técnicas lúdicas e envolvimento familiar.",
    education: [
      "Especialização em Psicologia Infantil - PUC-PR",
      "Graduação em Psicologia - UFMG"
    ],
    languages: ["Português", "Francês"],
    contact: {
      phone: "‪+55 31 99999-0010‬",
      email: "dra.adeline@exemplo.com",
      whatsapp: "5531999990010",
    },
    availability: "Segunda a quinta, 13h às 19h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "11",
    name: "Dr. Guilherme Pinto Filho II",
    title: "Neuropsicólogo",
    specialty: "Neuropsicologia",
    approach: ["Reabilitação Cognitiva", "Avaliação Neuropsicológica"],
    location: "Jericoacoara, Ceara",
    experience: 5,
    rating: 2.5,
    reviewCount: 73,
    photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Neuropsicólogo especializado em avaliação e reabilitação de funções cognitivas. Atendo pacientes com lesões cerebrais, demências, TDAH e dificuldades de aprendizagem.",
    education: [
      "Doutorado em Neurociências - UFRGS",
      "Especialização em Neuropsicologia - Hospital de Clínicas",
      "Graduação em Psicologia - PUCRS"
    ],
    languages: ["Português"],
    contact: {
      phone: "‪+55 51 99999-0011‬",
      email: "dr.guilherme@exemplo.com",
      whatsapp: "5551999990011"
    },
    availability: "Segunda a sexta, 8h às 17h",
    sessionTypes: ["Presencial"]
  },
  {
    id: "12",
    name: "Dr. Pedro Smich",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "Brasília, DF",
    experience: 7,
    rating: 4.5,
    reviewCount: 94,
    photo:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português"],
    contact: {
      phone: "+55 61 99999-0012",
      email: "dr.pedro@exemplo.com",
      whatsapp: "5561999990012",
    },
    availability: "Segunda a sábado, 7h às 16h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "13",
    name: "Dra. Ingrid Souza",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "São Paulo, SP",
    experience: 15,
    rating: 5.0,
    reviewCount: 150,
    photo:"https://images.unsplash.com/photo-1610631066894-62452ccb927c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Especialização em Terapia Familiar e de Casal - Instituto Familiae",
      "Formação em Constelação Familiar - Instituto Bert Hellinger",
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 61 99999-0013",
      email: "dra.ingrid@exemplo.com",
      whatsapp: "5561999990013",
    },
    availability: "Segunda a sábado, 9h às 20h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "14",
    name: "Dr. Gustavo Maquito",
    title: "Psiquiatra",
    specialty: "Psiquiatria",
    approach: ["Psicofarmacologia", "Psiquiatria Integrativa"],
    location: "Recife, PE",
    experience: 24,
    rating: 4.7,
    reviewCount: 193,
    photo:"https://images.unsplash.com/photo-1513089988725-9a24abaa4167?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Psiquiatra com experiência no tratamento de transtornos do humor, ansiedade, esquizofrenia e bipolaridade. Combino tratamento medicamentoso com abordagens terapêuticas integradas.",
    education: [
      "Residência em Psiquiatria - Hospital São João de Deus",
      "Graduação em Medicina - UFBA",
      "Fellowship em Psicofarmacologia - Harvard Medical School"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 71 99999-0014",
      email: "dr.gustavo@exemplo.com",
      whatsapp: "5571999990014"
    },
    availability: "Segunda a sexta, 8h às 17h",
    sessionTypes: ["Presencial", "Teleconsulta"]
  },
  {
    id: "15",
    name: "Dr. Rodrigo Enrico",
    title: "Terapeuta Familiar",
    specialty: "Terapia familiar",
    approach: ["Terapia Sistêmica", "Terapia Cognitivo"],
    location: "Fortaleza, CE",
    experience: 4,
    rating: 4.8,
    reviewCount: 134,
    photo:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Terapeuta Familiar especializado em fortalecer vínculos, melhorar a comunicação e resolver conflitos entre casais e famílias. Atuo com foco nas dinâmicas relacionais, utilizando abordagens sistêmicas para promover equilíbrio, compreensão mútua e relações mais saudáveis.",
    education: [
      "Residência em Psicologia - Hospital São Judas Tadeu",
      "Graduação em Medicina - OBA",
    ],
    languages: ["Português", "Mandarim"],
    contact: {
      phone: "+55 71 99999-0015",
      email: "dr.rodrigo@exemplo.com",
      whatsapp: "5571999990015"
    },
    availability: "Segunda a sexta, 7h às 21h",
    sessionTypes: ["Presencial"]
  },
  {
    id: "16",
    name: "Dr. Paulo Delgado",
    title: "Psicóloga Clínica",
    specialty: "Terapia Clínica",
    approach: ["Terapia Cognitivo-Comportamental", "Humanista"],
    location: "Salvador, BH",
    experience: 9,
    rating: 4.7,
    reviewCount: 126,
    photo: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Especialista em transtornos de ansiedade e depressão com mais de uma década de experiência. Utilizo abordagens baseadas em evidências para ajudar meus pacientes a desenvolverem estratégias eficazes de enfrentamento.",
    education: [
      "Residência em Psicatria - Hospital Crelson da Silva",
      "Graduação em Medicina - REPO",
    ],
    languages: ["Português", "Espanhol"],
    contact: {
      phone: "+55 71 99999-0016",
      email: "dr.paulo@exemplo.com",
      whatsapp: "5571999990016"
    },
    availability: "Segunda a sexta, 9h às 18h",
    sessionTypes: ["Teleconsulta"]
  },
  {
    id: "17",
    name: "Dr. Gabriel Americo",
    title: "Psicóloga Clínica",
    specialty: "Terapia Clínica",
    approach: ["Terapia Cognitivo-Comportamental", "Humanista"],
    location: "São João, MG",
    experience: 12,
    rating: 4.5,
    reviewCount: 145,
    photo: "https://media.istockphoto.com/id/1779900720/pt/foto/portrait-of-handsome-man.jpg?s=2048x2048&w=is&k=20&c=e6PHqSYrxP_z6V4OqtCX8tVKgZXvZVe9U5zwL0JBbks=",
    description: "Especialista em transtornos de ansiedade e depressão com mais de uma década de experiência. Utilizo abordagens baseadas em evidências para ajudar meus pacientes a desenvolverem estratégias eficazes de enfrentamento.",
    education: [
      "Residência em Psicatria - Hospital Crelson da Silva",
      "Graduação em Medicina - REPO",
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 71 99999-0017",
      email: "dr.gabriel@exemplo.com",
      whatsapp: "5571999990017"
    },
    availability: "Segunda a sexta, 9h às 18h",
    sessionTypes: ["Teleconsulta", "Presencial"]
  },
  {
    id: "18",
    name: "Dr. Andre Airton",
    title: "Psicanalista",
    specialty: "Psicanálise",
    approach: ["Psicanálise Freudiana", "Lacaniana"],
    location: "Florianópolis, SC",
    experience: 14,
    rating: 4.9,
    reviewCount: 122,
    photo: "https://plus.unsplash.com/premium_photo-1706803192972-2f247eec1b59?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Psicanalista com vasta experiência em análise de adultos e adolescentes. Trabalho com questões relacionadas ao inconsciente, sintomas neuróticos e desenvolvimento da personalidade.",
    education: [
     "Mestrado em Psicanálise - UERJ",
      "Graduação em Psicologia - UFRJ",
    ],
    languages: ["Português", "Espanhol"],
    contact: {
      phone: "+55 71 99999-0018",
      email: "dr.andre@exemplo.com",
      whatsapp: "5571999990018"
    },
    availability: "Segunda a sexta, 8h às 19h",
    sessionTypes: ["Teleconsulta", "Presencial"]
  },
  {
    id: "19",
    name: "Dra. Matilde Liz",
    title: "Psicóloga Infantil",
    specialty: "Psicologia Infantil",
    approach: ["Ludoterapia", "Terapia Familiar", "Comportamental"],
    location: "Curitiba, PR",
    experience: 10,
    rating: 4.7,
    reviewCount: 106,
    photo:"https://plus.unsplash.com/premium_photo-1683140906006-30733c7d002d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    description: "Especializada no atendimento de crianças e adolescentes, trabalho com questões como TDAH, autismo, ansiedade infantil e dificuldades escolares. Utilizo técnicas lúdicas e envolvimento familiar.",
    education: [
      "Especialização em Psicologia Infantil - PUC-PR",
      "Graduação em Psicologia - UFMG"
    ],
    languages: ["Português",],
    contact: {
      phone: "+55 31 99999-0019",
      email: "dra.matilde@exemplo.com",
      whatsapp: "5531999990019",
    },
    availability: "Segunda a quinta, 7h às 19h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "20",
    name: "Dr. Antonio Pirez",
    title: "Neuropsicólogo",
    specialty: "Neuropsicologia",
    approach: ["Reabilitação Cognitiva", "Avaliação Neuropsicológica"],
    location: "Jericoacoara, Ceara",
    experience: 5,
    rating: 2.5,
    reviewCount: 73,
    photo:"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Neuropsicólogo especializado em avaliação e reabilitação de funções cognitivas. Atendo pacientes com lesões cerebrais, demências, TDAH e dificuldades de aprendizagem.",
    education: [
      "Doutorado em Neurociências - UFRGS",
      "Especialização em Neuropsicologia - Hospital de Clínicas",
      "Graduação em Psicologia - PUCRS"
    ],
    languages: ["Português"],
    contact: {
      phone: "+55 51 99999-0020",
      email: "dr.antonio@exemplo.com",
      whatsapp: "5551999990020"
    },
    availability: "Segunda a sexta, 8h às 17h",
    sessionTypes: ["Presencial"]
  },
  {
    id: "21",
    name: "Dra. Paula Pirez",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "Brasília, DF",
    experience: 20,
    rating: 4.4,
    reviewCount: 125,
    photo:"https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português", "Japonês"],
    contact: {
      phone: "+55 61 99999-0021",
      email: "dra.paula@exemplo.com",
      whatsapp: "5561999990021",
    },
    availability: "Segunda a sábado, 7h às 16h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "22",
    name: "Dr. Anderson Gonçalves",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "Vitória, ES",
    experience: 15,
    rating: 5.0,
    reviewCount: 150,
    photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Especialização em Terapia Familiar e de Casal - Instituto Familiae",
      "Formação em Constelação Familiar - Instituto Bert Hellinger",
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 61 99999-0022",
      email: "dra.anderson@exemplo.com",
      whatsapp: "5561999990022",
    },
    availability: "Segunda a sábado, 9h às 20h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "23",
    name: "Dr. Fabio Jacinto",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "Vitória, ES",
    experience: 15,
    rating: 5.0,
    reviewCount: 150,
    photo:"https://images.unsplash.com/photo-1608681299041-cc19878f79f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Especialização em Terapia Familiar e de Casal - Instituto Familiae",
      "Formação em Constelação Familiar - Instituto Bert Hellinger",
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 61 99999-0023",
      email: "dra.fabio@exemplo.com",
      whatsapp: "5561999990023",
    },
    availability: "Segunda a sábado, 9h às 20h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "23",
    name: "Dr. Maurício Pequim",
    title: "Psiquiatra",
    specialty: "Psiquiatria",
    approach: ["Psicofarmacologia", "Psiquiatria Integrativa"],
    location: "Recife, PE",
    experience: 30,
    rating: 5.0,
    reviewCount: 200,
    photo:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Psiquiatra com experiência no tratamento de transtornos do humor, ansiedade, esquizofrenia e bipolaridade. Combino tratamento medicamentoso com abordagens terapêuticas integradas.",
    education: [
      "Residência em Psiquiatria - Hospital São João de Deus",
      "Graduação em Medicina - UFBA",
      "Fellowship em Psicofarmacologia - Harvard Medical School"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 71 99999-0023",
      email: "dr.mauricio@exemplo.com",
      whatsapp: "5571999990023"
    },
    availability: "Segunda a sexta, 8h às 14h",
    sessionTypes: ["Presencial", "Teleconsulta"]
  },
  {
    id: "24",
    name: "Dra. Angelica Spilperg",
    title: "Terapeuta Familiar",
    specialty: "Terapia familiar",
    approach: ["Terapia Sistêmica", "Terapia Cognitivo"],
    location: "Fortaleza, CE",
    experience: 20,
    rating: 4.8,
    reviewCount: 185,
    photo:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Terapeuta Familiar especializado em fortalecer vínculos, melhorar a comunicação e resolver conflitos entre casais e famílias. Atuo com foco nas dinâmicas relacionais, utilizando abordagens sistêmicas para promover equilíbrio, compreensão mútua e relações mais saudáveis.",
    education: [
      "Residência em Psicologia - Hospital São Judas Tadeu",
      "Graduação em Medicina - OBA",
    ],
    languages: ["Português", "Mandarim"],
    contact: {
      phone: "+55 71 99999-0024",
      email: "dr.angelica@exemplo.com",
      whatsapp: "5571999990024"
    },
    availability: "Segunda a sexta, 7h às 21h",
    sessionTypes: ["Presencial"]
  },
  {
    id: "25",
    name: "Dr. Enry Santos",
    title: "Psicóloga Clínica",
    specialty: "Terapia Clínica",
    approach: ["Terapia Cognitivo-Comportamental", "Humanista"],
    location: "Salvador, BH",
    experience: 9,
    rating: 4.7,
    reviewCount: 126,
    photo: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Especialista em transtornos de ansiedade e depressão com mais de uma década de experiência. Utilizo abordagens baseadas em evidências para ajudar meus pacientes a desenvolverem estratégias eficazes de enfrentamento.",
    education: [
      "Residência em Psicatria - Hospital Crelson da Silva",
      "Graduação em Medicina - REPO",
    ],
    languages: ["Português", "Espanhol"],
    contact: {
      phone: "+55 71 99999-0025",
      email: "dr.henry@exemplo.com",
      whatsapp: "5571999990025"
    },
    availability: "Segunda a sexta, 9h às 18h",
    sessionTypes: ["Teleconsulta"]
  },
  {
    id: "26",
    name: "Dra. Sabrina França",
    title: "Psicóloga Clínica",
    specialty: "Terapia Clínica",
    approach: ["Terapia Cognitivo-Comportamental", "Humanista"],
    location: "São João, MG",
    experience: 12,
    rating: 4.5,
    reviewCount: 145,
    photo: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Especialista em transtornos de ansiedade e depressão com mais de uma década de experiência. Utilizo abordagens baseadas em evidências para ajudar meus pacientes a desenvolverem estratégias eficazes de enfrentamento.",
    education: [
      "Residência em Psicatria - Hospital Crelson da Silva",
      "Graduação em Medicina - REPO",
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 71 99999-0026",
      email: "dr.sabrina@exemplo.com",
      whatsapp: "5571999990026"
    },
    availability: "Segunda a sexta, 10h às 18h",
    sessionTypes: ["Teleconsulta", "Presencial"]
  },
   {
    id: "27",
    name: "Dra. Pricilla Alves",
    title: "Psicanalista",
    specialty: "Psicanálise",
    approach: ["Psicanálise Freudiana", "Lacaniana"],
    location: "Florianópolis, SC",
    experience: 7,
    rating: 4.7,
    reviewCount: 130,
    photo: "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Psicanalista com vasta experiência em análise de adultos e adolescentes. Trabalho com questões relacionadas ao inconsciente, sintomas neuróticos e desenvolvimento da personalidade.",
    education: [
     "Mestrado em Psicanálise - UERJ",
      "Graduação em Psicologia - UFRJ",
    ],
    languages: ["Português"],
    contact: {
      phone: "+55 71 99999-0027",
      email: "dr.pricilla@exemplo.com",
      whatsapp: "5571999990027"
    },
    availability: "Segunda a sexta, 7h às 19h",
    sessionTypes: ["Teleconsulta", "Presencial"]
  },  
  {
    id: "28",
    name: "Dra. Maria Alice",
    title: "Psicóloga Infantil",
    specialty: "Psicologia Infantil",
    approach: ["Ludoterapia", "Terapia Familiar", "Comportamental"],
    location: "Curitiba, PR",
    experience: 10,
    rating: 4.7,
    reviewCount: 126,
    photo:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    description: "Especializada no atendimento de crianças e adolescentes, trabalho com questões como TDAH, autismo, ansiedade infantil e dificuldades escolares. Utilizo técnicas lúdicas e envolvimento familiar.",
    education: [
      "Especialização em Psicologia Infantil - PUC-PR",
      "Graduação em Psicologia - UFMG"
    ],
    languages: ["Português", "Inglês"],
    contact: {
      phone: "+55 31 99999-0028",
      email: "dra.maria@exemplo.com",
      whatsapp: "5531999990028",
    },
    availability: "Segunda a quinta, 7h às 22h",
    sessionTypes: ["Presencial", "Online"]
  },
  {
    id: "29",
    name: "Dra. Fabia Cincleare",
    title: "Neuropsicólogo",
    specialty: "Neuropsicologia",
    approach: ["Reabilitação Cognitiva", "Avaliação Neuropsicológica"],
    location: "Jericoacoara, Ceara",
    experience: 18,
    rating: 3.8,
    reviewCount: 166,
    photo:"https://unsplash.com/pt-br/fotografias/retrato-do-estudio-da-mulher-senior-com-boina-cinza-em-pe-dentro-de-casa-contra-o-fundo-escuro-tiHiSvf2G2s",    
    description: "Neuropsicólogo especializado em avaliação e reabilitação de funções cognitivas. Atendo pacientes com lesões cerebrais, demências, TDAH e dificuldades de aprendizagem.",
    education: [
      "Doutorado em Neurociências - UFRGS",
      "Especialização em Neuropsicologia - Hospital de Clínicas",
      "Graduação em Psicologia - PUCRS"
    ],
    languages: ["Português"],
    contact: {
      phone: "+55 51 99999-0029",
      email: "dr.fabia@exemplo.com",
      whatsapp: "5551999990029"
    },
    availability: "Segunda a sexta, 8h às 17h",
    sessionTypes: ["Presencial"]
  },
    {
    id: "30",
    name: "Dra. Regina Catho",
    title: "Terapeuta Familiar",
    specialty: "Terapia Familiar",
    approach: ["Terapia Sistêmica", "Terapia de Casal", "Constelação Familiar"],
    location: "Brasília, DF",
    experience: 20,
    rating: 4.9,
    reviewCount: 185,
    photo:"https://plus.unsplash.com/premium_photo-1661633228903-c155872065e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    description: "Especialista em terapia de casal e família com abordagem sistêmica. Trabalho com questões relacionais, comunicação, conflitos familiares e reconstrução de vínculos afetivos.",
    education: [
      "Graduação em Psicologia - UnB"
    ],
    languages: ["Português", "Polonês"],
    contact: {
      phone: "+55 61 99999-0030",
      email: "dra.regina@exemplo.com",
      whatsapp: "5561999990030",
    },
    availability: "Segunda a sábado, 7h às 16h",
    sessionTypes: ["Presencial", "Online"]
  },
];