import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+v8", {
      name: "V8",
      description:
        "V8 is a JavaScript and WebAssembly engine developed by Google for its Chrome browser. V8 is free and open-source software that is part of the Chromium project and also used separately in non-browser contexts, notably the Node.js runtime system.",
      websites: [
        { href: "https://v8.dev/", title: "v8.dev", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/V8_(JavaScript_engine)", title: "V8", kind: "wikipedia" },
      ],
      releases: [{ version: "11.4", date: "2023-01-01" }],
    })
    .addImplements(["pl+javascript"])
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+arm", "platf+x86-64"])
    .addWrittenIn(["pl+c++"]);
}
