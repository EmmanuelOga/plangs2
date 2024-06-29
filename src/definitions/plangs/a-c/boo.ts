import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+boo",
    "Boo",
    {
      name: "Boo",
      websites: [
        { kind: "wikipedia", title: "Boo", href: "https://en.wikipedia.org/wiki/Boo_(programming_language)" },
        { kind: "repository", title: "github.com/boo-lang", href: "https://github.com/boo-lang" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/BooLogo.png" }],
      releases: [
        { version: "unknown", date: "2003-01-01", kind: "first" },
        { version: "0.9.7", date: "2013-03-25", kind: "stable" },
      ],
      references: {
        license: [{ href: "https://github.com/bamboo/boo/blob/master/license.txt", title: "license.txt" }],
      },
    },
    {
      implementations: ["pl+c-sharp"],
      influences: ["pl+c-sharp", "pl+python"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+objects"],
      people: [
        ["person+mason-wheeler", { role: "developer" }],
        ["person+rodrigo-b-de-oliveira", { role: "designer" }],
      ],
      platforms: ["platf+.net", "platf+mono"],
      typeSystems: ["tsys+duck", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
