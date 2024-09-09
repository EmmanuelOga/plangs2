import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+flutter", {
      name: "Flutter",
      description:
        "Flutter is an open-source UI software development kit created by Google. It can be used to develop cross platform applications from a single codebase for the web, Fuchsia, Android, iOS, Linux, macOS, and Windows. First described in 2015, Flutter was released in May 2017. Flutter is used internally by Google in apps such as Google Pay and Google Earth as well as other software developers including ByteDance and Alibaba.",
      websites: [
        { href: "https://flutter.dev/", title: "flutter.dev", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Flutter_(software)", title: "Flutter", kind: "wikipedia" },
      ],
      releases: [
        { version: "0.0.6", date: "2017-01-01" },
        { version: "3.24.1", date: "2024-01-01" },
      ],
    })
    .addImplements(["pl+dart"])
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+android", "platf+apple", "platf+linux", "platf+windows"])
    .addTags(["tag+app", "tag+framework"])
    .addWrittenIn(["pl+c", "pl+c++", "pl+dart"]);
}
