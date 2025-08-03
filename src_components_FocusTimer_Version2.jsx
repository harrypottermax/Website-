import React, { useState, useRef } from "react";

const motivationalQuotes = [
  "Stay focused, dino champ! 🦖",
  "Every 25 minutes brings you closer to your goals!",
  "Keep going, you're doing great!",
  "Remember: small steps, big results!"
];

export default function FocusTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const intervalRef = useRef(null);

  const playSound = () => {
    const audio = new Audio("https://cdn.pixabay.com/audio/2022/10/16/audio_12cb08e4c7.mp3");
    audio.play();
  };

  const startTimer = () => {
    if (isActive) return;
    setIsActive(true);
    setShowMotivation(false);
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s === 0) {
          if (minutes === 0) {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setShowMotivation(true);
            playSound();
            return 0;
          }
          setMinutes((m) => m - 1);
          return 59;
        }
        return s - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
    setShowMotivation(false);
  };

  const handleMinutesChange = (e) => {
    setMinutes(Number(e.target.value));
    setSeconds(0);
  };

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-peach rounded-xl p-6 shadow flex flex-col items-center">
      <h3 className="text-xl font-bold mb-2 text-mint">Focus Timer ⏰</h3>
      <div className="flex gap-2 mb-2 items-center">
        <input
          type="number"
          min={1}
          max={60}
          value={minutes}
          onChange={handleMinutesChange}
          disabled={isActive}
          className="w-14 text-center rounded bg-cream border px-2 py-1"
        />
        <span>minutes</span>
      </div>
      <div className="font-mono text-3xl mb-4">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="flex gap-2">
        <button
          className="bg-mint text-white px-4 py-1 rounded-full font-bold hover:bg-blue"
          onClick={startTimer}
          disabled={isActive}
        >
          Start
        </button>
        <button
          className="bg-lilac text-white px-4 py-1 rounded-full font-bold hover:bg-pink"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      {showMotivation && (
        <div className="mt-4 text-center text-lg font-semibold text-blue animate-bounce">
          {motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}
        </div>
      )}
    </div>
  );
}