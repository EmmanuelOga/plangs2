import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+sql",
    {
      name: "SQL",
      websites: [
        { kind: "wikipedia", title: "PL/SQL", href: "https://en.wikipedia.org/wiki/PL/SQL" },
        { kind: "wikipedia", title: "PL/pgSQL", href: "https://en.wikipedia.org/wiki/PL/pgSQL" },
        { kind: "wikipedia", title: "SQL/PSM", href: "https://en.wikipedia.org/wiki/SQL/PSM" },
        { kind: "wikipedia", title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
        { kind: "wikipedia", title: "MySQL", href: "https://en.wikipedia.org/wiki/MySQL" },
        { kind: "wikipedia", title: "SQL PL", href: "https://en.wikipedia.org/wiki/SQL_PL" },
        { kind: "wikipedia", title: "Mimer SQL", href: "https://en.wikipedia.org/wiki/Mimer_SQL" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }],
      releases: [{ version: "unknown", date: "2023-01-01", kind: "stable" }],
      extensions: [".sql"],
    },
    {
      implementations: ["pl+sql", "pl+mariadb"],
      influences: ["pl+ada", "pl+datalog", "pl+sql"],
      paradigms: ["para+multi", "para+dec"],
      people: ["person+donald-d-chamberlin", "person+raymond-f-boyce"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );
}
