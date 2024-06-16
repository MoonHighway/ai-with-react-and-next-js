"use client";

import { useState } from "react";
import { continueConversation } from "./actions";
import { readStreamableValue } from "ai/rsc";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div>
      {messages.map((m, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form
        action={async () => {
          const newMessages = [
            ...messages,
            { content: input, role: "user" }
          ];

          setMessages(newMessages);
          setInput("");

          const result = await continueConversation(
            newMessages
          );

          for await (const content of readStreamableValue(
            result
          )) {
            setMessages([
              ...newMessages,
              {
                role: "assistant",
                content
              }
            ]);
          }
        }}
      >
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Ask me a question about life..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
