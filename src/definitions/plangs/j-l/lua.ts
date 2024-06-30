import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+lua").merge({
    name: "Lua",
    websites: [{ kind: "wikipedia", title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
    releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
    extensions: [".lua"],
  });
}
