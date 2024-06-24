import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ats",
    "ATS",
    {
      name: "ATS",
      websites: [
        { kind: "wikipedia", title: "ATS", href: "https://en.wikipedia.org/wiki/ATS_(programming_language)" },
        { kind: "homepage", title: "www.ats-lang.org", href: "http://www.ats-lang.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/23/The_ATS_Logo.svg" }],
      releases: [
        { version: "unknown", date: "2006-01-01", kind: "first" },
        { version: "0.4.2", date: "2020-11-14", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://groups.google.com/g/ats-lang-users/c/ZlSW70S525Y",
            title: "[ats-lang-users] ATS2-0.4.2 released",
          },
        ],
      },
      extensions: [".sats", ".dats", ".hats"],
    },
    {
      influenced: ["pl+ocaml"],
      influences: ["pl+cpp", "pl+dependent-ml", "pl+ml", "pl+ocaml"],
      licenses: ["lic+gpl"],
      paradigms: [
        "para+concurrent",
        "para+functional",
        "para+imperative",
        "para+modular",
        "para+multi",
        "para+objects",
      ],
      people: [["person+hongwei-xi", "designer"]],
      typeSystems: ["tsys+dependent", "tsys+static"],
    },
  );

  /**/
}
