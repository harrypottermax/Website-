import React from "react";

const colorMap = {
  mint: "bg-mint",
  blue: "bg-blue",
  peach: "bg-peach",
  pink: "bg-pink",
  lilac: "bg-lilac",
  yellow: "bg-yellow"
};

export default function FeatureCard({ title, desc, color }) {
  return (
    <div className={`rounded-2xl shadow-lg p-6 ${colorMap[color]} transition hover:scale-105`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}