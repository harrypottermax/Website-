import React, { useState } from "react";

const languages = [
  { code: "ta", label: "Tamil" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "te", label: "Telugu" },
  { code: "ml", label: "Malayalam" },
];

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [language, setLanguage] = useState("ta");
  const [example, setExample] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e) => {
    e.preventDefault();
    if (!word.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setMeaning(
        `Meaning of "${word}" in ${languages.find((l) => l.code === language).label}`
      );
      setExample(
        `Example usage of "${word}" in a sentence. (Translated)`
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-blue rounded-xl p-6 shadow">
      <h3 className="text-lg font-bold mb-2 text-mint">Multilingual Dictionary 📖</h3>
      <form onSubmit={handleTranslate} className="flex gap-2 mb-2">
        <input
          className="rounded bg-cream border px-2 py-1 flex-1"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter English word"
        />
        <select
          className="rounded bg-cream border px-2 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
        <button
          className="bg-mint text-white px-4 py-1 rounded-full font-bold"
          type="submit"
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate"}
        </button>
      </form>
      {meaning && (
        <div className="mt-2">
          <div className="font-semibold">{meaning}</div>
          <div className="text-sm text-gray-700">{example}</div>
        </div>
      )}
    </div>
  );
}