import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ap",
    "A+",
    {
      name: "A+",
      websites: [
        { kind: "wikipedia", title: "A+", href: "https://en.wikipedia.org/wiki/A%2B_(programming_language)" },
        { kind: "homepage", title: "www.aplusdev.org", href: "http://www.aplusdev.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Aplus_logo.jpg/121px-Aplus_logo.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "4.22", date: "2008-03-27", kind: "stable" },
      ],
      references: {
        filename_extensions: [
          {
            href: "https://web.archive.org/web/20200224202643/http://www.aplusdev.org/APlusRefV2_63.html#HEADING991",
            title: "A+ Reference: Appendix: Quick Reference",
          },
        ],
      },
      extensions: [".+", ".a", ".m"],
    },
    {
      influences: ["pl+apl"],
      licenses: ["lic+gpl"],
      paradigms: ["para+array"],
      people: [
        ["person+arthur-whitney", "designer"],
        ["person+morgan-stanley", "developer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
