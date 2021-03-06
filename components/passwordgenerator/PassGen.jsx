import React from "react";
import GenButton from "../GenButton/GenButton";
import OutputPass from "../Output&Copy/Output&Copy";
import RadioOptions from "../RadioOptions/RadioOptions";
import { useState } from "react";

function PassGen() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <h1 className="sl:text-3xl xs:text-xl font-Yeseva">Password Length:</h1>
        <input
          className="w-16 p-2 ml-2 border-2 border-solid rounded-lg font-Poppins outline-0"
          defaultValue={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          type="number"
          id="password-stregth"
          name="password-strength"
          max="128"
          min="6"
        />
      </div>
      <RadioOptions
        includeUpperCase={includeUpperCase}
        setIncludeUpperCase={setIncludeUpperCase}
        includeLowerCase={includeLowerCase}
        setIncludeLowerCase={setIncludeLowerCase}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
      />
      <GenButton
        includeUpperCase={includeUpperCase}
        setIncludeUpperCase={setIncludeUpperCase}
        includeLowerCase={includeLowerCase}
        setIncludeLowerCase={setIncludeLowerCase}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
        password={password}
        setPassword={setPassword}
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <OutputPass password={password} />
    </div>
  );
}

export default PassGen;
