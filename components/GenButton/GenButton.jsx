import React from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  Symbols,
} from "../Charecter";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GenButton(props) {
  const handleGeneratePassword = () => {
    if (
      !props.includeUpperCase &&
      !props.includeLowerCase &&
      !props.includeNumbers &&
      !props.includeSymbols
    ) {
      notify("To generate password you must select at least one checkbox", true);
      props.setPassword("")
    } else {
      let characterList = "";
      if (props.includeNumbers) {
        characterList = characterList + numbers;
      }
      if (props.includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (props.includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (props.includeSymbols) {
        characterList = characterList + Symbols;
      }
      props.setPassword(createPassword(characterList));
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

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < props.passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  return (
    <div>
      <div className="flex text-center items-center justify-center lg:mt-8 xs:mt-2">
        <button
          type="button"
          className="flex w-max ml-2 px-2 pt-2.5 pb-2 bg-[#ffb800] text-white font-medium font-Poppins sl:text-lg xs:text-sm leading-normal rounded-lg shadow-md hover:bg-[#ebaa00] hover:shadow-lg focus:bg-[#ebaa00] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d69b00] active:shadow-lg transition duration-150 ease-in-out align-center"
          onClick={handleGeneratePassword}
        >
          Generate My Password!
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default GenButton;
