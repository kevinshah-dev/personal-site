import type { SVGProps } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { SectionHeading } from "../components/shared";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.72 5.39-5.3 5.68.42.36.79 1.06.79 2.13v3.27c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.33V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.38-1.86c3.61 0 4.28 2.38 4.28 5.47v6.29ZM5.31 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.53V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

const experience = [
  {
    role: "AI Forward Deployed Engineer",
    company: "IBM",
    period: "Jul 2025 — Present",
    focus: "Enterprise AI · Automation · Client delivery",
    summary:
      "I partner with financial-services teams to move complex AI and automation work from an ambitious idea to a dependable production system.",
    highlights: [
      "Led the implementation of IBM Quantum Safe Explorer at Mastercard.",
      "Owned production delivery of an AI-native internal talent platform built around IBM Bob and SAP SuccessFactors workflows.",
      "Created deployment documentation for State Farm that supported a multi-million-dollar enterprise agreement.",
    ],
    current: true,
  },
  {
    role: "Associate Developer",
    company: "Prometheus Group",
    period: "Jan 2024 — Jun 2025",
    focus: "Frontend systems · Client-facing · ERP",
    summary:
      "Built the web-based Planning & Scheduling module of an enterprise asset management platform used by more than 50,000 people across manufacturing, energy, and utilities.",
  },
  {
    role: "Web Developer Intern",
    company: "Prometheus Group",
    period: "Fall / Winter 2023",
    focus: "Product engineering · Frontend · ERP",
    summary:
      "Contributed production features to the Prometheus Platform and learned to build within a large, client-facing product system.",
  },
  {
    role: "Software Engineer Intern",
    company: "Time’s Arrow",
    period: "Summer 2023",
    focus: "Full stack · Education technology",
    summary:
      "Worked with a three-person engineering team to build and improve the Time’s Arrow learning platform.",
  },
];

const projects = [
  {
    name: "LeetBattle",
    type: "Real-time product",
    summary:
      "A two-player competitive coding platform where friends enter a private room, receive the same challenge, and race to pass a hidden test suite.",
    detail: "Competitive coding · Multiplayer · Real-time systems",
    href: "https://leetbattle.cenough.games/",
  },
  {
    name: "CloseEnough Games",
    type: "Game platform",
    summary:
      "A unified home for 11 daily and competitive browser games spanning history, literature, sports, music, news, trivia, and coding.",
    detail: "React · TypeScript · Platform design",
    href: "https://cenough.games",
  },
  {
    name: "Cognate",
    type: "Desktop AI tool",
    summary:
      "A desktop app for sending one prompt to OpenAI, Anthropic, Gemini, and DeepSeek, then comparing every response side by side.",
    detail: "Electron · React · Provider APIs",
    href: "https://github.com/kevinshah-dev/cognate",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kevinshah-dev",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ks539/",
    icon: LinkedInIcon,
  },
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <motion.div
            className="hero-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" aria-hidden="true" />
            AI Forward Deployed Engineer at IBM
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            I build the bridge between ambitious AI and working software.
          </motion.h1>

          <motion.div
            className="hero-foot"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-intro">
              <p>
                I’m Kevin Shah, a software engineer working across enterprise AI,
                automation, and product systems. Alongside client work, I build
                games and tools of my own.
              </p>
              <div className="hero-links">
                <a className="button button-primary" href="#work">
                  Selected work <ArrowDown aria-hidden="true" />
                </a>
                <a className="text-link" href="mailto:shahkevinh@gmail.com">
                  Get in touch <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="now-note">
              <span>Now</span>
              <strong>Building dependable AI systems with enterprise teams.</strong>
              <small>IBM · July 2025 to present</small>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <SectionHeading>Experience</SectionHeading>

          <div className="career-line">
            {experience.map((item) => (
              <article
                className={`career-item${item.current ? " is-current" : ""}`}
                key={`${item.company}-${item.role}`}
              >
                <time className="career-time">{item.period}</time>
                <div className="career-marker" aria-hidden="true">
                  <span />
                </div>
                <div className="career-body">
                  <div className="career-title-row">
                    <div>
                      <p className="career-company">{item.company}</p>
                      <h3>{item.role}</h3>
                    </div>
                    {item.current && <span className="current-label">Current</span>}
                  </div>
                  <p className="career-focus">{item.focus}</p>
                  <p className="career-summary">{item.summary}</p>
                  {item.highlights && (
                    <ul className="career-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <SectionHeading>Selected work</SectionHeading>

          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
                aria-label={`${project.name}, open project`}
              >
                <div className="project-name">
                  <p>{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="project-summary">{project.summary}</p>
                <p className="project-detail">{project.detail}</p>
                <span className="project-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>

          <a
            className="github-link"
            href="https://github.com/kevinshah-dev"
            target="_blank"
            rel="noreferrer"
          >
            More work on GitHub <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div>
            <p className="contact-kicker">Let’s connect</p>
            <h2>Have a difficult product problem worth making simpler?</h2>
          </div>

          <div className="contact-actions">
            <p>
              I’m always interested in thoughtful engineering teams, ambitious
              systems, and people building useful things.
            </p>
            <a className="email-link" href="mailto:shahkevinh@gmail.com">
              <span>
                <Mail aria-hidden="true" />
                shahkevinh@gmail.com
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="social-links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon aria-hidden="true" /> {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="container footer-inner">
            <span>Kevin Shah</span>
            <span>AI &amp; product engineering</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
