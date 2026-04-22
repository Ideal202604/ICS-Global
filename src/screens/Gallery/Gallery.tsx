import { FormEvent, useId, useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/" },
] as const;

const categoryTabs = ["All", "Events", "Conferences", "Concave MOU Event"];

const galleryImages = [
  { id: 1, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-32.png", alt: "Gallery image 1", colSpan: 2 },
  { id: 2, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-3.png", alt: "Gallery image 2", colSpan: 2 },
  { id: 3, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-31.png", alt: "Gallery image 3", colSpan: 2 },
  { id: 4, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-6.png", alt: "Gallery image 4", colSpan: 1 },
  { id: 5, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-7.png", alt: "Gallery image 5", colSpan: 1 },
  { id: 6, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-8.png", alt: "Gallery image 6", colSpan: 2 },
  { id: 7, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-9.png", alt: "Gallery image 7", colSpan: 2 },
  { id: 8, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-4.png", alt: "Gallery image 8", colSpan: 2 },
  { id: 9, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-11.png", alt: "Gallery image 9", colSpan: 4 },
  { id: 10, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-12.png", alt: "Gallery image 10", colSpan: 2 },
  { id: 11, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-30.png", alt: "Gallery image 11", colSpan: 2 },
  { id: 12, src: "https://c.animaapp.com/mo8awahp9YbdPR/img/frame-5.png", alt: "Gallery image 12", colSpan: 2 },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/" },
  { label: "Team", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "Awards", path: "/" },
];

const popularCategories = [
  "Academic Programmes",
  "Research & Publishing Solutions",
  "Consulting & Capacity-Building",
  "Events & Thought Leadership",
];

const socialIcons = [
  { src: "https://c.animaapp.com/mo8awahp9YbdPR/img/social-icons.png", alt: "X" },
  { src: "https://c.animaapp.com/mo8awahp9YbdPR/img/social-icons-1.png", alt: "Facebook" },
  { src: "https://c.animaapp.com/mo8awahp9YbdPR/img/social-icons-2.png", alt: "LinkedIn" },
];

export const Gallery = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [formData, setFormData] = useState({ fullName: "", email: "", mobile: "", message: "" });

  const fullNameId = useId();
  const emailId = useId();
  const mobileId = useId();
  const messageId = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "clamp(340px, 29.2vw, 561px)" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo8awahp9YbdPR/img/rectangle-9509.png"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo8awahp9YbdPR/img/rectangle-9522.png"
        />

        {/* Navbar */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 pt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <div className="w-[61px] h-12 bg-[url(https://c.animaapp.com/mo8awahp9YbdPR/img/ics-png-1.png)] bg-[100%_100%] flex flex-col justify-start">
              <img
                className="mt-[38px] w-[61px] h-2.5"
                alt="ICS logo text"
                src="https://c.animaapp.com/mo8awahp9YbdPR/img/ics-png-2.png"
              />
            </div>
          </button>

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
                    item.label === "Gallery"
                      ? "font-semibold text-primary-1"
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

        {/* Title */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 pt-[84px]">
          <h1 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[36px] md:text-[44px] tracking-[0.88px] leading-[72px] text-center">
            Gallery
          </h1>
          <img
            className="w-24 h-1.5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/mo8awahp9YbdPR/img/line.svg"
          />
        </div>
      </section>

      {/* ── ARCHIVE HEADING ── */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-10 text-center">
        <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-primary-4 text-[36px] md:text-[44px] tracking-[0.88px] leading-[54px]">
          Archive
        </h2>
      </section>

      {/* ── CATEGORY TABS ── */}
      <section className="w-full bg-white pb-8 md:pb-12">
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24">
          <div
            className="flex flex-wrap items-center rounded-[6px] overflow-hidden border border-solid border-[#cdcdcd] w-fit"
            role="tablist"
            aria-label="Gallery categories"
          >
            {categoryTabs.map((tab, index) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center justify-center px-6 md:px-8 py-2.5 cursor-pointer transition-colors ${
                    isActive ? "bg-[#0e467a]" : "bg-white hover:bg-gray-50"
                  } ${index > 0 ? "border-l border-solid border-[#cdcdcd]" : ""}`}
                >
                  <span
                    className={`[font-family:'Poppins',Helvetica] font-medium text-base md:text-lg text-center tracking-[0.36px] leading-6 whitespace-nowrap ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section aria-label="Gallery images" className="w-full bg-white pb-16 md:pb-24">
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24">
          <div
            className="grid gap-4 md:gap-6"
            style={{ gridTemplateColumns: "repeat(6, minmax(0, 1fr))" }}
          >
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  gridColumn: `span ${item.colSpan}`,
                  height: "clamp(160px, 20vw, 393px)",
                }}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <div className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          aria-hidden="true"
          alt=""
          src="https://c.animaapp.com/mo8awahp9YbdPR/img/rectangle-9491.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 md:gap-10 px-6 md:px-11 py-7 bg-[#eaf7ff] rounded-[16px_16px_0px_0px] w-full"
            >
              <div className="flex flex-col gap-4">
                <img
                  className="w-full max-w-[320px] h-auto"
                  alt="Let&#39;s Connect"
                  src="https://c.animaapp.com/mo8awahp9YbdPR/img/heading.svg"
                />
                <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg leading-7">
                  Have questions or ready to start your project? We&#39;re just a message away.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7]">
                    <input
                      id={fullNameId}
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                      placeholder="Full Name"
                      className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#a5a5a5]"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7]">
                    <input
                      id={emailId}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="Email"
                      className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#a5a5a5]"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  <img
                    className="w-[90px] md:w-[108px] flex-shrink-0"
                    alt="Country code"
                    src="https://c.animaapp.com/mo8awahp9YbdPR/img/frame-1321316631.svg"
                  />
                  <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7] flex-1">
                    <input
                      id={mobileId}
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData((p) => ({ ...p, mobile: e.target.value }))}
                      placeholder="Mobile"
                      className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#a5a5a5]"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-[129px] px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7]">
                  <textarea
                    id={messageId}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Write a message"
                    className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full h-full bg-transparent outline-none resize-none placeholder:text-[#a5a5a5]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="all-[unset] box-border flex items-center justify-center gap-2.5 px-6 py-2.5 w-full bg-primary-1 rounded-md border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-normal">
                  Send Message
                </span>
              </button>
            </form>

            {/* Support photo */}
            <div
              className="w-full rounded-2xl overflow-hidden hidden lg:block"
              style={{ height: "clamp(400px, 36vw, 693px)" }}
            >
              <img
                className="w-full h-full object-cover"
                alt="Customer support representative"
                src="https://c.animaapp.com/mo8awahp9YbdPR/img/rectangle-9477.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#013870]" aria-label="Site footer">
        <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 pt-12 md:pt-[69px] pb-8 md:pb-10">
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-8 lg:justify-between">
            {/* Brand */}
            <div className="flex flex-col gap-8 w-full md:w-80 lg:w-96">
              <img
                className="w-[90px] md:w-[121px] h-auto"
                alt="ICS Global logo"
                src="https://c.animaapp.com/mo8awahp9YbdPR/img/ics-png-2-1.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6">
                Redefining possibilities and driving progress through technology and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-12 xl:gap-16 flex-1 lg:justify-end">
              {/* Quick Links */}
              <nav aria-label="Quick links footer" className="flex flex-col gap-4 min-w-[140px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  Quick links
                </h3>
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="all-[unset] box-border [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 cursor-pointer hover:opacity-80 transition-opacity text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Popular Categories */}
              <div className="flex flex-col gap-4 min-w-[180px] max-w-[237px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  Popular Categories
                </h3>
                {popularCategories.map((cat) => (
                  <div
                    key={cat}
                    className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6"
                  >
                    {cat}
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <address className="not-italic flex flex-col gap-4 min-w-[200px] max-w-[260px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  Contact Information
                </h3>
                <a
                  href="tel:+919890451547"
                  className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 hover:opacity-80 transition-opacity"
                >
                  Phone: +91 98904 51547
                </a>
                <a
                  href="mailto:info@idealizeer.com"
                  className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 hover:opacity-80 transition-opacity"
                >
                  Email: info@idealizeer.com
                </a>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6">
                  Address: S. No. 138/1, City Centre, Office No. 211, Hinjawadi, Phase 1, Pune, Maharashtra 411057
                </p>
              </address>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 my-8 md:my-10" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6 text-center sm:text-left">
              &copy; 2026 ICS Global, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.alt}
                  href="#"
                  aria-label={icon.alt}
                  className="inline-flex hover:opacity-80 transition-opacity"
                >
                  <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
