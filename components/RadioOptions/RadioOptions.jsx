import React from 'react'

function RadioOptions() {
  return (
    <div className="font-Poppins md:ml-5 bg-cyan-400 w-max text-lg sm:ml-2">
        <div className="flex items-center mb-1 mt-5">
            <input id="default-checkbox" type="checkbox" value="SymbolsIncluded" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="xs:text-base ml-2 sl:text-lg font-medium text-gray-900 dark:text-gray-300">Include Symbols</label>
        </div>
        <div className="flex items-center mb-1">
            <input id="default-checkbox" type="checkbox" value="NumbersIncluded" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="xs:text-base ml-2 sl:text-lg font-medium text-gray-900 dark:text-gray-300">Include Numbers</label>
        </div>
        <div className="flex items-center mb-1">
            <input id="default-checkbox" type="checkbox" value="UppercaseIncluded" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="xs:text-base ml-2 sl:text-lg font-medium text-gray-900 dark:text-gray-300">Include Uppercase Characters</label>
        </div>
        <div className="flex items-center mb-1">
            <input id="default-checkbox" type="checkbox" value="LowercaseIncluded" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="xs:text-base ml-2 sl:text-lg font-medium text-gray-900 dark:text-gray-300">Include Lowercase Characters</label>
        </div>
    </div>
  )
}

export default RadioOptions