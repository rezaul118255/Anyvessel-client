export default function InputBorder({
  id,
  labelText,
  type = "text",
  placeholder,
  name,
  handle,
  style,
}) {
  if (type === "password") {
    return (
      <div>
        {labelText && <label htmlFor={id}> {labelText} </label>}
        <input
          className={`py-2.5 px-2 font-poppins font-normal text-primary focus:outline-none focus:border-primary border border-gray-300 rounded inline-block my-1 hover:bg-white hover:text-primary hover:border-primary transition duration-300 focus:shadow-md text-lg ${style}`}
          type={type}
          name={name}
          onChange={(e) => handle(e.target)}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div>
      {labelText && <label htmlFor={id}> {labelText} </label>}
      <input
        className={`py-2.5 px-2 font-poppins font-normal text-primary focus:outline-none focus:border-primary border border-gray-300 rounded inline-block my-1 hover:bg-white hover:text-primary hover:border-primary transition duration-300 focus:shadow-md text-lg ${style}`}
        type={type}
        name={name}
        onChange={(e) => handle(e.target)}
        placeholder={placeholder}
      />
    </div>
  );
}
