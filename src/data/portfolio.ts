export type Language = "fr" | "en";

export const navItems = {
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  fr: [
    { label: "Profil", href: "#about" },
    { label: "Expérience", href: "#experience" },
    { label: "Compétences", href: "#skills" },
    { label: "Formation", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export const portfolio = {
  en: {
    metaDescription:
      "Backend and cloud software engineer with 2 years of production experience in distributed fintech systems and advanced use of generative AI for development acceleration.",
    hero: {
      badge: "Open to alternance from September 2026",
      eyebrow: "Software Engineer",
      title: "Backend & Cloud Software Engineer | Fintech",
      tagline:
        "I build reliable distributed backend systems and cloud-native services, using generative AI to accelerate development, debugging, testing, and documentation.",
      ctas: {
        experience: "View Experience",
        cv: "Download CV",
        contact: "Contact Me",
      },
      stats: [
        ["2", "Years experience"],
        ["4", "Banking clients"],
        ["M2", "MIAGE Lyon 1"],
      ],
    },
    about: {
      eyebrow: "About",
      title: "Backend and cloud engineering strengthened by advanced AI-assisted development.",
      paragraphs: [
        "I am a software engineer with 2 years of production experience on critical transaction systems and distributed architectures in international banking and fintech. I work with Java/Spring Boot microservices, Kafka, APIs, SQL, Kubernetes, and cloud-native delivery, from implementation and integration through production support.",
        "I use generative AI tools extensively to accelerate software development, code analysis, debugging, testing, documentation, and technical exploration. Admitted to the M2 MIAGE program at Universite Claude Bernard Lyon 1, I am looking for a backend or cloud engineering alternance starting September 2026.",
      ],
      highlights: [
        ["Primary focus", "Backend engineering and cloud-native systems"],
        ["Business domain", "Fintech, banking, transaction monitoring, card systems"],
        ["AI practice", "Advanced generative AI usage for development acceleration"],
      ],
      strengthsTitle: "What I bring",
      strengths: [
        "Production mindset: incident analysis, stabilization, non-regression testing.",
        "Backend and cloud depth: Java/Spring Boot, Kafka, APIs, SQL, Docker, Kubernetes, and CI/CD.",
        "AI-assisted engineering: faster coding, debugging, testing, documentation, and technical research.",
      ],
    },
    experienceIntro: {
      eyebrow: "Experience",
      title: "International banking projects with production responsibility.",
      intro:
        "A selection of real systems across the UK, South Africa, Hungary, Austria, and migration programs where reliability, traceability, and transaction correctness matter.",
    },
    experience: [
      {
        client: "HSBC UK",
        logo: "hsbc",
        title: "Real-Time Transaction Pipeline",
        period: "Banking monitoring and production stabilization",
        bullets: [
          "Built Kafka pipeline for publishing Visa and PowerCARD transactions to a banking monitoring system.",
          "Implemented Spring Cloud Stream producers with SASL/Kerberos security.",
          "Supported production incidents through analysis, stabilization, and reliability improvements.",
        ],
        tags: ["Kafka", "Spring Cloud Stream", "Kerberos", "PowerCARD", "Visa"],
      },
      {
        client: "Thales / ABSA",
        logo: "thales",
        title: "PowerCARD V4 Migration",
        period: "Core banking modernization and certification",
        bullets: [
          "Migrated Oracle PL/SQL and C legacy components to Java 17 and Spring Boot microservices.",
          "Designed REST and gRPC APIs using Protobuf contracts for service integration.",
          "Delivered Kafka real-time flows, Kubernetes and Helm deployments, and Visa/Mastercard certification campaigns.",
        ],
        tags: ["Java 17", "Spring Boot", "gRPC", "Kubernetes", "Helm"],
      },
      {
        client: "Erste Bank Hungary / Austria",
        logo: "erste",
        title: "Event-Driven PowerCARD Integration",
        period: "CDC, Kafka, testing, and production readiness",
        bullets: [
          "Integrated CDC events into Kafka using Avro schemas for downstream banking consumers.",
          "Connected business consumers to real-time PowerCARD event streams.",
          "Executed functional and non-regression testing before production release.",
        ],
        tags: ["CDC", "Kafka", "Avro", "Oracle", "Testing"],
      },
      {
        client: "FirstRand Bank South Africa",
        logo: "fnb",
        title: "FLEET Fuel Card System",
        period: "On-site production support and transaction control",
        bullets: [
          "Built pre-authorization transaction control rules for fuel limits, allowed fuel types, and vehicle parameters.",
          "Contributed to Java 8 to Java 17 migration work across the payment platform.",
          "Provided on-site production support in South Africa for critical banking operations.",
        ],
        tags: ["Java", "Rules Engine", "Payments", "Production Support", "Migration"],
      },
    ],
    skillsIntro: {
      eyebrow: "Skills",
      title: "Backend and cloud skills for distributed, production-critical systems.",
    },
    educationIntro: {
      eyebrow: "Education",
      title: "Academic foundation aligned with software engineering roles in France.",
    },
    certificationsIntro: {
      eyebrow: "Certifications",
      title: "Verified training across cloud, microservices, frontend, and professional skills.",
      intro:
        "Selected certifications that complement my production experience with structured learning from IBM, Google Cloud, Meta, and Honoris.",
      linkLabel: "View certificate",
    },
    projects: {
      eyebrow: "Projects",
      title: "Personal systems work with production-style architecture.",
      intro:
        "A focused space for engineering projects that demonstrate architecture, debugging, observability, and end-to-end ownership.",
      featured: "Featured project",
      projectTitle: "AI Incident & Log Investigation Platform",
      description:
        "A distributed investigation platform that ingests production logs, validates Avro events through Schema Registry, groups failures into incidents, and gives developers an AI-ready workspace for diagnosis.",
      liveDemoLabel: "Open live demo",
      liveDemoUrl: "https://incident-platform-ai.vercel.app/",
      repoLabel: "View GitHub repository",
      repoUrl: "https://github.com/Mednj/incident-platform-AI",
      status: "MVP implemented and runnable locally",
      stack: [
        "Java 17",
        "Spring Boot",
        "Kafka",
        "Avro",
        "Schema Registry",
        "PostgreSQL",
        "Angular",
        "Docker",
        "Kubernetes",
      ],
      metrics: [
        ["6", "Spring Boot services"],
        ["6", "Avro Kafka contracts"],
        ["4", "demo surfaces"],
      ],
      highlights: [
        "Event-driven microservices with Kafka topics for log ingestion, normalization, incident creation, and analysis events.",
        "Confluent Schema Registry and Avro-generated Java classes to keep producers and consumers contract-driven.",
        "Deterministic incident grouping using fingerprints built from service, environment, severity, exception class, stack hash, and message pattern.",
        "PostgreSQL persistence with incident status workflow, comments, assignments, timeline, and AI analysis history.",
        "Docker Compose demo stack plus Kubernetes manifests for deployment readiness.",
      ],
      note:
        "The local AI analysis uses a deterministic provider for demos, with the service designed around a pluggable external LLM adapter.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to backend and cloud engineering alternance opportunities from September 2026.",
      paragraph:
        "Based in Villeurbanne, I am looking for a backend or cloud engineering alternance in France where I can contribute to distributed systems, production platforms, and teams adopting generative AI to accelerate software delivery.",
      emailButton: "Email Me",
      cvButton: "Download CV",
      labels: { email: "Email", linkedin: "LinkedIn", phoneFr: "Phone", location: "Location" },
    },
    footer: "Mohamed NAJA - Backend & Cloud Software Engineer | AI-Assisted Development.",
  },
  fr: {
    metaDescription:
      "Ingénieur logiciel backend et cloud avec 2 ans d'expérience en production sur des systèmes fintech distribués et une utilisation avancée de l'IA générative pour accélérer le développement.",
    hero: {
      badge: "Recherche alternance - disponible dès septembre 2026",
      eyebrow: "Ingénieur Logiciel",
      title: "Ingénieur Logiciel Backend & Cloud | Fintech",
      tagline:
        "Je développe des systèmes backend distribués et des services cloud-native fiables, en utilisant l'IA générative pour accélérer le développement, le debugging, les tests et la documentation.",
      ctas: {
        experience: "Voir l'expérience",
        cv: "Télécharger le CV",
        contact: "Me contacter",
      },
      stats: [
        ["M2", "MIAGE Lyon 1"],
        ["RNCP", "39490"],
        ["Sept. 2026", "Disponibilité"],
      ],
    },
    about: {
      eyebrow: "Profil",
      title: "Ingénierie backend et cloud renforcée par une utilisation avancée de l'IA en développement.",
      paragraphs: [
        "Ingénieur logiciel avec 2 ans d'expérience en production sur des systèmes transactionnels critiques et des architectures distribuées dans la banque et la fintech internationales. J'interviens sur des microservices Java/Spring Boot, Kafka, les APIs, SQL, Kubernetes et les déploiements cloud-native, du développement jusqu'au support production.",
        "J'utilise quotidiennement et de manière avancée les outils d'IA générative pour accélérer le développement logiciel, l'analyse de code, le debugging, les tests, la documentation et l'exploration technique. Admis en M2 MIAGE à l'Université Claude Bernard Lyon 1, je recherche une alternance backend ou cloud à partir de septembre 2026.",
      ],
      highlights: [
        ["Spécialisation", "Backend et systèmes cloud-native"],
        ["Disponibilité", "À partir de septembre 2026"],
        ["Rythme sept.-fév.", "2 semaines entreprise / 2 semaines formation"],
        ["Rythme mars-juin", "3 semaines entreprise / 1 semaine formation"],
        ["Juillet-août", "Temps plein en entreprise"],
        ["Formation", "M2 MIAGE - RNCP39490"],
      ],
      strengthsTitle: "Ce que j'apporte",
      strengths: [
        "Culture production : analyse d'incidents, stabilisation, tests de non-régression.",
        "Expertise backend et cloud : Java/Spring Boot, Kafka, APIs, SQL, Docker, Kubernetes et CI/CD.",
        "Développement assisté par IA : accélération du code, debugging, tests, documentation et recherche technique.",
      ],
    },
    experienceIntro: {
      eyebrow: "Expérience",
      title: "Expérience production sur des projets bancaires internationaux.",
      intro:
        "Une sélection de systèmes réels au Royaume-Uni, en Afrique du Sud, en Hongrie, en Autriche et sur des programmes de migration où la fiabilité, la traçabilité et la justesse des transactions sont essentielles.",
    },
    experience: [
      {
        client: "HSBC UK",
        logo: "hsbc",
        title: "Pipeline de transactions temps réel",
        period: "Monitoring bancaire et stabilisation production",
        bullets: [
          "Développement d'un pipeline Kafka pour publier les transactions Visa et PowerCARD vers un système de monitoring bancaire.",
          "Mise en place de producteurs Spring Cloud Stream avec sécurité SASL/Kerberos.",
          "Support production, analyse d'incidents, stabilisation et amélioration de la fiabilité.",
        ],
        tags: ["Kafka", "Spring Cloud Stream", "Kerberos", "PowerCARD", "Visa"],
      },
      {
        client: "Thales / ABSA",
        logo: "thales",
        title: "Migration PowerCARD V4",
        period: "Modernisation core banking et certification",
        bullets: [
          "Migration de composants legacy Oracle PL/SQL et C vers des microservices Java 17 et Spring Boot.",
          "Conception d'API REST et gRPC avec contrats Protobuf pour l'intégration inter-services.",
          "Livraison de flux Kafka temps réel, déploiements Kubernetes/Helm et campagnes de certification Visa/Mastercard.",
        ],
        tags: ["Java 17", "Spring Boot", "gRPC", "Kubernetes", "Helm"],
      },
      {
        client: "Erste Bank Hungary / Austria",
        logo: "erste",
        title: "Intégration PowerCARD événementielle",
        period: "CDC, Kafka, tests et préparation production",
        bullets: [
          "Intégration d'événements CDC vers Kafka avec des schémas Avro pour les consommateurs bancaires.",
          "Connexion de consommateurs métier aux flux PowerCARD en temps réel.",
          "Tests fonctionnels et de non-régression avant mise en production.",
        ],
        tags: ["CDC", "Kafka", "Avro", "Oracle", "Tests"],
      },
      {
        client: "FirstRand Bank South Africa",
        logo: "fnb",
        title: "Système FLEET de cartes carburant",
        period: "Support production sur site et contrôle transactionnel",
        bullets: [
          "Développement d'un module de contrôle de pré-autorisation pour les limites carburant, types autorisés et paramètres véhicule.",
          "Contribution à la migration Java 8 vers Java 17 sur la plateforme de paiement.",
          "Support production sur site en Afrique du Sud pour des opérations bancaires critiques.",
        ],
        tags: ["Java", "Moteur de règles", "Paiements", "Support production", "Migration"],
      },
    ],
    skillsIntro: {
      eyebrow: "Compétences",
      title: "Compétences backend et cloud pour des systèmes distribués critiques en production.",
    },
    educationIntro: {
      eyebrow: "Formation",
      title: "Formation alignée avec l'alternance et le marché français.",
    },
    certificationsIntro: {
      eyebrow: "Certifications",
      title: "Certifications verifiees en cloud, microservices, frontend et competences professionnelles.",
      intro:
        "Une selection de certifications qui complete mon experience production avec des formations IBM, Google Cloud, Meta et Honoris.",
      linkLabel: "Voir le certificat",
    },
    projects: {
      eyebrow: "Projets",
      title: "Projets personnels avec architecture orientee production.",
      intro:
        "Un espace dédié aux projets qui démontrent l'architecture, le debugging, l'observabilité et la capacité à construire un système de bout en bout.",
      featured: "Idée mise en avant",
      projectTitle: "Plateforme d'investigation d'incidents et de logs",
      description:
        "Un système distribué pour ingérer des logs, traiter les événements via Kafka, stocker les incidents et aider les développeurs à investiguer les problèmes de production grâce à une analyse assistée par IA.",
      liveDemoLabel: "Ouvrir la demo",
      liveDemoUrl: "https://incident-platform-ai.vercel.app/",
      repoLabel: "Voir le depot GitHub",
      repoUrl: "https://github.com/Mednj/incident-platform-AI",
      status: "MVP implemente et executable en local",
      stack: [
        "Java 17",
        "Spring Boot",
        "Kafka",
        "Avro",
        "Schema Registry",
        "PostgreSQL",
        "Angular",
        "Docker",
        "Kubernetes",
      ],
      metrics: [
        ["6", "services Spring Boot"],
        ["6", "contrats Kafka Avro"],
        ["4", "surfaces de demo"],
      ],
      highlights: [
        "Microservices evenementiels avec topics Kafka pour ingestion, normalisation, creation d'incidents et evenements d'analyse.",
        "Confluent Schema Registry et classes Java generees depuis Avro pour fiabiliser les contrats producteurs/consommateurs.",
        "Groupement deterministe des incidents avec empreinte basee sur service, environnement, severite, exception, stack hash et message.",
        "Persistance PostgreSQL avec workflow de statut, commentaires, assignations, timeline et historique d'analyses.",
        "Stack de demonstration Docker Compose et manifests Kubernetes pour la preparation au deploiement.",
      ],
      note:
        "En local, l'analyse utilise un provider deterministe pour la demo, avec une architecture prevue pour brancher un vrai LLM externe.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Recherche alternance backend ou cloud à partir de septembre 2026.",
      paragraph:
        "Basé à Villeurbanne, je recherche une alternance backend ou cloud en France dans le cadre du M2 MIAGE à l'Université Claude Bernard Lyon 1 - RNCP39490. Je souhaite contribuer à des systèmes distribués et des plateformes de production, au sein d'équipes qui exploitent aussi l'IA générative pour accélérer le développement logiciel. Disponible à partir de septembre 2026 : 2 semaines entreprise / 2 semaines formation de septembre à février, 3 semaines entreprise / 1 semaine formation de mars à juin, puis temps plein en entreprise en juillet-août.",
      emailButton: "M'écrire",
      cvButton: "Télécharger le CV",
      labels: { email: "Email", linkedin: "LinkedIn", phoneFr: "Téléphone", location: "Localisation" },
    },
    footer: "Mohamed NAJA - Ingénieur Logiciel Backend & Cloud | Développement assisté par IA.",
  },
};

export const skills = [
  {
    group: "Backend",
    items: ["Java 17", "Spring Boot", "Spring Cloud Stream", "REST", "gRPC", "Protobuf", "Liquibase"],
  },
  {
    group: "Streaming & Data",
    items: ["Kafka", "Avro", "PostgreSQL", "Oracle", "SQL"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "OpenShift", "Helm", "Jenkins", "Git", "Bitbucket", "AWS"],
  },
  {
    group: "Quality & Practices",
    items: [
      "JUnit",
      "Non-regression testing",
      "SonarQube",
      "Performance analysis",
      "Observability",
      "Technical documentation",
      "Scrum",
      "Jira",
    ],
  },
  {
    group: "Frontend",
    items: ["Angular", "TypeScript"],
  },
];

export const education = {
  en: [
    {
      title: "M2 MIAGE",
      school: "Universite Claude Bernard Lyon 1",
      period: "Admitted, 2026-2027",
    },
    {
      title: "Engineering Degree in Computer Science and Networks",
      school: "EMSI",
      period: "2020-2024",
    },
    {
      title: "CPGE Maths Physique",
      school: "Marrakech Prepa",
      period: "2017-2020",
    },
  ],
  fr: [
    {
      title: "M2 MIAGE",
      school: "Université Claude Bernard Lyon 1",
      period: "Admis, 2026-2027 - RNCP39490",
    },
    {
      title: "Diplôme d'ingénieur en informatique et réseaux",
      school: "EMSI",
      period: "2020-2024",
    },
    {
      title: "CPGE Maths Physique",
      school: "Marrakech Prépa",
      period: "2017-2020",
    },
  ],
};

export const certifications = [
  {
    title: "DevOps, Cloud, and Agile Foundations",
    issuer: "IBM via Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/EJ4SSDQ52BAE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    tags: ["DevOps", "Cloud", "Agile"],
  },
  {
    title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud via Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/XUUXL4A4S5XV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    tags: ["Java", "Spring Boot", "Spring Cloud"],
  },
  {
    title: "Advanced React",
    issuer: "Meta via Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/PHHUKLQKNG8Z",
    tags: ["React", "Frontend", "Components"],
  },
  {
    title: "Entrepreneurial and Social Skills",
    issuer: "Honoris",
    url: "https://certificate.bcdiploma.com/check/82148F819432E0891D68CD0DE933F421DE0D848E41CC22143CC38B94992278D2RStkNUtKbk1oVVJtSDB0SGNYNm9TSmVnWkRCeWlTQjNPcnpkRG5ubk1aUUhaYXBX",
    tags: ["Entrepreneurship", "Communication", "Leadership"],
  },
];
