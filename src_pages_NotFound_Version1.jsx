import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-bold text-pink mb-4">404</h1>
      <p className="text-lg mb-4">Page not found. The dino ate it!</p>
      <Link to="/" className="bg-mint text-white px-6 py-2 rounded-full font-bold">Go Home</Link>
    </div>
  );
}