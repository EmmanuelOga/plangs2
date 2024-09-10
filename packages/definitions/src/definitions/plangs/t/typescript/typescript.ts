import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+typescript", {
      name: "TypeScript",
      description:
        "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.",
      firstAppeared: "2012-01-01",
      extensions: [".cts", ".mts", ".ts", ".tsx"],
      websites: [
        { href: "https://www.typescriptlang.org/", title: "www.typescriptlang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/TypeScript", title: "TypeScript", kind: "wikipedia" },
      ],
      releases: [{ version: "5.5.4", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+actionscript", "pl+c-sharp", "pl+f-sharp", "pl+javascript"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+structural"]);
}
