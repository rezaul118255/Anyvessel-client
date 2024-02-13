const InputToggle = ({ id, labelText, name, handle, valid }) => {
  return (
    <div
      className={`flex items-center gap-1 justify-between flex-wrap border-midBlue border rounded-[10px] overflow-hidden px-2 py-3 ${
        valid?.some((err) => err == name)
          ? "!border-red-400 shadow-sm !shadow-red-300"
          : ""
      }`}
    >
      <label
        htmlFor={id}
        className="w-full flex justify-between items-center cursor-pointer  uppercase"
      >
        <p
          className={`text-darkBlue pl-[10px] ${
            valid?.some((err) => err == name) ? "!text-red-400" : ""
          }`}
        >
          {labelText}
        </p>
        <div className="relative">
          <input
            id={id}
            name={name}
            type="checkbox"
            className="sr-only"
            onChange={(e) => handle(e.target)}
          />
          <div className="dot_Bg block bg-[#A1C7EC] w-10 h-5 rounded-full transition"></div>
          <div className="dot absolute left-1 top-[3px] bg-[#486786] w-3.5 h-3.5 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default InputToggle;
