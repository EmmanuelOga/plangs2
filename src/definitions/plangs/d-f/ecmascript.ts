import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ecmascript").merge({
    name: "ECMAScript",
    websites: [
      { kind: "wikipedia", title: "ECMAScript", href: "https://en.wikipedia.org/wiki/ECMAScript" },
      {
        kind: "homepage",
        title: "Standards",
        href: "https://www.ecma-international.org/publications-and-standards/standards/",
      },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg" }],
    extensions: [".es"],
    releases: [{ version: "unknown", date: "2023-01-01", kind: "other" }],
  });
}
