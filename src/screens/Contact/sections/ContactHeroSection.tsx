export const ContactHeroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="flex flex-col items-center text-center px-4 pt-[110px] pb-12 relative z-10"
    >
      <div className="flex flex-col max-w-screen-md items-center gap-4 w-full">
        <div className="flex flex-col items-center gap-3 w-full">
          <h1
            id="contact-hero-heading"
            className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-[36px] md:text-[44px] text-center tracking-[0.88px] leading-[54px] whitespace-nowrap"
          >
            <span className="text-white">Get In </span>
            <span className="text-gray-900">Touch</span>
          </h1>
        </div>
        <p className="self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-lg text-center leading-7">
          Feel free to reach out to us with any questions, feedback, or inquiries.
        </p>
      </div>
    </section>
  );
};
