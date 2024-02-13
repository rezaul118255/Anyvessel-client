const SelectOption = ({
  id,
  name,
  handle,
  items = [],
  defaultOption,
  labelText,
}) => {
  return (
    <>
      {labelText && (
        <label
          htmlFor={id}
          className="text-darkBlue uppercase text-sm inline-block mb-2"
        >
          {labelText}
        </label>
      )}
      <div className="sm:px-[3px] py-[7px]">
        <select
          id={id}
          name={name}
          onChange={(e) => handle(e.target)}
          className="text-darkBlue w-full border border-midBlue rounded-[10px] outline-none focus:border-blue p-2 sm:pr-3"
        >
          <option value=""> {defaultOption} </option>
          {items?.length
            ? items?.map(({ text, value }, idx) => (
                <option key={idx} value={value}>
                  {text}
                </option>
              ))
            : null}
        </select>
      </div>
    </>
  );
};

export default SelectOption;
