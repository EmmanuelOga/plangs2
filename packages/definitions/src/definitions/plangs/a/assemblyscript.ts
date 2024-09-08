import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+assemblyscript", {
      images: [{ title: "AssemblyScript", kind: "logo", url: "/images/plangs/a/assemblyscript/main.png" }],
      name: "AssemblyScript",
      description:
        "AssemblyScript is a TypeScript-based programming language that is optimized for, and statically compiled to, WebAssembly (currently using asc, the reference AssemblyScript compiler). Resembling ECMAScript and JavaScript, but with static types, the language is developed by the AssemblyScript Project with contributions from the AssemblyScript community.",
      websites: [
        { href: "https://www.assemblyscript.org/", title: "www.assemblyscript.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/AssemblyScript", title: "AssemblyScript", kind: "wikipedia" },
      ],
      extensions: [".ts"],
      releases: [{ version: "0.27.29", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+javascript"])
    .addInfluencedBy(["pl+javascript"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+imperative", "para+multi", "para+oop"])
    .addTypeSystems(["tsys+static"]);
}
