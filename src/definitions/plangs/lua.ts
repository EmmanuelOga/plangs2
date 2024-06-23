import type { PlangsGraph } from "../../entities/plangs_graph";

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
        { version: "5.4.6", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://marc.info/?l=lua-l&m=168405965608207&w=2", title: "[ANN] Lua 5.4.6 now available" },
        ],
      },
      extensions: [".lua"],
    },
    {
      implementations: ["pl+ansi-c", "pl+luajit"],
      influenced: [
        "pl+awk",
        "pl+c-plus-plus",
        "pl+clu",
        "pl+haxe",
        "pl+io",
        "pl+julia",
        "pl+lisp",
        "pl+modula-2",
        "pl+red",
        "pl+ring",
        "pl+ruby",
        "pl+scheme",
        "pl+self",
        "pl+snobol",
        "pl+squirrel",
      ],
      influences: ["pl+c-plus-plus", "pl+clu", "pl+modula-2", "pl+scheme", "pl+snobol"],
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
      people: [["person+roberto-ierusalimschy", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  /**/
}
