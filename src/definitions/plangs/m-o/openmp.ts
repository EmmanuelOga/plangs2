import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+openmp",
    "OpenMP",
    {
      name: "OpenMP",
      websites: [
        { kind: "wikipedia", title: "OpenMP", href: "https://en.wikipedia.org/wiki/OpenMP" },
        { kind: "homepage", title: "openmp.org", href: "http://openmp.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/180px-OpenMP_logo.png",
        },
      ],
      references: {
        original_authors: [
          {
            href: "https://web.archive.org/web/20130809153922/http://openmp.org/wp/about-openmp/",
            title: "About the OpenMP ARB and",
          },
        ],
        developers: [
          {
            href: "https://web.archive.org/web/20130809153922/http://openmp.org/wp/about-openmp/",
            title: "About the OpenMP ARB and",
          },
        ],
      },
      releases: [{ version: "5.2", date: "2021-01-01", kind: "stable" }],
    },
    { influences: ["pl+cilk-plus"] },
  );
}
