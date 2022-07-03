import React from "react";

function GenButton() {
  return (
    <div className="flex text-center items-center justify-center lg:mt-8 xs:mt-2">
      <button
        type="button"
        className="flex w-max ml-2 px-2 pt-2.5 pb-2 bg-[#ffb800] text-white font-medium font-Poppins text-lg leading-normal rounded-lg shadow-md hover:bg-[#ebaa00] hover:shadow-lg focus:bg-[#ebaa00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d69b00] active:shadow-lg transition duration-150 ease-in-out align-center"
        >
        Generate My Password!
      </button>
    </div>
  );
}

export default GenButton;
