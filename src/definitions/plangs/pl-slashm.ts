import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pl-slashm",
    "PL/M",
    {
      name: "PL/M",
      websites: [{ kind: "wikipedia", title: "PL/M", href: "https://en.wikipedia.org/wiki/PL/M" }],
      references: {
        developer: [
          {
            href: "https://web.archive.org/web/20190726193738/http://www.drdobbs.com/architecture-and-design/gary-kildall-and-collegial-entrepreneurs/184410428",
            title: "Gary Kildall and Collegial Entrepreneurship",
          },
        ],
        first_appeared: [
          {
            href: "https://web.archive.org/web/20191003055634/https://computerhistory.org/blog/in-his-own-words-gary-kildall/?key=in-his-own-words-gary-kildall",
            title: "In His Own Words: Gary Kildall",
          },
          {
            href: "http://www.computerhistory.org/atchm/computer-history-museum-license-agreement-for-the-kildall-manuscript/",
            title:
              "Computer Connections: People, Places, and Events in the Evolution of the Personal Computer Industry",
          },
        ],
      },
      releases: [{ version: "unknown", date: "1973-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+pl-slash1"],
      influences: ["pl+algol", "pl+pl-slashi", "pl+xpl"],
      people: [["person+gary-kildall", "designer"]],
    },
  );

  /**/
}
