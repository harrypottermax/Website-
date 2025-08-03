import React, { useState } from "react";

const sampleRooms = [
  { id: 1, topic: "Math: Algebra", users: 3 },
  { id: 2, topic: "Physics: Laws of Motion", users: 2 },
  { id: 3, topic: "Chemistry: Reactions", users: 1 }
];

const aiResponses = [
  "Let's solve this together!",
  "Try breaking the problem into smaller parts.",
  "Here's a hint: Think about the formula you learned.",
  "Great team effort! Who wants to answer next?"
];

function getRandomResponse() {
  return aiResponses[Math.floor(Math.random() * aiResponses.length)];
}

export default function AIStudyRooms() {
  const [joined, setJoined] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const joinRoom = (room) => {
    setJoined(room);
    setMessages([
      { sender: "ai", text: `Welcome to the "${room.topic}" study room! Ask doubts or collaborate.` }
    ]);
  };

  const leaveRoom = () => {
    setJoined(null);
    setMessages([]);
    setInput("");
  };

  const sendMsg = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: input },
      { sender: "ai", text: getRandomResponse() }
    ]);
    setInput("");
  };

  if (!joined) {
    return (
      <div className="bg-blue rounded-xl p-6 shadow">
        <h3 className="font-bold text-lg mb-2 text-mint">AI Study Rooms 🤝</h3>
        <div className="mb-2 text-gray-700">Join a topic room and collaborate with peers and AI tutor!</div>
        <ul>
          {sampleRooms.map((r) => (
            <li key={r.id} className="flex justify-between items-center mb-2">
              <span>
                <b>{r.topic}</b> <span className="text-sm text-gray-500">({r.users} online)</span>
              </span>
              <button
                className="bg-mint text-white px-4 py-1 rounded-full font-bold"
                onClick={() => joinRoom(r)}
              >
                Join
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-blue rounded-xl p-6 shadow flex flex-col h-[350px]">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-bold text-mint flex-1">{joined.topic}</h3>
        <button className="bg-pink text-white px-3 py-1 rounded-full" onClick={leaveRoom}>Leave</button>
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
      </div>
      <form onSubmit={sendMsg} className="flex gap-2">
        <input
          className="flex-1 rounded bg-cream border px-2 py-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask or chat..."
        />
        <button
          type="submit"
          className="bg-mint text-white px-4 py-1 rounded-full font-bold"
        >
          Send
        </button>
      </form>
    </div>
  );
}