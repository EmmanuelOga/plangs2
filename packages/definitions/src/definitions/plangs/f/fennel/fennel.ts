import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fennel", {
      name: "Fennel",
      description:
        "Fennel is a programming language that brings together the Lisp syntax and the Lua runtime. It is designed to be both simple and fast, providing seamless interoperation with Lua.",
      keywords: ["fennel"],
      websites: [
        { title: "Fennel", href: "https://fennel-lang.org/", kind: "homepage" },
        { title: "Fennel", href: "https://en.wikipedia.org/wiki/Fennel_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".fnl"],
      firstAppeared: "2020-01-01",
      images: [{ kind: "logo", title: "Fennel Logo", url: "https://fennel-lang.org/logo.svg", width: 512, height: 512 }],
      isTranspiler: true,
      releases: [
        { version: "0.6.0", name: "Fennel 0.6.0", date: "2021-07-22" },
        { version: "0.7.0", name: "Fennel 0.7.0", date: "2022-03-01" },
        { version: "0.8.0", name: "Fennel 0.8.0", date: "2022-12-15" },
      ],
    })
    .addInfluencedBy(["pl+lua", "pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+macro", "paradigm+metaprogramming", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+lua"])
    .addCompilesTo(["pl+lua"]);
}
