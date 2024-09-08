import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ruby", {
      images: [{ kind: "logo", title: "Ruby" }],
      name: "Ruby",
      description:
        'Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
      websites: [
        { href: "https://www.ruby-lang.org/en/", title: "ruby-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ruby_programming_language", title: "Ruby", kind: "wikipedia" },
      ],
      extensions: [".rb", ".ru"],
      releases: [{ version: "3.3.5", date: "2024-01-01" }],
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
      "pl+r5rs",
      "pl+scheme",
    ])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+oop", "para+reflective"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
