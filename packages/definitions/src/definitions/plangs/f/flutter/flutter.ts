import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+flutter", {
      name: "Flutter",
      description:
        "Flutter is an open-source UI software development kit created by Google. It can be used to develop cross platform applications from a single codebase for the web, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017. Flutter is used internally by Google in apps such as Google Pay and Google Earth as well as other software developers including ByteDance and Alibaba.",
      keywords: ["flutter"],
      websites: [
        { title: "flutter.dev", href: "https://flutter.dev/", kind: "homepage" },
        { title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)", kind: "wikipedia" },
      ],
      firstAppeared: "2017-05-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "0.0.6", name: "Flutter 0.0.6", date: "2017-01-01" },
        { version: "3.24.1", name: "Flutter 3.24.1", date: "2024-01-01" },
      ],
    })
    .addImplements(["pl+dart"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+app", "tag+framework", "tag+industrial", "tag+ray-tracer", "tag+ui"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+c++", "pl+dart"]);
}
