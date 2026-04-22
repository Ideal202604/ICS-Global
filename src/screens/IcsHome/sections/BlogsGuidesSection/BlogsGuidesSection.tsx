const blogPosts = [
  {
    id: 1,
    image: "https://c.animaapp.com/nj999vRB/img/image-3@2x.png",
    title: "Expanding your product business",
    excerpt: "Explore cost-effective marketing strategies to position your product for growth in competitive markets and build a lasting brand presence.",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/nj999vRB/img/image-1@2x.png",
    title: "Expanding your product business",
    excerpt: "Explore cost-effective marketing strategies to position your product for growth in competitive markets and build a lasting brand presence.",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/nj999vRB/img/image-3@2x.png",
    title: "Expanding your product business",
    excerpt: "Explore cost-effective marketing strategies to position your product for growth in competitive markets and build a lasting brand presence.",
  },
];

export const BlogsGuidesSection = (): JSX.Element => {
  return (
    <div className="absolute top-[6450px] left-0 w-full">
      {/* Background */}
      <img
        className="absolute top-0 left-[calc(50.00%_-_961px)] w-[1920px] h-[610px]"
        alt="Rectangle background"
        src="https://c.animaapp.com/nj999vRB/img/rectangle-39437.svg"
      />

      {/* SVG decorative group */}
      <img
        className="absolute top-0 left-[calc(50.00%_-_961px)] w-[1920px] h-[610px] opacity-30"
        alt="Decorative group"
        src="https://c.animaapp.com/nj999vRB/img/group-40222_1.svg"
      />

      {/* Content wrapper */}
      <div className="relative flex flex-col items-center gap-12 pt-16 pb-20 px-4">

        {/* Section header */}
        <div className="flex flex-col items-center gap-4 w-[768px]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-white text-[44px] text-center tracking-[0.88px] leading-[54px]">
            Blogs and guides
          </div>
          <p className="self-stretch font-normal text-white text-lg text-center leading-7 relative [font-family:'Poppins',Helvetica] tracking-[0]">
            Your Learning Hub for Ideas, Strategies &amp; Breakthroughs.
          </p>
        </div>

        {/* Side image */}
        <img
          className="absolute top-0 right-0 relative self-stretch w-80 object-cover opacity-20 pointer-events-none"
          alt="Blog decorative"
          src="https://c.animaapp.com/nj999vRB/img/image@2x.png"
        />

        {/* Blog cards row */}
        <div className="flex items-start gap-8 relative z-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex w-[592px] items-start relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e5e7eb]"
            >
              {/* Card image */}
              <img
                className="w-[220px] h-full object-cover flex-shrink-0 self-stretch"
                alt={post.title}
                src={post.image}
              />

              {/* Card content */}
              <div className="flex flex-col items-start gap-6 p-8 relative flex-1 grow">
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                  <div className="relative self-stretch [font-family:'Belgiano_Serif-Regular',Helvetica] font-normal text-[#111111] text-2xl tracking-[0.48px] leading-[32px]">
                    {post.title}
                  </div>
                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-500 text-sm tracking-[0] leading-6">
                    {post.excerpt}
                  </p>
                </div>

                <button className="all-[unset] box-border inline-flex items-center gap-2 cursor-pointer group">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#0e467a] text-base tracking-[0] leading-6 whitespace-nowrap group-hover:underline">
                    Learn more
                  </span>
                  <img
                    className="w-5 h-5"
                    alt="Chevron right"
                    src="https://c.animaapp.com/nj999vRB/img/chevron-right-3.svg"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
