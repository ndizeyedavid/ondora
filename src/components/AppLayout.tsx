import { Play, Plus, Repeat, SkipBack, SkipForward } from "lucide-react";
import AllSongs from "./Songs/AllSongs";
import VolumeSlider from "./Volume/VolumeSlider";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-2">
      {/* first half */}
      <div>
        {/* container1 */}
        <div className="grid grid-cols-2 gap-2 p-1">
          <div className="grid grid-rows-2 gap-2">
            <AllSongs />
            <VolumeSlider />
          </div>
        </div>

        {/* container2 */}
        <div className="grid grid-cols-2">
          <div>Visualizer</div>

          {/* controls */}
          <div className="grid grid-cols-3">
            <button>
              <Repeat />
            </button>
            <button>
              <Plus />
            </button>
            <button>
              <Play />
            </button>
            <button>
              <SkipForward />
            </button>
            <button>
              <SkipBack />
            </button>
          </div>
        </div>

        {/* container3 */}
        <div>song vocal chart</div>
      </div>

      <div className="">Actual Player</div>
    </div>
  );
}
