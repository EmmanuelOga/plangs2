const server = Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/data.json") {
      const graph = await plangsGraph();
      const resp = Response.json(graph);
      resp.headers.set("Access-Control-Allow-Origin", "*");
      return resp;
    }

    const resp = new Response("404!", { status: 404 });
    return resp;
  },
});

// Update the timestamp to trigger a reload.
const TOUCH_PATH = Bun.fileURLToPath(`file:///${__dirname}/../../public/UPDATE`);
Bun.write(TOUCH_PATH, new Date().toISOString());

console.log(`Server running at ${server.url}`);
