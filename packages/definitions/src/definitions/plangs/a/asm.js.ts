import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+asm.js", {
      images: [],
      name: "asm.js",
      description:
        "asm.js is a subset of JavaScript designed to allow computer software written in languages such as C to be run as web applications while maintaining performance characteristics considerably better than standard JavaScript, which is the typical language used for such applications.",
      websites: [
        { href: "http://asmjs.org/", title: "asmjs.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Asm.js", title: "asm.js", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+javascript"]);
}
