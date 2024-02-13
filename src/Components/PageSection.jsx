export default function PageSection({ children, className }) {
  return (
    <section
      className={`py-6 sm:py-10 md:py-16 lg:py-20 overflow-hidden ${
        className ? className : ""
      }`}
    >
      <div className="container">{children}</div>
    </section>
  );
}
