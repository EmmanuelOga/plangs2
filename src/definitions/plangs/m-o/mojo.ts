import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mojo")
    .merge({
      name: "Mojo",
      websites: [
        { kind: "wikipedia", title: "Mojo", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)" },
      ],
      releases: [{ name: "Mojo", version: "24.4", date: "2024-01-01", kind: "preview" }],
      extensions: [".mojo", ".🔥"],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20230505064554/https://www.infoworld.com/article/3695588/mojo-language-marries-python-and-mlir-for-ai-development.html",
          title: "Mojo language marries Python and MLIR for AI development",
        },
      ],
    })
    .addPerson("person+chris-lattner", { role: "designer" })
    .addLicenses(["lic+proprietary"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+affine"]);

  /**/
}
