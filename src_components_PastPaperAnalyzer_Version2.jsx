import React, { useState } from "react";

const mockAnalysis = {
  topics: [
    { name: "Algebra", questions: 8, repeats: 2 },
    { name: "Trigonometry", questions: 5, repeats: 1 },
    { name: "Geometry", questions: 4, repeats: 0 }
  ],
  difficulty: { easy: 7, medium: 6, hard: 4 }
};

export default function PastPaperAnalyzer() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setAnalysis(null);
  };

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-mint rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-pink">Past Paper Analyzer 📊</h3>
      <input
        type="file"
        className="mb-2"
        accept=".pdf,.docx,.jpg,.png"
        onChange={handleFile}
      />
      <button
        onClick={handleAnalyze}
        className="bg-blue text-white px-4 py-1 rounded-full font-bold"
        disabled={!file || loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {analysis && (
        <div className="mt-4">
          <div className="font-semibold mb-2">Topic Breakdown:</div>
          <ul className="mb-2">
            {analysis.topics.map(t => (
              <li key={t.name}>{t.name} — {t.questions} Qs (Repeats: {t.repeats})</li>
            ))}
          </ul>
          <div className="font-semibold mb-1">Difficulty:</div>
          <div className="flex gap-3">
            <span>Easy: <b>{analysis.difficulty.easy}</b></span>
            <span>Medium: <b>{analysis.difficulty.medium}</b></span>
            <span>Hard: <b>{analysis.difficulty.hard}</b></span>
          </div>
        </div>
      )}
    </div>
  );
}