import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+swift",
    "Swift",
    {
      name: "Swift",
      websites: [
        { kind: "wikipedia", title: "Swift", href: "https://en.wikipedia.org/wiki/Swift_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Swift",
          href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
        },
        { kind: "homepage", title: "swift-lang.org", href: "http://swift-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "0.96.2", date: "2015-08-05", kind: "stable" },
      ],
    },
    {
      influences: [
        "pl+objective-cpp",
        "pl+c",
        "pl+lisp",
        "pl+ruby",
        "pl+rust",
        "pl+clu",
        "pl+python",
        "pl+smalltalk",
        "pl+d",
      ],
      licenses: ["lic+apache"],
      paradigms: [
        "para+dataflow",
        "para+distributed",
        "para+grid",
        "para+concurrent",
        "para+scientific",
        "para+scripting",
      ],
      platforms: ["platf+cross-platform", "platf+jvm"],
      typeSystems: ["tsys+strong"],
    },
  );
}
