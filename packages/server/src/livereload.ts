import type { ServerWebSocket } from "bun";

// NOTE: livereload only works with --watch right now.
// For some reason --hot keeps connections alive but unreachable,
// and keeping things around in gobalThis did not help.
const WEBSOCKETS = new Set<ServerWebSocket>();

export function trackWebsocket(ws: ServerWebSocket) {
  try {
    if (ws.readyState === 1) {
      ws.send("ACK");
      WEBSOCKETS.add(ws);
    } else {
      ws.close();
    }
  } catch (e) {
    console.error(e);
    untrackWebsocket(ws);
  }
}

export function untrackWebsocket(ws: ServerWebSocket) {
  WEBSOCKETS.delete(ws);
  try {
    if (ws.readyState !== 3) ws.close();
  } catch (e) {
    console.error(e);
  }
}

export function notifyWebsockets(msg: string) {
  if (WEBSOCKETS.size === 0) return;
  for (const ws of WEBSOCKETS) {
    try {
      if (ws.readyState === 1) {
        ws.send(msg);
      } else {
        untrackWebsocket(ws);
      }
    } catch (e) {
      untrackWebsocket(ws);
    }
  }
}
