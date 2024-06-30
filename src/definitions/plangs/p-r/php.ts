import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+php").merge({
    name: "PHP",
    websites: [
      { kind: "wikipedia", title: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
      { kind: "homepage", title: "https://thephp.foundation", href: "https://thephp.foundation" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }],
    releases: [{ version: "8.3.8", date: "2024-01-01", kind: "stable" }],
    extensions: [".phar", ".php", ".phps", ".pht", ".phtml"],
  });
}
