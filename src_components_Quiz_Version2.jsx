import React, { useState } from "react";

const sampleQuiz = [
  {
    q: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: 0,
    explanation: "Delhi is the capital city of India."
  },
  {
    q: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: 1,
    explanation: "Jupiter is the largest planet."
  }
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (idx) => {
    setSelected(idx);
    setShowResult(true);
    if (idx === sampleQuiz[step].answer) {
      setScore((s) => s + 1);
    }
  };

  const nextQ = () => {
    setSelected(null);
    setShowResult(false);
    setStep((s) => s + 1);
  };

  if (step >= sampleQuiz.length) {
    return (
      <div className="bg-yellow rounded-xl p-6 shadow text-center">
        <h3 className="text-xl font-bold text-pink mb-2">Quiz Complete!</h3>
        <p>Your score: <span className="font-bold">{score}</span> / {sampleQuiz.length}</p>
      </div>
    );
  }

  const cur = sampleQuiz[step];

  return (
    <div className="bg-yellow rounded-xl p-6 shadow">
      <h3 className="font-bold mb-2 text-lilac">Quick Quiz 📝</h3>
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
          <div className="text-blue">{cur.explanation}</div>
          <button
            onClick={nextQ}
            className="bg-blue text-white px-4 py-1 rounded-full font-bold mt-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}