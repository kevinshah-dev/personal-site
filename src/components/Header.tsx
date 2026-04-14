import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#e9edf1]/90 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-12 px-5 md:px-8">
        <div className="col-span-12 flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="text-[15px] font-semibold tracking-[-0.03em] text-zinc-950"
          >
            Kevin Shah
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-black/65 md:flex">
            {isHome ? (
              <>
                <a href="#about" className="transition hover:text-black">
                  About
                </a>
                <a href="#experience" className="transition hover:text-black">
                  Experience
                </a>
                <a href="#projects" className="transition hover:text-black">
                  Projects
                </a>
              </>
            ) : (
              <>
                <Link to="/#about" className="transition hover:text-black">
                  About
                </Link>
                <Link to="/#experience" className="transition hover:text-black">
                  Experience
                </Link>
                <Link to="/#projects" className="transition hover:text-black">
                  Projects
                </Link>
              </>
            )}
            <Link to="/blog" className="transition hover:text-black">
              Blog
            </Link>
            {isHome ? (
              <a href="#contact" className="transition hover:text-black">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="transition hover:text-black">
                Contact
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
