import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+s")
    .merge({
      name: "S",
      websites: [
        { kind: "wikipedia", title: "S", href: "https://en.wikipedia.org/wiki/S_(programming_language)" },
        {
          kind: "homepage",
          title: "ect.bell-labs.com/sl/S/",
          href: "https://web.archive.org/web/20181014111802/http://ect.bell-labs.com/sl/S/",
        },
      ],
    })
    .addImplementations(["pl+s-plus"])
    .addInfluences(["pl+c", "pl+apl", "pl+fortran", "pl+scheme"])
    .addPerson("person+john-chambers", { role: "developer" })
    .addPerson("person+william-s-cleveland", { role: "developer" })
    .addPerson("person+trevor-hastie", { role: "developer" })
    .addParadigms(["para+multi", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
