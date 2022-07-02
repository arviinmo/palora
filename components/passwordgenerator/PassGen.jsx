import React from "react";
import PassLength from "../passLength/PassLength";

function PassGen() {
  return (
    <div>
      <div className="flex flex-row">
        <h1 className="text-2xl font-Yeseva">Password Length:</h1>
        <PassLength />
      </div>
    </div>
  );
}

export default PassGen;
