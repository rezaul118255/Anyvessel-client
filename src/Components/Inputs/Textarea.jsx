const Textarea = ({
  id,
  name,
  labelText = null,
  placeholder = "",
  handle,
  required = false,
  valid = [],
  dValue = "",
  rows = 3,
}) => {
  // console.log("errors ", valid);

  return (
    <div>
      {labelText && (
        <label
          name={name}
          htmlFor={id}
          className="text-darkBlue text-sm inline-block mb-2"
        >
          {labelText}
        </label>
      )}

      <textarea
        rows={rows}
        id={id}
        name={name}
        onChange={(e) => handle(e.target)}
        placeholder={placeholder}
        required={required}
        defaultValue={dValue}
        className={`w-full outline-none px-2 py-3 flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue ${
          valid?.some((err) => err == name)
            ? "!border-red-400 shadow-sm !shadow-red-300"
            : ""
        }`}
      />
    </div>
  );
};

export default Textarea;
