import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+agentsheets")
    .merge({
      name: "AgentSheets",
      websites: [{ kind: "wikipedia", title: "AgentSheets", href: "https://en.wikipedia.org/wiki/AgentSheets" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Agentsheets_IDE.jpg" }],
      releases: [{ name: "AgentSheets", version: "4.0", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lisp", "pl+logo", "pl+smalltalk", "pl+karel", "pl+objectlogo"])
    .addPerson("person+alexander-repenning", { role: "designer" })
    .addParadigms(["para+objects", "para+educational"])
    .addPlatforms(["platf+jvm"]);

  /**/
}
