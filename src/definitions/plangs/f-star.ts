import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+f-star",
    "F*",
    {
      name: "F*",
      websites: [
        { kind: "wikipedia", title: "F*", href: "https://en.wikipedia.org/wiki/F*_(programming_language)" },
        { kind: "homepage", title: "www.fstar-lang.org", href: "http://www.fstar-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fstar-official-logo-2015.png/128px-Fstar-official-logo-2015.png",
        },
      ],
      references: {
        developers: [
          {
            href: "https://www.microsoft.com/en-us/research/collaboration/inria-joint-centre/",
            title: "Microsoft Research Inria Joint Centre",
          },
        ],
        stable_release: [{ href: "https://github.com/FStarLang/FStar", title: "FStarLang/FStar" }],
      },
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "2023.09.03", date: "2023-09-03", kind: "stable" },
      ],
      extensions: [".fst"],
    },
    {
      influenced: ["pl+ml", "pl+ocaml", "pl+standard-ml"],
      influences: ["pl+coq", "pl+dafny", "pl+f-sharp", "pl+lean", "pl+ocaml", "pl+standard-ml"],
      licenses: ["lic+apache"],
      paradigms: ["para+functional", "para+imperative", "para+multi"],
      people: [
        ["person+cedric-fournet", "designer"],
        ["person+jean-yang", "designer"],
        ["person+juan-chen", "designer"],
        ["person+karthikeyan-bhargavan", "designer"],
        ["person+nikhil-swamy", "designer"],
        ["person+pierre-yves-strub", "designer"],
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+windows"],
      typeSystems: ["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
