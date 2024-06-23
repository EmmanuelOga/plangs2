import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

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
}
