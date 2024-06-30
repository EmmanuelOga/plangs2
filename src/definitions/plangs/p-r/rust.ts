import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rust").merge({
    name: "Rust",
    websites: [{ kind: "wikipedia", title: "Rust", href: "https://en.wikipedia.org/wiki/Rust_(programming_language)" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
      },
    ],
    releases: [{ version: "1.78.0", date: "2024-01-01", kind: "stable" }],
    extensions: [".rlib", ".rs"],
  });
}
