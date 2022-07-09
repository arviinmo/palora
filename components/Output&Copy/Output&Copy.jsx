import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OutputPass(props) {
  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const handleCopyPassword = () => {
    if (props.password === "") {
      notify("copy to clipboard failed", true);
    } else {
      copyToClipboard(props.password);
      notify("Password successfully copied to clipboard");
    }
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center p-3 xs:mt-4">
        <div className="xs:text-xs sl:text-sm w-7/12 p-1.5 pt-2 rounded-md text-gray-700 font-bold font-Poppins bg-white bg-clip-padding border-2 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none">
          <input
            type="text"
            className="w-full border-none outline-0"
            placeholder="Your new password will appear here."
            value={props.password}
            readOnly
          />
        </div>

        <button
          type="button"
          className="flex w-max ml-1 p-1 content-center items-center xs:text-xt bg-[#53e01f]  text-white font-medium font-Poppins sl:text-base leading-normal uppercase rounded shadow-md hover:bg-[#4dd01d] hover:shadow-lg focus:bg-[#4dd01d] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#4dd01d] active:shadow-lg transition duration-150 ease-in-out align-center"
          onClick={handleCopyPassword}
        >
          Copy to Clipboard!
        </button>
      </div>
    </div>
  );
}

export default OutputPass;
