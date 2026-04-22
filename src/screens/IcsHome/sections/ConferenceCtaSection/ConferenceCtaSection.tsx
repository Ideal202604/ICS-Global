export const ConferenceCtaSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-6 w-full text-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-5xl md:text-[64px] text-center leading-tight tracking-[-0.5px]">
          ICMLBDA 2026
        </div>
        <p className="[font-family:'Inter',Helvetica] font-medium text-white text-lg md:text-2xl text-center leading-8 max-w-[700px]">
          International Conference on Machine Learning, Big Data &amp; Analytics
        </p>
        <p className="[font-family:'Inter',Helvetica] font-medium text-white text-sm md:text-base text-center leading-6">
          Innovating Intelligence. Empowering Data-Driven Futures.
        </p>
      </div>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          type="button"
          className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-1 rounded-lg border border-solid border-white cursor-pointer hover:opacity-90 transition-opacity"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base leading-6 whitespace-nowrap">
            Register Now
          </span>
          <img
            className="w-5 h-5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-4.svg"
          />
        </button>
        <button
          type="button"
          className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg border border-solid border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <span className="[font-family:'Poppins',Helvetica] font-medium text-[#0e467a] text-base leading-6 whitespace-nowrap">
            Submit Paper
          </span>
          <img
            className="w-5 h-5"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/nj999vRB/img/arrow-up-left-5.svg"
          />
        </button>
      </div>
    </div>
  );
};
