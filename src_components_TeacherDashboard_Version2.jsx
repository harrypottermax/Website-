import React, { useState } from "react";

const initialStudents = [
  { name: "Aryan", progress: "80%", coins: 120 },
  { name: "Priya", progress: "90%", coins: 180 },
];

export default function TeacherDashboard() {
  const [question, setQuestion] = useState("");
  const [students, setStudents] = useState(initialStudents);
  const [reward, setReward] = useState(10);

  const handleUpload = (e) => {
    e.preventDefault();
    alert("Question uploaded: " + question);
    setQuestion("");
  };

  const sendReward = (idx) => {
    setStudents(students.map((s, i) =>
      i === idx ? { ...s, coins: s.coins + Number(reward) } : s
    ));
    alert(`Sent ${reward} coins to ${students[idx].name}`);
  };

  return (
    <div className="bg-mint rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-blue">Teacher Dashboard 🧑‍🏫</h3>
      <form onSubmit={handleUpload} className="mb-3">
        <input
          className="bg-cream border rounded px-2 py-1 mb-2 w-full"
          placeholder="Upload question for students"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <button className="bg-blue text-white px-4 py-1 rounded-full font-bold" type="submit">
          Upload Question
        </button>
      </form>
      <div className="mb-2 font-semibold">Student Progress:</div>
      <table className="w-full bg-white rounded mb-3">
        <thead>
          <tr className="bg-blue text-white">
            <th className="p-2">Name</th>
            <th>Progress</th>
            <th>Coins</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={s.name} className="text-center border-b">
              <td className="p-2">{s.name}</td>
              <td>{s.progress}</td>
              <td>{s.coins}</td>
              <td>
                <button
                  className="bg-mint text-white px-2 py-1 rounded-full font-bold"
                  onClick={() => sendReward(i)}
                >
                  +{reward} 🪙
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label className="mr-2 font-semibold">Reward Amount:</label>
        <input
          className="border rounded px-2 py-1 w-16"
          type="number"
          min={1}
          value={reward}
          onChange={e => setReward(e.target.value)}
        />
      </div>
    </div>
  );
}