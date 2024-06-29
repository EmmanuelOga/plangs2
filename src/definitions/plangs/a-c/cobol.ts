import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+cobol",
    "COBOL",
    {
      name: "COBOL",
      websites: [
        { kind: "wikipedia", title: "COBOL", href: "https://en.wikipedia.org/wiki/COBOL" },
        { kind: "wikipedia", title: "GnuCOBOL", href: "https://en.wikipedia.org/wiki/GnuCOBOL" },
        { kind: "wikipedia", title: "IBM COBOL", href: "https://en.wikipedia.org/wiki/IBM_COBOL" },
        { kind: "wikipedia", title: "CobolScript", href: "https://en.wikipedia.org/wiki/CobolScript" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/COBOL_Report_Apr60.djvu/page1-121px-COBOL_Report_Apr60.djvu.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1959-01-01", kind: "first" },
        { version: "unknown", date: "1989-01-01", kind: "stable" },
      ],
      extensions: [".cbl", ".cob", ".cpy"],
    },
    {
      dialects: ["pl+x-slashopen", "pl+watbol"],
      implementations: ["pl+cobol", "pl+micro-focus"],
      influences: [
        "pl+fact-computer",
        "pl+aimaco",
        "pl+comtran",
        "pl+flow-matic",
        "pl+cpp",
        "pl+eiffel",
        "pl+smalltalk",
        "pl+cobol",
      ],
      paradigms: ["para+imperative", "para+objects", "para+generic"],
      people: ["person+jean-e-sammet", "person+grace-hopper"],
      typeSystems: ["tsys+weak", "tsys+static"],
    },
  );
}
