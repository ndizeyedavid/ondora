import { Music2 } from "lucide-react";

export default function SingleSong() {
  return (
    <button className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-1">
        <Music2 size={14} />
        <p className="text-sm">Song Name</p>
      </div>
      <span className="text-sm text-mute">5:53</span>
    </button>
  );
}
