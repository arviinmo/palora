import React from "react";

function OutputPass() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-5 w-max">
          <input
            type="text"
            className="
            form-control
            block
            w-max
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        placeholder="Your new password will appear here."

          />
        </div>
      </div>
    </div>
  );
}

export default OutputPass;
