import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hack",
    "Hack",
    {
      name: "Hack",
      websites: [
        { kind: "wikipedia", title: "Hack", href: "https://en.wikipedia.org/wiki/Hack_(programming_language)" },
        { kind: "homepage", title: "hacklang.org", href: "https://hacklang.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "2014-01-01", kind: "first" },
        { version: "4.172", date: "2022-01-01", kind: "stable" },
      ],
    },
    {
      influences: ["pl+java", "pl+php", "pl+ocaml", "pl+c-sharp", "pl+scala", "pl+haskell"],
      licenses: ["lic+mit"],
      people: ["person+julien-verlaguet", "person+alok-menghrajani", "person+drew-paroski", "person+meta-platforms"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+static", "tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );
}
