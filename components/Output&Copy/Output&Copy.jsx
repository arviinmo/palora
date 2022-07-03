import React from "react";

function OutputPass() {
  return (
    <div>
      <div className="flex justify-center p-3 xs:mt-4">
        <input
          type="text"
          className="xs:text-xs sl:text-sm w-4/6 p-1.5 rounded-md text-gray-700 font-bold font-Poppins bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          placeholder="Your new password will appear here."
        />
        <button
          type="button"
          className="flex w-max ml-2 px-2 pt-2.5 pb-2 bg-[#53e01f]  text-white font-medium font-Poppins text-sm leading-normal uppercase rounded shadow-md hover:bg-[#4dd01d] hover:shadow-lg focus:bg-[#4dd01d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#4dd01d] active:shadow-lg transition duration-150 ease-in-out align-center"
        >
          Copy to Clipboard!
        </button>
      </div>
    </div>
  );
}

export default OutputPass;
