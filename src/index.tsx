import { Hono } from "hono";
import { rootLayout } from "../htmlts";
import AppLayout from "./Layouts/AppLayout";
import songs from "./routes/songs";
import { Env } from "./types";

export const app = new Hono<{ Bindings: Env }>();
const appLayoutHandler = rootLayout(AppLayout);
app.use("*", appLayoutHandler);
app.route("/", songs);

export default app;
