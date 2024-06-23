import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tk",
    "Tk",
    {
      name: "Tk",
      websites: [
        { kind: "wikipedia", title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)" },
        { kind: "homepage", title: "tcl.tk", href: "http://www.tcl.tk/" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Tcl-Tk_universal_scripting.svg" },
      ],
      references: {
        developers: [{ href: "http://www.tcl.tk/community/coreteam", title: "Tcl/Tk Core Development" }],
        stable_release: [
          {
            href: "https://sourceforge.net/p/tcl/mailman/message/37738603/",
            title: "[TCLCORE] Tcl/Tk 8.6.13 RELEASED",
          },
        ],
        license: [{ href: "http://www.tcl.tk/software/tcltk/license.html", title: "Tcl/Tk Licensing Terms" }],
      },
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "8.6.13", date: "2022-01-01", kind: "stable" },
      ],
    },
    { influenced: ["pl+powershell"], licenses: ["lic+bsd-s"], platforms: ["platf+cross-platform"] },
  );

  /**/
}
