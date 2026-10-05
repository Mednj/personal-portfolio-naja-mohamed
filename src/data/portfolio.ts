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
      "Software engineer focused on cloud and distributed systems, with production experience in international banking, Java, Spring Boot and Kafka. Available for freelance work.",
    hero: {
      badge: "Available for freelance work · France",
      eyebrow: "Software Engineer",
      title: "Software Engineer · Cloud & Distributed Systems",
      tagline:
        "I develop Java/Spring Boot services, Kafka integrations and reliable transaction systems, with hands-on production support for international banking projects.",
      ctas: {
        experience: "View Experience",
        cv: "Download CV",
        contact: "Contact Me",
      },
      stats: [
        ["2", "Years experience"],
        ["4", "Banking assignments"],
        ["Java", "Kafka · Cloud"],
      ],
    },
    about: {
      eyebrow: "About",
      title: "Software engineering grounded in production experience.",
      paragraphs: ["At HPS, I contributed to critical payment systems for international banking clients: Java/Spring Boot services, Kafka pipelines, API integrations and production incident analysis.", "I am currently enrolled in M2 MIAGE at Université Claude Bernard Lyon 1 (2026–2027). Alongside my professional experience, I build self-hosted applications and prepare for AWS Solutions Architect – Associate.", "I use AI tools for development and investigation, with code review, testing and validation."],
      highlights: [["Focus", "Cloud & distributed software systems"], ["Domain", "Payments, fintech & banking"], ["Collaboration", "Freelance engineering engagements"]],
      strengthsTitle: "What I bring",
      strengths: ["Java/Spring Boot implementation and Kafka integrations.", "Production incident investigation, stabilization and release validation.", "Operational ownership of personal projects: deployment, monitoring and recovery."],
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
        bullets: ["Problem: publish Visa and PowerCARD transactions to a real-time bank monitoring system.", "My contribution: implemented Spring Cloud Stream producers with SASL/Kerberos and Python scripts for technical automation and data analysis.", "Result: transaction flows delivered to monitoring consumers, with incident investigation and stabilization support."],
        tags: ["Kafka", "Spring Cloud Stream", "Kerberos", "PowerCARD", "Visa"],
      },
      {
        client: "Thales / ABSA",
        logo: "thales",
        title: "PowerCARD V4 Migration",
        period: "Core banking modernization and certification",
        bullets: ["Problem: modernize legacy Oracle PL/SQL and C components during the PowerCARD V4 migration.", "My contribution: contributed Java 17/Spring Boot microservices, REST and gRPC/Protobuf integrations, Kafka flows and Kubernetes/Helm delivery.", "Result: migrated components validated through functional and non-regression testing and Visa/Mastercard certification campaigns."],
        tags: ["Java 17", "Spring Boot", "gRPC", "Kubernetes", "Helm"],
      },
      {
        client: "Erste Bank Hungary / Austria",
        logo: "erste",
        title: "Event-Driven PowerCARD Integration",
        period: "CDC, Kafka, testing, and production readiness",
        bullets: ["Problem: make PowerCARD change events available to downstream banking consumers.", "My contribution: integrated CDC events with Kafka/Avro and connected business consumers.", "Result: event-based integrations prepared for production through functional and non-regression validation."],
        tags: ["CDC", "Kafka", "Avro", "Oracle", "Testing"],
      },
      {
        client: "FirstRand Bank South Africa",
        logo: "fnb",
        title: "FLEET Fuel Card System",
        period: "On-site production support and transaction control",
        bullets: ["Problem: enforce fuel-card pre-authorization rules and modernize Java applications.", "My contribution: implemented checks for spending limits, fuel types and vehicle parameters; contributed to Java 8–17 migration on JBoss.", "Result: transaction controls implemented, with on-site production support in South Africa."],
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
      title: "Cloud and software certifications, with ongoing AWS learning.",
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
      title: "Discuss a software engineering role or freelance project.",
      paragraph:
        "Based in Villeurbanne, France, I am available for freelance software engineering work. Contact me to discuss Java services, Kafka integrations, cloud-native delivery or production reliability, as well as software engineering opportunities.",
      emailButton: "Email Me",
      cvButton: "Download CV",
      labels: { email: "Email", linkedin: "LinkedIn", phoneFr: "Phone", location: "Location" },
    },
    footer: "Mohamed NAJA · Software Engineer · Cloud & Distributed Systems",
  },
  fr: {
    metaDescription:
      "Ingénieur logiciel cloud et systèmes distribués, avec une expérience production en banque internationale, Java, Spring Boot et Kafka. Disponible en freelance.",
    hero: {
      badge: "Disponible pour des missions freelance · France",
      eyebrow: "Ingénieur Logiciel",
      title: "Ingénieur Logiciel · Cloud & Systèmes Distribués",
      tagline:
        "Je développe des services Java/Spring Boot, des intégrations Kafka et des systèmes transactionnels fiables, avec une expérience concrète du support production sur des projets bancaires internationaux.",
      ctas: {
        experience: "Voir l'expérience",
        cv: "Télécharger le CV",
        contact: "Me contacter",
      },
      stats: [
        ["2", "Ans d’expérience"],
        ["4", "Missions bancaires"],
        ["Java", "Kafka · Cloud"],
      ],
    },
    about: {
      eyebrow: "Profil",
      title: "Une pratique du logiciel ancrée dans la production.",
      paragraphs: ["Chez HPS, j’ai contribué à des systèmes de paiement critiques pour des clients bancaires internationaux : services Java/Spring Boot, pipelines Kafka, intégrations API et analyse d’incidents de production.", "Je suis actuellement en M2 MIAGE à l’Université Claude Bernard Lyon 1 (2026–2027). En parallèle de mon expérience professionnelle, je développe des applications auto-hébergées et prépare AWS Solutions Architect – Associate.", "J’utilise des outils d’IA pour le développement et l’investigation, avec revue de code, tests et validation."],
      highlights: [["Spécialisation", "Logiciel cloud et systèmes distribués"], ["Domaine", "Paiements, fintech et banque"], ["Collaboration", "Missions d’ingénierie en freelance"]],
      strengthsTitle: "Ce que j’apporte",
      strengths: ["Développement Java/Spring Boot et intégrations Kafka.", "Investigation d’incidents, stabilisation et validation des mises en production.", "Exploitation des projets personnels : déploiement, monitoring et restauration."],
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
        bullets: ["Contexte : publier les transactions Visa et PowerCARD vers le monitoring bancaire en temps réel.", "Ma contribution : producteurs Spring Cloud Stream sécurisés par SASL/Kerberos et scripts Python pour l’automatisation technique et l’analyse de données.", "Résultat : flux transactionnels livrés aux consommateurs de monitoring, avec investigation et stabilisation des incidents."],
        tags: ["Kafka", "Spring Cloud Stream", "Kerberos", "PowerCARD", "Visa"],
      },
      {
        client: "Thales / ABSA",
        logo: "thales",
        title: "Migration PowerCARD V4",
        period: "Modernisation core banking et certification",
        bullets: ["Contexte : moderniser des composants Oracle PL/SQL et C dans la migration PowerCARD V4.", "Ma contribution : microservices Java 17/Spring Boot, intégrations REST et gRPC/Protobuf, flux Kafka et livraison Kubernetes/Helm.", "Résultat : composants migrés validés par la recette, les tests de non-régression et les campagnes de certification Visa/Mastercard."],
        tags: ["Java 17", "Spring Boot", "gRPC", "Kubernetes", "Helm"],
      },
      {
        client: "Erste Bank Hungary / Austria",
        logo: "erste",
        title: "Intégration PowerCARD événementielle",
        period: "CDC, Kafka, tests et préparation production",
        bullets: ["Contexte : fournir les événements de changement PowerCARD aux consommateurs bancaires.", "Ma contribution : intégration CDC vers Kafka/Avro et raccordement des consommateurs métier.", "Résultat : intégrations événementielles préparées pour la production par les validations fonctionnelles et de non-régression."],
        tags: ["CDC", "Kafka", "Avro", "Oracle", "Tests"],
      },
      {
        client: "FirstRand Bank South Africa",
        logo: "fnb",
        title: "Système FLEET de cartes carburant",
        period: "Support production sur site et contrôle transactionnel",
        bullets: ["Contexte : contrôler les pré-autorisations des cartes carburant et moderniser les applications Java.", "Ma contribution : règles de plafonds, carburants et paramètres véhicule ; participation à la migration Java 8–17 sur JBoss.", "Résultat : contrôles transactionnels implémentés et support production sur site en Afrique du Sud."],
        tags: ["Java", "Moteur de règles", "Paiements", "Support production", "Migration"],
      },
    ],
    skillsIntro: {
      eyebrow: "Compétences",
      title: "Compétences backend et cloud pour des systèmes distribués critiques en production.",
    },
    educationIntro: {
      eyebrow: "Formation",
      title: "Formation en informatique et systèmes d’information.",
    },
    certificationsIntro: {
      eyebrow: "Certifications",
      title: "Certifications et parcours de formation cloud et logiciel.",
      intro:
        "Une selection de certifications qui complete mon experience production avec des formations IBM, Google Cloud, Meta et Honoris.",
      linkLabel: "Voir le certificat",
    },
    projects: {
      eyebrow: "Projets",
      title: "Projets personnels : architecture et exploitation.",
      intro:
        "Un espace dédié aux projets qui démontrent l'architecture, le debugging, l'observabilité et la capacité à construire un système de bout en bout.",
      featured: "Projet réalisé",
      projectTitle: "Plateforme d'investigation d'incidents et de logs",
      description:
        "Un système distribué pour ingérer des logs, traiter les événements via Kafka, stocker les incidents et aider les développeurs à investiguer les problèmes de production grâce à une analyse assistée par IA.",
      liveDemoLabel: "Ouvrir la demo",
      liveDemoUrl: "https://incident-platform-ai.vercel.app/",
      repoLabel: "Voir le depot GitHub",
      repoUrl: "https://github.com/Mednj/incident-platform-AI",
      status: "MVP réalisé · Démo disponible",
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
      title: "Échangeons sur un poste ou une mission freelance.",
      paragraph:
        "Basé à Villeurbanne, je suis disponible pour des missions freelance en ingénierie logicielle. Contactez-moi pour des services Java, des intégrations Kafka, des déploiements cloud-native ou la fiabilité en production, ainsi que pour des opportunités de poste en ingénierie logicielle.",
      emailButton: "M'écrire",
      cvButton: "Télécharger le CV",
      labels: { email: "Email", linkedin: "LinkedIn", phoneFr: "Téléphone", location: "Localisation" },
    },
    footer: "Mohamed NAJA · Ingénieur Logiciel · Cloud & Systèmes Distribués",
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
    group: "Cloud & Delivery",
    items: ["Docker", "Kubernetes", "OpenShift", "Helm", "Jenkins", "CI/CD", "Git", "Bitbucket"],
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
    group: "Automation & Operations",
    items: ["Python", "FastAPI", "Scheduled workers", "REST integrations", "Health checks", "Telegram alerts"],
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
      school: "Université Claude Bernard Lyon 1",
      period: "Currently enrolled · 2026–2027",
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
      period: "En cours · 2026–2027 · RNCP39490",
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


export const awsLearning = {
  en: {
    title: "AWS Solutions Architect – Associate (SAA)",
    status: "Certification preparation in progress",
    description: "Building a structured foundation in AWS architecture: identity and access, networking, compute, storage, availability, and cost-aware design. This learning complements hands-on delivery with Docker, Kubernetes, Helm, and CI/CD.",
    tags: ["AWS architecture", "Security", "Networking", "Resilience", "Cost awareness"],
  },
  fr: {
    title: "AWS Solutions Architect – Associate (SAA)",
    status: "Préparation à la certification en cours",
    description: "Approfondissement des fondamentaux de l'architecture AWS : identités et accès, réseau, calcul, stockage, disponibilité et maîtrise des coûts. Ce parcours complète la pratique de Docker, Kubernetes, Helm et des pipelines CI/CD.",
    tags: ["Architecture AWS", "Sécurité", "Réseau", "Résilience", "Coûts"],
  },
};

export const dealWatcher = {
  en: {
    eyebrow: "Automation & self-hosting",
    title: "PS5 Deals Watcher",
    description: "A self-hosted service that watches physical PS5 game offers against personal budgets and sends relevant matches to Telegram. Built around scheduled workers, persistent state, and an operational dashboard.",
    highlights: [
      "Per-game budgets, source selection, schedules, and delivery or pickup preferences.",
      "FastAPI dashboard and SQLite persistence with private watches for each account.",
      "Persistent notification outbox with deduplication and delivery retries.",
      "Independent monitoring for service health, worker heartbeats, and source failures.",
      "Docker Compose deployment and GitHub Actions CI/CD on a self-hosted runner.",
    ],
    note: "Marketplace coverage varies by source; browser-based checks remain experimental. The repository documents these limits and the backup and recovery procedures.",
    repoLabel: "Explore the source",
    flow: ["Scheduled checks", "Budget matching", "Persistent outbox", "Telegram alerts"],
  },
  fr: {
    eyebrow: "Automatisation & auto-hébergement",
    title: "PS5 Deals Watcher",
    description: "Un service auto-hébergé qui surveille les offres de jeux PS5 physiques selon des budgets personnalisés et envoie les résultats pertinents sur Telegram. Une application conçue autour de workers planifiés, d'un état persistant et d'un tableau de bord opérationnel.",
    highlights: [
      "Budgets par jeu, choix des sources, horaires et préférences de livraison ou retrait.",
      "Tableau de bord FastAPI et persistance SQLite avec des suivis privés par compte.",
      "File de notifications persistante avec déduplication et nouvelles tentatives d'envoi.",
      "Monitoring indépendant : santé des services, activité du worker et erreurs des sources.",
      "Déploiement Docker Compose et CI/CD GitHub Actions sur un runner auto-hébergé.",
    ],
    note: "La couverture dépend des sources ; les vérifications par navigateur restent expérimentales. Le dépôt documente ces limites ainsi que les procédures de sauvegarde et de restauration.",
    repoLabel: "Explorer le code source",
    flow: ["Vérifications planifiées", "Filtrage par budget", "File persistante", "Alertes Telegram"],
  },
};

export const cloudPractice = {
  en: [
    {title: "Professional delivery", description: "Kubernetes and Helm delivery on banking assignments at HPS, with functional validation and production support."},
    {title: "Personal projects", description: "Docker Compose and GitHub Actions delivery on a self-hosted runner for PS5 Deals Watcher, with health checks and backup procedures."},
    {title: "AWS learning", description: "Solutions Architect – Associate preparation in progress. Focus: access control, networking, availability and cost-aware architecture."},
  ],
  fr: [
    {title: "Pratique professionnelle", description: "Livraison Kubernetes et Helm sur des missions bancaires chez HPS, avec validation fonctionnelle et support production."},
    {title: "Projets personnels", description: "Docker Compose et GitHub Actions sur un runner auto-hébergé pour PS5 Deals Watcher, avec health checks et procédures de sauvegarde."},
    {title: "Apprentissage AWS", description: "Préparation Solutions Architect – Associate en cours : contrôle des accès, réseau, disponibilité et architecture attentive aux coûts."},
  ],
};
