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
        { kind: "homepage", title: "chapel-lang.org", href: "https://chapel-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Cray_Chapel_Logo.png" }],
      releases: [
        { version: "unknown", date: "2009-01-01", kind: "first" },
        { version: "2.0.0", date: "2024-03-21", kind: "stable" },
      ],
      extensions: [".chpl"],
    },
    {
      influences: [
        "pl+ada",
        "pl+java",
        "pl+zpl",
        "pl+c-sharp",
        "pl+c",
        "pl+fortran",
        "pl+cpp",
        "pl+cray-mta",
        "pl+cray-xmt",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+partitioned", "para+parallel"],
      people: ["person+david-callahan", "person+hans-zima", "person+brad-chamberlain", "person+john-plevyak"],
      platforms: ["platf+aws", "platf+mac", "platf+linux", "platf+posix", "platf+win", "platf+cygwin", "platf+bsd"],
      typeSystems: ["tsys+static", "tsys+inferred"],
    },
  );
}
