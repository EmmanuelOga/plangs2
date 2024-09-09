import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+swift", {
      name: "Swift",
      description:
        "Swift is a high-level general-purpose, multi-paradigm, compiled programming language created by Chris Lattner in 2010 for Apple Inc. and maintained by the open-source community. Swift compiles to machine code and uses an LLVM-based compiler. Swift was first released in June 2014 and the Swift toolchain has shipped in Xcode since version 6, released in 2014.",
      firstAppeared: "2014-01-01",
      websites: [
        { href: "https://www.swift.org/", title: "www.swift.org", kind: "homepage" },
        { href: "https://developer.apple.com/swift/", title: "developer.apple.com/swift/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Swift_(programming_language)", title: "Swift", kind: "wikipedia" },
      ],
      releases: [{ version: "5.10.1", date: "2024-01-01" }, { version: "6.0" }],
      images: [{ kind: "logo", title: "Swift", url: "/images/plangs/s/swift/logo.png" }],
      extensions: [".SWIFT", ".swift"],
    })
    .addInfluencedBy(["pl+c", "pl+c-sharp", "pl+clu", "pl+d", "pl+haskell", "pl+lisp", "pl+ruby", "pl+rust"])
    .addLicenses(["lic+apache"])
    .addParadigms([
      "para+concurrent",
      "para+dataflow",
      "para+declarative",
      "para+distributed",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+protocol",
      "para+scientific",
      "para+scripting",
      "para+structured",
    ])
    .addPlatforms(["platf+android", "platf+apple", "platf+cross", "platf+java", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
