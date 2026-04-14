export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: number;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "code" | "list";
  text?: string;
  items?: string[];
  language?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "building-thoughtful-systems",
    title: "Building Thoughtful Systems That Scale",
    date: "April 10, 2026",
    category: "ENGINEERING",
    summary:
      "Reflections on designing systems that balance simplicity with the ability to grow — and why most complexity is accidental.",
    readTime: 6,
    content: [
      {
        type: "paragraph",
        text: "There is a tension at the heart of every system you build: it needs to be simple enough to understand today, yet flexible enough to handle what comes tomorrow. Most engineers resolve this tension by over-building. They add layers of abstraction, configuration surfaces, and extension points before they have evidence that any of it is needed.",
      },
      {
        type: "heading",
        text: "Accidental vs. essential complexity",
      },
      {
        type: "paragraph",
        text: "Fred Brooks drew the distinction decades ago, but it remains the most useful lens I know. Essential complexity is the irreducible difficulty of the problem you are solving. Accidental complexity is everything else — the build tooling, the ORM layer, the message queue you added because someone said you might need it.",
      },
      {
        type: "paragraph",
        text: "The best systems I have worked on share a common trait: they ruthlessly minimize accidental complexity. They use boring technology. They have fewer moving parts than you expect. They solve the problem directly, without routing through three layers of indirection.",
      },
      {
        type: "heading",
        text: "Three principles I keep coming back to",
      },
      {
        type: "list",
        items: [
          "Make the common case obvious. If 90% of requests follow the same path, that path should be the one you see when you open the code. Edge cases belong in clearly marked branches, not in the main flow.",
          "Defer decisions until you have data. Do not pick a database, a queue, or a caching strategy until you understand your access patterns. A wrong early decision costs more than a late right one.",
          "Optimize for deletion. Write code that is easy to remove. Small, focused modules with clear boundaries can be replaced individually. A monolithic abstraction cannot.",
        ],
      },
      {
        type: "heading",
        text: "What this looks like in practice",
      },
      {
        type: "paragraph",
        text: "On a recent project, we needed to process a high volume of events from multiple upstream sources. The instinct was to reach for a distributed streaming platform immediately. Instead, we started with a simple polling loop writing to a local database. It handled the load for months, and when we eventually needed to scale, we had months of production data to inform the right architecture.",
      },
      {
        type: "paragraph",
        text: "The system we built was smaller, faster to develop, and easier to operate than anything we would have designed on day one. Constraints drove better decisions than speculation ever could.",
      },
    ],
  },
  {
    slug: "ai-agents-practical-patterns",
    title: "AI Agents: Practical Patterns for Real Applications",
    date: "March 22, 2026",
    category: "AI / SYSTEMS",
    summary:
      "Moving beyond demos — what actually works when you ship AI agents into production systems with real users.",
    readTime: 8,
    content: [
      {
        type: "paragraph",
        text: "The gap between an AI agent demo and a production AI agent is enormous. Demos run on happy paths with curated inputs. Production systems encounter ambiguous instructions, partial failures, rate limits, and users who interact in ways you did not anticipate. After shipping several agent-based systems, here is what I have learned about bridging that gap.",
      },
      {
        type: "heading",
        text: "The reliability problem",
      },
      {
        type: "paragraph",
        text: "Language models are probabilistic. They will sometimes produce incorrect output, even when the prompt is well-constructed. This is not a bug — it is a fundamental property of the technology. Building reliable systems on probabilistic foundations requires a different design philosophy than traditional software engineering.",
      },
      {
        type: "paragraph",
        text: "The key insight is to design for graceful degradation rather than perfect accuracy. Every agent action should be reversible or confirmable. Every output should be verifiable against some ground truth, even if that verification is itself imperfect.",
      },
      {
        type: "heading",
        text: "Patterns that work",
      },
      {
        type: "list",
        items: [
          "Tool-use over free-form generation. Constrain the agent's action space to well-defined tools with typed inputs and outputs. This reduces the surface area for errors and makes failures easier to diagnose.",
          "Structured output everywhere. Parse model output into typed objects immediately. If the output does not parse, retry or escalate — do not try to interpret malformed responses downstream.",
          "Human-in-the-loop by default. For any action with real consequences, require explicit confirmation. Autonomy should be earned through demonstrated reliability, not assumed.",
          "Observability as a first-class concern. Log every model call, every tool invocation, and every decision point. When something goes wrong in production, you need to reconstruct exactly what happened.",
        ],
      },
      {
        type: "heading",
        text: "The evaluation problem",
      },
      {
        type: "paragraph",
        text: "You cannot ship what you cannot measure. Traditional test suites are necessary but insufficient for agent systems. You need evaluation datasets that cover the range of real-world inputs, and you need metrics that capture the dimensions you care about — accuracy, latency, cost, user satisfaction.",
      },
      {
        type: "paragraph",
        text: "Build your evaluation harness before you build your agent. It is the single highest-leverage investment you can make. Every prompt change, model upgrade, and architecture decision should be measured against the same benchmark.",
      },
    ],
  },
  {
    slug: "career-leverage-points",
    title: "Leverage Points in a Technical Career",
    date: "February 15, 2026",
    category: "CAREER / BUILDING",
    summary:
      "The non-obvious skills and decisions that compound over time — and why most career advice focuses on the wrong things.",
    readTime: 5,
    content: [
      {
        type: "paragraph",
        text: "Most career advice for engineers focuses on technical skill acquisition: learn this framework, master that language, get certified in this platform. These things matter, but they are table stakes. The decisions that actually shape a career trajectory are subtler and less frequently discussed.",
      },
      {
        type: "heading",
        text: "Writing as a multiplier",
      },
      {
        type: "paragraph",
        text: "The single most leveraged skill in a technical career is clear writing. Not because writing is inherently more valuable than coding, but because it scales differently. Good code solves a problem once. A well-written design document aligns an entire team. A clear post-mortem prevents the same class of failure across the organization.",
      },
      {
        type: "paragraph",
        text: "Engineers who write well get disproportionate influence. Their proposals get approved. Their architectures get adopted. Their ideas spread further. This is not about politics — it is about communication bandwidth. Writing well means your ideas reach more people with less distortion.",
      },
      {
        type: "heading",
        text: "Choosing problems over solutions",
      },
      {
        type: "paragraph",
        text: "Early in a career, you are evaluated on your ability to solve problems that are handed to you. Later, you are evaluated on your ability to identify which problems are worth solving. This transition is the most important shift in a technical career, and it happens gradually enough that many engineers miss it.",
      },
      {
        type: "list",
        items: [
          "Seek out ambiguity. The most valuable problems are the ones that are not yet well-defined. Learning to take a vague concern and turn it into a concrete, solvable problem is a rare and valuable skill.",
          "Invest in domain knowledge. Technical skill depreciates. Domain knowledge compounds. Understanding the business context behind technical decisions makes you dramatically more effective.",
          "Build trust through delivery. Ambitious projects require organizational trust. That trust is built through a track record of reliable, incremental delivery — not through grand proposals.",
        ],
      },
      {
        type: "heading",
        text: "The long game",
      },
      {
        type: "paragraph",
        text: "Careers in technology are long. The decisions that matter most are the ones that compound: the relationships you build, the domains you develop depth in, the reputation you establish for clear thinking and reliable execution. Optimize for these, and the specific technical skills will follow naturally.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
