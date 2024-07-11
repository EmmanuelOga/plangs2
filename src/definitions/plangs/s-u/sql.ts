import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sql")
    .merge({
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
      images: [
        { kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
      ],
      releases: [{ name: "SQL/PSM", version: "unknown", date: "2023-01-01", kind: "stable" }],
      extensions: [".sql"],
    })
    .addImplementations(["pl+sql", "pl+mariadb"])
    .addInfluences(["pl+datalog", "pl+sql"])
    .addInfluence("pl+ada", {
      refs: [
        {
          href: "http://ocelot.ca/blog/blog/2015/01/15/stored-procedures-critiques-and-defences/",
          title: "Stored Procedures: critiques and defences",
        },
      ],
    })
    .addPerson("person+donald-d-chamberlin", { role: "designer" })
    .addPerson("person+raymond-f-boyce", { role: "designer" })
    .addParadigms(["para+multi", "para+dec"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
