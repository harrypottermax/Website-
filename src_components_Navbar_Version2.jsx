import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/eduzilla-logo.png";

export default function Navbar() {
  return (
    <nav className="bg-peach shadow flex items-center px-4 py-2">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="eduzilla" className="h-10 mr-2" />
        <span className="font-bold text-xl text-mint">eduzilla</span>
      </Link>
      <div className="ml-auto flex gap-4">
        <Link to="/dashboard" className="font-semibold text-blue hover:text-lilac">Dashboard</Link>
        <Link to="/login" className="bg-mint hover:bg-blue text-white px-4 py-1 rounded-full font-bold">Login</Link>
      </div>
    </nav>
  );
}