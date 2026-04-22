const allMembers = [
  {
    name: "Pankaj Kathane",
    role: "Founder & Managing Director",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2@2x.png",
  },
  {
    name: "Dr. Arpita Kathane",
    role: "Director & Chief Operating Officer",
    bgImg: "https://c.animaapp.com/nj999vRB/img/image-4@2x.png",
  },
  {
    name: "Dr. M.C.Dileep Kumar",
    role: "Advisor",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-1@2x.png",
  },
  {
    name: "Dr. Gajanan Gulhane",
    role: "Advisor",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-2@2x.png",
  },
  {
    name: "Dr. Sanjayan T. S.",
    role: "Director, Global Alliance",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-3@2x.png",
  },
  {
    name: "Dr. Chandrani Singh",
    role: "Director, Academics and Research",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-4@2x.png",
  },
  {
    name: "Sumit Dorle",
    role: "Senior Manager & Business Development",
    bgImg: "https://c.animaapp.com/nj999vRB/img/image-5@2x.png",
  },
  {
    name: "Mrunal Gadre",
    role: "Client Relations & Delivery Manager",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-5@2x.png",
  },
  {
    name: "Amol Ghadge",
    role: "Team Lead, Course Development and Marketing",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-6@2x.png",
  },
  {
    name: "Madhuri Sheth",
    role: "Academic Content Writer",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-7@2x.png",
  },
  {
    name: "Vaishnavi Havale",
    role: "Team Lead, Digital Marketing",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-8@2x.png",
  },
  {
    name: "Janbaj Jadhav",
    role: "Team Lead, UI/UX and Tech Development",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-9@2x.png",
  },
  {
    name: "Rutuja Nare",
    role: "UI/UX Design And Graphic Design",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-10@2x.png",
  },
  {
    name: "Wajid Tamboli",
    role: "Software Developer",
    imgSrc: "https://c.animaapp.com/nj999vRB/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-11@2x.png",
  },
];

const socialIcons = [
  { src: "https://c.animaapp.com/nj999vRB/img/social-icon-26.png", alt: "Facebook" },
  { src: "https://c.animaapp.com/nj999vRB/img/vector-13.png", alt: "X" },
  { src: "https://c.animaapp.com/nj999vRB/img/social-icon-27.png", alt: "LinkedIn" },
];

interface MemberCardProps {
  name: string;
  role: string;
  imgSrc?: string;
  bgImg?: string;
}

const MemberCard = ({ name, role, imgSrc, bgImg }: MemberCardProps) => (
  <article className="flex flex-col items-start w-full">
    {/* Photo area — image overlaps above the gradient card background */}
    <div className="relative w-full flex-shrink-0" style={{ height: 252 }}>
      {/* Gradient background starts 45px from top so image head extends above */}
      <div
        className="absolute left-0 right-0 bottom-0 rounded-[16px_16px_0px_0px]"
        style={{
          top: 45,
          background: "linear-gradient(180deg, #044893 0%, #051b30 100%)",
        }}
      />
      {imgSrc && (
        <img
          className="absolute inset-0 w-full h-full object-cover object-top z-[1]"
          alt={name}
          src={imgSrc}
          loading="lazy"
        />
      )}
      {bgImg && (
        <div
          className="absolute inset-0 z-[1] bg-contain bg-center bg-no-repeat rounded-[16px_16px_0px_0px]"
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      )}
    </div>
    {/* Info card */}
    <div className="flex flex-col items-start gap-4 p-4 w-full bg-white rounded-[0px_0px_4px_4px] flex-1">
      <div className="flex flex-col items-start justify-center gap-[3px] w-full">
        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-black text-lg sm:text-xl md:text-2xl tracking-[0] leading-[30px]">
          {name}
        </h3>
        <p className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-6">
          {role}
        </p>
      </div>
      {/* Social icons — single horizontal row, left-aligned */}
      <nav
        className="flex flex-row items-center gap-2"
        aria-label={`${name} social links`}
      >
        {socialIcons.map((icon, i) => (
          <a
            key={i}
            href="#"
            aria-label={`${name} on ${icon.alt}`}
            className="inline-flex items-center justify-center w-[18px] h-[18px] flex-shrink-0 hover:opacity-70 transition-opacity"
          >
            <img className="w-[18px] h-[18px] block" alt={icon.alt} src={icon.src} loading="lazy" />
          </a>
        ))}
      </nav>
    </div>
  </article>
);

export const LeadershipGallerySection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full items-stretch">
      {allMembers.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          role={member.role}
          imgSrc={member.imgSrc}
          bgImg={member.bgImg}
        />
      ))}
    </div>
  );
};
