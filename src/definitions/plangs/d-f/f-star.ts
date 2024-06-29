import type { PlangsGraph } from "../../../entities/plangs_graph";

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
      releases: [
        { version: "unknown", date: "2011-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2023.09.03", date: "2023-09-03", kind: "stable" },
      ],
      extensions: [".fst"],
    },
    {
      influences: ["pl+sml", "pl+ocaml", "pl+ml", "pl+coq", "pl+dafny", "pl+f-sharp", "pl+lean"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+imperative"],
      people: [
        "person+nikhil-swamy",
        "person+juan-chen",
        "person+cedric-fournet",
        "person+pierre-yves-strub",
        "person+karthikeyan-bhargavan",
        "person+jean-yang",
      ],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
