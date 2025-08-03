import React, { useState } from "react";

const samplePapers = [
  {
    state: "Tamil Nadu",
    year: 2023,
    subject: "Math",
    grade: "12",
    language: "English",
    file: "#",
    answerKey: "#"
  },
  {
    state: "Maharashtra",
    year: 2022,
    subject: "Physics",
    grade: "12",
    language: "Hindi",
    file: "#",
    answerKey: "#"
  },
  {
    state: "West Bengal",
    year: 2023,
    subject: "Biology",
    grade: "11",
    language: "Bengali",
    file: "#",
    answerKey: "#"
  }
];

const allStates = [...new Set(samplePapers.map(p => p.state))];
const allSubjects = [...new Set(samplePapers.map(p => p.subject))];
const allGrades = [...new Set(samplePapers.map(p => p.grade))];
const allYears = [...new Set(samplePapers.map(p => p.year))];
const allLanguages = [...new Set(samplePapers.map(p => p.language))];

export default function QuestionPaperHub() {
  const [state, setState] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");

  const filtered = samplePapers.filter(p =>
    (!state || p.state === state) &&
    (!subject || p.subject === subject) &&
    (!grade || p.grade === grade) &&
    (!year || p.year === Number(year)) &&
    (!language || p.language === language)
  );

  return (
    <div className="bg-cream rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-mint">Question Paper Hub 📚</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        <select className="rounded bg-blue px-2 py-1" value={state} onChange={e => setState(e.target.value)}>
          <option value="">State</option>
          {allStates.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select className="rounded bg-blue px-2 py-1" value={grade} onChange={e => setGrade(e.target.value)}>
          <option value="">Grade</option>
          {allGrades.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select className="rounded bg-blue px-2 py-1" value={subject} onChange={e => setSubject(e.target.value)}>
          <option value="">Subject</option>
          {allSubjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select className="rounded bg-blue px-2 py-1" value={year} onChange={e => setYear(e.target.value)}>
          <option value="">Year</option>
          {allYears.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select className="rounded bg-blue px-2 py-1" value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="">Language</option>
          {allLanguages.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blue text-white">
              <th className="p-2">State</th>
              <th>Grade</th>
              <th>Year</th>
              <th>Subject</th>
              <th>Language</th>
              <th>Paper</th>
              <th>Answer Key</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length ? filtered.map((p, i) => (
              <tr key={i} className="text-center border-b">
                <td className="p-2">{p.state}</td>
                <td>{p.grade}</td>
                <td>{p.year}</td>
                <td>{p.subject}</td>
                <td>{p.language}</td>
                <td>
                  <a href={p.file} className="text-mint underline" target="_blank" rel="noreferrer">Download</a>
                </td>
                <td>
                  <a href={p.answerKey} className="text-blue underline" target="_blank" rel="noreferrer">Answer Key</a>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-400">No papers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}