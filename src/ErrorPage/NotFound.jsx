import React from "react";
import ButtonPrimary from "../Components/Buttons/ButtonPrimary";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
          404 Not Found
        </h1>
        <p>Your visited page not found. You may go home page.</p>
        <ButtonPrimary>
          <a href="/"> Back to home page </a>
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default NotFound;
