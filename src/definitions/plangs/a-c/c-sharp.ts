import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+c-sharp").merge({
    name: "C#",
    websites: [
      { kind: "wikipedia", title: "C#", href: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg" }],
    releases: [{ version: "12.0", date: "2023-01-01", kind: "stable" }],
    extensions: [".cs", ".csx"],
  });
}
