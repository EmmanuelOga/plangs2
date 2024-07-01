import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mercury")
    .merge({
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
      releases: [{ name: "Mercury", version: "22.01.8", date: "2023-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+prolog", "pl+hope", "pl+haskell", "pl+basic"])
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+jvm",
      "platf+.net",
      "platf+cross-platform",
      "platf+unix",
      "platf+linux",
      "platf+mac",
      "platf+bsd",
      "platf+win",
      "platf+android",
    ])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+polymorphic"]);

  /**/
}
