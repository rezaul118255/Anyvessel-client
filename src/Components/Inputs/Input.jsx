import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Input = ({
  id,
  name,
  type = "text",
  labelText = "",
  placeholder,
  handle,
  icons = null,
  required = false,
  valid = [],
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  // console.log("errors ", valid);
  // console.log("errors ", valid);

  return (
    <div>
      {labelText && (
        <label
          className={`text-darkBlue text-sm inline-block mb-2 uppercase`}
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      <label
        htmlFor={id}
        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue ${valid?.some((err) => err == name)
            ? "!border-red-400 shadow-sm !shadow-red-300"
            : ""
          }`}
      >
        <input
          id={id}
          name={name}
          type={isShowPassword ? "text" : type}
          placeholder={placeholder}
          onChange={(e) => handle(e.target)}
          required={required}
          className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue text-sm"
        />

        {type === "password" ? (
          <span
            className="cursor-pointer px-3"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <LuEye /> : <LuEyeOff />}
          </span>
        ) : icons ? (
          <img className="w-4 h-4" src={icons} alt={placeholder} />
        ) : null}
      </label>
    </div>
  );
};

export default Input;
