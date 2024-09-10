import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+javascriptcore", {
      name: "WebKit",
      description:
        "WebKit is a browser engine primarily used in Apple's Safari web browser, as well as all web browsers on iOS and iPadOS. WebKit is also used by the PlayStation consoles starting with the PS3, the Tizen mobile operating systems, the Amazon Kindle e-book reader, Nintendo consoles starting with the 3DS Internet Browser, and the discontinued BlackBerry Browser.",
      websites: [
        { href: "http://webkit.org/", title: "webkit.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/JavaScriptCore", title: "WebKit", kind: "wikipedia" },
      ],
    })
    .addImplements(["pl+javascript"])
    .addLicenses(["license+bsd"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addWrittenIn(["pl+c++"]);
}
