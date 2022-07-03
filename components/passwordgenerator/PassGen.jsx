import React from "react";
import GenButton from "../GenButton/GenButton";
import PassLength from "../passLength/PassLength";
import RadioOptions from "../RadioOptions/RadioOptions";

function PassGen() {
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <h1 className="text-2xl font-Yeseva">Password Length:</h1>
        <PassLength />
      </div>
        <RadioOptions />
        <GenButton />
    </div>
  );
}

export default PassGen;
