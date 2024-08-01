import type { VNode } from "preact";
import render from "preact-render-to-string/jsx";

export function html(component: VNode) {
  const page = `<!DOCTYPE html>\n${render(component, {}, { pretty: true })}`;
  return new Response(page, { headers: { "Content-Type": "text/html" } });
}

export function localPath(path: string): string {
  return Bun.fileURLToPath(`file:///${__dirname}/../${path}`);
}
