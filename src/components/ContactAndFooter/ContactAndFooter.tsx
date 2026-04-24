import { FormEvent, useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../../lib/emailjs";

const quickLinks = [
  { label: "Home", path: "/", anchor: null },
  { label: "About Us", path: "/about", anchor: null },
  { label: "Courses", path: "/", anchor: null },
  { label: "Team", path: "/", anchor: "team" },
  { label: "Gallery", path: "/gallery", anchor: null },
  { label: "Awards", path: "/", anchor: null },
];

const popularCategories = [
  "Academic Programmes",
  "Research & Publishing Solutions",
  "Consulting & Capacity-Building",
  "Events & Thought Leadership",
];

const socialIcons = [
  { href: "https://www.facebook.com/idealizeer/", label: "Facebook", src: "https://c.animaapp.com/mo9sqx7fwKw0SH/img/social-icons.png" },
  { href: "https://www.instagram.com/idealizeer/", label: "Instagram", src: "https://c.animaapp.com/mo9sqx7fwKw0SH/img/social-icons-1.png" },
  { href: "https://www.linkedin.com/company/idealizeer-content-solutions/posts/?feedView=all", label: "LinkedIn", src: "https://c.animaapp.com/mo9sqx7fwKw0SH/img/social-icons-2.png" },
];

/* ── Validation helpers ── */
const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const validatePhone = (phone: string) =>
  /^[0-9]{7,15}$/.test(phone.replace(/[\s\-()]+/g, ""));

type FormErrors = {
  fullName?: string;
  email?: string;
  mobile?: string;
  message?: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export const ContactAndFooter = (): JSX.Element => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
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

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    validateField(e.target.name as keyof typeof formData);
  };

  const validateField = (field: keyof typeof formData): boolean => {
    const val = formData[field].trim();
    const newErrors: FormErrors = {};

    switch (field) {
      case "fullName":
        if (!val) newErrors.fullName = "Full name is required";
        else if (val.length < 2) newErrors.fullName = "Name must be at least 2 characters";
        break;
      case "email":
        if (!val) newErrors.email = "Email is required";
        else if (!validateEmail(val)) newErrors.email = "Please enter a valid email";
        break;
      case "mobile":
        if (!val) newErrors.mobile = "Mobile number is required";
        else if (!validatePhone(val)) newErrors.mobile = "Please enter a valid phone number";
        break;
      case "message":
        if (!val) newErrors.message = "Message is required";
        else if (val.length < 10) newErrors.message = "Message must be at least 10 characters";
        break;
    }

    setErrors((prev) => ({ ...prev, ...newErrors, ...(Object.keys(newErrors).length === 0 ? { [field]: undefined } : {}) }));
    return Object.keys(newErrors).length === 0;
  };

  const validateAll = (): boolean => {
    const fields: (keyof typeof formData)[] = ["fullName", "email", "mobile", "message"];
    const newErrors: FormErrors = {};

    fields.forEach((f) => {
      const val = formData[f].trim();
      switch (f) {
        case "fullName":
          if (!val) newErrors.fullName = "Full name is required";
          else if (val.length < 2) newErrors.fullName = "Name must be at least 2 characters";
          break;
        case "email":
          if (!val) newErrors.email = "Email is required";
          else if (!validateEmail(val)) newErrors.email = "Please enter a valid email";
          break;
        case "mobile":
          if (!val) newErrors.mobile = "Mobile number is required";
          else if (!validatePhone(val)) newErrors.mobile = "Please enter a valid phone number";
          break;
        case "message":
          if (!val) newErrors.message = "Message is required";
          else if (val.length < 10) newErrors.message = "Message must be at least 10 characters";
          break;
      }
    });

    setErrors(newErrors);
    setTouched({ fullName: true, email: true, mobile: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateAll()) return;

    setSubmitStatus("sending");

    try {
      /**
       * EmailJS integration — sends the form using your template.
       * The <input name="..."> fields map to template variables:
       *   from_name  → {{from_name}}
       *   from_email → {{from_email}}
       *   phone      → {{phone}}
       *   message    → {{message}}
       *
       * If EMAILJS credentials are still placeholder strings the
       * call will fail gracefully and show the error toast.
       */
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", mobile: "", message: "" });
      setTouched({});
      setErrors({});

      // Reset success banner after 5s
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════
          CONTACT SECTION — "Let's Connect"
          Outer light-gray wrapper → blue rounded card → form + image
          ═══════════════════════════════════════════ */}
      <div className="w-full bg-[#eef1f5] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-0 rounded-2xl overflow-hidden shadow-2xl">

            {/* ── Left: Blue panel with inset white form card ── */}
            <div className="bg-[#2a7ab5] p-6 sm:p-8 md:p-10 lg:p-10 flex flex-col justify-center">
              <div className="bg-[#dceefb] rounded-xl p-5 sm:p-7 md:p-8 lg:p-9">
              {/* ── Status banners ── */}
              {submitStatus === "success" && (
                <div className="mb-4 flex items-center gap-3 rounded-lg bg-green-50 border border-green-300 px-4 py-3 animate-[fadeIn_0.3s_ease]">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <p className="[font-family:'Poppins',Helvetica] text-green-800 text-sm font-medium">Message sent successfully! We&#39;ll get back to you soon.</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 flex items-center gap-3 rounded-lg bg-red-50 border border-red-300 px-4 py-3 animate-[fadeIn_0.3s_ease]">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                  <p className="[font-family:'Poppins',Helvetica] text-red-800 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8" noValidate>
                {/* Heading */}
                <div className="flex flex-col gap-3">
                  <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-[#1a3c5e] text-2xl md:text-3xl lg:text-[34px] tracking-[0.5px] leading-tight">
                    Let&#39;s Connect
                  </h2>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#333] text-sm md:text-base leading-6">
                    Have questions or ready to start your project? We&#39;re just a message away.
                  </p>
                </div>

                {/* Full Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <div className={`flex flex-col justify-center px-4 py-3 bg-white rounded-lg border border-solid transition-colors ${touched.fullName && errors.fullName ? "border-red-400 ring-1 ring-red-200" : "border-[#c5cdd5] focus-within:border-[#2a7ab5] focus-within:ring-1 focus-within:ring-[#2a7ab5]/30"}`}>
                      <label htmlFor={fullNameId} className="sr-only">Full Name</label>
                      <input
                        id={fullNameId}
                        type="text"
                        name="from_name"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) => { setFormData((p) => ({ ...p, fullName: e.target.value })); if (errors.fullName) setErrors((p) => ({ ...p, fullName: undefined })); }}
                        onBlur={() => { setTouched((p) => ({ ...p, fullName: true })); validateField("fullName"); }}
                        placeholder="Full Name"
                        className="[font-family:'Poppins',Helvetica] font-normal text-[#333] text-sm md:text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#999]"
                      />
                    </div>
                    {touched.fullName && errors.fullName && <p className="[font-family:'Poppins',Helvetica] text-red-500 text-xs mt-0.5 pl-1">{errors.fullName}</p>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className={`flex flex-col justify-center px-4 py-3 bg-white rounded-lg border border-solid transition-colors ${touched.email && errors.email ? "border-red-400 ring-1 ring-red-200" : "border-[#c5cdd5] focus-within:border-[#2a7ab5] focus-within:ring-1 focus-within:ring-[#2a7ab5]/30"}`}>
                      <label htmlFor={emailId} className="sr-only">Email</label>
                      <input
                        id={emailId}
                        type="email"
                        name="from_email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => { setFormData((p) => ({ ...p, email: e.target.value })); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                        onBlur={() => { setTouched((p) => ({ ...p, email: true })); validateField("email"); }}
                        placeholder="Email"
                        className="[font-family:'Poppins',Helvetica] font-normal text-[#333] text-sm md:text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#999]"
                      />
                    </div>
                    {touched.email && errors.email && <p className="[font-family:'Poppins',Helvetica] text-red-500 text-xs mt-0.5 pl-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Country code + Mobile */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-3 bg-white rounded-lg border border-solid border-[#c5cdd5] flex-shrink-0">
                      <img
                        className="w-6 h-4 object-cover rounded-sm"
                        alt="India flag"
                        src="https://c.animaapp.com/mo9sqx7fwKw0SH/img/frame-1321316631.svg"
                      />
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                        <path d="M3 5L6 8L9 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={`flex flex-col justify-center px-4 py-3 bg-white rounded-lg border border-solid transition-colors flex-1 ${touched.mobile && errors.mobile ? "border-red-400 ring-1 ring-red-200" : "border-[#c5cdd5] focus-within:border-[#2a7ab5] focus-within:ring-1 focus-within:ring-[#2a7ab5]/30"}`}>
                      <label htmlFor={mobileId} className="sr-only">Mobile</label>
                      <input
                        id={mobileId}
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={formData.mobile}
                        onChange={(e) => { setFormData((p) => ({ ...p, mobile: e.target.value })); if (errors.mobile) setErrors((p) => ({ ...p, mobile: undefined })); }}
                        onBlur={() => { setTouched((p) => ({ ...p, mobile: true })); validateField("mobile"); }}
                        placeholder="Mobile"
                        className="[font-family:'Poppins',Helvetica] font-normal text-[#333] text-sm md:text-base leading-6 w-full bg-transparent outline-none placeholder:text-[#999]"
                      />
                    </div>
                  </div>
                  {touched.mobile && errors.mobile && <p className="[font-family:'Poppins',Helvetica] text-red-500 text-xs mt-0.5 pl-1">{errors.mobile}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <div className={`flex flex-col px-4 py-3 bg-white rounded-lg border border-solid transition-colors min-h-[120px] ${touched.message && errors.message ? "border-red-400 ring-1 ring-red-200" : "border-[#c5cdd5] focus-within:border-[#2a7ab5] focus-within:ring-1 focus-within:ring-[#2a7ab5]/30"}`}>
                    <label htmlFor={messageId} className="sr-only">Write a message</label>
                    <textarea
                      id={messageId}
                      name="message"
                      value={formData.message}
                      onChange={(e) => { setFormData((p) => ({ ...p, message: e.target.value })); if (errors.message) setErrors((p) => ({ ...p, message: undefined })); }}
                      onBlur={() => { setTouched((p) => ({ ...p, message: true })); validateField("message"); }}
                      placeholder="Write a message"
                      className="[font-family:'Poppins',Helvetica] font-normal text-[#333] text-sm md:text-base leading-6 w-full h-full bg-transparent outline-none resize-none placeholder:text-[#999] min-h-[90px]"
                    />
                  </div>
                  {touched.message && errors.message && <p className="[font-family:'Poppins',Helvetica] text-red-500 text-xs mt-0.5 pl-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3 bg-[#0e2a47] rounded-lg cursor-pointer hover:bg-[#163a5c] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {submitStatus === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                      <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-sm md:text-base leading-normal tracking-wide">Sending...</span>
                    </span>
                  ) : (
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-sm md:text-base leading-normal tracking-wide">
                      Send Message
                    </span>
                  )}
                </button>
              </form>
              </div>
            </div>

            {/* ── Right: Image (flush, no blue bg) ── */}
            <div className="hidden lg:block relative min-h-[480px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Professional working on a laptop"
                src="https://c.animaapp.com/mo9sqx7fwKw0SH/img/rectangle-9477.png"
                loading="lazy"
              />
            </div>

            {/* Mobile image — shown below form on small screens */}
            <div className="lg:hidden w-full h-[260px] sm:h-[320px]">
              <img
                className="w-full h-full object-cover"
                alt="Professional working on a laptop"
                src="https://c.animaapp.com/mo9sqx7fwKw0SH/img/rectangle-9477.png"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          FOOTER — dark navy #013870
          ═══════════════════════════════════════════ */}
      <footer className="w-full bg-[#013870]" aria-label="Site footer">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 pt-12 md:pt-[69px] pb-8 md:pb-10">

          {/* Grid: brand | quick links | categories | contact info */}
          <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-8 lg:justify-between">

            {/* Brand */}
            <div className="flex flex-col gap-6 md:gap-8 w-full md:w-72 lg:w-96">
              <img
                className="w-[90px] md:w-[121px] h-auto object-contain"
                alt="ICS Global logo"
                src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776850331288-0.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6 tracking-[0]">
                Redefining possibilities and driving progress through technology and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-10 xl:gap-16 flex-1 lg:justify-end">

              {/* Quick Links */}
              <nav aria-label="Footer quick links" className="flex flex-col gap-4 min-w-[130px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6 tracking-[0]">
                  Quick links
                </h3>
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => {
                      if (link.anchor) {
                        // Navigate to home first, then scroll to anchor
                        navigate(link.path);
                        setTimeout(() => {
                          const el = document.getElementById(link.anchor!);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 100);
                      } else {
                        navigate(link.path);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="all-[unset] box-border [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 tracking-[0] cursor-pointer hover:opacity-80 transition-opacity text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Popular Categories */}
              <div className="flex flex-col gap-4 min-w-[180px] max-w-[237px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6 tracking-[0]">
                  Popular Categories
                </h3>
                {popularCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="all-[unset] box-border [font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 tracking-[0] cursor-pointer hover:opacity-80 transition-opacity text-left"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Contact Information */}
              <address className="not-italic flex flex-col gap-4 min-w-[200px] max-w-[260px]">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl md:text-2xl leading-6 tracking-[0]">
                  Contact Information
                </h3>
                <a
                  href="tel:+919890451547"
                  className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 tracking-[0] hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  Phone: +91 98904 51547
                </a>
                <a
                  href="mailto:info@idealizeer.com"
                  className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 tracking-[0] hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  Email: info@idealizeer.com
                </a>
                <a
                  href="https://www.google.com/maps/place/Idealizeer+Content+Solutions+Private+Limited/@18.5863645,73.7360261,17z/"
                  target="_blank"
                  rel="noreferrer"
                  className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 tracking-[0] hover:opacity-80 transition-opacity"
                >
                  Address: S. No. 138/1, City Centre,<br />
                  Office No. 211, Hinjawadi, Phase 1,<br />
                  Pune, Maharashtra 411057
                </a>
              </address>

            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 my-8 md:my-10" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6 tracking-[0] text-center sm:text-left">
              &copy; 2026 ICS Global, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  aria-label={icon.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex hover:opacity-80 transition-opacity"
                >
                  <img className="w-5 h-5" alt={icon.label} src={icon.src} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};
