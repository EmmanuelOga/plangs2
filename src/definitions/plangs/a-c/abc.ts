import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+abc",
    "ABC",
    {
      name: "ABC",
      websites: [
        { kind: "wikipedia", title: "ABC", href: "https://en.wikipedia.org/wiki/ABC_(programming_language)" },
        { kind: "homepage", title: "homepages.cwi.nl/~steven/abc/", href: "https://homepages.cwi.nl/~steven/abc/" },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "1.05.02", date: "1990-01-01", kind: "stable" },
      ],
      references: {
        influenced_by: [
          {
            href: "https://books.google.com/books?q=He-was-clearly-influenced-by-ALGOL-68",
            title: "Masterminds of Programming: Conversations with the Creators of Major Programming Languages",
          },
        ],
      },
    },
    {
      influences: ["pl+algol-68", "pl+setl"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      people: [
        ["person+centrum-wiskunde", "developer"],
        ["person+lambert-meertens", "designer"],
        ["person+steven-pemberton", "designer"],
      ],
      platforms: ["platf+atari", "platf+mac", "platf+unix", "platf+win"],
      typeSystems: ["tsys+polymorphic", "tsys+strong"],
    },
  );

  /**/
}
