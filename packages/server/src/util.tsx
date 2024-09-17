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
    <a key={link.href} href={link.href} title={`${link.kind}:${link.title}`} class={`pl-link ${link.kind}`}>
      {link.title}
    </a>
  );
}

export function parseDate(path: string): StrDate | undefined {
  const match = path.match(/(\d{4})_(\d{2})_(\d{2})/);
  if (!match) return;
  const [, year, month, day] = match;
  const [y, m, d] = [Number.parseInt(year), Number.parseInt(month), Number.parseInt(day)];
  if (y < 2000 || y > 2100 || m < 1 || m > 12 || d < 1 || d > 31) return;
  const strDate: StrDate = `${y}-${`${m}`.padStart(2, "0")}-${`${d}`.padStart(2, "0")}`;
  return strDate;
}
