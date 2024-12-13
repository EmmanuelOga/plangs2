import type { BunFile } from "bun";

// @ts-ignore types for node:path?
import { extname } from "node:path";

import type { JSX } from "preact";
import render from "preact-render-to-string";

/** Render a JSX tree as HTML, include the doctype. */
export function vdomToHTML(component: JSX.Element): string {
  const html = render(component, {});
  return `<!DOCTYPE html>\n${html}`;
}

/** Static response, including headers to stop the browser from caching the result. */
export async function staticResponse(req: Request, content: BunFile | string, contentType: ContentType): Promise<Response> {
  const meta = {
    headers: {
      ...STATIC_HEADERS,

      "Content-Type": `${contentType}; charset=utf-8`,
    } as Record<string, string>,
  };

  // Send compressed content if the client supports it.
  if (req.headers.get("accept-encoding")?.includes("gzip")) {
    const data = typeof content === "string" ? content : await content.arrayBuffer();
    meta.headers["Content-Encoding"] = "gzip";
    return new Response(Bun.gzipSync(data), meta);
  }

  return new Response(content, meta);
}

const STATIC_HEADERS = {
  "Cache-Control": "no-store",
  Pragma: "no-cache",
  Expires: "0",
  // "Cache-Control": "public, max-age=120", // Cache for 2 minutes
} as const;

export type ContentType =
  | "application/javascript"
  | "application/json"
  | "application/manifest+json"
  | "image/svg+xml"
  | "text/css"
  | "text/html"
  | "text/plain"
  | `image/${string}`;

const EXTENSION_TO_CONTENT_TYPE: Record<string, ContentType> = {
  ".css": "text/css",
  ".gif": "image/gif",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript",
  ".json": "application/json",
  ".map": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
} as const;

export function contentTypeFor(path: string): ContentType | undefined {
  if (path.length < 1 || path.length > 128 || path.includes("..")) return;
  const ext = extname(path);
  const type = EXTENSION_TO_CONTENT_TYPE[ext];
  if (!type) console.warn(`Unknown content type for ${path}`);
  return type;
}

// biome-ignore lint/suspicious/noMisleadingCharacterClass: remove zero width characters
export const ZERO_WIDTH = /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/;
