import { useEffect, useState } from "react";

const InputDate = ({ id, handle, name, valid, labelText, styleCol = null }) => {
  const [dates, setDates] = useState({
    year: "",
    month: "",
    day: "",
  });
  // 1900 to 2025
  const yearsRange = Array.from({ length: 126 }, (_, i) => 1900 + i).reverse();
  // 1 to 31
  const daysRange = Array.from({ length: 31 }, (_, i) => 1 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChanges = (e) => {
    const target = e?.target;

    setDates({
      ...dates,
      [target?.name]: target?.value,
    });
  };

  useEffect(() => {
    handle({ name: name, value: dates });
  }, [dates]);
  // console.log("dates ", dates);

  return (
    <>
      <div
        className={`flex items-center gap-1 justify-between flex-wrap border-midBlue border rounded-[10px] overflow-hidden pr-2 ${
          valid?.some((err) => err == name)
            ? "!border-red-400 shadow-sm !shadow-red-300"
            : ""
        }`}
      >
        {labelText && (
          <label
            htmlFor={id}
            className={`text-darkBlue pl-[10px] capitalize ${
              valid?.some((err) => err == name) ? "!text-red-400" : ""
            }`}
          >
            {labelText}
          </label>
        )}
        <div
          className={`px-2 flex items-center flex-wrap gap-2 sm:gap-x-2 ${
            styleCol ? styleCol : null
          }`}
        >
          {/* years */}

          <SimilarItem
            id={id}
            items={yearsRange}
            name="year"
            handle={handleChanges}
            defaultV="Year"
          />

          {/* month */}
          <SimilarItem
            id={id}
            items={months}
            name="month"
            handle={handleChanges}
            defaultV="Month"
          />

          {/* day */}
          <SimilarItem
            id={id}
            items={daysRange}
            name="day"
            handle={handleChanges}
            defaultV="Day"
          />
        </div>
      </div>
    </>
  );
};

export default InputDate;

function SimilarItem({ handle, name, items, id, defaultV = "" }) {
  const Id = `${id}_${name}`;
  return (
    <div className="sm:px-[3px] py-[7px]">
      <select
        onChange={handle}
        name={name}
        id={Id}
        className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
      >
        <option value="">{defaultV}</option>
        {items &&
          items.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
      </select>
    </div>
  );
}
