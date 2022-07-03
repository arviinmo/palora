import React from "react";

function OutputPass() {
  return (
    <div>
      <div className="flex justify-center p-3">
        <input
          type="text"
          className="w-2/4 p-1.5 rounded-md text-gray-700 font-bold font-Poppins bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Your new password will appear here."
        />
        <button
          type="button"
          className="flex w-max ml-2 px-2 pt-2.5 pb-2 bg-blue-600  text-white font-medium font-Poppins text-sm leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out align-center"
        >
          Copy to Clipboard!
        </button>
      </div>
    </div>
  );
}

export default OutputPass;
