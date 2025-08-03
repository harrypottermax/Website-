import React, { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "ta", label: "Tamil" },
  { code: "bn", label: "Bengali" },
  { code: "te", label: "Telugu" },
];

export default function AIChat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi, I'm your AI Study Assistant! Ask me anything from any subject." }
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setLoading(true);

    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "ai",
          text:
            language === "en"
              ? "This is a sample answer with explanation and example."
              : "यह एक उदाहरण उत्तर है।"
        }
      ]);
      setLoading(false);
    }, 1100);

    setInput("");
  };

  return (
    <div className="bg-mint rounded-xl p-6 shadow flex flex-col h-[350px]">
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-bold text-blue flex-1">AI Study Assistant 🤖</h3>
        <select
          className="rounded bg-cream border ml-2 px-2 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>
      <div className="flex-1 overflow-auto bg-cream rounded p-2 mb-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${msg.sender === "ai" ? "text-blue" : "text-gray-800 text-right"}`}
          >
            <span className="inline-block px-2 py-1 rounded bg-white">{msg.text}</span>
          </div>
        ))}
        {loading && <div className="text-gray-500">AI is thinking...</div>}
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          className="flex-1 rounded bg-cream border px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue text-white px-4 py-1 rounded-full font-bold"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}