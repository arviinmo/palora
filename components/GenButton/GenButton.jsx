import React from "react";

function GenButton() {
  return (
    <div className="flex text-center items-center justify-center mt-10">
      <button
        type="button"
        className="inline-block px-2 py-3 text-xl font-Poppins bg-purple-800 text-white font-medium leading-tight rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Generate My Password!
      </button>
    </div>
  );
}

export default GenButton;
