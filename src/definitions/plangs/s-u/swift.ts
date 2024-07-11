import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+swift")
    .merge({
      name: "Swift",
      websites: [
        { kind: "wikipedia", title: "Swift", href: "https://en.wikipedia.org/wiki/Swift_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Swift (parallel scripting language)",
          href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
        },
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
      ],
      releases: [
        { name: "Swift", version: "0.96.2", date: "2015-01-01", kind: "stable" },
        { name: "Swift", version: "5.10.1", date: "2024-01-01", kind: "stable" },
      ],
    })
    .addInfluences(["pl+smalltalk", "pl+c", "pl+rust", "pl+haskell"])
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+clu", {
      refs: [
        { href: "http://nondot.org/sabre/", title: "Chris Lattner's Homepage" },
        { href: "http://nondot.org/sabre", title: "Chris Lattner's Homepage" },
      ],
    })
    .addInfluence("pl+d", {
      refs: [
        {
          href: "https://developer.apple.com/swift/blog/?id=15",
          title: "Building assert() in Swift, Part 2: __FILE__ and __LINE__",
        },
      ],
    })
    .addInfluence("pl+objective-cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20140604061001/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+objective-c", {
      refs: [
        {
          href: "https://web.archive.org/web/20140604061001/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
        { href: "http://nondot.org/sabre/", title: "Chris Lattner's Homepage" },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
          title: "Chris Lattner's Homepage",
        },
      ],
    })
    .addPerson("person+chris-lattner", { role: "designer" })
    .addLicenses(["lic+apache"])
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://www.drdobbs.com/architecture-and-design/swift-objectively/240168424",
          title: "Swift, Objectively",
        },
      ],
    })
    .addParadigms([
      "para+dataflow",
      "para+distributed",
      "para+grid",
      "para+concurrent",
      "para+scientific",
      "para+scripting",
      "para+multi",
      "para+interface",
      "para+objects",
      "para+functional",
      "para+imperative",
      "para+block",
      "para+dec",
    ])
    .addPlatforms([
      "platf+cross-platform",
      "platf+jvm",
      "platf+mac",
      "platf+ios",
      "platf+dos",
      "platf+tvos",
      "platf+visionos",
      "platf+watchos",
      "platf+linux",
      "platf+win",
      "platf+android",
      "platf+z-slashos",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/
}
