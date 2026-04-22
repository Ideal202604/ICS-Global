import { useNavigate } from "react-router-dom";
import { AboutOverviewSection } from "./sections/AboutOverviewSection";
import { BlogsAndGuidesSection } from "./sections/BlogsAndGuidesSection";
import { ContactCalloutSection } from "./sections/ContactCalloutSection";
import { MissionVisionHighlightsSection } from "./sections/MissionVisionHighlightsSection";
import { SolutionsHighlightsSection } from "./sections/SolutionsHighlightsSection";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/" },
] as const;

const galleryImages = [
  {
    src: "https://c.animaapp.com/mo857b66QKlwSd/img/rectangle-9510.png",
    alt: "Modern office lobby interior",
    rounded: false,
  },
  {
    src: "https://c.animaapp.com/mo857b66QKlwSd/img/rectangle-9511.png",
    alt: "Team collaborating around a table",
    rounded: true,
  },
  {
    src: "https://c.animaapp.com/mo857b66QKlwSd/img/rectangle-9512-1.png",
    alt: "Meeting room with seated attendees",
    rounded: true,
  },
] as const;

export const About = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ══════════════════════════════════════
          HERO — full-bleed photo, "About Us" centred
          ══════════════════════════════════════ */}
      <section className="relative w-full" style={{ minHeight: "clamp(340px, 29.2vw, 561px)", height: "clamp(340px, 29.2vw, 561px)" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="About hero background"
          src="https://c.animaapp.com/mo857b66QKlwSd/img/rectangle-9509.png"
        />

        {/* ── Navbar ── */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-6">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <div
              className="w-[61px] h-12 bg-[url(https://c.animaapp.com/mo857b66QKlwSd/img/ics-png-1.png)] bg-[100%_100%] flex flex-col justify-start"
            >
              <img
                className="mt-[38px] w-[61px] h-2.5"
                alt="ICS logo text"
                src="https://c.animaapp.com/mo857b66QKlwSd/img/ics-png-2.png"
              />
            </div>
          </button>

          {/* Nav pill */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:inline-flex items-center gap-8 xl:gap-10 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
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
                    item.label === "About"
                      ? "font-semibold text-[#f87e0f]"
                      : "font-medium text-primary-3"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Contact CTA */}
          <button
            type="button"
            className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-12 w-[106px] px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              Contact
            </span>
          </button>
        </header>

        {/* "About Us" centred in hero */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 pt-[84px]">
          <h1 className="[-webkit-text-stroke:1px_#000000] [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-black text-[36px] md:text-[44px] tracking-[0.88px] leading-[72px] text-center whitespace-nowrap">
            About Us
          </h1>
          <img
            className="w-44 h-1.5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/mo857b66QKlwSd/img/line.svg"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          OVERVIEW BAND — dark brown #260a06
          ══════════════════════════════════════ */}
      <section
        aria-label="About company overview"
        className="w-full"
        style={{ background: "rgba(38,10,6,1)" }}
      >
        <div
          className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24"
          style={{ paddingTop: "clamp(56px,5.5vw,98px)", paddingBottom: "clamp(56px,5.5vw,98px)" }}
        >
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
            {/* Left: "About Our" */}
            <div className="lg:w-[380px] xl:w-[420px] flex-shrink-0">
              <h2
                className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white tracking-[0.88px] leading-[54px]"
                style={{ fontSize: "clamp(30px, 2.3vw, 44px)" }}
              >
                About Our
              </h2>
            </div>
            {/* Right: overview heading + paragraph */}
            <div className="flex-1">
              <AboutOverviewSection />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY — 3 images side by side
          Figma: ~343 px image height at 1920 px
          ══════════════════════════════════════ */}
      <section aria-label="About gallery" className="w-full bg-white" style={{ paddingTop: "clamp(40px,4vw,80px)", paddingBottom: "clamp(40px,4vw,80px)" }}>
        <div className="px-6 md:px-16 lg:px-24 overflow-x-auto scrollbar-hide">
          <div className="flex items-stretch gap-6 pb-2" style={{ width: "max-content" }}>
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className={`flex-shrink-0 overflow-hidden ${image.rounded ? "rounded-2xl" : ""}`}
                style={{
                  width: "clamp(280px, 29.2vw, 561px)",
                  height: "clamp(180px, 17.8vw, 343px)",
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION & VISION
          Figma: white bg, ~462 px tall
          Two columns: "Our Mission" | "Our Vision"
          ══════════════════════════════════════ */}
      <MissionVisionHighlightsSection />

      {/* ══════════════════════════════════════
          SOLUTIONS — photo left, accordion right
          Figma: image 864 × 577 px
          ══════════════════════════════════════ */}
      <section className="w-full bg-white" style={{ paddingTop: "clamp(56px,5vw,96px)", paddingBottom: "clamp(56px,5vw,96px)" }}>
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[62px]">
            {/* Left: rectangular photo */}
            <div
              className="w-full lg:w-[45%] flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ height: "clamp(260px, 30vw, 577px)" }}
            >
              <img
                className="w-full h-full object-cover"
                alt="Group of people sitting outdoors together"
                src="https://c.animaapp.com/mo857b66QKlwSd/img/rectangle-9512.png"
              />
            </div>
            {/* Right: solutions accordion */}
            <div className="flex-1 lg:pt-2 w-full">
              <SolutionsHighlightsSection />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOGS & GUIDES
          ══════════════════════════════════════ */}
      <BlogsAndGuidesSection />

      {/* ══════════════════════════════════════
          CONTACT FORM + FOOTER
          ══════════════════════════════════════ */}
      <ContactCalloutSection />
    </div>
  );
};
