import { type Cache, Key } from "./cache";

const MAX_RETRIES = 3;

export class Fetcher {
  #numRequests = 0;

  constructor(readonly cache: Cache) {}

  /** Fetch a URL. Returns the actual URL read (in case of redirects). */
  async fetch(url: URL, retries = 0): Promise<[URL, string | undefined]> {
    const key = Key.get(url.href);

    if (!key.valid) {
      console.warn("Skipping", url.href);
      return [url, undefined];
    }

    if (await this.cache.has(key)) return [url, await this.cache.read(key)];

    this.#numRequests++;
    console.info("Fetching", url.href);

    const response = await fetch(url);
    if (response.ok) {
      const text = await response.text();
      await this.cache.write(key, text);
      return [response.url === url.href ? url : new URL(response.url), text];
    }

    if (response.redirected && response.url !== url.href && retries < MAX_RETRIES) {
      console.info("Redirected", url.href, "->", response.url);
      const [newUrl, body] = await this.fetch(new URL(response.url), retries + 1);
      // Cache th response of the redirected URL with the original key.
      await this.cache.write(key, body || "");
      return [newUrl, body];
    }

    console.warn("Failed to fetch", url.href, response.status, response.statusText);

    // Cache an empty string for failed requests.
    await this.cache.write(key, "");

    return [url, undefined];
  }

  async seen(url: URL): Promise<boolean> {
    return this.cache.has(Key.get(url.href));
  }

  /** Number of requests made. */
  get requests(): number {
    return this.#numRequests;
  }
}
