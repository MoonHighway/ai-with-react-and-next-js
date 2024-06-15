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
    <div className="mx-auto w-full max-w-md py-24 flex flex-col items-stretch">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="w-full border border-gray-300 rounded shadow-xl p-4 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          value={input}
          placeholder="Where do you want to visit?"
          onChange={handleInputChange}
        />
      </form>
      {completion ? (
        <div className="bg-blue-100 border border-blue-200 text-blue-800 rounded p-4 shadow">
          {completion}
        </div>
      ) : (
        <div>Recommend places to visit in...</div>
      )}
    </div>
  );
}
