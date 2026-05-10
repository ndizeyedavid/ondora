import { Play, Plus, Repeat, SkipBack, SkipForward } from "lucide-react";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-2">
      {/* first half */}
      <div className="grid grid-cols-2">
        {/* container1 */}
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-2">
            <div>More songs</div>
            <div>Volume mixer</div>
          </div>

          <div>thumbnail</div>
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
