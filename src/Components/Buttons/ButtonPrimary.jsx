export default function ButtonPrimary({
  children,
  onClick,
  style,
  type = "button",
  styleReverse = false,
  loading
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className={`inline-block py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-9  my-1 transition duration-300 hover:shadow-md rounded-md ${
          styleReverse
            ? "bg-white text-blue border-blue hover:bg-blue border hover:border-transparent hover:text-white"
            : "hover:bg-white hover:text-blue hover:border-blue bg-blue border border-transparent text-white"
        } ${style}`}
      >
        {children}
      </button>
    </>
  );
}
