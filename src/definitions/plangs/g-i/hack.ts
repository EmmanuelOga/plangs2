import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hack",
    {
      name: "Hack",
      websites: [
        { kind: "wikipedia", title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
        },
      ],
      releases: [{ version: "4.172", date: "2022-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+c-sharp", "pl+php", "pl+ocaml", "pl+java", "pl+scala", "pl+haskell", "pl+ms-visual-c-sharp"],
      licenses: ["lic+mit"],
      people: ["person+meta-platforms"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );
}
