import React, { useRef, useState } from "react";

export default function ImageDoubtSolver() {
  const [image, setImage] = useState(null);
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setSolution("");
    }
  };

  const solveDoubt = () => {
    setLoading(true);
    setTimeout(() => {
      setSolution(
        "Here's a step-by-step solution to your uploaded question (demo)."
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-pink rounded-xl p-6 shadow">
      <h3 className="text-lg font-bold mb-2 text-lilac">Image-Based Doubt Solver 📷</h3>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="mb-2"
        onChange={handleImageChange}
      />
      {image && (
        <div className="mb-2">
          <img src={image} alt="question" className="max-h-36 mx-auto rounded shadow mb-2" />
          <button
            className="bg-mint text-white px-4 py-1 rounded-full font-bold"
            onClick={solveDoubt}
            disabled={loading}
          >
            {loading ? "Solving..." : "Solve"}
          </button>
        </div>
      )}
      {solution && (
        <div className="mt-2 bg-cream rounded p-2 text-gray-800">{solution}</div>
      )}
    </div>
  );
}