import SongCard from "../SongCard";
import { Song } from "../SongCard/types";

const SongContainer = ({ songs, page }: { songs: Song[]; page: number }) => {
  return (
    <>
      {songs?.map((song, index) => {
        if (index === songs.length - 1) {
          return (
            <div
              hx-get={`/?page=${Number(page) + 1}`}
              hx-trigger="intersect once"
              hx-target="#song-container"
              hx-swap="beforeend"
            >
              <SongCard song={song} />
            </div>
          );
        }
        return <SongCard song={song} />;
      })}
    </>
  );
};

export default SongContainer;
