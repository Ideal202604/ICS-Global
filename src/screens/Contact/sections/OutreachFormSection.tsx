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
  { src: "https://c.animaapp.com/nj999vRB/img/social-icons.png", alt: "X" },
  { src: "https://c.animaapp.com/nj999vRB/img/social-icons-1.png", alt: "Facebook" },
  { src: "https://c.animaapp.com/nj999vRB/img/social-icons-2.png", alt: "LinkedIn" },
];

export const OutreachFormSection = (): JSX.Element => {
  const navigate = useNavigate();
  const nameId = useId();
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
    <>
      {/* ── Contact Form + Image ── */}
      <div className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/mo9oe40uKob8r6/img/rectangle-9492.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            {/* Form */}
            <form
              className="flex flex-col gap-8 md:gap-10 px-6 md:px-11 py-7 bg-[#eaf7ff] rounded-[16px_16px_0px_0px] w-full"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-4">
                <img
                  className="w-full max-w-[320px] h-auto"
                  alt="Let&#39;s Connect"
                  src="https://c.animaapp.com/mo9oe40uKob8r6/img/heading.svg"
                />
                <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg leading-7">
                  Have questions or ready to start your project? We&#39;re just a message away.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border border-solid border-black">
                  <label htmlFor={nameId} className="sr-only">Full Name</label>
                  <input
                    id={nameId}
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                    placeholder="Full Name"
                    className="[font-family:'Poppins',Helvetica] font-normal text-[#1f2937] placeholder:text-[#c0c0c0] text-xl leading-[30px] bg-transparent outline-none w-full"
                  />
                </div>
                <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border border-solid border-black">
                  <label htmlFor={emailId} className="sr-only">Email</label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Email"
                    className="[font-family:'Poppins',Helvetica] font-normal text-[#1f2937] placeholder:text-[#c0c0c0] text-xl leading-[30px] bg-transparent outline-none w-full"
                  />
                </div>
                <div className="flex flex-col justify-center px-5 py-[13px] bg-white rounded-md border border-solid border-black">
                  <label htmlFor={mobileId} className="sr-only">Mobile</label>
                  <input
                    id={mobileId}
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData((p) => ({ ...p, mobile: e.target.value }))}
                    placeholder="Mobile"
                    className="[font-family:'Poppins',Helvetica] font-normal text-[#1f2937] placeholder:text-[#c0c0c0] text-xl leading-[30px] bg-transparent outline-none w-full"
                  />
                </div>
                <div className="flex flex-col h-28 px-5 py-[13px] bg-white rounded-md border border-solid border-black">
                  <label htmlFor={messageId} className="sr-only">Write a message</label>
                  <textarea
                    id={messageId}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Write a message"
                    className="[font-family:'Poppins',Helvetica] font-normal text-[#1f2937] placeholder:text-[#c0c0c0] text-xl leading-[30px] bg-transparent outline-none resize-none h-full w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="all-[unset] box-border flex items-center justify-center gap-2.5 px-6 py-2.5 w-full bg-primary-1 rounded-md border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
                aria-label="Send Message"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-normal">
                  Send Message
                </span>
              </button>
            </form>

            {/* Support photo */}
            <div className="w-full rounded-2xl overflow-hidden hidden lg:block" style={{ height: "clamp(400px, 36vw, 693px)" }}>
              <img
                className="w-full h-full object-cover"
                alt="Customer support representative working on a laptop while on a phone call"
                src="https://c.animaapp.com/mo9oe40uKob8r6/img/rectangle-9477.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="w-full bg-[#013870]" aria-label="Site footer">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-10 md:py-12">
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-8 lg:justify-between">
            {/* Brand */}
            <div className="flex flex-col gap-6 w-full md:w-64 lg:w-80">
              <img
                className="w-[90px] md:w-[121px] h-auto"
                alt="ICS Global logo"
                src="https://c.animaapp.com/mo9oe40uKob8r6/img/ics-png-2-1.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base leading-6">
                Redefining possibilities and driving progress through technology and creativity.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 lg:gap-12 xl:gap-16 flex-1 lg:justify-end">
              {/* Quick Links */}
              <nav aria-label="Quick links footer" className="flex flex-col gap-4 min-w-[130px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  Quick links
                </h3>
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="all-[unset] box-border [font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 cursor-pointer hover:opacity-80 transition-opacity text-left"
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
                  <div key={cat} className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6">
                    {cat}
                  </div>
                ))}
              </div>
              {/* Contact Information */}
              <address className="not-italic flex flex-col gap-4 min-w-[200px] max-w-[260px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6">
                  Contact Information
                </h3>
                <a href="tel:+919890451547" className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 hover:opacity-80 transition-opacity">
                  Phone: +91 98904 51547
                </a>
                <a href="mailto:info@idealizeer.com" className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 hover:opacity-80 transition-opacity">
                  Email: info@idealizeer.com
                </a>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6">
                  Address: S. No. 138/1, City Centre,<br />Office No. 211, Hinjawadi, Phase 1,<br />Pune, Maharashtra 411057
                </p>
              </address>
            </div>
          </div>
          {/* Divider */}
          <div className="w-full h-px bg-white/20 my-8 md:my-10" />
          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base leading-6 text-center sm:text-left">
              &copy; 2025 ICS Global, Inc. All rights reserved.
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
    </>
  );
};
