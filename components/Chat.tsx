"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-full max-w-xl">
      <div className="p-10 h-80 overflow-y-scroll bg-white rounded-md shadow-md text-justify">
        {messages.map((m) => (
          <div key={m.id} className="mb-2">
            {m.role === "assistant" ? "🤖" : "👤"} : {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ecrivez quelque chose..."
          className="p-5 w-full mt-5 rounded-md shadow-md focus:shadow-lg focus:outline-none"
        />
      </form>
    </div>
  );
}
