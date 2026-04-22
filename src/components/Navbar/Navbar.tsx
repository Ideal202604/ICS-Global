import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/conference" },
] as const;

interface NavbarProps {
  /** Logo src — pass the page-specific hosted logo */
  logoSrc?: string;
  /** Logo text/sub-image src */
  logoTextSrc?: string;
  /** Which nav item is active — defaults to location pathname matching */
  activePath?: string;
  /** CTA label (default "Contact") */
  ctaLabel?: string;
  /** CTA click handler */
  onCtaClick?: () => void;
}

export const Navbar = ({
  logoSrc,
  logoTextSrc,
  activePath,
  ctaLabel = "Contact",
  onCtaClick,
}: NavbarProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = activePath ?? location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" ) return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-5">
      {/* Logo */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="all-[unset] box-border cursor-pointer flex-shrink-0"
        aria-label="Go to home"
      >
        {logoSrc ? (
          <div
            className="w-[61px] h-12 bg-[100%_100%] flex flex-col justify-start"
            style={{ backgroundImage: `url(${logoSrc})` }}
          >
            {logoTextSrc && (
              <img
                className="mt-[38px] w-[61px] h-2.5"
                alt="ICS Global"
                src={logoTextSrc}
              />
            )}
          </div>
        ) : (
          <img
            className="w-[61px] h-12 object-contain"
            alt="ICS Global"
            src="https://c.animaapp.com/nj999vRB/img/ics-png-1@4x.png"
          />
        )}
      </button>

      {/* Desktop Nav pill — matches Figma exactly: h-[52px], px-4, py-3.5, gap-8, rounded-[10px] */}
      <nav
        aria-label="Primary navigation"
        className="hidden lg:inline-flex h-[52px] items-center justify-center gap-2 px-4 py-3.5 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm"
      >
        <div className="inline-flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => navigate(item.path)}
              aria-current={isActive(item.path) ? "page" : undefined}
              className="all-[unset] box-border cursor-pointer"
            >
              <span
                className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                  isActive(item.path)
                    ? "font-semibold text-primary-1"
                    : "font-medium text-primary-3"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop CTA */}
      <button
        type="button"
        onClick={onCtaClick}
        className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-[52px] px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
      >
        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
          {ctaLabel}
        </span>
      </button>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
        className="all-[unset] box-border lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer gap-1.5"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-30 py-4 px-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => { navigate(item.path); setMenuOpen(false); }}
              className="all-[unset] box-border cursor-pointer py-2.5 border-b border-gray-100 last:border-0"
            >
              <span
                className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] ${
                  isActive(item.path)
                    ? "font-semibold text-primary-1"
                    : "font-medium text-primary-3"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => { onCtaClick?.(); setMenuOpen(false); }}
            className="all-[unset] box-border mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              {ctaLabel}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
