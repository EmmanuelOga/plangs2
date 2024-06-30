import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hy",
    {
      name: "Hy",
      websites: [{ kind: "wikipedia", title: "Hy", href: "https://en.wikipedia.org/wiki/Hy_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hy_Cuddles.png/121px-Hy_Cuddles.png",
        },
      ],
      releases: [
        { version: "0.29.0", date: "2024-01-01", kind: "stable" },
        { version: "1.0", date: "2022-01-01", kind: "preview" },
      ],
    },
    {
      influences: ["pl+clojure", "pl+common-lisp", "pl+kawa"],
      licenses: ["lic+mit"],
      paradigms: [
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+x86-64"],
    },
  );
}
