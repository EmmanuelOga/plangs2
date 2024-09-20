// @ts-ignore works ok with Bun
import { join } from "node:path";

import type { VNode } from "preact";
import render from "preact-render-to-string/jsx";
import { REPO_ROOT } from "./serve";

// biome-ignore lint/suspicious/noMisleadingCharacterClass: remove zero width characters
export const ZERO_WIDTH = /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/;

export function renderComponent(component: VNode): string {
  const html = render(component, {}, { pretty: true });
  return `<!DOCTYPE html>\n${html}}`;
}

export function packagesPath(...path: string[]): string {
  return join(REPO_ROOT, "packages", ...path);
}

export function validStaticRequest(path: string): boolean {
  return path.length > 1 && path[0] === "/" && path[1] !== "/" && !path.includes("..");
}
