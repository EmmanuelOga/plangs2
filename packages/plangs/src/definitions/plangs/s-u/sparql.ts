import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sparql")
    .merge({
      name: "SPARQL",
      websites: [{ kind: "wikipedia", title: "SPARQL", href: "https://en.wikipedia.org/wiki/SPARQL" }],
      releases: [{ name: "SPARQL", version: "1.1", date: "2013-01-01", kind: "stable" }],
    })
    .addImplementation("pl+jena", {
      refs: [{ href: "https://archive.org/details/isbn_9780470418017/page/406", title: "Semantic Web Programming" }],
    })
    .addImplementation("pl+virtuoso-universal-server", {
      refs: [{ href: "https://archive.org/details/isbn_9780470418017/page/406", title: "Semantic Web Programming" }],
    })
    .addInfluences(["pl+sql"])
    .addParadigms(["para+query"]);

  /**/
}
