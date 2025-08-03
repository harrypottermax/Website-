import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-mint">Login to eduzilla</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-cream border focus:outline-mint"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-5 p-2 rounded bg-cream border focus:outline-mint"
            required
          />
          <button type="submit" className="w-full bg-mint text-white py-2 rounded-full font-bold hover:bg-blue">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500 text-sm">
          Don&apos;t have an account? <a href="#" className="text-blue font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  );
}