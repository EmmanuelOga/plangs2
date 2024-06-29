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
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "6.2.1", date: "2020-12-31", kind: "stable" },
      ],
    },
    {
      implementations: ["pl+c"],
      influences: ["pl+lisp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflection"],
      people: [
        "person+brian-harvey",
        "person+dan-van-blerkom",
        "person+michael-katz",
        "person+doug-orleans",
        "person+khang-dao",
        "person+fred-gilham",
        "person+yehuda-katz",
        "person+george-mills",
        "person+sanford-owings",
        "person+randy-sargent",
      ],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+win", "platf+mac", "platf+linux"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
