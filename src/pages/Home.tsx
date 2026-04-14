import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  ExternalLink,
  Briefcase,
  FileText,
  Blocks,
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
    period: "2024 — 2026",
    summary:
      "Add a concise description of what you worked on, what domain you operated in, and the outcomes you drove.",
    metrics: ["SYSTEMS", "DELIVERY", "STRATEGY"],
  },
  {
    role: "Web Developer Intern",
    company: "Prometheus Group",
    period: "2022 — 2024",
    summary:
      "Add another experience summary here with a technical, product, or business-oriented emphasis.",
    metrics: ["PLATFORM", "CLIENTS", "EXECUTION"],
  },
  {
    role: "Software Engineer Intern",
    company: "Earlier Company",
    period: "2020 — 2022",
    summary:
      "Use this space for a foundational role that shows growth, range, and progression over time.",
    metrics: ["BUILD", "ANALYSIS", "OPERATIONS"],
  },
];

const projects = [
  {
    name: "Project Alpha",
    category: "SYSTEMS / PLATFORM",
    summary:
      "Describe the project clearly: what it is, why it matters, what stack or architecture it uses, and what outcome it created.",
    tags: ["React", "TypeScript", "API Design"],
    href: "#",
  },
  {
    name: "Project Beta",
    category: "AI / AUTOMATION",
    summary:
      "Use this card for an AI, infrastructure, workflow, or product project with a concise case-study style description.",
    tags: ["LLMs", "Agents", "Data Flows"],
    href: "#",
  },
  {
    name: "Project Gamma",
    category: "ENGINEERING / PRODUCT",
    summary:
      "Add a third project that reinforces your technical depth, systems thinking, or product execution.",
    tags: ["Design Systems", "Full Stack", "Analytics"],
    href: "#",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  { label: "Email", href: "mailto:you@example.com", icon: Mail },
];

const stats = [
  { value: "01", label: "Current role module" },
  { value: "03", label: "Experience entries" },
  { value: "03", label: "Featured projects" },
  { value: "03", label: "Writing samples" },
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
                    PERSONAL SITE / SYSTEM PROFILE
                  </div>
                  <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl lg:text-[5.4rem]">
                    Building thoughtful systems, products, and technical work.
                  </h1>
                  <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                    Replace this with a concise personal positioning statement.
                    This should describe who you are, what you work on, and the
                    kind of problems you like solving.
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

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
                className="col-span-12 md:col-span-5"
              >
                <div className="grid h-full min-h-[360px] grid-cols-6 grid-rows-6 gap-3">
                  <div className="col-span-4 row-span-4 border border-white/12 bg-white/[0.03] p-5">
                    <div className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/45">
                      <span>PROFILE MAP</span>
                      <span>01</span>
                    </div>
                    <div className="grid h-[calc(100%-2.5rem)] grid-cols-4 grid-rows-4 gap-2">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className={`border ${
                            [1, 3, 6, 10, 14].includes(i)
                              ? "border-blue-500/50 bg-blue-500/20"
                              : "border-white/10 bg-white/[0.02]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="col-span-2 row-span-2 border border-white/12 bg-blue-600/15 p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-blue-300">
                      Focus
                    </div>
                    <div className="mt-8 text-sm leading-6 text-white/80">
                      AI
                      <br />
                      Systems
                      <br />
                      Product
                    </div>
                  </div>

                  <div className="col-span-2 row-span-2 border border-white/12 bg-white/[0.03] p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                      Links
                    </div>
                    <div className="mt-8 text-sm leading-6 text-white/80">
                      GitHub
                      <br />
                      LinkedIn
                      <br />
                      Email
                    </div>
                  </div>

                  <div className="col-span-4 row-span-2 border border-white/12 bg-white/[0.03] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                          SYSTEM NOTE
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/72">
                          Use this module for a short professional note, current
                          focus, or personal thesis.
                        </p>
                      </div>
                      <Blocks className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-b border-black/10">
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Overview</SectionLabel>
            <div className="grid grid-cols-12 gap-0 border border-black/10 bg-[#eef2f5]">
              <div className="col-span-12 border-b border-black/10 p-6 md:col-span-7 md:border-b-0 md:border-r md:p-10">
                <div className="max-w-3xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-700">
                    Personal summary
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 md:text-5xl">
                    A personal site designed like a product system.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-black/66">
                    Add a clear overview here. This area works well for your
                    personal narrative: what you do now, what you have done
                    before, and the kinds of work that define your edge.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid h-full grid-cols-2">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-l border-black/10 p-6 even:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 md:p-8"
                    >
                      <div className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm text-black/58">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative border-b border-black/10">
        <LightGridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-black/10 py-10 md:py-14">
            <SectionLabel>Experience</SectionLabel>

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
                      <div className="col-span-12 md:col-span-6">
                        <p className="text-sm leading-7 text-black/66">
                          {item.summary}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-2 md:text-right">
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {item.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="border border-black/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black/58"
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
                  Projects presented as case-study modules, not simple cards.
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="max-w-xl text-sm leading-7 text-black/64 md:pl-10">
                  Replace the text below with real work. Each project module is
                  structured to highlight context, technical choices, and why the
                  work mattered.
                </p>
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

      <section className="relative overflow-hidden border-b border-black/10 bg-[#080a0e] text-white">
        <GridLines />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
          <div className="col-span-12 border-x border-white/10 py-10 md:py-14">
            <SectionLabel>Working Style</SectionLabel>
            <div className="grid grid-cols-12 gap-6">
              <motion.div {...fadeUp} className="col-span-12 md:col-span-6">
                <div className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
                  <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300">
                    Operating principles
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                    Structured thinking, clear systems, deliberate execution.
                  </h2>
                </div>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
                className="col-span-12 md:col-span-6"
              >
                <div className="grid grid-cols-2 gap-0 border border-white/10 bg-white/[0.03]">
                  {[
                    "Engineering rigor",
                    "Product thinking",
                    "Clear communication",
                    "Systems design",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`p-6 text-sm text-white/72 ${i < 2 ? "border-b border-white/10" : ""} ${i % 2 === 0 ? "border-r border-white/10" : ""}`}
                    >
                      <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                        0{i + 1}
                      </div>
                      <div className="mt-4 font-medium text-white">{item}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                  Add your GitHub, LinkedIn, email, and anything else you want
                  people to find.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-black/66">
                  Keep this minimal and direct. This section is meant to feel
                  crisp and intentional, like the rest of the site.
                </p>
              </div>

              <div className="col-span-12 md:col-span-5">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
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
