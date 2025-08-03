import React, { useState } from "react";

const mindMap = {
  Math: {
    Algebra: ["Linear Equations", "Quadratic Equations"],
    Geometry: ["Triangles", "Circles"],
    "Trigonometry": ["Sin/Cos/Tan", "Identities"]
  }
};

export default function ConceptFlowchart() {
  const [subject, setSubject] = useState("Math");
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-yellow rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-blue">Smart Concept Flowchart 🧠</h3>
      <select
        className="rounded bg-cream px-2 py-1 mb-2"
        value={subject}
        onChange={e => { setSubject(e.target.value); setSelected(""); }}
      >
        {Object.keys(mindMap).map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <div className="flex gap-4 flex-wrap">
        {Object.entries(mindMap[subject]).map(([main, subs]) => (
          <div key={main} className="flex flex-col items-center">
            <button
              className={`bg-mint px-3 py-1 rounded font-bold mb-2 ${selected === main ? "ring-2 ring-blue" : ""}`}
              onClick={() => setSelected(main)}
            >
              {main}
            </button>
            {selected === main && (
              <div className="flex flex-col gap-1">
                {subs.map(sub => (
                  <button
                    key={sub}
                    className="bg-blue text-white px-2 py-1 rounded"
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 text-gray-700 text-sm">
        Click a concept to expand subtopics!
      </div>
    </div>
  );
}