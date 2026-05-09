import {
  Play,
  Heart,
  Share2,
  Plus,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat2,
  Volume2,
  ChevronDown,
  Maximize2,
  Minus,
  Square,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="flex-1 flex items-center justify-center p-12 bg-[radial-gradient(circle_at_center,_var(--color-zinc-950)_0%,_var(--color-black)_100%)] relative overflow-hidden">
      {/* Decorative Orbit Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] border border-border rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] border border-border rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-[42%_58%] gap-0 brutalist-border bg-black/40 backdrop-blur-sm z-10 shadow-2xl overflow-hidden rounded-[4px]">
        {/* LEFT PANEL */}
        <div className="flex flex-col border-r border-border">
          {/* Popular Tracks */}
          <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                Popular Tracks
              </span>
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold cursor-pointer hover:opacity-70 transition-opacity">
                view all
              </span>
            </div>
            <div className="space-y-4">
              {[
                { title: "Join Us", duration: "5:49" },
                { title: "Space Program", duration: "5:54" },
                { title: "Raver's Heart", duration: "5:36" },
                { title: "Higher", duration: "4:35" },
                { title: "Solitude Tool", duration: "4:57" },
              ].map((track, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-border/30 pb-3 group cursor-pointer"
                >
                  <span className="text-xs text-zinc-300 group-hover:text-accent transition-colors">
                    {track.title}
                  </span>
                  <span className="text-[10px] text-zinc-600 font-mono">
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Slider & Waveform Section */}
          <div className="flex flex-col">
            {/* Slider */}
            <div className="p-6 border-b border-border flex flex-col items-center gap-4">
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>L</span>
                <div className="flex-1 mx-4 h-[1px] bg-zinc-800 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(212,167,190,0.5)]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                </div>
                <span>R</span>
              </div>
              <ChevronDown size={14} className="text-zinc-700" />
            </div>

            {/* Waveform */}
            <div className="p-8 border-b border-border relative group overflow-hidden h-32 flex items-center justify-center">
              <div className="flex items-center gap-[2px] h-12">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: i * 0.05,
                    }}
                    className={`w-[2px] rounded-full ${i % 5 === 0 ? "bg-accent/60" : "bg-zinc-800"}`}
                  />
                ))}
              </div>
              <div className="absolute bottom-4 left-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-[2px] h-[2px] rounded-full bg-accent/40"
                  />
                ))}
              </div>
              <span className="absolute bottom-4 right-6 text-[8px] font-bold text-zinc-600 border border-zinc-800 px-1 py-0.5 rounded-[2px]">
                HQ
              </span>
            </div>
          </div>

          {/* Playlist Table */}
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold">
                Playlist
              </span>
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                Online
              </span>
            </div>
            <div className="grid grid-cols-[30px_1fr_1fr] gap-4 text-[9px] uppercase tracking-widest text-zinc-600 font-bold mb-4">
              <span>Play</span>
              <span>Artist</span>
              <span className="text-right">Title</span>
            </div>
            <div className="space-y-3 custom-scrollbar overflow-y-auto max-h-[180px] pr-2">
              {[
                { artist: "AirShade", title: "Don't Worry" },
                { artist: "Holod", title: "They Are Coming" },
                { artist: "Holod", title: "Renegade" },
                { artist: "Extinct", title: "TimeLapse" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[30px_1fr_1fr] gap-4 items-center group cursor-pointer border-b border-border/20 pb-2"
                >
                  <Play
                    size={10}
                    className="text-zinc-600 group-hover:text-accent fill-current transition-colors"
                  />
                  <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {item.artist}
                  </span>
                  <span className="text-[11px] text-zinc-500 text-right group-hover:text-zinc-300 transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Signature */}
          <div className="p-6 border-t border-border flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <FaInstagram
                size={14}
                className="text-zinc-600 hover:text-accent transition-colors cursor-pointer"
              />
              <div className="flex gap-3 text-[8px] font-mono text-zinc-700 uppercase tracking-tighter">
                <span>@artlebedev.ui</span>
                <span>FEB</span>
                <span>2022 ©</span>
              </div>
            </div>
            <div className="px-3 py-1 border border-border rounded-full text-[8px] font-bold uppercase tracking-widest text-zinc-500 hover:border-accent hover:text-accent transition-all cursor-pointer">
              Experiment
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col">
          {/* Top Hero Section */}
          <div className="grid grid-cols-[45%_55%] border-b border-border">
            {/* Album Art */}
            <div className="relative aspect-square border-r border-border group overflow-hidden">
              <div className="absolute top-4 left-4 z-20 text-[8px] uppercase tracking-widest text-white/50 mix-blend-difference font-bold">
                album
              </div>
              <div className="absolute top-4 right-4 z-20 text-white/50 mix-blend-difference hover:text-accent transition-colors cursor-pointer">
                <Heart size={14} />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <h2 className="text-xl font-light tracking-tight text-white/90">
                  Emotionality
                </h2>
              </div>
              <img
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop"
                alt="Album Art"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:brightness-90 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </div>

            {/* Player Hero */}
            <div className="p-8 flex flex-col relative overflow-hidden bg-gradient-to-br from-zinc-900/20 to-transparent">
              <div className="flex justify-between items-start mb-8 z-20">
                <div>
                  <h1 className="text-2xl font-medium tracking-tighter text-white mb-1">
                    Molotov Brutality
                  </h1>
                  <p className="text-xs text-zinc-500 tracking-widest uppercase">
                    Peryl
                  </p>
                </div>
                <Maximize2
                  size={14}
                  className="text-zinc-700 hover:text-accent transition-colors cursor-pointer"
                />
              </div>

              {/* Holographic Orb */}
              <div className="flex-1 flex items-center justify-center relative py-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,167,190,0.08)_0%,_transparent_70%)]" />
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                    scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                  }}
                  className="w-48 h-48 rounded-full relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-accent/30 to-blue-900/40 animate-pulse" />
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-60 mix-blend-overlay scale-125" />
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
                </motion.div>
              </div>

              {/* Timer & Controls */}
              <div className="mt-auto z-20">
                <div className="flex items-end justify-between mb-6">
                  <span className="text-7xl font-extralight text-zinc-200/20 tracking-tighter leading-none select-none">
                    0:2
                  </span>
                  <div className="flex gap-4 text-zinc-600 mb-2">
                    <Shuffle
                      size={14}
                      className="hover:text-accent transition-colors cursor-pointer"
                    />
                    <Repeat2
                      size={14}
                      className="hover:text-accent transition-colors cursor-pointer"
                    />
                    <Volume2
                      size={14}
                      className="hover:text-accent transition-colors cursor-pointer"
                    />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-zinc-800 relative">
                  <div className="absolute inset-y-0 left-0 w-[15%] bg-accent shadow-[0_0_8px_rgba(212,167,190,0.6)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-3 border-b border-border h-32">
            <div className="grid grid-cols-1 grid-rows-2 border-r border-border">
              <div className="border-b border-border flex items-center justify-center group cursor-pointer hover:bg-zinc-900/30 transition-colors relative">
                <span className="absolute top-2 left-3 text-[7px] uppercase tracking-widest text-zinc-600">
                  Share
                </span>
                <Share2
                  size={16}
                  className="text-zinc-500 group-hover:text-accent transition-colors"
                />
              </div>
              <div className="flex items-center justify-center group cursor-pointer hover:bg-zinc-900/30 transition-colors relative">
                <span className="absolute top-2 left-3 text-[7px] uppercase tracking-widest text-zinc-600">
                  Add
                </span>
                <Plus
                  size={16}
                  className="text-zinc-500 group-hover:text-accent transition-colors"
                />
              </div>
            </div>
            <div className="border-r border-border flex items-center justify-center bg-zinc-900/10 group cursor-pointer hover:bg-zinc-900/20 transition-all">
              <div className="p-6 border border-accent/20 rounded-full group-hover:scale-110 group-hover:border-accent transition-all duration-500">
                <div className="flex gap-1.5">
                  <div className="w-1 h-6 bg-accent rounded-full shadow-[0_0_10px_rgba(212,167,190,0.4)]" />
                  <div className="w-1 h-6 bg-accent rounded-full shadow-[0_0_10px_rgba(212,167,190,0.4)]" />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div className="border-b border-border flex items-center justify-center group cursor-pointer hover:bg-zinc-900/30 transition-colors">
                <SkipForward
                  size={18}
                  className="text-zinc-500 group-hover:text-white transition-colors"
                />
              </div>
              <div className="flex items-center justify-center group cursor-pointer hover:bg-zinc-900/30 transition-colors">
                <SkipBack
                  size={18}
                  className="text-zinc-500 group-hover:text-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Similar Artists */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                Similar Artists
              </span>
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold cursor-pointer hover:opacity-70 transition-opacity">
                view all
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              {[
                {
                  name: "E. Sangiuliano",
                  img: "https://i.pravatar.cc/150?u=1",
                },
                { name: "D. Avery", img: "https://i.pravatar.cc/150?u=2" },
                { name: "Objekt", img: "https://i.pravatar.cc/150?u=3" },
                { name: "J. Mills", img: "https://i.pravatar.cc/150?u=4" },
                { name: "H. Hauff", img: "https://i.pravatar.cc/150?u=5" },
                { name: "A. Beyer", img: "https://i.pravatar.cc/150?u=6" },
                { name: "A. Lens", img: "https://i.pravatar.cc/150?u=7" },
              ].map((artist, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-border group-hover:border-accent transition-all duration-300">
                    <img
                      src={artist.img}
                      alt={artist.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="text-[8px] text-zinc-600 text-center leading-tight group-hover:text-zinc-400 transition-colors">
                    {artist.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
