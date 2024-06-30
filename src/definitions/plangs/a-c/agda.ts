import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+agda").merge({
    name: "Agda",
    websites: [
      { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(programming_language)" },
      { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Agda%27s_official_logo.svg" }],
    releases: [{ version: "2.6.3", date: "2023-01-01", kind: "stable" }],
    extensions: [".agda", ".lagda"],
  });
}
