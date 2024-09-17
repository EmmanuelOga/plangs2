import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+python", {
      name: "Python",
      description:
        "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
      firstAppeared: "1991-01-01",
      extensions: [".py", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"],
      websites: [
        { href: "https://www.python.org/", title: "python.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Python_(programming_language)", title: "Python", kind: "wikipedia" },
      ],
      releases: [{ version: "3.12.5", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Python", url: "/images/plangs/p/python/logo.png" }],
    })
    .addInfluencedBy([
      "pl+ada",
      "pl+apl",
      "pl+c",
      "pl+c++",
      "pl+clu",
      "pl+dylan",
      "pl+haskell",
      "pl+icon",
      "pl+lisp",
      "pl+perl",
      "pl+r5rs",
      "pl+scheme",
      "pl+standard-ml",
    ])
    .addLicenses(["license+python"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+linux", "plat+raspberry", "plat+wasm", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+cas",
      "tag+compiler",
      "tag+dbms",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+testing",
      "tag+ui",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+optional", "tsys+strong"]);
}
