import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function VolumeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex flex-col items-center justify-center p-1.5 border border-gray-600 rounded-md w-full h-[60px]">
      <div className="w-full flex items-center justify-between gap-4">
        <span className="text-[10px] font-mono text-zinc-500 select-none">
          L
        </span>

        <div className="relative flex-1 flex items-center group h-6">
          {/* Custom Track Background */}
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="w-full h-[3px] bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-[#D4A7BE] to-[#8E7AB5] shadow-[0_0_10px_rgba(212,167,190,0.3)]"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>

          {/* Actual Input Range */}
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            className="volume-slider"
          />

          {/* Floating V Indicator */}
          <div
            className="absolute top-[-14px] pointer-events-none transition-all left-0 right-0 duration-75 flex flex-col items-center"
            // style={{ left: `calc(${value}% - 6px)` }}
          >
            <ChevronDown size={12} className="text-zinc-400" />
          </div>
        </div>

        <span className="text-[10px] font-mono text-zinc-500 select-none">
          R
        </span>
      </div>
    </div>
  );
}
