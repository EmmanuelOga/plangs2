import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+awk")
    .merge({
      name: "AWK",
      websites: [{ kind: "wikipedia", title: "AWK", href: "https://en.wikipedia.org/wiki/AWK" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/The-AWK-Programming-Language.svg",
        },
      ],
      releases: [{ name: "AWK", version: "1003.1", date: "1003-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+sed", "pl+snobol"])
    .addPerson("person+alfred-aho", { role: "designer" })
    .addPerson("person+peter-weinberger", { role: "designer" })
    .addPerson("person+brian-kernighan", { role: "designer" })
    .addParadigms(["para+scripting", "para+imperative"])
    .addParadigm("para+data", {
      refs: [
        {
          href: "https://web.archive.org/web/20150427143548/https://www6.software.ibm.com/developerworks/education/au-gawk/au-gawk-a4.pdf",
          title: "Get started with GAWK: AWK language fundamentals",
        },
      ],
    })
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
