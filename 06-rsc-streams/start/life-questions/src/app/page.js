"use client";

import { useState } from "react";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Chat() {
  const [input, setInput] = useState("");
  return (
    <div>
      <div>{input}</div>
      <input
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        value={input}
        placeholder="Ask me a question about life..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
