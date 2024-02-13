import React, { useEffect, useState } from "react";
import calculateTimeDifference from "../../Utils/Calculators";

function Countdown() {
  const endTime = new Date("2024-05-02T00:00:00");
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

  // console.log("timeRemaining ", timeRemaining);

  const itemCopy = (name, value) => (
    <p className="w-16 h-16 p-2 rounded-full bg-white text-black flex flex-col justify-center items-center gap-0.5">
      <strong className="leading-none text-lg">{Math.abs(value)}</strong>
      <span className="leading-none text-sm">{name}</span>
    </p>
  );

  return (
    <div className="flex gap-4 font-poppins">
      {itemCopy("Days", timeRemaining.days)}
      {itemCopy("Hours", timeRemaining.hours)}
      {itemCopy("Minutes", timeRemaining.minutes)}
      {itemCopy("Seconds", timeRemaining.seconds)}
    </div>
  );
}

export default Countdown;
