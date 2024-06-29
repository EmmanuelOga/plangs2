import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gleam",
    "Gleam",
    {
      name: "Gleam",
      websites: [
        { kind: "wikipedia", title: "Gleam", href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)" },
        { kind: "homepage", title: "gleam.run", href: "https://gleam.run/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
        },
      ],
      releases: [
        { version: "unknown", date: "2016-06-13", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "1.1.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".gleam"],
    },
    {
      implementations: ["pl+rust"],
      influences: ["pl+elixir", "pl+go", "pl+javascript", "pl+elm", "pl+erlang", "pl+ocaml", "pl+rust"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+concurrent"],
      people: ["person+louis-pilfold"],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+safe", "tsys+static", "tsys+inferred"],
    },
  );
}
