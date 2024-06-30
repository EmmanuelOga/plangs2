import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+chapel",
    "Chapel",
    {
      name: "Chapel",
      websites: [
        { kind: "wikipedia", title: "Chapel", href: "https://en.wikipedia.org/wiki/Chapel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Cray_Chapel_Logo.png" }],
      releases: [{ version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+ada",
        "pl+cpp",
        "pl+c-sharp",
        "pl+c",
        "pl+fortran",
        "pl+java",
        "pl+zpl",
        "pl+cray-mta",
        "pl+cray-xmt",
        "pl+ms-visual-c-sharp",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+partitioned", "para+parallel"],
      platforms: ["platf+aws", "platf+mac", "platf+linux", "platf+posix", "platf+win", "platf+cygwin", "platf+bsd"],
      typeSystems: ["tsys+static", "tsys+inferred"],
    },
  );
}
