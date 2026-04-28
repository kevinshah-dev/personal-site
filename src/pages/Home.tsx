import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  ExternalLink,
  Briefcase,
  FileText,
  ChevronRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SectionLabel,
  GridLines,
  LightGridLines,
  Panel,
  fadeUp,
} from "../components/shared";
import { posts } from "../data/posts";

const currentRole = {
  eyebrow: "CURRENT ROLE",
  title: "Platform Engineer",
  company: "IBM",
  period: "July 2025 — Present",
  summary:
    "Partnered with enterprise financial services clients to support the design and implementation of IBM’s Automation portfolio solutions",
  highlights: [
    "Led the implementation of IBM Quantum Safe Explorer at Mastercard",
    "Placeholder cross-functional collaboration or ownership detail",
    "Placeholder technical focus, customer focus, or leadership contribution",
  ],
};

const previousExperience = [
  {
    role: "Associate Developer",
    company: "Prometheus Group",
    period: "Jan 2024 — June 2025",
    summary:
      "Built the web-based Planning & Scheduling module of the Prometheus Platform, which is an EAM software used by over 50,000 people across manufacturing, energy, utilities, and other industries worldwide.",
    metrics: ["FRONTEND", "CLIENT-FACING", "ERP"],
  },
  {
    role: "Web Developer Intern",
    company: "Prometheus Group",
    period: "Fall/Winter 2023",
    summary:
      "Contributed to the development of new features for the Prometheus Platform.",
    metrics: ["FRONTEND", "CLIENT-FACING", "ERP"],
  },
  {
    role: "Software Engineer Intern",
    company: "Time's Arrow",
    period: "Summer 2023",
    summary:
      "Worked with a lean team of 3 engineers to develop the Time's Arrow website.",
    metrics: ["FULL-STACK", "ED-TECH"],
  },
];

const projects = [
  {
    name: "Cognate",
    category: "AI",
    summary:
      "Describe the project clearly: what it is, why it matters, what stack or architecture it uses, and what outcome it created.",
    tags: ["React", "TypeScript", "API Design"],
    href: "https://github.com/kevinshah-dev/cognate",
  },
  {
    name: "PolicyPeer",
    category: "FRONTEND",
    summary:
      "Use this card for an AI, infrastructure, workflow, or product project with a concise case-study style description.",
    tags: ["LLMs", "Agents", "Data Flows"],
    href: "https://policypeer.org",
  },
  {
    name: "Jeopardle",
    category: "FRONTEND",
    summary:
      "Add a third project that reinforces your technical depth, systems thinking, or product execution.",
    tags: ["Design Systems", "Full Stack", "Analytics"],
    href: "https://github.com/kevinshah-dev/jeopardle",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/kevinshah-dev",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ks539/",
    icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:shahkevinh@gmail.com", icon: Mail },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-black/10 bg-[#05070a] text-white">
        <GridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-white/10 py-14 md:py-24">
            <div className="grid grid-cols-12 gap-8">
              <motion.div
                {...fadeUp}
                className="col-span-12 flex flex-col justify-between md:col-span-7"
              >
                <div>
                  <div className="mb-8 inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
                    PERSONAL SITE
                  </div>
                  <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl lg:text-[5.4rem]">
                    Kevin Shah
                  </h1>
                  <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                    Building thoughtful systems, products, and technical work.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 border border-blue-500 bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
                  >
                    View Projects <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Get In Touch
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative border-b border-black/10">
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-black/10 pb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-black/55">
              <span>Experience</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 border border-black/10 bg-zinc-950 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-blue-700"
              >
                View Resume <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <motion.div {...fadeUp} className="col-span-12 md:col-span-5">
                <Panel className="h-full p-6 md:p-8">
                  <div className="flex items-center justify-between border-b border-black/10 pb-5">
                    <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                      {currentRole.eyebrow}
                    </div>
                    <Briefcase className="h-4 w-4 text-black/45" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] md:text-4xl">
                    {currentRole.title}
                  </h3>
                  <div className="mt-3 text-sm uppercase tracking-[0.18em] text-black/46">
                    {currentRole.company} / {currentRole.period}
                  </div>
                  <p className="mt-6 text-base leading-7 text-black/66">
                    {currentRole.summary}
                  </p>
                  <div className="mt-8 space-y-3 border-t border-black/10 pt-6">
                    {currentRole.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-black/72"
                      >
                        <span className="mt-2 h-1.5 w-1.5 bg-blue-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
                className="col-span-12 md:col-span-7"
              >
                <div className="border border-black/10 bg-[#f4f6f8]">
                  {previousExperience.map((item, index) => (
                    <div
                      key={`${item.role}-${item.company}`}
                      className={`grid grid-cols-12 gap-4 p-6 md:p-8 ${
                        index !== previousExperience.length - 1
                          ? "border-b border-black/10"
                          : ""
                      }`}
                    >
                      <div className="col-span-12 md:col-span-4">
                        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                          {item.period}
                        </div>
                        <h4 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-zinc-950">
                          {item.role}
                        </h4>
                        <div className="mt-2 text-sm text-black/55">
                          {item.company}
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-5">
                        <p className="text-sm leading-7 text-black/66">
                          {item.summary}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-3 md:text-right">
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {item.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="min-w-[5.75rem] shrink-0 whitespace-nowrap border border-black/10 px-2.5 py-1 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-black/58"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative border-b border-black/10 bg-[#edf1f4]"
      >
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Selected Projects</SectionLabel>

            <div className="mb-8 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-7">
                <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  What I'm Working On
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="flex md:justify-end">
                  <a
                    href="https://github.com/kevinshah-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 border border-black/10 bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto"
                  >
                    View GitHub <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  {...fadeUp}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="border border-black/10 bg-[#f4f6f8]"
                >
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 border-b border-black/10 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-8">
                      <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                        {project.category}
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                        {project.name}
                      </h3>
                      <a
                        href={project.href}
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition hover:text-blue-700"
                      >
                        View Project <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="col-span-12 border-b border-black/10 p-6 md:col-span-5 md:border-b-0 md:border-r md:p-8">
                      <p className="text-sm leading-7 text-black/68">
                        {project.summary}
                      </p>
                    </div>

                    <div className="col-span-12 p-6 md:col-span-3 md:p-8">
                      <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-black/45">
                        Stack / themes
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-black/10 bg-white/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-black/65"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="writing" className="relative border-b border-black/10">
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Writing / Blog</SectionLabel>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4">
                <Panel className="h-full p-6 md:p-8">
                  <div className="flex items-center justify-between border-b border-black/10 pb-5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                      Notes & essays
                    </span>
                    <FileText className="h-4 w-4 text-black/45" />
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    A place for ideas, write-ups, and technical thinking.
                  </h2>
                  <p className="mt-6 text-sm leading-7 text-black/65">
                    Use this section for your blog, essays, technical notes, or
                    reflections on engineering, AI, systems, and product work.
                  </p>
                  <Link
                    to="/blog"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition hover:text-blue-700"
                  >
                    View all posts <ArrowRight className="h-4 w-4" />
                  </Link>
                </Panel>
              </div>

              <div className="col-span-12 md:col-span-8">
                <div className="border border-black/10 bg-[#f4f6f8]">
                  {posts.map((post, index) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className={`grid grid-cols-12 gap-4 p-6 transition hover:bg-black/[0.015] md:p-8 ${
                        index !== posts.length - 1
                          ? "border-b border-black/10"
                          : ""
                      }`}
                    >
                      <div className="col-span-12 md:col-span-2">
                        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                          {post.category}
                        </div>
                        <div className="mt-3 text-sm text-black/52">
                          {post.date}
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-8">
                        <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-950">
                          {post.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/64">
                          {post.summary}
                        </p>
                      </div>
                      <div className="col-span-12 flex items-start justify-start md:col-span-2 md:justify-end">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-black/75">
                          Read <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative">
        <LightGridLines />
        <div className="mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid grid-cols-12 gap-6 border border-black/10 bg-[#f4f6f8]">
              <div className="col-span-12 border-b border-black/10 p-6 md:col-span-7 md:border-b-0 md:border-r md:p-10">
                <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                  Links / reach out
                </div>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  Find me on Github, LinkedIn, or send me an email.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-black/66">
                  I’m always open to connecting with other people building
                  interesting things.
                </p>
              </div>

              <div className="col-span-12 md:col-span-5">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-between p-6 transition hover:bg-black/[0.02] md:p-8 ${
                        index !== contactLinks.length - 1
                          ? "border-b border-black/10"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white/50">
                          <Icon className="h-4 w-4 text-zinc-950" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-950">
                            {link.label}
                          </div>
                          <div className="text-sm text-black/52">
                            {link.href.replace("mailto:", "")}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-black/45" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
