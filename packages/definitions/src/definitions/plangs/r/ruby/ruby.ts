import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ruby", {
      name: "Ruby",
      description:
        'Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
      firstAppeared: "1995-01-01",
      extensions: [".rb", ".ru"],
      websites: [
        { href: "https://www.ruby-lang.org/en/", title: "ruby-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ruby_programming_language", title: "Ruby", kind: "wikipedia" },
      ],
      releases: [{ version: "3.3.5", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Ruby", url: "/images/plangs/r/ruby/logo.png" }],
    })
    .addInfluencedBy([
      "pl+ada",
      "pl+basic",
      "pl+c++",
      "pl+clu",
      "pl+dylan",
      "pl+eiffel",
      "pl+lisp",
      "pl+lua",
      "pl+moonscript",
      "pl+perl",
      "pl+python",
      "pl+r5rs",
      "pl+scheme",
    ])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+framework",
      "tag+if",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+scripting",
      "tag+ui",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
