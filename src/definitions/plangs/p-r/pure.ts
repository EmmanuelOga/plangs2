import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pure")
    .merge({
      name: "Pure",
      websites: [
        { kind: "wikipedia", title: "Pure", href: "https://en.wikipedia.org/wiki/Pure_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
        },
      ],
      releases: [{ name: "Pure", version: "0.68", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+q", "pl+haskell", "pl+lisp", "pl+alice", "pl+matlab"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+functional", "para+dec", "para+term"])
    .addPlatforms(["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/
}
