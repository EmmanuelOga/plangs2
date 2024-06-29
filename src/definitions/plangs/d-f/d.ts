import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+d",
    "D programming language",
    {
      name: "D programming language",
      websites: [
        { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_language" },
        { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)" },
        { kind: "homepage", title: "dlang.org", href: "https://dlang.org" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2001-12-08", kind: "first" },
        { version: "2.108.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".d"],
    },
    {
      influences: [
        "pl+ada",
        "pl+cpp",
        "pl+ruby",
        "pl+eiffel",
        "pl+c",
        "pl+python",
        "pl+basic",
        "pl+c-sharp",
        "pl+java",
      ],
      licenses: ["lic+boost"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+objects"],
      people: ["person+walter-bright", "person+andrei-alexandrescu"],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
