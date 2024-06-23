import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+modula-3",
    "Modula-3",
    {
      name: "Modula-3",
      websites: [
        { kind: "wikipedia", title: "Modula-3", href: "https://en.wikipedia.org/wiki/Modula-3" },
        { kind: "homepage", title: "www.modula3.org", href: "http://www.modula3.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Modula-3.svg" }],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "5.8.6", date: "2010-07-14", kind: "stable" },
      ],
      references: {
        major_implementations: [
          { href: "https://modula3.elegosoft.com/cm3/", title: "Critical Mass Modula-3 (CM3)" },
          { href: "https://modula3.elegosoft.com/pm3/", title: "Polytechnique Montréal Modula-3 (PM3): What is it" },
          {
            href: "https://web.archive.org/web/20130410151327/http://www.cvsup.org/ezm3/",
            title: "Ezm3: An Easier Modula-3 Distribution",
          },
          {
            href: "https://web.archive.org/web/20000520073936/http://www.ifi.uni-klu.ac.at/Modula-3/m3pc/m3pc.html",
            title: "M3/PC Klagenfurt 96: a Modula-3 environment for MS-DOS",
          },
        ],
        influenced: [
          { href: "http://nim-lang.org/question.html", title: "Frequently Asked Questions" },
          {
            href: "https://www.reddit.com/r/rust/comments/cycjou/i_just_learned_about_modula3_a_language_that_had/",
            title:
              "R/Rust - I just learned about Modula-3, a language that had a lot of similar goals to Rust, and there was even an experimental OS that relied on the safety provided by the language",
          },
          { href: "https://www.python.org/doc/essays/foreword/", title: "Programming Python: Foreword (1st ed.)" },
        ],
      },
    },
    {
      implementations: ["pl+dec"],
      influenced: [
        "pl+java",
        "pl+modula-2",
        "pl+modula-2-plus",
        "pl+nim",
        "pl+obliq",
        "pl+ocaml",
        "pl+pascal",
        "pl+python",
      ],
      influences: [
        "pl+algol",
        "pl+c-sharp",
        "pl+euclid",
        "pl+java",
        "pl+mesa",
        "pl+modula-2",
        "pl+modula-2-plus",
        "pl+nim",
        "pl+oberon",
        "pl+ocaml",
        "pl+pascal",
        "pl+python",
        "pl+rust",
      ],
      paradigms: [
        "para+concurrent",
        "para+generic",
        "para+imperative",
        "para+modular",
        "para+objects",
        "para+structured",
      ],
      people: [
        ["person+greg-nelson", "designer"],
        ["person+luca-cardelli", "designer"],
      ],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+ia-32", "platf+linux", "platf+mac", "platf+x86-64"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
