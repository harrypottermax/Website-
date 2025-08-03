import React, { useState } from "react";

const shopItems = [
  { name: "Motivational Sticker", cost: 30 },
  { name: "Quiz Hint", cost: 50 },
  { name: "Unlock Flowchart", cost: 100 },
];

export default function EduCoinBank() {
  const [coins, setCoins] = useState(150);
  const [msg, setMsg] = useState("");

  const redeem = (item) => {
    if (coins >= item.cost) {
      setCoins(coins - item.cost);
      setMsg(`Redeemed: ${item.name}!`);
    } else {
      setMsg("Not enough EduCoins!");
    }
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div className="bg-lilac rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-mint">EduCoin Bank 💰</h3>
      <div className="mb-2">
        <span className="font-bold text-blue">Your EduCoins:</span>{" "}
        <span className="text-2xl">{coins}</span>
      </div>
      <div className="mb-2 font-semibold">Shop:</div>
      <ul>
        {shopItems.map(item => (
          <li key={item.name} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <button
              className="bg-blue text-white px-3 py-1 rounded-full font-bold"
              onClick={() => redeem(item)}
            >
              {item.cost} 🪙
            </button>
          </li>
        ))}
      </ul>
      {msg && <div className="mt-2 text-pink font-bold">{msg}</div>}
    </div>
  );
}