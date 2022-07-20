import React from "react";

function RadioOptions(props) {
  return (
    <div className="text-xl font-Poppins md:ml-5 w-max sm:ml-2">
      <div className="flex items-center mt-5 mb-1">
        <input
          type="checkbox"
          value="SymbolsIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded outline-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-400"
          onChange={(e) => props.setIncludeSymbols(!props.includeSymbols)}
        />
        <label
          className="ml-2 font-medium text-gray-900 xs:text-base sl:text-xl dark:text-gray-300"
          checked={props.includeSymbols}
        >
          Include Symbols
        </label>
      </div>
      <div className="flex items-center mb-1">
        <input
          type="checkbox"
          value="NumbersIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded outline-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-400"
          onChange={(e) => props.setIncludeNumbers(!props.includeNumbers)}
        />
        <label
          className="ml-2 font-medium text-gray-900 xs:text-base sl:text-xl dark:text-gray-300"
          checked={props.includeNumbers}
        >
          Include Numbers
        </label>
      </div>
      <div className="flex items-center mb-1">
        <input
          type="checkbox"
          value="UppercaseIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded outline-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-400"
          onChange={(e) => props.setIncludeUpperCase(!props.includeUpperCase)}
        />
        <label
          className="ml-2 font-medium text-gray-900 xs:text-base sl:text-xl dark:text-gray-300"
          checked={props.includeUpperCase}
        >
          Include Uppercase Characters
        </label>
      </div>
      <div className="flex items-center mb-1">
        <input
          type="checkbox"
          value="LowercaseIncluded"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded outline-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-400"
          onChange={(e) => props.setIncludeLowerCase(!props.includeLowerCase)}
        />
        <label
          className="ml-2 font-medium text-gray-900 xs:text-base sl:text-xl dark:text-gray-300"
          checked={props.includeLowerCase}
        >
          Include Lowercase Characters
        </label>
      </div>
    </div>
  );
}

export default RadioOptions;
