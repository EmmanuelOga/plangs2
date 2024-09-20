type WS = { send: (msg: string) => void };

/** Add websockets here to notify them. */
export const WEBSOCKETS = new Set<WS>();

function sendMessage(msg: string) {
  for (const ws of WEBSOCKETS) {
    try {
      ws.send(msg);
    } catch (e) {
      WEBSOCKETS.delete(ws);
    }
  }
}

// biome-ignore lint/complexity/noBannedTypes: We don't care about Function's args here.
function debounce(fn: Function, delay: number) {
  let timeoutId: Timer;
  // biome-ignore lint/suspicious/noExplicitAny: any kind of args are allowed.
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Notify any registered websockets.
 * Debounced to give time to process events.
 */
export const notifyWebsockets = debounce(sendMessage, 500);
