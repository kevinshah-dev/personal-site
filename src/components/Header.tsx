import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Kevin Shah, back to top"
        >
          <span className="wordmark-dot" aria-hidden="true" />
          Kevin Shah
        </a>

        <div className="header-actions">
          <nav className="primary-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="resume-link"
            href="/Kevin_Shah_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
