import React from "react";
import GenButton from "../GenButton/GenButton";
import OutputPass from "../Output&Copy/Output&Copy";
import RadioOptions from "../RadioOptions/RadioOptions";
import { useState } from "react";

function PassGen() {
  const [passwordLength, setPasswordLength] = useState(16);


  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <h1 className="sl:text-3xl xs:text-xl font-Yeseva">Password Length:</h1>
        <input className="p-2 ml-2 w-14 rounded-lg font-Poppins" defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number" id="password-stregth" name="password-strength" max="26" min="6" />
      </div>
        <RadioOptions />
        <GenButton />
        <OutputPass />
    </div>
  );
}

export default PassGen;
