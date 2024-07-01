import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+cobol")
    .merge({
      name: "COBOL",
      websites: [
        { kind: "wikipedia", title: "COBOL", href: "https://en.wikipedia.org/wiki/COBOL" },
        { kind: "wikipedia", title: "CobolScript", href: "https://en.wikipedia.org/wiki/CobolScript" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/COBOL_Report_Apr60.djvu/page1-121px-COBOL_Report_Apr60.djvu.jpg",
        },
      ],
      releases: [{ name: "COBOL", version: "unknown", date: "1989-01-01", kind: "stable" }],
      extensions: [".cbl", ".cob", ".cpy"],
    })
    .addDialects(["pl+watbol"])
    .addDialect("pl+x-slashopen", {
      refs: [
        {
          href: "https://pubs.opengroup.org/onlinepubs/009680799/toc.pdf",
          title: "Technical Standard, COBOL Language",
        },
      ],
    })
    .addInfluences([
      "pl+aimaco",
      "pl+comtran",
      "pl+fact-computer",
      "pl+flow-matic",
      "pl+cpp",
      "pl+eiffel",
      "pl+smalltalk",
    ])
    .addInfluence("pl+cobol", {
      refs: [
        {
          href: "http://dblp1.uni-trier.de/db/conf/edoc/edoc2000.html",
          title: "Enterprise Distributed Object Computing Conference",
        },
      ],
    })
    .addParadigms(["para+imperative", "para+objects", "para+generic"])
    .addTypeSystems(["tsys+weak", "tsys+static"]);

  /**/
}
