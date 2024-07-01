import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pico")
    .merge({
      name: "Pico",
      websites: [
        { kind: "wikipedia", title: "Pico", href: "https://en.wikipedia.org/wiki/Pico_(programming_language)" },
      ],
      releases: [{ name: "Pico", version: "2.0", date: "2007-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+scheme"])
    .addInfluences(["pl+scheme", "pl+smalltalk"])
    .addParadigms(["para+reflective", "para+imperative"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+mac", "platf+linux", "platf+bsd", "platf+win"]);

  /**/
}
