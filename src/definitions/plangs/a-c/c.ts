import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+c",
    {
      name: "C",
      websites: [
        { kind: "wikipedia", title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        {
          kind: "wikipedia",
          title: "C Programming Language",
          href: "https://en.wikipedia.org/wiki/C_Programming_Language",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "2018-01-01", kind: "stable" },
        { version: "unknown", date: "3220-01-01", kind: "preview" },
      ],
    },
    {
      dialects: [
        "pl+cyclone",
        "pl+unified-parallel-c",
        "pl+split-c",
        "pl+cilk",
        "pl+c-star",
        "pl+cpp",
        "pl+c-sharp",
        "pl+carbon",
        "pl+ms-visual-c-sharp",
        "pl+objective-cpp",
        "pl+objective-c",
      ],
      implementations: ["pl+portable-c-compiler", "pl+gcc", "pl+clang", "pl+cppbuilder"],
      influences: ["pl+algol", "pl+b", "pl+bcpl", "pl+cpl", "pl+pl-slash", "pl+fortran", "pl+speedcoding"],
      paradigms: ["para+multi", "para+imperative", "para+structured"],
      people: ["person+dennis-ritchie"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+weak", "tsys+manifest", "tsys+nominative"],
    },
  );

  lb.define(
    "pl+c99",
    { name: "C99", websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }] },
    { influences: ["pl+cpp"] },
  );
}
