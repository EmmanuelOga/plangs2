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
        "pl+c-sharp",
        "pl+c-star",
        "pl+carbon",
        "pl+cilk",
        "pl+cpp",
        "pl+cyclone",
        "pl+ms-visual-c-sharp",
        "pl+objective-c",
        "pl+objective-cpp",
        "pl+split-c",
        "pl+unified-parallel-c",
      ],
      implementations: ["pl+clang", "pl+cppbuilder", "pl+gcc", "pl+portable-c-compiler"],
      influences: ["pl+algol", "pl+b", "pl+bcpl", "pl+cpl", "pl+fortran", "pl+pl-slash", "pl+speedcoding"],
      people: ["person+dennis-ritchie"],
      paradigms: ["para+imperative", "para+multi", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+manifest", "tsys+nominative", "tsys+static", "tsys+weak"],
    },
  );

  lb.define(
    "pl+c99",
    { name: "C99", websites: [{ kind: "wikipedia", title: "C99", href: "https://en.wikipedia.org/wiki/C99" }] },
    { influences: ["pl+cpp"] },
  );
}
