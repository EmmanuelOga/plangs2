import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+lua",
    "Lua",
    {
      name: "Lua",
      websites: [
        { kind: "wikipedia", title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" },
        { kind: "homepage", title: "www.lua.org", href: "https://www.lua.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "5.4.6", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".lua"],
    },
    {
      implementations: ["pl+ansi-c", "pl+luajit"],
      influences: ["pl+scheme", "pl+lisp", "pl+cpp", "pl+modula", "pl+clu", "pl+snobol", "pl+awk", "pl+self"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+multi",
        "para+scripting",
        "para+imperative",
        "para+prototypes",
        "para+objects",
        "para+functional",
        "para+meta",
        "para+reflective",
      ],
      people: ["person+roberto-ierusalimschy"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
    },
  );
}
