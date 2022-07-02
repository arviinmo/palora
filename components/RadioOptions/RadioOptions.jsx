import React from 'react'

function RadioOptions() {
  return (
    <div><div className="flex">
    <div className="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    </div>
    <div className="ml-2 text-sm">
        <label htmlFor="helper-radio" className="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
        <p id="helper-radio-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
    </div>
</div></div>
  )
}

export default RadioOptions