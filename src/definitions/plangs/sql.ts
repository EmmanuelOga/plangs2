import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+mimer-sql", "Mimer SQL", {
    name: "Mimer SQL",
    websites: [{ kind: "wikipedia", title: "Mimer SQL", href: "https://en.wikipedia.org/wiki/Mimer_SQL" }],
  });

  /**/

  lb.define("pl+mysql", "MySQL", {
    name: "MySQL",
    websites: [{ kind: "wikipedia", title: "MySQL", href: "https://en.wikipedia.org/wiki/MySQL" }],
  });

  /**/

  lb.define(
    "pl+pl-slashpgsql",
    "PL/pgSQL",
    {
      name: "PL/pgSQL",
      websites: [
        { kind: "wikipedia", title: "PL/pgSQL", href: "https://en.wikipedia.org/wiki/PL/pgSQL" },
        {
          kind: "homepage",
          title: "www.postgresql.org/docs/current/static/plpgsql.html",
          href: "https://www.postgresql.org/docs/current/static/plpgsql.html",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" }],
      releases: [{ version: "unknown", date: "1998-10-30", kind: "first" }],
    },
    { influenced: ["pl+ada"], influences: ["pl+ada", "pl+pl-slashsql"], people: [["person+jan-wieck", "designer"]] },
  );

  /**/

  lb.define(
    "pl+pl-slashsql",
    "PL/SQL",
    {
      name: "PL/SQL",
      websites: [{ kind: "wikipedia", title: "PL/SQL", href: "https://en.wikipedia.org/wiki/PL/SQL" }],
    },
    { influenced: ["pl+ada", "pl+pl-slashpgsql", "pl+sql-slashpsm"] },
  );

  /**/

  lb.define(
    "pl+sql",
    "SQL",
    {
      name: "SQL",
      websites: [
        { kind: "wikipedia", title: "SQL (Structured Query Language)", href: "https://en.wikipedia.org/wiki/SQL" },
        { kind: "homepage", title: "www.iso.org/standard/76583.html", href: "https://www.iso.org/standard/76583.html" },
      ],
      releases: [
        { version: "unknown", date: "1974-01-01", kind: "first" },
        { version: "unknown", date: "2023-01-01", kind: "stable" },
        { version: "unknown", date: "1986-01-01", kind: "first" },
      ],
      references: {
        influenced: [
          {
            href: "https://arstechnica.com/business/news/2005/10/msh.ars/4",
            title: "A guided tour of the Microsoft Command Shell",
          },
        ],
        internet_media_type: [
          {
            href: "https://www.iana.org/assignments/media-types/application/sql",
            title: "Media Type registration for application/sql",
          },
        ],
      },
      extensions: [],
    },
    {
      implementations: ["pl+list-of-relational-database-management-systems"],
      influenced: ["pl+datalog", "pl+powershell", "pl+xquery"],
      influences: [
        "pl+contextual-query",
        "pl+datalog",
        "pl+java-object-oriented-querying",
        "pl+java-persistence-query",
        "pl+language-integrated-query",
        "pl+n1ql",
        "pl+powershell",
        "pl+sparql",
      ],
      paradigms: ["para+dec"],
      people: [
        ["person+donald-d-chamberlin", "designer"],
        ["person+raymond-f-boyce", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/

  lb.define(
    "pl+sql-1999",
    "SQL:1999",
    {
      name: "SQL:1999",
      websites: [{ kind: "wikipedia", title: "SQL:1999", href: "https://en.wikipedia.org/wiki/SQL:1999" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-2003",
    "SQL:2003",
    {
      name: "SQL:2003",
      websites: [{ kind: "wikipedia", title: "SQL:2003", href: "https://en.wikipedia.org/wiki/SQL:2003" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-2006",
    "SQL:2006",
    {
      name: "SQL:2006",
      websites: [{ kind: "wikipedia", title: "SQL:2006", href: "https://en.wikipedia.org/wiki/SQL:2006" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-2008",
    "SQL:2008",
    {
      name: "SQL:2008",
      websites: [{ kind: "wikipedia", title: "SQL:2008", href: "https://en.wikipedia.org/wiki/SQL:2008" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-2011",
    "SQL:2011",
    {
      name: "SQL:2011",
      websites: [{ kind: "wikipedia", title: "SQL:2011", href: "https://en.wikipedia.org/wiki/SQL:2011" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-2016",
    "SQL:2016",
    {
      name: "SQL:2016",
      websites: [{ kind: "wikipedia", title: "SQL:2016", href: "https://en.wikipedia.org/wiki/SQL:2016" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-2023",
    "SQL:2023",
    {
      name: "SQL:2023",
      websites: [{ kind: "wikipedia", title: "SQL:2023", href: "https://en.wikipedia.org/wiki/SQL:2023" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define(
    "pl+sql-92",
    "SQL-92",
    {
      name: "SQL-92",
      websites: [{ kind: "wikipedia", title: "SQL-92", href: "https://en.wikipedia.org/wiki/SQL-92" }],
    },
    { dialects: ["pl+sql"] },
  );

  /**/

  lb.define("pl+sql-pl", "SQL PL", {
    name: "SQL PL",
    websites: [{ kind: "wikipedia", title: "SQL PL", href: "https://en.wikipedia.org/wiki/SQL_PL" }],
  });

  /**/

  lb.define(
    "pl+sql-slashpsm",
    "SQL/PSM",
    {
      name: "SQL/PSM",
      websites: [{ kind: "wikipedia", title: "SQL/PSM", href: "https://en.wikipedia.org/wiki/SQL/PSM" }],
      releases: [{ version: "unknown", date: "1996-01-01", kind: "first" }],
      references: {
        influenced_by: [
          {
            href: "http://ocelot.ca/blog/blog/2015/01/15/stored-procedures-critiques-and-defences/",
            title: "Stored Procedures: critiques and defences",
          },
        ],
      },
    },
    {
      implementations: ["pl+mariadb", "pl+mimer-sql", "pl+mysql", "pl+pl-slashsql", "pl+sql-pl"],
      influenced: ["pl+ada"],
      influences: ["pl+ada", "pl+pl-slashsql"],
      paradigms: ["para+multi"],
      platforms: ["platf+cross-platform"],
    },
  );

  /**/
}
