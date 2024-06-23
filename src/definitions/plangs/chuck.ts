import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+chuck",
    "ChucK",
    {
      name: "ChucK",
      websites: [
        { kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" },
        { kind: "homepage", title: "chuck.cs.princeton.edu", href: "http://chuck.cs.princeton.edu" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" }],
      references: {
        first_appeared: [
          {
            href: "https://books.google.com/books?id=96ymxXy3wjMC&pg=PA57",
            title: "The Oxford handbook of computer music",
          },
        ],
        stable_release: [
          { href: "https://github.com/ccrma/chuck/blob/main/notes/VERSIONS", title: "github.com/ccrma/chuck" },
        ],
      },
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "1.5.2.4", date: "2024-01-01", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+gpl", "lic+ios", "lic+linux", "lic+mac-os-x", "lic+microsoft-windows"],
      paradigms: ["para+multi"],
      people: [["person+ge-wang", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );

  /**/
}
