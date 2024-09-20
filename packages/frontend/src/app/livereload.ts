let pingTimer: Timer | undefined;

const INITIAL_TIMEOUT_MS = 10;
const PING_FREQ_MS = 10;
const RELOAD_LATENCY_MS = 10;

/**
 * Setup a liverelaod connection. Attempts to reconnect if necessary.
 */
export function connectLivereload(timeout = INITIAL_TIMEOUT_MS, lifecycle: "start" | "error" = "start") {
  if (pingTimer) {
    clearInterval(pingTimer);
    pingTimer = undefined;
  }

  const reconnect = () => {
    console.info("attempting livereload reconnect in", timeout, "ms");
    setTimeout(() => connectLivereload(timeout * 1.5, "error"), timeout);
  };

  const reload = () => {
    setTimeout(() => window.location.reload(), RELOAD_LATENCY_MS);
  };

  const socket = new WebSocket("/livereload");
  socket.addEventListener("open", () => {
    // If we needed to reconnect, reload so we can see any server side changes.
    if (lifecycle === "error") return reload();
    socket.send("CONNECT");
    pingTimer = setInterval(() => socket.readyState === WebSocket.OPEN && socket.send("PING"), PING_FREQ_MS);
  });

  socket.addEventListener("message", event => {
    if (event.data === "ACK") console.info("livereload connected", new Date());
    if (event.data === "RELOAD") reload();
  });

  socket.addEventListener("close", event => {
    reconnect();
  });
}
