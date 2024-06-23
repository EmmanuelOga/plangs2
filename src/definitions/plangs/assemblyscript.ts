import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+assemblyscript",
    "AssemblyScript",
    {
      name: "AssemblyScript",
      websites: [
        { kind: "wikipedia", title: "AssemblyScript", href: "https://en.wikipedia.org/wiki/AssemblyScript" },
        { kind: "homepage", title: "www.assemblyscript.org", href: "https://www.assemblyscript.org/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg" },
      ],
      references: {
        designed_by: [
          { href: "https://github.com/AssemblyScript/working-group", title: "AssemblyScript Working Group" },
          { href: "https://www.youtube.com/watch?v=ZlL1nduatZQ", title: "WebAssembly for Javascript Developers" },
        ],
        developer: [{ href: "https://github.com/AssemblyScript/working-group", title: "AssemblyScript Working Group" }],
        first_appeared: [
          { href: "https://www.npmjs.com/package/assemblyscript/v/0.1.0", title: "assemblyscript 0.1.0" },
        ],
        stable_release: [
          { href: "https://github.com/AssemblyScript/assemblyscript/releases/tag/v0.27.27", title: "Release 0.27.27" },
        ],
        license: [{ href: "https://github.com/AssemblyScript/assemblyscript/blob/master/LICENSE", title: "LICENSE" }],
      },
      releases: [
        { version: "unknown", date: "2017-01-01", kind: "first" },
        { version: "0.27.27", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [],
    },
    {
      influenced: ["pl+arkts", "pl+javascript", "pl+typescript"],
      influences: ["pl+javascript", "pl+typescript", "pl+webassembly"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+generic", "para+imperative", "para+multi", "para+objects"],
      people: [
        ["person+daniel-wirtz", "designer"],
        ["person+max-graey", "designer"],
      ],
      typeSystems: ["tsys+static"],
    },
  );

  /**/
}
