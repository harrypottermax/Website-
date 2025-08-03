import React, { useState } from "react";

const battleQuestions = [
  {
    q: "Which is the longest river in India?",
    options: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    answer: 0
  },
  {
    q: "Who is known as the Father of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Subhash Chandra Bose"],
    answer: 0
  }
];

export default function QuizBattleMode() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (idx) => {
    setSelected(idx);
    setShowResult(true);
    if (idx === battleQuestions[step].answer) setScore((s) => s + 1);
    setOpponentScore((s) => s + (Math.random() > 0.5 ? 1 : 0));
  };

  const nextQ = () => {
    setSelected(null);
    setShowResult(false);
    setStep((s) => s + 1);
  };

  if (step >= battleQuestions.length) {
    return (
      <div className="bg-yellow rounded-xl p-6 shadow text-center">
        <h3 className="text-xl font-bold text-pink mb-2">Quiz Battle Complete!</h3>
        <div className="mb-2">
          <span className="font-bold">You:</span> {score} vs <span className="font-bold">Opponent:</span> {opponentScore}
        </div>
        <div className={score > opponentScore ? "text-mint" : score === opponentScore ? "text-blue" : "text-pink"}>
          {score > opponentScore ? "You Win! 🏆" : score === opponentScore ? "Draw! 🤝" : "Opponent Wins! 😮"}
        </div>
      </div>
    );
  }

  const cur = battleQuestions[step];

  return (
    <div className="bg-yellow rounded-xl p-6 shadow">
      <h3 className="font-bold mb-2 text-lilac">Quiz Battle Mode ⚔️</h3>
      <div className="mb-4">{cur.q}</div>
      <div>
        {cur.options.map((op, idx) => (
          <button
            key={op}
            onClick={() => handleAnswer(idx)}
            disabled={showResult}
            className={`
              block w-full text-left px-4 py-2 mb-2 rounded 
              ${selected === idx && showResult
                ? (idx === cur.answer ? "bg-mint text-white" : "bg-pink text-white")
                : "bg-white hover:bg-mint hover:text-white"}
              transition
            `}
          >
            {op}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-2">
          {selected === cur.answer ? (
            <div className="text-mint font-semibold">Correct!</div>
          ) : (
            <div className="text-pink font-semibold">Oops! Wrong.</div>
          )}
          <button
            onClick={nextQ}
            className="bg-blue text-white px-4 py-1 rounded-full font-bold mt-2"
          >
            Next
          </button>
        </div>
      )}
      <div className="mt-2 text-sm text-gray-500">
        You: {score} | Opponent: {opponentScore}
      </div>
    </div>
  );
}