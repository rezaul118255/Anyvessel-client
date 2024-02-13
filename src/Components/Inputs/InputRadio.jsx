const InputRadio = ({
  id,
  name,
  labelText,
  radioValue1,
  radioValue2,
  radioValue3,
  radioText1,
  radioText2,
  radioText3,
  handle,
  required = false,
  valid = [],
}) => {
  const id1 = `${id}Radio1`;
  const id2 = `${id}Radio2`;
  const id3 = `${id}Radio3`;

  return (
    <div>
      <div
        className={`flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue px-2 py-3 ${valid?.some((err) => err == name)
          ? "!border-red-400 shadow-sm !shadow-red-300"
          : ""
          }`}
      >
        <label
          htmlFor={id1}
          className={` ${valid?.some((err) => err == name) ? "text-red-400" : ""
            }`}
        >
          {labelText}
        </label>
        <div className="flex items-center justify-between gap-3">
          <RadioI
            id={id1}
            name={name}
            radioValue={radioValue1}
            handle={handle}
            required={required}
            labelText={radioText1}
          />
          <RadioI
            id={id2}
            name={name}
            radioValue={radioValue2}
            handle={handle}
            required={required}
            labelText={radioText2}
          />
          <RadioI
            id={id3}
            name={name}
            radioValue={radioValue3}
            handle={handle}
            required={required}
            labelText={radioText3}
          />
        </div>
      </div>
    </div>
  );
};

export default InputRadio;

function RadioI({ id, name, labelText, radioValue, handle, required }) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 capitalize cursor-pointer border-midBlue rounded-[10px] overflow-hidden pr-2 focus-within:scale-[1.01] focus-within:shadow-midBlue`}
    >
      <input
        id={id}
        name={name}
        type="radio"
        onChange={(e) => handle(e.target)}
        required={required}
        value={radioValue}
        className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
      />

      <span className={`text-darkBlue`}>{labelText}</span>
    </label>
  );
}
