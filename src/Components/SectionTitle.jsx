const SectionTitle = ({ title }) => {
  return (
    <>
      <h1
        style={{ fontSize: "clamp(2rem, 50%, 5rem)" }}
        className="text-darkBlue font-medium mx-auto leading-[54px] border-b-2 border-midBlue border-dashed px-2 w-fit"
      >
        {title}
      </h1>
    </>
  );
};

export default SectionTitle;
