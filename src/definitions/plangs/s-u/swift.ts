import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+swift",
    {
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
        { version: "0.96.2", date: "2015-01-01", kind: "stable" },
        { version: "5.10.1", date: "2024-01-01", kind: "stable" },
        { version: "6.0", kind: "preview" },
      ],
    },
    {
      influences: [
        "pl+c",
        "pl+c-sharp",
        "pl+clu",
        "pl+d",
        "pl+haskell",
        "pl+ms-visual-c-sharp",
        "pl+objective-c",
        "pl+objective-cpp",
        "pl+python",
        "pl+ruby",
        "pl+rust",
        "pl+smalltalk",
      ],
      people: ["person+chris-lattner"],
      licenses: ["lic+apache", "lic+proprietary"],
      paradigms: [
        "para+block",
        "para+concurrent",
        "para+dataflow",
        "para+dec",
        "para+distributed",
        "para+functional",
        "para+grid",
        "para+imperative",
        "para+interface",
        "para+multi",
        "para+objects",
        "para+scientific",
        "para+scripting",
      ],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+dos",
        "platf+ios",
        "platf+jvm",
        "platf+linux",
        "platf+mac",
        "platf+tvos",
        "platf+visionos",
        "platf+watchos",
        "platf+win",
        "platf+z-slashos",
      ],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
