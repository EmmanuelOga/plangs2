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
      references: {
        influenced_by: [
          { href: "http://chapel-lang.org/spec/spec-0.98.pdf", title: "Chapel spec (Acknowledgments)" },
          { href: "http://chapel-lang.org/papers/BriefOverviewChapel.pdf", title: "A Brief Overview of Chapel" },
        ],
      },
    },
    {
      influences: [
        "pl+ada",
        "pl+c",
        "pl+c-sharp",
        "pl+cpp",
        "pl+cray-mta",
        "pl+cray-xmt",
        "pl+fortran",
        "pl+java",
        "pl+zpl",
      ],
      licenses: ["lic+apache"],
      paradigms: ["para+objects", "para+parallel", "para+partitioned"],
      people: [
        ["person+brad-chamberlain", { role: "designer" }],
        ["person+david-callahan", { role: "designer" }],
        ["person+hans-zima", { role: "designer" }],
        ["person+john-plevyak", { role: "designer" }],
      ],
      platforms: ["platf+aws", "platf+bsd", "platf+cygwin", "platf+linux", "platf+mac", "platf+posix", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+static"],
    },
  );
}
