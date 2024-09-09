import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+c", {
      name: "C",
      description:
        "C (pronounced /ˈsiː/ – like the letter c) is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems code (especially in kernels), device drivers, and protocol stacks, but its use in application software has been decreasing. C is commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.",
      firstAppeared: "1972-01-01",
      extensions: [".c", ".h"],
      websites: [
        { href: "https://www.iso.org/standard/74528.html", title: "www.iso.org/standard/74528.html", kind: "other" },
        { href: "http://www.open-std.org/jtc1/sc22/wg14/", title: "www.open-std.org/jtc1/sc22/wg14/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/C_(programming_language)", title: "C", kind: "wikipedia" },
      ],
    })
    .addImplements(["pl+curry"])
    .addInfluencedBy(["pl+algol", "pl+fortran"])
    .addParadigms(["para+imperative", "para+multi", "para+procedural", "para+structured"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+manifest", "tsys+nominal", "tsys+static", "tsys+weak"]);
}
