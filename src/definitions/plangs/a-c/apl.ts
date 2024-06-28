import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+apl",
    "APL",
    {
      name: "APL",
      websites: [
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_(programming_language)" },
        { kind: "wikipedia", title: "APL", href: "https://en.wikipedia.org/wiki/APL_programming_language" },
        { kind: "homepage", title: "aplwiki.com", href: "https://aplwiki.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg",
        },
      ],
      references: {
        first_appeared: [
          { href: "http://www.jsoftware.com/papers/APLQA.htm#APL_birthday", title: "APL Quotations and Anecdotes" },
        ],
        influenced: [{ href: "https://en.cppreference.com/w/cpp/algorithm/iota", title: "std::iota" }],
      },
      releases: [
        { version: "unknown", date: "1966-11-27", kind: "first" },
        { version: "unknown", date: "2001-02-01", kind: "stable" },
      ],
    },
    {
      dialects: ["pl+aplx"],
      implementations: ["pl+aplx"],
      influences: ["pl+mathematical-notation"],
      licenses: ["lic+open-source", "lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+modular", "para+structured"],
      people: [
        ["person+dick-lathwell", "developer"],
        ["person+larry-breed", "developer"],
        ["person+roger-moore", "developer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );

  /**/
}