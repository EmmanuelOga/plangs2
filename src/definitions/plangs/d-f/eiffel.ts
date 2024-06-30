import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+eiffel")
    .merge({
      name: "Eiffel",
      websites: [
        { kind: "wikipedia", title: "Eiffel", href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Eiffel_logo.svg" }],
      releases: [{ name: "Eiffel", version: "23.09", date: "2023-01-01", kind: "stable" }],
      extensions: [".e"],
    })
    .addImplementations(["pl+eiffelstudio", "pl+libertyeiffel", "pl+smarteiffel", "pl+visual-eiffel"])
    .addInfluences(["pl+simula", "pl+z-notation", "pl+simula-67", "pl+simula67"])
    .addInfluence("pl+ada", {
      refs: [{ href: "https://cs.nyu.edu/~goldberg/griffin.html", title: "The Griffin Project" }],
    })
    .addPerson("person+bertrand-meyer", { role: "designer" })
    .addParadigms(["para+objects", "para+class", "para+generic", "para+concurrent"])
    .addPlatforms(["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static"]);

  /**/

  g.buildPlang("pl+eiffelstudio").merge({
    name: "EiffelStudio",
    websites: [{ kind: "wikipedia", title: "EiffelStudio", href: "https://en.wikipedia.org/wiki/EiffelStudio" }],
  });

  /**/

  g.buildPlang("pl+libertyeiffel")
    .merge({
      name: "Liberty Eiffel",
      websites: [{ kind: "wikipedia", title: "LibertyEiffel", href: "https://en.wikipedia.org/wiki/LibertyEiffel" }],
      releases: [{ name: "Liberty Eiffel", version: "2016.05", date: "2016-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+gpl"]);

  /**/

  g.buildPlang("pl+smarteiffel").merge({
    name: "SmartEiffel",
    websites: [{ kind: "wikipedia", title: "SmartEiffel", href: "https://en.wikipedia.org/wiki/SmartEiffel" }],
  });

  /**/

  g.buildPlang("pl+visual-eiffel").merge({
    name: "Visual Eiffel",
    websites: [{ kind: "wikipedia", title: "Visual Eiffel", href: "https://en.wikipedia.org/wiki/Visual_Eiffel" }],
  });

  /**/
}
