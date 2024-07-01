import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+snobol")
    .merge({
      name: "SNOBOL",
      websites: [
        { kind: "wikipedia", title: "SNOBOL", href: "https://en.wikipedia.org/wiki/SNOBOL" },
        { kind: "homepage", title: "https://www.regressive.org/snobol4/", href: "https://www.regressive.org/snobol4/" },
      ],
      releases: [{ name: "SNOBOL", version: "unknown", date: "1967-01-01", kind: "stable" }],
    })
    .addDialects(["pl+icon"])
    .addImplementations(["pl+spitbol"])
    .addInfluences(["pl+comit"])
    .addPerson("person+david-j-farber", { role: "designer" })
    .addPerson("person+ralph-griswold", { role: "designer" })
    .addParadigms(["para+imperative", "para+unstructured"]);

  /**/
}
