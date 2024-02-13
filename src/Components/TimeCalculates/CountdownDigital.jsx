import React, { useEffect, useState } from "react";
import calculateTimeDifference from "../../Utils/Calculators";

function CountdownDigital({ parentStyle }) {
  const endTime = new Date("2024-06-02T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeDifference(endTime)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTimeRemaining = calculateTimeDifference(endTime);
      setTimeRemaining(updatedTimeRemaining);

      // Check if the countdown has reached zero
      if (
        updatedTimeRemaining.days === 0 &&
        updatedTimeRemaining.hours === 0 &&
        updatedTimeRemaining.minutes === 0 &&
        updatedTimeRemaining.seconds === 0
      ) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  console.log("timeRemaining ", timeRemaining);

  const itemCopy = (name, value) => {
    return (
      <p className="w-16 h-16 p-2 rounded-full bg-white text-black flex flex-col justify-center items-center gap-2">
        <span className="leading-none text-base md:text-lg">{name}</span>
        <strong className="leading-none text-lg sm:text-xl md:text-2xl font-bold">
          {Math.abs(value)}
        </strong>
      </p>
    );
  };

  return (
    <div
      className={`flex gap-2 md:gap-3 lg:gap-4 font-poppins items-center ${parentStyle}`}
    >
      {itemCopy("Days", timeRemaining.days)}
      <strong className="text-primary font-bold text-2xl">:</strong>
      {itemCopy("Hours", timeRemaining.hours)}
      <strong className="text-primary font-bold text-2xl">:</strong>
      {itemCopy("Minutes", timeRemaining.minutes)}
      <strong className="text-primary font-bold text-2xl">:</strong>
      {itemCopy("Seconds", timeRemaining.seconds)}
    </div>
  );
}

export default CountdownDigital;
