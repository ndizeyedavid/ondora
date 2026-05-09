import React from "react";
import { Maximize2, Minus, Square, X } from "lucide-react";

export default function TitleBar() {
  const handleControl = (action: "minimize" | "maximize" | "close") => {
    (window as any).electron.windowControl(action);
  };

  return (
    <div className="h-8 bg-black flex items-center justify-between select-none drag-region">
      <div className="flex items-center px-4 gap-2">
        <span>🌊</span>
        <span className="text-xs text-zinc-300 font-medium">Ondora</span>
      </div>

      <div className="flex items-center no-drag-region">
        <button
          onClick={() => handleControl("minimize")}
          className="p-3 flex hover:bg-zinc-800 text-zinc-400 transition-colors"
        >
          <Minus size={14} className="relative top-0.5" />
        </button>
        <button
          onClick={() => handleControl("maximize")}
          className="p-3 flex hover:bg-zinc-800 text-zinc-400 transition-colors"
        >
          <Maximize2 size={12} className="relative top-0.5" />
        </button>
        <button
          onClick={() => handleControl("close")}
          className="p-3 flex hover:bg-red-500 hover:text-white text-zinc-400 transition-colors"
        >
          <X size={14} className="relative top-0.5" />
        </button>
      </div>
    </div>
  );
}
