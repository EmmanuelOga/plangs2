import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+wolfram",
    "Wolfram Language",
    {
      name: "Wolfram Language",
      websites: [
        { kind: "wikipedia", title: "Wolfram Language", href: "https://en.wikipedia.org/wiki/Wolfram_Language" },
        { kind: "homepage", title: "www.wolfram.com/language/", href: "https://www.wolfram.com/language/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/1/17/Wolfram_Language_Logo_2016.svg" }],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "14.0.0", date: "2024-01-09", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://writings.stephenwolfram.com/2024/01/the-story-continues-announcing-version-14-of-wolfram-language-and-mathematica/",
            title: "The Story Continues: Announcing Version 14 of Wolfram Language and Mathematica",
          },
        ],
        influenced_by: [
          {
            href: "https://writings.stephenwolfram.com/2021/01/tini-veltman-1931-2021-from-assembly-language-to-a-nobel-prize/",
            title: "Tini Veltman (1931–2021): From Assembly Language to a Nobel Prize—Stephen Wolfram Writings",
          },
        ],
        influenced: [
          {
            href: "https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/",
            title: "The Scientific Paper Is Obsolete",
          },
          {
            href: "https://web.archive.org/web/20171003001051/https://www.amazon.com/gp/richpub/listmania/fullview/R3LG3ZBZS4GCTH",
            title: "Clojure Bookshelf",
          },
        ],
      },
      extensions: [".nb", ".m", ".wl"],
    },
    {
      implementations: ["pl+wolfram-mathematica"],
      influences: [
        "pl+apl",
        "pl+c",
        "pl+cpp",
        "pl+fortran",
        "pl+lisp",
        "pl+pascal",
        "pl+prolog",
        "pl+schoonschip",
        "pl+simula",
        "pl+smalltalk",
        "pl+symbolic-manipulation-program",
      ],
      licenses: ["lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+imperative", "para+multi", "para+term"],
      people: [["person+stephen-wolfram", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
