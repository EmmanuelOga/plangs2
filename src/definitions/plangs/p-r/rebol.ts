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
      references: {
        license: [
          { href: "http://www.rebol.com/license.html", title: "license" },
          { href: "https://github.com/rebol/r3", title: "R3 source" },
        ],
        filename_extensions: [
          { href: "http://www.rebol.com/article/0540.html", title: "Carl's REBOL Blog - Let's switch to .reb suffix" },
        ],
        influenced: [{ href: "https://www.youtube.com/watch?v=-C-JoyNuQJs", title: "The JSON Saga" }],
      },
      extensions: [".r", ".reb"],
    },
    {
      influenced: ["pl+forth", "pl+lisp", "pl+objectlogo", "pl+red", "pl+self", "pl+ucblogo"],
      influences: ["pl+forth", "pl+json", "pl+lisp", "pl+logo", "pl+red", "pl+self"],
      licenses: ["lic+apache", "lic+freely-redistributable"],
      paradigms: ["para+data", "para+functional", "para+imperative", "para+language", "para+prototypes"],
      people: [["person+carl-sassenrath", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
