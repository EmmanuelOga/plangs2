import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ucblogo",
    "UCBLogo",
    {
      name: "UCBLogo",
      websites: [
        { kind: "wikipedia", title: "UCBLogo", href: "https://en.wikipedia.org/wiki/UCBLogo" },
        {
          kind: "homepage",
          title: "people.eecs.berkeley.edu/~bh/logo.html",
          href: "http://people.eecs.berkeley.edu/~bh/logo.html",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ubclogo_spiral.png/121px-Ubclogo_spiral.png",
        },
      ],
      references: {
        developers: [
          {
            href: "https://people.eecs.berkeley.edu/~bh/v1ch0/ack.html",
            title: "Volume 1: Symbolic Computing: Acknowledgments",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "6.2.1", date: "2020-12-31", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+educational", "para+functional", "para+imperative", "para+multi", "para+reflection"],
      people: [
        ["person+brian-harvey", { role: "designer" }],
        ["person+dan-van-blerkom", { role: "developer" }],
        ["person+doug-orleans", { role: "developer" }],
        ["person+fred-gilham", { role: "developer" }],
        ["person+george-mills", { role: "developer" }],
        ["person+khang-dao", { role: "developer" }],
        ["person+michael-katz", { role: "developer" }],
        ["person+randy-sargent", { role: "developer" }],
        ["person+sanford-owings", { role: "developer" }],
        ["person+yehuda-katz", { role: "developer" }],
      ],
      platforms: ["platf+ia-32", "platf+linux", "platf+mac", "platf+win", "platf+x86-64"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
