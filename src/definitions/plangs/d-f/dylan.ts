import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+dylan")
    .merge({
      name: "Dylan",
      websites: [
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)" },
        { kind: "wikipedia", title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_programming_language" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
        },
      ],
      releases: [{ name: "Dylan", version: "2022.1", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+common-lisp", "pl+algol", "pl+scheme", "pl+eulisp", "pl+oaklisp", "pl+smalltalk"])
    .addParadigms(["para+multi", "para+functional", "para+objects"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform"]);

  /**/
}
