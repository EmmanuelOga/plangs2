import type { Link } from "@plangs/plangs/schema";

export function wikipedia(href: `https://en.wikipedia.org/wiki/${string}`, title: string): Link {
  return { kind: "wikipedia", href, title };
}
