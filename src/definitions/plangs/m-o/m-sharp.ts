import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+m-sharp",
    {
      name: "M#",
      websites: [
        { kind: "wikipedia", title: "M#", href: "https://en.wikipedia.org/wiki/M_Sharp_(programming_language)" },
        { kind: "homepage", title: "http://www.msharp.co.uk/", href: "http://www.msharp.co.uk/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Msharp_logo.png" }],
    },
    {
      implementations: ["pl+.net-framework", "pl+asp.net", "pl+domain-specific", "pl+ms-visual-c-sharp"],
      paradigms: ["para+event", "para+imperative", "para+meta", "para+multi", "para+objects", "para+structured"],
      typeSystems: ["tsys+dynamic", "tsys+static"],
    },
  );
}
