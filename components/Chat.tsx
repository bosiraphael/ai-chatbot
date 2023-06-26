"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <div className="p-5 h-64 overflow-y-scroll bg-white rounded-md shadow-md">
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
