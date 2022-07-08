import React from "react";
import { useState } from "react";


function RadioOptions(props) {

  return (
    <div className="font-Poppins md:ml-5 w-max text-xl sm:ml-2">
      <div className="flex items-center mb-1 mt-5">
        <input
          id="default-checkbox"
          type="checkbox"
          value="SymbolsIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="xs:text-base ml-2 sl:text-xl font-medium text-gray-900 dark:text-gray-300"
          checked={props.includeSymbols}
          onChange={(e) => props.setIncludeSymbols(e.target.checked)}
        >
          Include Symbols
        </label>
      </div>
      <div className="flex items-center mb-1">
        <input
          id="default-checkbox"
          type="checkbox"
          value="NumbersIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="xs:text-base ml-2 sl:text-xl font-medium text-gray-900 dark:text-gray-300"
          checked={props.includeNumbers}
          onChange={(e) => props.setIncludeNumbers(e.target.checked)}
        >
          Include Numbers
        </label>
      </div>
      <div className="flex items-center mb-1">
        <input
          id="default-checkbox"
          type="checkbox"
          value="UppercaseIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="xs:text-base ml-2 sl:text-xl font-medium text-gray-900 dark:text-gray-300"
          checked={props.includeUpperCase}
          onChange={(e) => props.setIncludeUpperCase(e.target.checked)}
        >
          Include Uppercase Characters
        </label>
      </div>
      <div className="flex items-center mb-1">
        <input
          id="default-checkbox"
          type="checkbox"
          value="LowercaseIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="xs:text-base ml-2 sl:text-xl font-medium text-gray-900 dark:text-gray-300"
          checked={props.includeLowerCase}
          onChange={(e) => props.setIncludeLowerCase(e.target.checked)}
        >
          Include Lowercase Characters
        </label>
      </div>
    </div>
  );
}

export default RadioOptions;
