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
        { version: "5.0.0", date: "2023-01-01", kind: "stable" },
        { version: "5.1.0", kind: "preview" },
      ],
      references: {
        stable_release: [
          {
            href: "https://sourceforge.net/projects/oorexx/files/oorexx/5.0.0/",
            title: "ooRexx (Open Object Rexx) -  Browse /oorexx/5.0.0 at SourceForge.net",
          },
        ],
        influenced_by: [
          {
            href: "https://blog.smartbear.com/programming/7-reasons-that-rexx-still-matters/",
            title: "7 Reasons that Rexx Still Matters",
          },
        ],
      },
      extensions: [".rxs", ".rex", ".rexx", ".cls"],
    },
    {
      implementations: ["pl+cpp"],
      influences: ["pl+rexx", "pl+smalltalk"],
      licenses: ["lic+common-public", "lic+gpl"],
      paradigms: ["para+class", "para+objects"],
      people: [["person+simon-c-nash", { role: "designer" }]],
      platforms: [
        "platf+arm",
        "platf+bsd",
        "platf+cross-platform",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+win",
        "platf+x86-64",
      ],
    },
  );
}
