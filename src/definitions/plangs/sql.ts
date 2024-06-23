import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
      influenced: ["pl+datalog", "pl+windows-powershell", "pl+xquery"],
      influences: [
        "pl+contextual-query-language",
        "pl+datalog",
        "pl+java-object-oriented-querying",
        "pl+java-persistence-query-language",
        "pl+language-integrated-query",
        "pl+n1ql",
        "pl+powershell",
        "pl+sparql",
      ],
      paradigms: ["para+declarative"],
      people: [
        ["person+donald-d-chamberlin", "designer"],
        ["person+raymond-f-boyce", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/
}
