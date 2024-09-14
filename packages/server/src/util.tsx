import { join } from "node:path";

import type { Link } from "@plangs/plangs/index";

import type { JSX, VNode } from "preact";
import render from "preact-render-to-string/jsx";

export function html(component: VNode) {
  const page = `<!DOCTYPE html>\n${render(component, {}, { pretty: true })}`;
  return new Response(page, { headers: { "Content-Type": "text/html" } });
}

export function packagesPath(...path: string[]): string {
  return join(import.meta.dir, "../..", ...path);
}

export function toAnchor(link: Link): JSX.Element {
  return (
    <a href={link.href} title={`${link.kind}:${link.title}`} class={`pl-link ${link.kind}`}>
      {link.title}
    </a>
  );
}
