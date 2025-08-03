import React, { useState } from "react";

const moods = [
  { key: "happy", color: "bg-mint", label: "😊 Happy" },
  { key: "tired", color: "bg-blue", label: "😴 Tired" },
  { key: "stressed", color: "bg-peach", label: "😣 Stressed" },
  { key: "excited", color: "bg-pink", label: "🤩 Excited" },
];

const moodTips = {
  happy: "Keep up the good mood! Reward yourself with a meme.",
  tired: "Take a short break, hydrate, and try some deep breathing.",
  stressed: "Everything will be okay! Try a short walk or listen to calming music.",
  excited: "Channel your excitement into studying something new today!",
};

const memes = {
  happy: "https://i.imgur.com/4M7IWwP.gif",
  tired: "https://i.imgur.com/gK7wK6p.gif",
  stressed: "https://i.imgur.com/1XJxQZg.gif",
  excited: "https://i.imgur.com/j1j1JOD.gif",
};

export default function MoodPlanner() {
  const [mood, setMood] = useState(null);
  const [routine, setRoutine] = useState("");
  const [showRoutine, setShowRoutine] = useState(false);

  const handleRoutine = () => {
    setShowRoutine(true);
  };

  return (
    <div className="bg-yellow rounded-xl p-6 shadow">
      <h3 className="text-lg font-bold mb-2 text-pink">Mood Tracker & Study Planner 😃</h3>
      <div className="flex gap-2 mb-2">
        {moods.map((m) => (
          <button
            key={m.key}
            className={`${m.color} px-3 py-1 rounded-full font-bold`}
            onClick={() => setMood(m.key)}
          >
            {m.label}
          </button>
        ))}
      </div>
      {mood && (
        <div className="mb-2">
          <div className="font-semibold">{moodTips[mood]}</div>
          <img src={memes[mood]} alt={mood} className="h-24 rounded mx-auto my-2" />
        </div>
      )}
      <textarea
        className="w-full rounded bg-cream border p-2 mb-2"
        rows={2}
        placeholder="Plan your routine by subject (e.g., 9-10am: Math, 10-11am: Science)"
        value={routine}
        onChange={(e) => setRoutine(e.target.value)}
      />
      <button
        className="bg-pink text-white px-4 py-1 rounded-full font-bold"
        onClick={handleRoutine}
      >
        Save Routine
      </button>
      {showRoutine && (
        <div className="mt-2 text-gray-700">
          <span className="font-semibold">Your Routine: </span>{routine}
        </div>
      )}
    </div>
  );
}