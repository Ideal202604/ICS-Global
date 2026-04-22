export const Box = (): JSX.Element => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "355px" }}
      aria-label="Decorative banner"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Clip path group"
        src="https://c.animaapp.com/mo8kjxi6w6GxCH/img/clip-path-group.png"
      />
    </section>
  );
};
