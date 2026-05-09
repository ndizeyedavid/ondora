import React from "react";
import TitleBar from "../components/TitleBar";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <TitleBar />
      <main className="flex-1 overflow-auto p-4">
        <p className="text-lg">App Mellow</p>
        <div className="size-52 bg-radial from-blue-600 to-purple-500 p-2 relative rounded-xl mt-4"></div>
      </main>
    </div>
  );
}
