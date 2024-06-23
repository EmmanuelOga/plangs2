import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+newlisp",
    "newLISP",
    {
      name: "newLISP",
      websites: [
        { kind: "wikipedia", title: "newLISP", href: "https://en.wikipedia.org/wiki/NewLISP" },
        { kind: "homepage", title: "www.newlisp.org", href: "http://www.newlisp.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Nl_logo_libel_side_color_240X100.png/121px-Nl_logo_libel_side_color_240X100.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1991-01-01", kind: "first" },
        { version: "10.7.5", date: "2019-05-12", kind: "stable" },
        { version: "10.7.4", date: "2018-09-10", kind: "preview" },
      ],
      references: {
        stable_release: [{ href: "http://www.newlisp.org/", title: "newLISP" }],
        preview_release: [{ href: "http://www.newlisp.org/", title: "newLISP" }],
      },
    },
    {
      dialects: ["pl+lisp-programming-language"],
      influences: ["pl+c", "pl+common-lisp", "pl+perl", "pl+scheme"],
      licenses: ["lic+gpl"],
      people: [["person+lutz-mueller", "designer"]],
      platforms: ["platf+cross-platform", "platf+ia-32", "platf+unix", "platf+windows", "platf+x86-64"],
    },
  );

  /**/
}
