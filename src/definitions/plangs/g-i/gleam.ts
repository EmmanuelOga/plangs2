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
      references: {
        paradigm: [{ href: "https://gleam.run/", title: "Gleam Homepage" }],
        stable_release: [{ href: "https://github.com/gleam-lang/gleam/releases/tag/v1.1.0", title: "Release 1.1.0" }],
        typing_discipline: [{ href: "https://gleam.run/", title: "Gleam Homepage" }],
        os: [{ href: "https://gleam.run/getting-started/installing/", title: "Installing Gleam" }],
        license: [{ href: "https://github.com/gleam-lang/gleam/blob/main/LICENCE", title: "Gleam License File" }],
        influenced_by: [
          {
            href: "https://www.youtube.com/watch?v=clsTrQUt-4M&t=304",
            title: "Gleam: Past, Present, Future! • Louis Pilfold @ FOSDEM 2024",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2016-06-13", kind: "first" },
        { version: "1.1.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".gleam"],
    },
    {
      implementations: ["pl+rust"],
      influenced: ["pl+elixir"],
      influences: ["pl+elixir", "pl+elm", "pl+erlang", "pl+go", "pl+javascript", "pl+ocaml", "pl+rust"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+multi"],
      people: [["person+louis-pilfold", "designer"]],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+safe", "tsys+static"],
    },
  );

  /**/
}
