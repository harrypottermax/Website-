import React, { useState, useRef } from "react";

const moodTracks = {
  happy: {
    label: "Lo-fi Chill",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  tired: {
    label: "Classical Focus",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  stressed: {
    label: "Nature Sounds",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  motivated: {
    label: "Motivation Beats",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  }
};

export default function StudyMusic() {
  const [mood, setMood] = useState("happy");
  const audioRef = useRef();

  const handleMoodChange = (m) => {
    setMood(m);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  return (
    <div className="bg-cream rounded-xl p-6 shadow">
      <h3 className="text-lg font-bold mb-2 text-blue">Mood-Based Study Music 🎵</h3>
      <div className="flex gap-2 mb-2">
        {Object.keys(moodTracks).map((m) => (
          <button
            key={m}
            className={`px-3 py-1 rounded-full font-bold ${
              mood === m ? "bg-mint text-white" : "bg-blue text-white"
            }`}
            onClick={() => handleMoodChange(m)}
          >
            {moodTracks[m].label}
          </button>
        ))}
      </div>
      <audio
        ref={audioRef}
        src={moodTracks[mood].url}
        controls
        className="w-full mt-2"
        autoPlay
        loop
      />
    </div>
  );
}