import React from 'react';
import { Minus, Square, X } from 'lucide-react';

export default function TitleBar() {
  const handleControl = (action: 'minimize' | 'maximize' | 'close') => {
    (window as any).electron.windowControl(action);
  };

  return (
    <div className="h-8 bg-black flex items-center justify-between select-none drag-region">
      <div className="flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500/20" />
        <span className="text-xs text-zinc-400 font-medium">Ondora</span>
      </div>
      
      <div className="flex items-center no-drag-region">
        <button 
          onClick={() => handleControl('minimize')}
          className="p-2 hover:bg-zinc-800 text-zinc-400 transition-colors"
        >
          <Minus size={14} />
        </button>
        <button 
          onClick={() => handleControl('maximize')}
          className="p-2 hover:bg-zinc-800 text-zinc-400 transition-colors"
        >
          <Square size={12} />
        </button>
        <button 
          onClick={() => handleControl('close')}
          className="p-2 hover:bg-red-500 hover:text-white text-zinc-400 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
