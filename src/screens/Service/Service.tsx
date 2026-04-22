import { useNavigate } from "react-router-dom";
import { BrandingMarketingSection } from "./sections/BrandingMarketingSection";
import { CorporateServicesSection } from "./sections/CorporateServicesSection";
import { EdTechSectorSection } from "./sections/EdTechSectorSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HigherEducationSection } from "./sections/HigherEducationSection";
import { ItAndITeSSection } from "./sections/ItAndITeSSection";
import { K12EducationSection } from "./sections/K12EducationSection";
import { ManufacturingSolutionsSection } from "./sections/ManufacturingSolutionsSection";
import { PublishingHousesSection } from "./sections/PublishingHousesSection";
import { SignatureOfferingsIntroSection } from "./sections/SignatureOfferingsIntroSection";
import { WhyICSGlobalSection } from "./sections/WhyICSGlobalSection";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/" },
] as const;

export const Service = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ── HERO HEADER ── */}
      <section className="relative w-full" style={{ height: "clamp(340px, 29.2vw, 561px)" }}>
        {/* BG layers */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo863n0tfCwuCJ/img/rectangle-9522.png"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo863n0tfCwuCJ/img/rectangle-9523.png"
        />

        {/* Navbar */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-6">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <div className="w-[61px] h-12 bg-[url(https://c.animaapp.com/mo863n0tfCwuCJ/img/ics-png-1.png)] bg-[100%_100%] flex flex-col justify-start">
              <img
                className="mt-[38px] w-[61px] h-2.5"
                alt="ICS logo text"
                src="https://c.animaapp.com/mo863n0tfCwuCJ/img/ics-png-2.png"
              />
            </div>
          </button>

          {/* Nav pill */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:inline-flex items-center gap-6 xl:gap-10 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
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
                    item.label === "Services"
                      ? "font-semibold text-primary-1"
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
            className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-12 px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              Contact
            </span>
          </button>
        </header>

        {/* Hero heading centred */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 pt-[84px]">
          <h1 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-[#0957a1] text-[32px] md:text-[44px] tracking-[0.88px] leading-[72px] text-center">
            Our Capabilities for Institutional Transformation
          </h1>
          <img
            className="w-44 h-1.5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/mo863n0tfCwuCJ/img/line.svg"
          />
        </div>
      </section>

      {/* ── SIGNATURE OFFERINGS intro ── */}
      <HeroBannerSection />

      {/* ── SERVICE SECTIONS (alternating image/text) ── */}
      <SignatureOfferingsIntroSection />
      <K12EducationSection />
      <HigherEducationSection />
      <EdTechSectorSection />
      <PublishingHousesSection />
      <CorporateServicesSection />
      <ManufacturingSolutionsSection />
      <ItAndITeSSection />

      {/* ── WHY ICS GLOBAL + photo ── */}
      <BrandingMarketingSection />

      {/* ── CONTACT + FOOTER ── */}
      <WhyICSGlobalSection />
    </div>
  );
};
