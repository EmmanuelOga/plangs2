import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+flutter", {
      name: "Flutter",
      description:
        "Flutter is an open-source UI software development kit created by Google. It can be used to develop cross platform applications from a single codebase for the web, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017. Flutter is used internally by Google in apps such as Google Pay and Google Earth as well as other software developers including ByteDance and Alibaba.",
      keywords: ["flutter"],
      isTranspiler: true,
      releases: [
        { version: "0.0.6", name: "Alpha", date: "2017-05-12" },
        { version: "3.24.4", name: "Stable", date: "2024-10-24" },
        { version: "3.24.1", name: "Flutter 3.24.1", date: "2024-01-01" },
      ],
      extensions: [".dart"],
      extWikipediaPath: "Flutter_(software)",
      extHomeURL: "https://flutter.dev/",
      created: "2017",
    })
    .relCompilesTo.add(["pl+javascript"])
    .relImplements.add(["pl+dart"])
    .relLicenses.add(["lic+bsd"])
    .relParadigms.add(["para+declarative", "para+functional", "para+oop"])
    .relPlatforms.add(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .relTags.add(["tag+3dg", "tag+app", "tag+framework", "tag+industrial", "tag+ray-tracer", "tag+ui"])
    .relTypeSystems.add(["tsys+static", "tsys+strong"])
    .relWrittenWith.add(["pl+c", "pl+c++", "pl+dart"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
