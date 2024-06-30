import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+perl").merge({
    name: "Perl",
    websites: [{ kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
    releases: [
      { version: "5.40.0", date: "2024-01-01", kind: "stable" },
      { version: "5.39.10", date: "2024-01-01", kind: "preview" },
    ],
  });
}
