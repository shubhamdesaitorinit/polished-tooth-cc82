import { Song } from "./types";

const SongCard = ({ song }: { song: Song }) => {
  return (
    <div class="shadow-2xl m-0 p-0 rounded-lg bg-gray-300">
      <div>
        <img
          class="h-[250px] w-full aspect-auto rounded-t-lg"
          src={song.image_url}
          alt={song.id}
        />
      </div>
      <p class="truncate p-2">{song?.name}</p>
    </div>
  );
};

export default SongCard;
