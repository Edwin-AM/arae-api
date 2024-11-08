import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { turso } from "./lib/turso.ts";

const app = new Hono();

app.get("/", (c) => {
  turso.execute("");
  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
