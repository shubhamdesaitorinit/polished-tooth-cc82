import Header from "../../components/Header";
import { Song } from "../../components/SongCard/types";
import SongContainer from "../../components/SongsContainer";
import { ContextType } from "../../types";

export const getAllSongs = async (c: ContextType) => {
  try {
    const page = c.req.query("page") || 1;
    console.log(page);
    const pageNum = Number(page);
    const songs = await c.env.DB.prepare(
      `Select * from songs LIMIT 25 OFFSET ${pageNum * 25}`
    ).all();
    const songData = songs?.results as unknown as Song[];

    if (page > 1) {
      return <SongContainer songs={songData} page={pageNum} />;
    }

    return (
      <div class="w-full h-full">
        <Header />
        <div class="p-4 w-full h-[calc(100%-56px)]  overflow-scroll fixed top-14 bottom-3 flex flex-col items-center bg-white">
          <div
            id="song-container"
            class=" h-full w-full grid grid-flow-row  gap-4 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-white "
          >
            <SongContainer songs={songData} page={pageNum} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Error</div>;
  }
};
const refineSongsData = (data: any[]): any[] => {
  if (!data?.length) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const songsList = data.reduce<any[]>((accumulator, song) => {
    if (song?.previewUrl) {
      const changeImageUrl = (url: string, pixel: number): string => {
        return url ? url.replace("100x100", `${pixel}x${pixel}`) : "";
      };

      const refinedSong = {
        name:
          song?.collectionName?.split(":")[1] ??
          song?.collectionName?.split(":")[0] ??
          "unknown",
        description:
          song?.description?.split("<br />")[0] ||
          `the artist name is ${song?.artistName}`,
        image_url: changeImageUrl(song?.artworkUrl100, 500) || "",
        artist_name: song?.artistName ?? "",
        track_url: song?.previewUrl,
      };

      accumulator.push(refinedSong);
    }
    return accumulator;
  }, []);
  return songsList;
};

export const createSongs = async (c: ContextType) => {
  try {
    const search = c.req.query("search");
    const url = `https://itunes.apple.com/search/?term=${search}&offset=${"offset"}&limit=${200}`;
    const res = await fetch(url);
    const newSongs = (await res.json()) as { results: [] };
    const data = refineSongsData(newSongs?.results);
    for (const song of data) {
      await c.env.DB.prepare(
        "INSERT INTO songs( name, description, image_url, artist_name, track_url ) VALUES(?,?,?,?,?);"
      )
        .bind(
          song.name,
          song.description,
          song.image_url,
          song.artist_name,
          song.track_url
        )
        .run();
    }
    return <div>success</div>;
  } catch (error) {
    console.log(error);
    return <div>Faied to create songs</div>;
  }
};
