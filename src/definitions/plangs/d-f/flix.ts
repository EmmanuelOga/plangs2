import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+flix",
    "Flix",
    {
      name: "Flix",
      websites: [
        { kind: "wikipedia", title: "Flix", href: "https://en.wikipedia.org/wiki/Flix_(programming_language)" },
      ],
      extensions: [".flix"],
    },
    {
      influences: ["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"],
      licenses: ["lic+apache"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+logic"],
      platforms: ["platf+jvm"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"],
    },
  );
}
