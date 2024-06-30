import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lua",
    {
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    },
    {
      implementations: ["pl+ansi-c", "pl+luajit"],
      influences: ["pl+awk", "pl+clu", "pl+cpp", "pl+modula", "pl+scheme", "pl+self", "pl+snobol"],
      people: ["person+roberto-ierusalimschy"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+prototypes",
        "para+reflective",
        "para+scripting",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );
}
