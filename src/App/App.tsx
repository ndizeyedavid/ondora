import React from "react";
import TitleBar from "../components/TitleBar";
import Dashboard from "../components/Dashboard";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <TitleBar />
      <Dashboard />
    </div>
  );
}
