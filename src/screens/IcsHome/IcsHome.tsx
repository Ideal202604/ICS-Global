import { useState, useEffect, useCallback, useRef, TouchEvent as RTE, MouseEvent as RME } from "react";
import { useNavigate } from "react-router-dom";
import { ConferenceCtaSection } from "./sections/ConferenceCtaSection";
import { ConferenceHighlightSection } from "./sections/ConferenceHighlightSection";
import { ContactAndFooter } from "../../components/ContactAndFooter";
import { LeadershipGallerySection } from "./sections/LeadershipGallerySection";
import { SolutionsGridSection } from "./sections/SolutionsGridSection";

/* ─────────────────────────────────────────
   Home Blogs & Guides Carousel
   Exact replica of About page BlogsAndGuidesSection
───────────────────────────────────────── */
const homeBlogCards = [
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image.png",
    imageAlt: "Classroom interior with desks and chairs",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image-1.png",
    imageAlt: "People collaborating around a wooden table",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
  {
    image: "https://c.animaapp.com/mo857b66QKlwSd/img/image-3.png",
    imageAlt: "School campus building with a running track",
    title: "Expanding your product business",
    description: "Explore cost-effective marketing strategies to push your product to new heights.",
  },
];

const HomeBlogsCarousel = (): JSX.Element => {
  const total = homeBlogCards.length;
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const extendedCards = [homeBlogCards[total - 1], ...homeBlogCards, homeBlogCards[0]];
  const displayIndex = index + 1;
  const needsSnap = index >= total || index < 0;
  const snapDisplayIndex = index >= total ? 1 : index < 0 ? total : displayIndex;
  const showTransition = isAnimating && !needsSnap;
  const currentDisplayIdx = needsSnap ? snapDisplayIndex : displayIndex;

  const goTo = useCallback((next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(next);
  }, [isAnimating]);

  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIsAnimating(true);
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    setIndex((prev) => {
      if (prev >= total) return 0;
      if (prev < 0) return total - 1;
      return prev;
    });
  }, [total]);

  const dragState = useRef({ startX: 0, dragging: false });
  const SWIPE_THRESHOLD = 50;

  const onPointerDown = (clientX: number) => {
    dragState.current = { startX: clientX, dragging: true };
    setPaused(true);
  };
  const onPointerUp = (clientX: number) => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    const diff = dragState.current.startX - clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) goNext(); else goPrev();
    }
    setPaused(false);
  };

  const handleTouchStart = (e: RTE<HTMLDivElement>) => onPointerDown(e.touches[0].clientX);
  const handleTouchEnd = (e: RTE<HTMLDivElement>) => onPointerUp(e.changedTouches[0].clientX);
  const handleMouseDown = (e: RME<HTMLDivElement>) => { e.preventDefault(); onPointerDown(e.clientX); };
  const handleMouseUp = (e: RME<HTMLDivElement>) => onPointerUp(e.clientX);
  const handleMouseLeave = (e: RME<HTMLDivElement>) => { if (dragState.current.dragging) onPointerUp(e.clientX); setPaused(false); };

  const realIndex = ((index % total) + total) % total;

  return (
    <section
      aria-labelledby="home-blogs-heading"
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "clamp(56px, 5.8vw, 112px)",
        paddingBottom: "clamp(48px, 4.2vw, 80px)",
        backgroundColor: "#1566a0",
      }}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <div className="flex flex-col items-center gap-4 max-w-[768px] mx-auto text-center">
            <h2
              id="home-blogs-heading"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white tracking-[0.88px] leading-[54px] w-full"
              style={{ fontSize: "clamp(28px, 2.3vw, 44px)" }}
            >
              Blogs and guides
            </h2>
            <p
              className="[font-family:'Poppins',Helvetica] font-normal text-white leading-7 tracking-[0] w-full"
              style={{ fontSize: "clamp(15px, 0.94vw, 18px)" }}
            >
              Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing"
          onMouseEnter={() => { if (!dragState.current.dragging) setPaused(true); }}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next slide"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          {/* Overflow wrapper */}
          <div className="overflow-hidden mx-6 md:mx-16 lg:mx-24">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentDisplayIdx * 100}%)`,
                transition: showTransition ? "transform 0.6s ease-in-out" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCards.map((card, i) => (
                <div key={`home-blog-${i}`} className="w-full flex-shrink-0 px-4">
                  <article className="relative flex items-start overflow-hidden rounded-2xl border border-solid border-white bg-white shadow-md max-w-[592px] mx-auto">
                    <img
                      className="self-stretch object-cover flex-shrink-0"
                      style={{ width: "clamp(110px, 13.5vw, 260px)" }}
                      alt={card.imageAlt}
                      src={card.image}
                      loading="lazy"
                    />
                    <div className="flex flex-1 flex-col items-start justify-between gap-5 p-5 md:p-8 h-full">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <h3
                          className="[font-family:'Inter',Helvetica] font-semibold leading-7 tracking-[0] text-gray-900 w-full"
                          style={{ fontSize: "clamp(14px, 0.94vw, 18px)" }}
                        >
                          {card.title}
                        </h3>
                        <p
                          className="[font-family:'Inter',Helvetica] font-normal leading-6 tracking-[0] text-gray-600 w-full"
                          style={{ fontSize: "clamp(12px, 0.83vw, 16px)" }}
                        >
                          {card.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                        aria-label={`Learn more about ${card.title}`}
                      >
                        <span
                          className="[font-family:'Inter',Helvetica] font-medium leading-6 tracking-[0] text-[#0072de]"
                          style={{ fontSize: "clamp(12px, 0.83vw, 16px)" }}
                        >
                          Learn more
                        </span>
                        <img
                          className="w-5 h-5"
                          alt=""
                          src="https://c.animaapp.com/mo857b66QKlwSd/img/chevron-right.svg"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {homeBlogCards.map((_, i) => (
              <button
                key={`home-dot-${i}`}
                type="button"
                onClick={() => { setIsAnimating(true); setIndex(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${realIndex === i ? "bg-white scale-125" : "bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Conference", path: "/conference" },
];

export const IcsHome = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden w-full">

      {/* ══════════════════════════════════════
          HERO + ABOUT — single full-bleed background
          Figma: 1920×1725px background image covering
          both the hero text (top-centre) and the
          About section (bottom-right ~1195px from top)
          ══════════════════════════════════════ */}
      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{ minHeight: "clamp(600px, 89.8vw, 1725px)" }}
      >
        {/* Full background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt="Hero background"
          src="https://c.animaapp.com/mo9jwd9rECorqJ/img/group-40124.png"
        />

        {/* ── Navbar ── */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 md:px-16 lg:px-24 py-5 lg:py-[26px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="all-[unset] box-border cursor-pointer flex-shrink-0"
            aria-label="Go to home"
          >
            <img
              className="h-12 w-auto"
              alt="ICS Global logo"
              src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776945808032-0.png"
            />
          </button>

          {/* Nav pill */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:inline-flex items-center gap-8 xl:gap-10 bg-white rounded-[10px] border border-solid border-gray-200 shadow-shadow-sm px-4 py-3.5"
          >
            {navItems.map((item, i) => {
              const isDisabled = (item as any).disabled === true;
              return (
                <button
                  key={item.label}
                  type="button"
                    onClick={() => navigate(item.path)}
                    className="all-[unset] box-border cursor-pointer"
                >
                  <span
                    className={`[font-family:'Poppins',Helvetica] text-base leading-6 tracking-[0] whitespace-nowrap ${
                      i === 0
                        ? "font-semibold text-primary-1"
                        : "font-medium text-primary-3"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* CTA button — hidden on mobile, shown md+ */}
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="all-[unset] box-border hidden md:inline-flex items-center justify-center gap-2 h-12 px-5 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
              Join the Community
            </span>
          </button>

          {/* Mobile hamburger — visible only below lg */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer gap-[5px] flex-shrink-0"
          >
            <span className="block w-6 h-[2.5px] bg-white rounded-full" />
            <span className="block w-6 h-[2.5px] bg-white rounded-full" />
            <span className="block w-6 h-[2.5px] bg-white rounded-full" />
          </button>
        </header>

        {/* ── Mobile full-screen overlay menu ── */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{ background: "linear-gradient(160deg, #29a8e0 0%, #1a6fa8 60%, #0e2a47 100%)" }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <button
                type="button"
                onClick={() => { navigate("/"); setMenuOpen(false); }}
                className="cursor-pointer"
                aria-label="Go to home"
              >
                <img
                  className="h-12 w-auto object-contain"
                  alt="ICS Global logo"
                  src="https://c.animaapp.com/nj999vRB/img/uploaded-asset-1776945808032-0.png"
                />
              </button>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center cursor-pointer"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="4" x2="24" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                  <line x1="24" y1="4" x2="4" y2="24" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* White card */}
            <div className="mx-4 mt-4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl">
              {navItems.map((item) => {
                const isActive = item.path === "/";
                const isDisabled = item.disabled;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => { navigate(item.path); setMenuOpen(false); }}
                    className="w-full text-left cursor-pointer"
                  >
                    <div className={`mx-2 my-1 px-6 py-4 rounded-xl ${isActive ? "bg-[#1a4f72]" : ""}`}>
                      <span
                        className={`[font-family:'Poppins',Helvetica] text-xl font-bold leading-tight ${
                          isActive ? "text-white" : "text-[#555f6d]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Connect CTA */}
              <div className="px-4 py-4 mt-1">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center py-5 bg-[#1a4f72] rounded-xl cursor-pointer hover:bg-[#163f5c] transition-colors"
                >
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl leading-tight">
                    Connect
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Hero content — centred in the upper portion ── */}
        <div
          className="absolute inset-x-0 z-10 flex flex-col items-center text-center px-4"
          style={{ top: "clamp(130px, 14.5vw, 280px)" }}
        >
          <div className="flex flex-col items-center gap-6 relative max-w-[768px] mx-auto">
            {/* Heading */}
            <div className="relative w-full">
              <h1 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-4xl md:text-5xl lg:text-6xl text-center tracking-[1.20px] leading-tight lg:leading-[72px]">
                Education Reimagined for a Changing World
              </h1>
              <img
                className="absolute hidden md:block"
                style={{ top: "70px", left: "20px", width: "282px", height: "6px" }}
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/mo9jwd9rECorqJ/img/line.png"
              />
            </div>
            {/* Subheading */}
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[0] leading-7">
              Powered by Intelligence, Guided by Purpose
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0e467a] rounded-lg overflow-hidden border border-solid border-white cursor-pointer hover:bg-[#0a3560] transition-colors"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base md:text-lg text-center leading-6 whitespace-nowrap">
                Explore Our Impact
              </span>
              <img
                className="w-5 h-5"
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/mo9jwd9rECorqJ/img/arrow-up-left.svg"
              />
            </button>
          </div>
        </div>

          {/* ── About section ──
            Desktop (lg+): absolutely anchored to bottom-right inside the hero background.
            Mobile/tablet: flows below hero content, full-width, inside the same section. */}

        {/* DESKTOP — absolute bottom-right */}
        <div
          id="about"
          className="hidden lg:block absolute z-10 right-0 px-24"
          style={{ bottom: "clamp(40px, 8vw, 120px)", maxWidth: "650px" }}
        >
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2">
              <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6">
                About Us
              </p>
              <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[44px] tracking-[0.88px] leading-[54px]">
                Welcome To<br />ICS GLOBAL
              </h2>
            </div>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-lg leading-7">
              <span className="text-[#eeeeee]">Idealizeer Content Solutions Private Limited (ICS Global) is an AI-enabled ecosystem driving{" "}</span>
              <span className="font-medium text-white">quality education, community development, and sustainable institutional growth</span>
              <span className="text-[#eeeeee]">{" "}for a rapidly evolving world. At ICS Global, we believe that the future of institutions lies at the intersection of human insight and artificial intelligence. Founded a decade ago, we operate at the intersection of education, industry, and technology — co-creating learning experiences that prepare learners for tomorrow&#39;s opportunities while advancing each partner university&#39;s strategic vision.</span>
            </p>
            <button
              type="button"
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-3.5 py-3 bg-primary-1 rounded-lg overflow-hidden border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
                Partner for Transformation
              </span>
              <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/mo9jwd9rECorqJ/img/arrow-up-left.svg" />
            </button>
          </div>
        </div>
      </section>

      {/* MOBILE / TABLET — flows as its own section below the hero, same background colour */}
      <section
        id="about"
        className="lg:hidden w-full px-6 md:px-16 py-10"
        style={{ background: "linear-gradient(160deg, #0e2a47 0%, #1a4f72 100%)" }}
      >
        <div className="flex flex-col items-start gap-5 max-w-2xl mx-auto">
          <div className="flex flex-col items-start gap-2">
            <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm leading-6">
              About Us
            </p>
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-3xl md:text-[38px] tracking-[0.88px] leading-tight">
              Welcome To<br />ICS GLOBAL
            </h2>
          </div>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-sm md:text-base leading-7">
            <span className="text-[#eeeeee]">Idealizeer Content Solutions Private Limited (ICS Global) is an AI-enabled ecosystem driving{" "}</span>
            <span className="font-medium text-white">quality education, community development, and sustainable institutional growth</span>
            <span className="text-[#eeeeee]">{" "}for a rapidly evolving world. At ICS Global, we believe that the future of institutions lies at the intersection of human insight and artificial intelligence. Founded a decade ago, we operate at the intersection of education, industry, and technology — co-creating learning experiences that prepare learners for tomorrow&#39;s opportunities while advancing each partner university&#39;s strategic vision.</span>
          </p>
          <button
            type="button"
            className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-1 rounded-lg overflow-hidden border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm leading-6 whitespace-nowrap">
              Partner for Transformation
            </span>
            <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/mo9jwd9rECorqJ/img/arrow-up-left.svg" />
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOLUTIONS WE DELIVER
          ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/nj999vRB/img/rectangle-39435.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20">
          <div className="flex flex-col items-center gap-3 mb-10">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-black text-3xl md:text-[44px] text-center tracking-[0.88px] leading-[54px]">
              Solutions We Deliver
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-primary-3 text-base md:text-lg text-center leading-7">
              Empowering growth through intelligent, scalable solutions.
            </p>
          </div>
          <SolutionsGridSection />
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0e467a] rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
                See More
              </span>
              <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-4.svg" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MEET OUR TEAM
          ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/nj999vRB/img/rectangle-39436.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20">
          <div className="flex flex-col items-center gap-3 mb-10">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-3xl md:text-[44px] text-center tracking-[0.88px] leading-[54px]">
              Meet our Team
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center leading-7">
              Driven by expertise and united by purpose.
            </p>
          </div>
          <LeadershipGallerySection />
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0e467a] rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
                See More
              </span>
              <img className="w-5 h-5" alt="" aria-hidden="true" src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-4.svg" />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED BY / PARTNER LOGOS
          ══════════════════════════════════════ */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-center gap-4 mb-10">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-gray-900 text-3xl md:text-[44px] text-center tracking-[0.88px] leading-[54px]">
              Educational Leaders Choose ICS Global
            </h2>
            <p className="max-w-[602px] [font-family:'Poppins',Helvetica] font-normal text-primary-3 text-base md:text-lg text-center leading-7">
              Our work speaks through the trust of reputed academic and professional institutions worldwide
            </p>
          </div>
          <img
            className="w-full h-auto mx-auto"
            alt="Partner logos"
            src="https://c.animaapp.com/nj999vRB/img/frame-1321318068.svg"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONFERENCE CTA
          ══════════════════════════════════════ */}
      <section className="w-full">
        <ConferenceCtaSection />
      </section>

      {/* ══════════════════════════════════════
          CORE PHILOSOPHY
          ══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/nj999vRB/img/rectangle-9508.svg"
        />
        <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-16 lg:px-24 py-14 md:py-20">
          <div className="flex flex-col items-center gap-3 mb-10">
            <h2 className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-3xl md:text-[44px] text-center tracking-[0.88px] leading-[54px]">
              Core Philosophy
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-base md:text-lg text-center leading-7">
              Driven by Purpose. Powered by Intelligence.
            </p>
          </div>
          <ConferenceHighlightSection />
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOGS & GUIDES
          ══════════════════════════════════════ */}
      <HomeBlogsCarousel />

      {/* ══════════════════════════════════════
          CONTACT / FOOTER
          ══════════════════════════════════════ */}
      <ContactAndFooter />
    </div>
  );
};
