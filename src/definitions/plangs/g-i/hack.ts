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
      influences: ["pl+c-sharp", "pl+haskell", "pl+java", "pl+ms-visual-c-sharp", "pl+ocaml", "pl+php", "pl+scala"],
      people: ["person+meta-platforms"],
      licenses: ["lic+mit"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+static", "tsys+weak"],
    },
  );
}
