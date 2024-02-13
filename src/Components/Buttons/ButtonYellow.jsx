export default function ButtonYellow({
  children,
  onClick,
  style,
  type = "button",
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`w-[155px] font-sm py-2 px-8 bg-yellow rounded-full md:rounded-r-full mt-2 lg:mt-0 border-l-2 border-white hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300 ${style}`}
      >
        {children}
      </button>
    </>
  );
}
