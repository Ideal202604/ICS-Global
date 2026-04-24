const whyItems = [
  {
    id: 1,
    text: "AI-enabled, future-ready ecosystem",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223.png",
  },
  {
    id: 2,
    text: "Strong focus on quality education and research excellence",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223-1.png",
  },
  {
    id: 3,
    text: "Commitment to community-driven impact",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223-2.png",
  },
  {
    id: 4,
    text: "Strategies aligned with sustainability and scalability",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40224.png",
  },
  {
    id: 5,
    text: "A balance of human expertise and intelligent systems",
    icon: "https://c.animaapp.com/mo863n0tfCwuCJ/img/group-40223-3.png",
  },
];

export const BrandingMarketingSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="why-ics-global-title"
      className="w-full"
    >
      <div className="max-w-[1728px] mx-auto px-4 md:px-8 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left: photo */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: "577px" }}
              alt="Students collaborating outdoors"
              src="https://c.animaapp.com/mo863n0tfCwuCJ/img/rectangle-9512.png"
            />
          </div>
          {/* Right: Why ICS Global */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6">
            <h2
              id="why-ics-global-title"
              className="[font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-black text-[36px] md:text-[48px] tracking-[0.56px] leading-tight"
            >
              Why ICS Global
            </h2>
            <ul className="flex flex-col items-start gap-3 list-none m-0 p-0 w-full">
              {whyItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-1.5 px-2 w-full">
                  <img
                    className="w-6 h-6 flex-shrink-0"
                    alt=""
                    aria-hidden="true"
                    src={item.icon}
                  />
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-primary-4 text-lg md:text-xl tracking-[0.32px] leading-[1.6]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
