import { FormEvent, useId, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  { src: "https://c.animaapp.com/mo86xl2dBMZk7P/img/social-icons.png", alt: "Facebook" },
  { src: "https://c.animaapp.com/mo86xl2dBMZk7P/img/social-icons-1.png", alt: "X" },
  { src: "https://c.animaapp.com/mo86xl2dBMZk7P/img/social-icons-2.png", alt: "LinkedIn" },
];

export const BlogContactFooterSection = (): JSX.Element => {
  const navigate = useNavigate();
  const fullNameId = useId();
  const emailId = useId();
  const mobileId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full">
      {/* ── CONTACT SECTION ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(500px, 47.3vw, 909px)" }}
      >
        <img
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          aria-hidden="true"
          alt=""
          src="https://c.animaapp.com/mo86xl2dBMZk7P/img/rectangle-9491.svg"
        />
        <div className="absolute inset-x-0 top-14 bottom-0 pointer-events-none" aria-hidden="true">
          <img
            className="absolute inset-0 w-full h-full object-fill opacity-30"
            alt=""
            src="https://c.animaapp.com/mo86xl2dBMZk7P/img/rectangle-9492.svg"
          />
        </div>

        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 md:gap-10 px-6 md:px-11 py-7 bg-[#eaf7ff] rounded-[16px_16px_0px_0px] w-full"
            >
              <div className="flex flex-col gap-4">
                <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl md:text-[36px] leading-normal">
                  Let&#39;s Connect
                </h2>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg leading-7">
                  Have questions or ready to start your project? We&#39;re just a message away.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7]">
                    <label htmlFor={fullNameId} className="sr-only">Full Name</label>
                    <input
                      id={fullNameId}
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                      placeholder="Full Name"
                      className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#a5a5a5]"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7]">
                    <label htmlFor={emailId} className="sr-only">Email</label>
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="Email"
                      className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#a5a5a5]"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="relative w-[90px] md:w-[108px] h-[52px] flex-shrink-0 bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7] flex items-center px-3 gap-2">
                    <span className="text-base" aria-hidden="true">🇮🇳</span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#1f2937] text-sm leading-6">+91</span>
                  </div>
                  <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7] flex-1">
                    <label htmlFor={mobileId} className="sr-only">Mobile</label>
                    <input
                      id={mobileId}
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData((p) => ({ ...p, mobile: e.target.value }))}
                      placeholder="Mobile"
                      className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#a5a5a5]"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-[129px] px-5 py-[13px] bg-white rounded-md border-[0.5px] border-solid border-[#a4a6a7]">
                  <label htmlFor={messageId} className="sr-only">Write a message</label>
                  <textarea
                    id={messageId}
                    name="message"
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
            <div
              className="w-full rounded-2xl overflow-hidden hidden lg:block"
              style={{ height: "clamp(400px, 36vw, 693px)" }}
            >
              <img
                className="w-full h-full object-cover"
                alt="Customer support agent"
                src="https://c.animaapp.com/mo86xl2dBMZk7P/img/rectangle-9477.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#013870]" aria-label="Site footer">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 pt-12 md:pt-[69px] pb-8 md:pb-10">
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-8 lg:justify-between">
            <div className="flex flex-col gap-8 w-full md:w-80 lg:w-96">
              <img
                className="w-[90px] md:w-[121px] h-auto"
                alt="ICS Global logo"
                src="https://c.animaapp.com/mo86xl2dBMZk7P/img/ics-png-2-1.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6">
                Redefining possibilities and driving progress through technology and creativity.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 lg:gap-12 xl:gap-16 flex-1 lg:justify-end">
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
              <div className="flex flex-col gap-4 min-w-[180px] max-w-[237px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  popular Categories
                </h3>
                {popularCategories.map((cat) => (
                  <div key={cat} className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6">
                    {cat}
                  </div>
                ))}
              </div>
              <address className="not-italic flex flex-col gap-4 min-w-[200px] max-w-[260px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  Contact Information
                </h3>
                <a href="tel:+919890451547" className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 hover:opacity-80 transition-opacity">
                  Phone: +91 98904 51547
                </a>
                <a href="mailto:info@idealizeer.com" className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 hover:opacity-80 transition-opacity">
                  Email: info@idealizeer.com
                </a>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6">
                  Address: S. No. 138/1, City Centre,<br />
                  Office No. 211, Hinjawadi, Phase 1,<br />
                  Pune, Maharashtra 411057
                </p>
              </address>
            </div>
          </div>
          <div className="w-full h-px bg-white/20 my-8 md:my-10" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6 text-center sm:text-left">
              © 2026 ICS Global, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <a key={icon.alt} href="#" aria-label={icon.alt} className="inline-flex hover:opacity-80 transition-opacity">
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
