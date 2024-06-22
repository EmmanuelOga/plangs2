import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+nekovmneko",
    "NekoVMNeko",
    {
      name: "NekoVMNeko",
      websites: [
        { kind: "wikipedia", title: "NekoVMNeko", href: "https://en.wikipedia.org/wiki/Neko_(programming_language)" },
        { kind: "homepage", title: "nekovm.org/specs/syntax", href: "http://nekovm.org/specs/syntax" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg" }],
      releases: [
        { version: "unknown", date: "2005-01-01", kind: "first" },
        { version: "2.3.0", date: "2019-10-24", kind: "stable" },
        { version: "unknown", date: "2005-01-01", kind: "first" },
      ],
      extensions: [],
    },
    {
      implementations: ["pl+ocaml"],
      licenses: ["lic+mit"],
      paradigms: ["para+multi-paradigm", "para+objects", "para+prototypes", "para+scripting", "para+structured"],
      people: [
        ["person+motion-twin", "designer"],
        ["person+nicolas-cannasse", "designer"],
      ],
      platforms: ["platf+linux", "platf+macos", "platf+windows"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}
