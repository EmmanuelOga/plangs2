import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+object-rexx")
    .merge({
      name: "Object REXX",
      websites: [{ kind: "wikipedia", title: "ooREXX", href: "https://en.wikipedia.org/wiki/Object_REXX" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rexx3_orig_size_transparent.gif/121px-Rexx3_orig_size_transparent.gif",
        },
      ],
      releases: [{ name: "Object REXX", version: "5.0.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+cpp"])
    .addInfluences(["pl+rexx"])
    .addInfluence("pl+smalltalk", {
      refs: [
        {
          href: "https://blog.smartbear.com/programming/7-reasons-that-rexx-still-matters/",
          title: "7 Reasons that Rexx Still Matters",
        },
      ],
    })
    .addLicenses(["lic+common-public", "lic+gpl"])
    .addParadigms(["para+objects", "para+class"])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+arm",
      "platf+cross-platform",
      "platf+linux",
      "platf+win",
      "platf+mac",
      "platf+bsd",
    ]);

  /**/
}
