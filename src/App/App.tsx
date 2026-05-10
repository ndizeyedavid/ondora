import React from "react";
import TitleBar from "../components/TitleBar";
import AppLayout from "../components/AppLayout";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <TitleBar />
      <AppLayout />
    </div>
  );
}
