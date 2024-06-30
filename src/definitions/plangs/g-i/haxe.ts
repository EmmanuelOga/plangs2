import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+haxe").merge({
    name: "Haxe",
    websites: [{ kind: "wikipedia", title: "Haxe", href: "https://en.wikipedia.org/wiki/Haxe" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg" }],
    releases: [{ version: "4.3.4", date: "2024-01-01", kind: "stable" }],
    scoping: ["lexical"],
  });
}
