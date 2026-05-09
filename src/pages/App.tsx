import {
  ArrowDown,
  Award,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import incidentDocker from "../assets/incident-platform-docker.svg";
import incidentKafka from "../assets/incident-platform-kafka.svg";
import incidentRegistry from "../assets/incident-platform-registry.svg";
import incidentUi from "../assets/incident-platform-ui.svg";
import portrait from "../assets/mohamed-naja-portrait.jpg";
import { Background } from "../components/Background";
import { Badge } from "../components/Badge";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";
import { certifications, education, type Language, portfolio, skills } from "../data/portfolio";

const cvHref = "/Mohamed-NAJA-CV-Alternance-M2-2026.pdf";
const incidentScreens = [
  { src: incidentKafka, label: "Kafka topics" },
  { src: incidentRegistry, label: "Schema Registry" },
  { src: incidentDocker, label: "Docker stack" },
];

type ContactItem = {
  label: string;
  value: string;
  href: string | null;
  Icon: LucideIcon;
};

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" || saved === "fr" ? saved : "fr";
  });
  const content = portfolio[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "fr" ? "Mohamed NAJA | Ingénieur Logiciel" : "Mohamed NAJA | Software Engineer";
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.metaDescription);
    localStorage.setItem("language", language);
  }, [content.metaDescription, language]);

  return (
    <>
      <Background />
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main id="home">
        <Hero content={content.hero} />
        <About content={content.about} />
        <Experience content={content.experienceIntro} items={content.experience} />
        <Skills content={content.skillsIntro} />
        <Education content={content.educationIntro} language={language} />
        <Certifications content={content.certificationsIntro} />
        <Projects content={content.projects} />
        <Contact content={content.contact} />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        <p>{content.footer}</p>
      </footer>
    </>
  );
}

function Hero({ content }: { content: (typeof portfolio)[Language]["hero"] }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-sm font-medium text-slate-800 dark:border-mint/30 dark:bg-mint/10 dark:text-slate-100">
            <RadioTower size={16} />
            {content.badge}
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric dark:text-mint">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Mohamed NAJA
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-slate-700 dark:text-slate-200">
            {content.title}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {content.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              Lyon, France / Casablanca, Morocco
            </span>
            <a className="inline-flex items-center gap-2 transition hover:text-electric dark:hover:text-mint" href="mailto:contact@mohamednaja.com">
              <Mail size={16} />
              contact@mohamednaja.com
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-electric dark:hover:text-mint" href="https://linkedin.com/in/mohamed-naja" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              linkedin.com/in/mohamed-naja
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric dark:bg-white dark:text-ink dark:hover:bg-mint" href="#experience">
              {content.ctas.experience} <ArrowDown size={16} />
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-electric hover:text-electric dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-mint dark:hover:text-mint" href={cvHref} download>
              {content.ctas.cv} <Download size={16} />
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-slate-700 transition hover:text-electric dark:text-slate-200 dark:hover:text-mint" href="#contact">
              {content.ctas.contact} <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:160ms]">
          <div className="absolute -inset-5 rounded-[2rem] border border-electric/20 bg-electric/10 blur-2xl dark:border-mint/20 dark:bg-mint/10" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-white/5">
            <img src={portrait} alt="Mohamed NAJA professional portrait" className="aspect-[4/5] w-full rounded-[1rem] object-cover" />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {content.stats.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">{value}</p>
                  <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ content }: { content: (typeof portfolio)[Language]["about"] }) {
  return (
    <Section id="about" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-2xl border border-electric/20 bg-gradient-to-br from-white via-sky-50/80 to-emerald-50/70 p-7 shadow-sm backdrop-blur dark:border-electric/20 dark:from-white/[0.08] dark:via-sky-500/[0.07] dark:to-emerald-400/[0.06]">
          {content.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`${index > 0 ? "mt-5 " : ""}text-lg leading-9 text-slate-700 dark:text-slate-300`}>
              {paragraph}
            </p>
          ))}
          <div className="mt-8 rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 dark:border-mint/20 dark:bg-mint/[0.07]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric dark:text-mint">
              {content.strengthsTitle}
            </p>
            <div className="mt-4 grid gap-3">
              {content.strengths.map((strength) => (
                <div key={strength} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric dark:bg-mint" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {content.highlights.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/80 p-5 shadow-sm dark:border-white/10 dark:from-white/[0.06] dark:to-electric/[0.07]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric dark:text-mint">{label}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-200">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience({
  content,
  items,
}: {
  content: (typeof portfolio)[Language]["experienceIntro"];
  items: (typeof portfolio)[Language]["experience"];
}) {
  return (
    <Section
      id="experience"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
    >
      <div className="relative grid gap-5">
        {items.map((item) => (
          <article key={item.client} className="group grid gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-sky-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-electric/50 hover:shadow-glow dark:border-white/10 dark:from-white/[0.07] dark:via-white/[0.04] dark:to-electric/[0.08] dark:hover:border-mint/40 md:grid-cols-[0.42fr_1fr]">
            <div>
              <div className="mb-4 flex h-16 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm dark:border-white/10 dark:bg-white">
                <ClientLogo logo={item.logo} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric dark:text-mint">{item.client}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
            </div>
            <div>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-electric dark:bg-mint" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills({ content }: { content: (typeof portfolio)[Language]["skillsIntro"] }) {
  return (
    <Section id="skills" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.group} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-emerald-50/70 p-6 shadow-sm dark:border-white/10 dark:from-white/[0.06] dark:to-mint/[0.07]">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education({
  content,
  language,
}: {
  content: (typeof portfolio)[Language]["educationIntro"];
  language: Language;
}) {
  return (
    <Section id="education" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {education[language].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/80 p-6 shadow-sm dark:border-white/10 dark:from-white/[0.06] dark:to-electric/[0.07]">
            <GraduationCap className="text-electric dark:text-mint" size={24} />
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{item.school}</p>
            <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">{item.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications({ content }: { content: (typeof portfolio)[Language]["certificationsIntro"] }) {
  return (
    <Section id="certifications" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <a
            key={certification.title}
            href={certification.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-sky-50/80 to-emerald-50/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-electric/50 hover:shadow-glow dark:border-white/10 dark:from-white/[0.06] dark:via-electric/[0.06] dark:to-mint/[0.07] dark:hover:border-mint/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-electric/20 bg-electric/10 text-electric dark:border-mint/20 dark:bg-mint/10 dark:text-mint">
                <Award size={22} />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition group-hover:border-electric group-hover:text-electric dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:border-mint dark:group-hover:text-mint">
                {content.linkLabel}
                <ExternalLink size={13} />
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-7 text-slate-950 dark:text-white">
              {certification.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{certification.issuer}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {certification.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Projects({ content }: { content: (typeof portfolio)[Language]["projects"] }) {
  return (
    <Section
      id="projects"
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
    >
      <article className="overflow-hidden rounded-[1.5rem] border border-electric/20 bg-white shadow-glow dark:border-mint/20 dark:bg-white/[0.06]">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-ink p-7 text-white dark:from-ink-2 dark:to-slate-950">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">{content.featured}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{content.projectTitle}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-200">{content.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mint"
                  href={content.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.liveDemoLabel}
                  <ExternalLink size={14} />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint"
                  href={content.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                  <ExternalLink size={14} />
                </a>
                <span className="inline-flex items-center rounded-full border border-mint/30 bg-mint/10 px-4 py-3 text-sm font-semibold text-mint">
                  {content.status}
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {content.metrics.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-3xl font-semibold">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-sky-50/80 to-emerald-50/70 p-5 dark:from-white/[0.08] dark:via-electric/[0.08] dark:to-mint/[0.07] sm:p-6">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10">
              <img src={incidentUi} alt={`${content.projectTitle} - investigation dashboard`} className="w-full object-cover" />
            </figure>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {incidentScreens.map((screen) => (
                <figure key={screen.label} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10">
                  <img src={screen.src} alt={`${content.projectTitle} - ${screen.label}`} className="aspect-[16/9] w-full object-cover" />
                  <figcaption className="border-t border-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-white/10 dark:text-slate-400">
                    {screen.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 border-t border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric dark:text-mint">Engineering depth</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {content.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric dark:bg-mint" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-electric dark:text-mint">Stack</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {content.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <p>{content.note}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a className="inline-flex items-center gap-2 font-semibold text-electric transition hover:text-slate-950 dark:text-mint dark:hover:text-white" href={content.liveDemoUrl} target="_blank" rel="noreferrer">
                  {content.liveDemoLabel}
                  <ExternalLink size={15} />
                </a>
                <a className="inline-flex items-center gap-2 font-semibold text-electric transition hover:text-slate-950 dark:text-mint dark:hover:text-white" href={content.repoUrl} target="_blank" rel="noreferrer">
                  {content.repoLabel}
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}

function Contact({ content }: { content: (typeof portfolio)[Language]["contact"] }) {
  const contactItems: ContactItem[] = [
    { label: content.labels.email, value: "contact@mohamednaja.com", href: "mailto:contact@mohamednaja.com", Icon: Mail },
    { label: content.labels.linkedin, value: "linkedin.com/in/mohamed-naja", href: "https://linkedin.com/in/mohamed-naja", Icon: Linkedin },
    { label: content.labels.phoneFr, value: "+33 6 44 66 74 92", href: "tel:+33644667492", Icon: Phone },
    { label: content.labels.phoneMa, value: "+212 653 226 584", href: "tel:+212653226584", Icon: Phone },
    { label: content.labels.location, value: "Lyon, France / Casablanca, Morocco", href: null, Icon: MapPin },
  ];

  return (
    <Section id="contact" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-7 text-white shadow-glow dark:border-white/10 dark:bg-white">
          <BriefcaseBusiness className="text-mint dark:text-electric" size={28} />
          <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-100 dark:text-slate-800">
            {content.paragraph}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mint dark:bg-slate-950 dark:text-white dark:hover:bg-electric" href="mailto:contact@mohamednaja.com">
              {content.emailButton} <Mail size={16} />
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint dark:border-slate-300 dark:text-slate-900 dark:hover:border-electric dark:hover:text-electric" href={cvHref} download>
              {content.cvButton} <Download size={16} />
            </a>
          </div>
        </div>
        <div className="grid gap-4">
          {contactItems.map(({ label, value, href, Icon }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/80 p-5 shadow-sm dark:border-white/10 dark:from-white/[0.06] dark:to-electric/[0.07]">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Icon size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.16em]">{label}</p>
              </div>
              {href ? (
                <a className="mt-3 inline-flex items-center gap-2 break-all text-lg font-semibold text-slate-950 transition hover:text-electric dark:text-white dark:hover:text-mint" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {value} <ExternalLink size={16} />
                </a>
              ) : (
                <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ClientLogo({ logo }: { logo: string }) {
  if (logo === "hsbc") {
    return (
      <svg viewBox="0 0 220 70" className="h-10 w-full" role="img" aria-label="HSBC logo">
        <path d="M78 12h44l-22 23 22 23H78l22-23z" fill="#e60012" />
        <path d="M78 12l22 23-22 23-22-23zM122 12l22 23-22 23-22-23z" fill="#e60012" />
        <path d="M78 12l22 23H56zM122 58l-22-23h44z" fill="#fff" />
        <text x="12" y="45" fill="#111827" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="700">
          HSBC
        </text>
      </svg>
    );
  }

  if (logo === "erste") {
    return (
      <svg viewBox="0 0 240 70" className="h-10 w-full" role="img" aria-label="Erste Bank logo">
        <text x="0" y="49" fill="#00599f" fontFamily="Arial, Helvetica, sans-serif" fontSize="43" fontWeight="800">
          ERSTE
        </text>
        <circle cx="202" cy="17" r="9" fill="#e30613" />
        <path d="M177 28h50a6 6 0 0 1 6 6v20h-62V34a6 6 0 0 1 6-6z" fill="#e30613" />
        <path d="M184 43h42" stroke="#fff" strokeWidth="5" />
      </svg>
    );
  }

  if (logo === "fnb") {
    return (
      <svg viewBox="0 0 220 70" className="h-10 w-full" role="img" aria-label="FNB logo">
        <circle cx="38" cy="35" r="30" fill="#00a6a6" />
        <circle cx="38" cy="35" r="22" fill="#ffb43b" stroke="#fff" strokeWidth="5" />
        <path d="M23 28c10-3 21-3 31 0M24 35c9-2 19-2 29 0M29 42h18M33 27l8 27" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
        <text x="78" y="48" fill="#00a6a6" fontFamily="Arial, Helvetica, sans-serif" fontSize="37" fontWeight="800">
          FNB
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 70" className="h-10 w-full" role="img" aria-label="Thales logo">
      <text x="0" y="46" fill="#28236f" fontFamily="Arial, Helvetica, sans-serif" fontSize="39" fontWeight="800" letterSpacing="7">
        THALES
      </text>
      <path d="M102 44l12-22 12 22z" fill="#4fc3d4" opacity="0.95" />
    </svg>
  );
}

export default App;
