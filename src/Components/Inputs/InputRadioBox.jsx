import { useEffect, useState } from "react";

const selectedIcon = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11.9773"
      cy="12.5002"
      r="11.2727"
      fill="#E5F4FD"
      stroke="#1F8AF4"
      stroke-width="1.40909"
    />
    <circle cx="11.9774" cy="12.5004" r="5.98864" fill="#1F8AF4" />
  </svg>
);
const unSelectedIcon = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12.7043"
      cy="12.5002"
      r="11.2727"
      fill="#E7E8E7"
      stroke="#A9A9A9"
      stroke-width="1.40909"
    />
    <circle cx="12.7045" cy="12.5004" r="5.98864" fill="#A9A9A9" />
  </svg>
);

const InputRadioBox = ({
  serial,
  labelText1,
  labelText2,
  id,
  name,
  handle,
  required = false,
  valid = [],
}) => {
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => {
    // console.log("e ", e?.type);
    return setSelected(e?.value);
  };

  // console.log("selected ", selected);
  useEffect(() => {
    console.log("selected useE ", selected);
    handle({
      name: name,
      value: selected,
    });
  }, [selected]);
  // console.log("radioValue ", radioValue);

  const id1 = `${id}box1`;
  const id2 = `${id}box2`;

  return (
    <>
      <div className="flex gap-20 items-center my-2">
        <span className="w-12 h-12 flex justify-center items-center text-xl font-semibold rounded-full bg-[#1FBAFF33]">
          {serial}
        </span>
        <div className="flex gap-20 items-center">
          <RadioItem
            id={id1}
            labelText={labelText1?.text}
            radioValue={labelText1?.value}
            name={name}
            handle={handleChange}
            required={required}
            selected={selected}
          />

          <RadioItem
            id={id2}
            labelText={labelText2?.text}
            radioValue={labelText2?.value}
            name={name}
            handle={handleChange}
            required={required}
            selected={selected}
          />
        </div>
      </div>
    </>
  );
};

export default InputRadioBox;

function RadioItem({
  id,
  name,
  labelText,
  radioValue,
  handle,
  required = false,
  valid = [],
  selected,
}) {
  // console.log("RadioItem ", { labelText, radioValue });
  return (
    <label
      title={labelText}
      htmlFor={id}
      className={`form-control border-[#A1C7EC] rounded-md px-8 py-3 border-2 border-dashed cursor-pointer ${
        selected == radioValue && "border-blue bg-[#1FBAFF4D]"
      }`}
    >
      <div
        // htmlFor={id}
        className="label py-1.5 flex gap-4 items-center"
      >
        {selected == radioValue ? (
          <span>{selectedIcon}</span>
        ) : (
          <span>{unSelectedIcon}</span>
        )}
        <span className="label-text"> {labelText} </span>
        <input
          type="radio"
          name={name}
          id={id}
          className="radio hidden"
          required={required}
          value={radioValue}
          onChange={(e) => handle(e.target)}
        />
      </div>
    </label>
  );
}
