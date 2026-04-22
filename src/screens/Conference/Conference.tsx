import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Conference", path: "/conference" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
] as const;

export const Conference = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "clamp(340px, 29.2vw, 561px)" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo857b66QKlwSd/img/rectangle-9509.png"
        />

        {/* Navbar */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <div className="w-[61px] h-12 bg-[url(https://c.animaapp.com/mo857b66QKlwSd/img/ics-png-1.png)] bg-[100%_100%] flex flex-col justify-start">
              <img
                className="mt-[38px] w-[61px] h-2.5"
                alt="ICS logo text"
                src="https://c.animaapp.com/mo857b66QKlwSd/img/ics-png-2.png"
              />
            </div>
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden lg:inline-flex items-center gap-6 xl:gap-8 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className="all-[unset] box-border cursor-pointer"
              >
                <span
                  className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                    item.label === "Conference"
                      ? "font-semibold text-[#f87e0f]"
                      : "font-medium text-primary-3"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-12 px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              Contact
            </span>
          </button>
        </header>

        {/* Hero title */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 pt-[84px]">
          <h1 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[36px] md:text-[44px] tracking-[0.88px] leading-[72px] text-center">
            Conference
          </h1>
          <img
            className="w-44 h-1.5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/mo857b66QKlwSd/img/line.svg"
          />
        </div>
      </section>

      {/* ── CONTENT PLACEHOLDER ── */}
      <section className="w-full bg-white py-20 md:py-32 flex flex-col items-center gap-6 px-6">
        <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-gray-900 text-3xl md:text-[44px] text-center tracking-[0.88px] leading-[54px]">
          Coming Soon
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-primary-3 text-base md:text-lg text-center leading-7 max-w-xl">
          We&#39;re preparing something exciting. Our conference page will be live shortly — stay tuned for upcoming events and announcements.
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0e467a] rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity mt-4"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
            Back to Home
          </span>
        </button>
      </section>
    </div>
  );
};
