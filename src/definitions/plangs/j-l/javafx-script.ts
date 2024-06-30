import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+javafx-script",
    {
      name: "JavaFX",
      websites: [
        { kind: "wikipedia", title: "JavaFX", href: "https://en.wikipedia.org/wiki/JavaFX_Script" },
        { kind: "homepage", title: "http://javafx.com/", href: "http://javafx.com/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/JavaFX_Logo.png/200px-JavaFX_Logo.png",
        },
      ],
      releases: [{ version: "1.2", date: "2009-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], platforms: ["platf+jvm", "platf+cross-platform"] },
  );
}
