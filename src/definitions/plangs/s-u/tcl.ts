import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tcl",
    "Tcl",
    {
      name: "Tcl",
      websites: [
        { kind: "wikipedia", title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl" },
        { kind: "homepage", title: "www.tcl-lang.org", href: "https://www.tcl-lang.org" },
        { kind: "homepage", title: "www.tcl.tk", href: "https://www.tcl.tk" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg" }],
      references: {
        developer: [{ href: "http://www.tcl.tk/community/coreteam", title: "Tcl/Tk Core Development" }],
        stable_release: [
          {
            href: "https://sourceforge.net/p/tcl/mailman/message/58743251/",
            title: "[TCLCORE] Tcl/Tk 8.6.14 RELEASED",
          },
        ],
        license: [{ href: "http://www.tcl-lang.org/software/tcltk/license.html", title: "Tcl/Tk License Terms" }],
        filename_extensions: [
          { href: "http://docs.activestate.com/tdk/4.1/Compiler.html", title: "Tcl Dev Kit – Compiler" },
        ],
        influenced: [
          {
            href: "http://itc.conversationsnetwork.org/shows/detail3298.html",
            title:
              "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
          },
          {
            href: "https://web.archive.org/web/20081225093003/http://blogs.msdn.com/powershell/archive/2008/05/25/powershell-and-wpf-wtf.aspx",
            title: "PowerShell and WPF: WTF",
          },
          { href: "https://fossil-scm.org/home/doc/trunk/www/th1.md", title: "TH1 Scripts" },
        ],
      },
      releases: [
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "8.6.14", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".tcl", ".tbc"],
    },
    {
      influences: ["pl+awk", "pl+lisp"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects"],
      people: [["person+john-ousterhout", { role: "designer" }]],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
