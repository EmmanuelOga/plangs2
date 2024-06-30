import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+postscript")
    .merge({
      name: "PostScript",
      websites: [{ kind: "wikipedia", title: "PostScript", href: "https://en.wikipedia.org/wiki/PostScript" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg" },
      ],
      releases: [{ name: "PostScript", version: "unknown", date: "1997-01-01", kind: "stable" }],
      extensions: [".ps"],
    })
    .addImplementations(["pl+trueimage", "pl+ghostscript"])
    .addInfluences(["pl+interpress", "pl+lisp"])
    .addInfluence("pl+cedar", { refs: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }] })
    .addInfluence("pl+mesa", { refs: [{ href: "https://doi.org/10.1109%2F6.4550", title: "10.1109/6.4550" }] })
    .addPerson("person+john-warnock", { role: "designer" })
    .addPerson("person+chuck-geschke", { role: "designer" })
    .addPerson("person+bill-paxton", { role: "designer" })
    .addParadigms(["para+multi", "para+concatenative", "para+stack", "para+imperative"]);

  /**/
}
