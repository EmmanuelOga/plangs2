import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+eulisp",
    "EuLisp",
    {
      name: "EuLisp",
      websites: [{ kind: "wikipedia", title: "EuLisp", href: "https://en.wikipedia.org/wiki/EuLisp" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png" }],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "0.991", date: "2010-01-01", kind: "preview" },
      ],
      references: {
        preview_release: [
          {
            href: "https://web.archive.org/web/20120306014143/http://henry.github.com/EuLisp/Doc/EuLisp-0.991/eulisp.pdf",
            title: "Eulisp",
          },
        ],
        major_implementations: [{ href: "https://github.com/Henry/EuLisp", title: "Eulisp" }],
      },
      scoping: ["static", "dynamic"],
      extensions: [".em"],
    },
    {
      dialects: ["pl+lisp-programming-language"],
      influenced: ["pl+common-lisp", "pl+dylan", "pl+islisp", "pl+oaklisp", "pl+scheme", "pl+t-programming-language"],
      influences: [
        "pl+common-lisp",
        "pl+common-lisp-object-system",
        "pl+dylan",
        "pl+haskell",
        "pl+interlisp",
        "pl+islisp",
        "pl+lelisp",
        "pl+oaklisp",
        "pl+objvlisp",
        "pl+scheme",
        "pl+standard-ml",
        "pl+t",
      ],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi", "para+objects"],
      platforms: ["platf+linux"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
