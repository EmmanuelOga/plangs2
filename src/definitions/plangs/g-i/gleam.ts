import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gleam")
    .merge({
      name: "Gleam",
      websites: [
        { kind: "wikipedia", title: "Gleam", href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
        },
      ],
      releases: [{ name: "Gleam", version: "1.1.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+rust"])
    .addInfluences(["pl+elixir", "pl+reia"])
    .addLicense("lic+apache", {
      refs: [{ href: "https://github.com/gleam-lang/gleam/blob/main/LICENCE", title: "Gleam License File" }],
    })
    .addParadigms(["para+multi", "para+functional"])
    .addParadigm("para+concurrent", { refs: [{ href: "https://gleam.run/", title: "Gleam Homepage" }] })
    .addPlatforms(["platf+bsd", "platf+linux", "platf+mac"])
    .addPlatform("platf+win", {
      refs: [{ href: "https://gleam.run/getting-started/installing/", title: "Installing Gleam" }],
    })
    .addTypeSystems(["tsys+safe", "tsys+static"])
    .addTypeSystem("tsys+inferred", { refs: [{ href: "https://gleam.run/", title: "Gleam Homepage" }] });

  /**/
}
