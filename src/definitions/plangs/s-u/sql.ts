import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+sql",
    "SQL",
    {
      name: "SQL",
      websites: [
        { kind: "wikipedia", title: "PL/SQL", href: "https://en.wikipedia.org/wiki/PL/SQL" },
        { kind: "wikipedia", title: "PL/pgSQL", href: "https://en.wikipedia.org/wiki/PL/pgSQL" },
        { kind: "wikipedia", title: "SQL/PSM", href: "https://en.wikipedia.org/wiki/SQL/PSM" },
        { kind: "wikipedia", title: "SQL (Structured Query Language)", href: "https://en.wikipedia.org/wiki/SQL" },
        { kind: "homepage", title: "www.iso.org/standard/76583.html", href: "https://www.iso.org/standard/76583.html" },
        { kind: "wikipedia", title: "SQL-92", href: "https://en.wikipedia.org/wiki/SQL-92" },
        { kind: "wikipedia", title: "SQL:1999", href: "https://en.wikipedia.org/wiki/SQL:1999" },
        { kind: "wikipedia", title: "SQL:2003", href: "https://en.wikipedia.org/wiki/SQL:2003" },
        { kind: "wikipedia", title: "SQL:2006", href: "https://en.wikipedia.org/wiki/SQL:2006" },
        { kind: "wikipedia", title: "SQL:2008", href: "https://en.wikipedia.org/wiki/SQL:2008" },
        { kind: "wikipedia", title: "SQL:2011", href: "https://en.wikipedia.org/wiki/SQL:2011" },
        { kind: "wikipedia", title: "SQL:2016", href: "https://en.wikipedia.org/wiki/SQL:2016" },
        { kind: "wikipedia", title: "SQL:2023", href: "https://en.wikipedia.org/wiki/SQL:2023" },
        { kind: "wikipedia", title: "MySQL", href: "https://en.wikipedia.org/wiki/MySQL" },
        { kind: "wikipedia", title: "SQL PL", href: "https://en.wikipedia.org/wiki/SQL_PL" },
        { kind: "wikipedia", title: "Mimer SQL", href: "https://en.wikipedia.org/wiki/Mimer_SQL" },
        {
          kind: "homepage",
          title: "www.postgresql.org/docs/current/static/plpgsql.html",
          href: "https://www.postgresql.org/docs/current/static/plpgsql.html",
        },
      ],
      releases: [
        { version: "unknown", date: "1974-01-01", kind: "first" },
        { version: "unknown", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "unknown", date: "1998-10-30", kind: "first" },
      ],
      extensions: [],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }],
    },
    {
      dialects: ["pl+sql"],
      implementations: ["pl+sql", "pl+mariadb"],
      influences: ["pl+ada", "pl+datalog", "pl+sql"],
      paradigms: ["para+dec", "para+multi"],
      people: ["person+donald-d-chamberlin", "person+raymond-f-boyce", "person+jan-wieck"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );
}
