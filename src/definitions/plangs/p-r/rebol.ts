import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+rebol",
    "Rebol",
    {
      name: "Rebol",
      websites: [
        { kind: "wikipedia", title: "Rebol", href: "https://en.wikipedia.org/wiki/Rebol" },
        { kind: "homepage", title: "www.rebol.com", href: "http://www.rebol.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Rebol_logo.png" }],
      releases: [
        { version: "unknown", date: "1997-01-01", kind: "first" },
        { version: "2.7.8", date: "2011-01-01", kind: "stable" },
        { version: "2.101.0", date: "2012-01-01", kind: "preview" },
      ],
      extensions: [".r", ".reb"],
    },
    {
      influences: ["pl+lisp", "pl+forth", "pl+objectlogo", "pl+self", "pl+ucblogo", "pl+logo"],
      licenses: ["lic+freely-redistributable", "lic+apache"],
      paradigms: ["para+language", "para+data", "para+functional", "para+prototypes", "para+imperative"],
      people: ["person+carl-sassenrath"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
