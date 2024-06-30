import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+mercury",
    {
      name: "Mercury",
      websites: [
        { kind: "wikipedia", title: "Mercury", href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)" },
        {
          kind: "wikipedia",
          title: "Mercury",
          href: "https://en.wikipedia.org/wiki/Mercury_(RemObjects_BASIC_programming_language)",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Mercury_%28programming_language%29_logo.jpg/121px-Mercury_%28programming_language%29_logo.jpg",
        },
      ],
      releases: [{ version: "22.01.8", date: "2023-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+basic", "pl+haskell", "pl+hope", "pl+prolog"],
      licenses: ["lic+gpl", "lic+lgpl"],
      platforms: [
        "platf+.net",
        "platf+android",
        "platf+arm",
        "platf+bsd",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+jvm",
        "platf+linux",
        "platf+mac",
        "platf+unix",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: ["tsys+polymorphic", "tsys+static", "tsys+strong"],
    },
  );
}
