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
  { src: "https://c.animaapp.com/nj999vRB/img/social-icon-26.png", alt: "X" },
  { src: "https://c.animaapp.com/nj999vRB/img/vector-13.png", alt: "Facebook" },
  { src: "https://c.animaapp.com/nj999vRB/img/social-icon-27.png", alt: "LinkedIn" },
];

interface MemberCardProps {
  name: string;
  role: string;
  imgSrc?: string;
  bgImg?: string;
}

const MemberCard = ({ name, role, imgSrc, bgImg }: MemberCardProps) => (
  <div className="flex flex-col w-full h-full">
    {/* Photo */}
    <div className="relative w-full aspect-[1.06] rounded-[16px_16px_0px_0px] overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]" />
      {imgSrc && (
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt={name}
          src={imgSrc}
        />
      )}
      {bgImg && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      )}
    </div>
    {/* Info */}
    <div className="p-4 bg-white rounded-[0px_0px_4px_4px] flex flex-col gap-4 flex-1">
      <div className="flex flex-col gap-1">
        <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-lg leading-[26px]">
          {name}
        </div>
        <div className="[font-family:'Inter',Helvetica] font-normal text-gray-600 text-sm leading-5">
          {role}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {socialIcons.map((icon, i) => (
          <a key={i} href="#" aria-label={icon.alt} className="inline-flex hover:opacity-70 transition-opacity">
            <img className="w-[18px] h-[18px]" alt={icon.alt} src={icon.src} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export const LeadershipGallerySection = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 w-full items-stretch">
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
