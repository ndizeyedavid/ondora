import SingleSong from "./SingleSong";

export default function AllSongs() {
  return (
    <div className="border p-1.5 rounded-md border-gray-600">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Popular Songs</h3>
        <a
          href=""
          className="text-primary/80 transition-all hover:text-primary text-sm"
        >
          View all
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
        <SingleSong />
      </div>
    </div>
  );
}
