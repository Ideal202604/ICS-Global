export const Box = (): JSX.Element => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "355px" }}
      aria-label="Decorative banner"
    >
      <img
        className="fixed inset-0 w-full h-full object-cover"
        alt=""
        aria-hidden="true"
        src="https://c.animaapp.com/mo9tbehwSBR47T/img/clip-path-group.png"
      />
    </section>
  );
};
