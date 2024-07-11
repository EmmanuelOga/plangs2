import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+lfe")
    .merge({
      name: "LFE",
      websites: [{ kind: "wikipedia", title: "LFE", href: "https://en.wikipedia.org/wiki/LFE_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LFE_%28Lisp_Flavored_Erlang%29_Logo.png/121px-LFE_%28Lisp_Flavored_Erlang%29_Logo.png",
        },
      ],
      releases: [{ name: "LFE", version: "2.1.1", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+erlang"])
    .addInfluences([
      "pl+elixir",
      "pl+erlang",
      "pl+common-lisp",
      "pl+maclisp",
      "pl+scheme",
      "pl+clojure",
      "pl+hy",
      "pl+reia",
    ])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+concurrent", "para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
