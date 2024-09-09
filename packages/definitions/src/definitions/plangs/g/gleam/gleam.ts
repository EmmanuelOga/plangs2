import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+gleam", {
      name: "Gleam",
      description:
        "Gleam is a general-purpose, concurrent, functional high-level programming language that compiles to Erlang or JavaScript source code.",
      firstAppeared: "2016-01-01",
      extensions: [".gleam"],
      websites: [
        { href: "https://gleam.run/", title: "gleam.run", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)", title: "Gleam", kind: "wikipedia" },
      ],
      releases: [{ version: "1.4.1", date: "2024-01-01" }],
      images: [{ kind: "other", title: "Gleam", url: "/images/plangs/g/gleam/other.png" }],
    })
    .addInfluencedBy(["pl+elixir", "pl+erlang", "pl+go", "pl+javascript", "pl+ocaml", "pl+rust"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+concurrent", "para+functional", "para+multi"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+inferred", "tsys+safe", "tsys+static"])
    .addWrittenIn(["pl+rust"]);
}
