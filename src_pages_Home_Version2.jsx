import React from "react";
import FeatureCard from "../components/FeatureCard";
import heroImg from "../assets/hero.svg";

const features = [
  {
    title: "AI Study Assistant",
    desc: "Ask anything, get answers in your language, with explanations & examples.",
    color: "mint"
  },
  {
    title: "Question Paper Hub",
    desc: "Past papers for 10th-12th/College, filter by state, subject, year. Multi-language support.",
    color: "blue"
  },
  {
    title: "Focus Alarm Timer",
    desc: "Custom Pomodoro timer with motivational sounds.",
    color: "peach"
  },
  {
    title: "Quizzes & Memes",
    desc: "Quick quizzes + fun memes to relax and learn.",
    color: "pink"
  },
  {
    title: "Rewards & Leaderboard",
    desc: "Earn coins, badges, and climb the student leaderboard!",
    color: "lilac"
  },
  {
    title: "Mood Tracker & Planner",
    desc: "Track moods, get tips, and plan your day.",
    color: "yellow"
  }
];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue">
            Welcome to <span className="text-mint">eduzilla</span> 🦖
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            The all-in-one pastel study website for Indian students!  
            Learn smart, stay motivated, and earn rewards as you grow.
          </p>
          <a href="/dashboard" className="inline-block bg-mint hover:bg-blue text-white px-6 py-3 rounded-full font-bold text-lg shadow">
            Get Started
          </a>
        </div>
        <img src={heroImg} alt="Study Hero" className="w-full md:w-1/2 mt-8 md:mt-0" />
      </section>
      <section className="py-6 px-2 md:px-16">
        <h2 className="text-2xl font-bold mb-6 text-lilac">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>
    </div>
  );
}