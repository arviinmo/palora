import React from "react";
import GenButton from "../GenButton/GenButton";
import OutputPass from "../OutputPass/OutputPass";
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
        <OutputPass />
    </div>
  );
}

export default PassGen;
