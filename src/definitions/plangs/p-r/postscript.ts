import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+postscript").merge({
    name: "PostScript",
    websites: [{ kind: "wikipedia", title: "PostScript", href: "https://en.wikipedia.org/wiki/PostScript" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg" }],
    releases: [{ version: "unknown", date: "1997-01-01", kind: "stable" }],
    extensions: [".ps"],
  });
}
