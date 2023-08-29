import { Hono } from "hono";
import { view } from "../../../htmlts";
import { createSongs, getAllSongs } from "../../controllers/songsController";
import { Env } from "../../types";

const songs = new Hono<{ Bindings: Env }>();

songs.get("/", view(getAllSongs));
// songs.post("/", view(createSongs));

export default songs;
