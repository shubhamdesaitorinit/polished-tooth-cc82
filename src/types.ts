import { Context } from "hono";

export type Env = {
  ASSETS: Fetcher;
  todos: KVNamespace;
  DB: D1Database;
};

export type ContextType = Context<{
  Bindings: Env;
}>;
