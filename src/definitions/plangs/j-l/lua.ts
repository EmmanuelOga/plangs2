import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+lua")
    .merge({
      name: "Lua",
      websites: [{ kind: "wikipedia", title: "Lua", href: "https://en.wikipedia.org/wiki/Lua_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" }],
      releases: [{ name: "Lua", version: "5.4.6", date: "2023-01-01", kind: "stable" }],
      extensions: [".lua"],
    })
    .addImplementations(["pl+ansi-c", "pl+luajit"])
    .addInfluences(["pl+awk", "pl+clu", "pl+modula", "pl+scheme", "pl+self"])
    .addInfluence("pl+cpp", {
      refs: [
        { href: "https://www.lua.org/history.html", title: "The evolution of an extension language: a history of Lua" },
      ],
    })
    .addInfluence("pl+snobol", {
      refs: [
        {
          href: "https://www.lua.org/doc/hopl.pdf",
          title: "Proceedings of the third ACM SIGPLAN conference on History of programming languages",
        },
      ],
    })
    .addPerson("person+roberto-ierusalimschy", { role: "designer" })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+scripting",
      "para+imperative",
      "para+prototypes",
      "para+objects",
      "para+functional",
      "para+meta",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak", "tsys+duck"]);

  /**/

  g.buildPlang("pl+luajit").merge({
    name: "LuaJIT",
    websites: [{ kind: "wikipedia", title: "LuaJIT", href: "https://en.wikipedia.org/wiki/LuaJIT" }],
  });

  /**/
}
