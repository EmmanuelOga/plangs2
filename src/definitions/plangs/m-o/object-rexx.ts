import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+object-rexx",
    "Object REXX",
    {
      name: "Object REXX",
      websites: [
        { kind: "wikipedia", title: "Object REXX", href: "https://en.wikipedia.org/wiki/Object_REXX" },
        { kind: "homepage", title: "www.rexxla.org", href: "https://www.rexxla.org/" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rexx3_orig_size_transparent.gif/121px-Rexx3_orig_size_transparent.gif",
        },
      ],
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "5.0.0", date: "2023-01-01", kind: "stable" },
        { version: "5.1.0", kind: "preview" },
      ],
      extensions: [".rxs", ".rex", ".rexx", ".cls"],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+rexx", "pl+smalltalk"],
      licenses: ["lic+common-public", "lic+gpl"],
      paradigms: ["para+objects", "para+class"],
      people: ["person+simon-c-nash"],
      platforms: [
        "platf+ia-32",
        "platf+x86-64",
        "platf+arm",
        "platf+cross-platform",
        "platf+linux",
        "platf+win",
        "platf+mac",
        "platf+bsd",
      ],
    },
  );
}
