import React from "react";

const topUsers = [
  { name: "Aryan", score: 180, badge: "🌟" },
  { name: "Priya", score: 170, badge: "🥇" },
  { name: "Aditya", score: 160, badge: "🥈" },
  { name: "Meena", score: 150, badge: "🥉" }
];

export default function Leaderboard() {
  return (
    <div className="bg-lilac rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-blue">Leaderboard & Rewards 🏆</h3>
      <ul>
        {topUsers.map((u, i) => (
          <li key={u.name} className="flex justify-between py-1">
            <span>
              <span className="font-semibold">{i + 1}. {u.name}</span> {u.badge}
            </span>
            <span>{u.score} pts</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-sm text-gray-700">
        Earn coins & badges by focusing, acing quizzes, and staying active!
      </div>
    </div>
  );
}