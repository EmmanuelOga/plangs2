let pingTimer: Timer | undefined;

/**
 * Setup a liverelaod connection. Attempts to reconnect if necessary.
 */
export function connectLivereload(timeout = 2500, fromError = false) {
  if (pingTimer) {
    clearInterval(pingTimer);
    pingTimer = undefined;
  }

  const socket = new WebSocket("/livereload");

  const reconnect = () => {
    if (socket.readyState === WebSocket.OPEN) socket.close();
    console.info("attempting livereload reconnect in", timeout, "ms");
    setTimeout(() => connectLivereload(timeout * 1.25, true), timeout);
  };

  socket.addEventListener("open", () => {
    // If we needed to reconnect, reload so we can see any server side changes.
    if (fromError) return window.location.reload();

    socket.send("CONNECT");
    console.info("livereload", "connected");

    // Ping, which will trigger a close event if the server is down.
    pingTimer = setInterval(() => socket.readyState === WebSocket.OPEN && socket.send("PING"), 500);
  });

  socket.addEventListener("message", event => {
    if (event.data === "reload") window.location.reload();
  });

  socket.addEventListener("close", event => {
    reconnect();
  });
}
