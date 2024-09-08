import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+apl", {
      images: [{ title: "APL", kind: "logo", url: "/images/plangs/a/apl/main.png" }],
      name: "APL",
      description:
        "APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multidimensional array. It uses a large range of special graphic symbols to represent most functions and operators, leading to very concise code. It has been an important influence on the development of concept modeling, spreadsheets, functional programming, and computer math packages. It has also inspired several other programming languages.",
      websites: [
        { href: "https://aplwiki.com/", title: "aplwiki.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/APL_programming_language", title: "APL", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addParadigms(["para+array", "para+functional", "para+modular", "para+structured"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic"]);
}
