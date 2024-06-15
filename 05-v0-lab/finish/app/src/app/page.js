"use client";

import { useCompletion } from "@ai-sdk/react";

export default function PRManager() {
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit
  } = useCompletion();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 dark:text-white">
            Travel Recommendation
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter a location:
              </label>
              <input
                type="text"
                value={input}
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="e.g., Paris, France"
                required
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Recommendation
            </button>
          </form>
        </div>
        {completion ? (
          <div className="p-6 bg-gray-50 rounded-b-lg dark:bg-gray-800">
            {completion}
          </div>
        ) : (
          <div className="p-6 bg-gray-50 rounded-b-lg dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Recommended Destination
              </h3>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="ml-1 text-gray-900 dark:text-white">
                  4.8
                </span>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Paris, France
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore the City of Light with its iconic
                  landmarks, charming cafes, and rich
                  cultural heritage.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
