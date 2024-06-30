import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+s",
    {
      name: "S",
      websites: [
        { kind: "wikipedia", title: "S", href: "https://en.wikipedia.org/wiki/S_(programming_language)" },
        {
          kind: "homepage",
          title: "ect.bell-labs.com/sl/S/",
          href: "https://web.archive.org/web/20181014111802/http://ect.bell-labs.com/sl/S/",
        },
      ],
    },
    {
      implementations: ["pl+s-plus"],
      influences: ["pl+apl", "pl+c", "pl+fortran", "pl+scheme"],
      people: ["person+john-chambers", "person+trevor-hastie", "person+william-s-cleveland"],
      paradigms: ["para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );
}
