import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+allegro-common-lisp").merge({
    name: "Allegro Common Lisp",
    websites: [
      { kind: "wikipedia", title: "Allegro Common Lisp", href: "https://en.wikipedia.org/wiki/Allegro_Common_Lisp" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Allegro_Common_Lisp_emblem.png/121px-Allegro_Common_Lisp_emblem.png",
      },
    ],
    releases: [{ version: "11.0", date: "2024-01-01", kind: "stable" }],
    scoping: ["dynamic"],
  });

  g.buildPlang("pl+armed-bear-common-lisp").merge({
    name: "ABCL",
    websites: [
      { kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Armed_Bear_Common_Lisp" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
  });

  g.buildPlang("pl+autolisp").merge({
    name: "AutoLisp",
    websites: [{ kind: "wikipedia", title: "AutoLisp", href: "https://en.wikipedia.org/wiki/AutoLisp" }],
    releases: [{ version: "unknown", date: "1995-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+bbn-lisp").merge({
    name: "BBN LISP",
    websites: [{ kind: "wikipedia", title: "BBN LISP", href: "https://en.wikipedia.org/wiki/BBN_LISP" }],
  });

  g.buildPlang("pl+clisp").merge({
    name: "CLISP",
    websites: [{ kind: "wikipedia", title: "CLISP", href: "https://en.wikipedia.org/wiki/CLISP" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LogoCLISP.jpg" }],
    releases: [{ version: "2.49", date: "2010-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+common-lisp").merge({
    name: "Common Lisp",
    websites: [{ kind: "wikipedia", title: "Common Lisp", href: "https://en.wikipedia.org/wiki/Common_Lisp" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
  });

  g.buildPlang("pl+common-lisp-object-system").merge({
    name: "Common Lisp Object System",
    websites: [{ kind: "wikipedia", title: "CLOS", href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System" }],
  });

  g.buildPlang("pl+emacs-lisp").merge({
    name: "Emacs Lisp",
    websites: [{ kind: "wikipedia", title: "Emacs Lisp", href: "https://en.wikipedia.org/wiki/Emacs_Lisp" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg" }],
    releases: [{ version: "29.1", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+embeddable-common-lisp").merge({
    name: "Embeddable Common Lisp",
    websites: [{ kind: "wikipedia", title: "ECL", href: "https://en.wikipedia.org/wiki/Embeddable_Common_Lisp" }],
    releases: [{ version: "23.9.9", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+eulisp").merge({
    name: "EuLisp",
    websites: [{ kind: "wikipedia", title: "EuLisp", href: "https://en.wikipedia.org/wiki/EuLisp" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/EuLispLogo.png" }],
    releases: [{ version: "0.991", date: "2010-01-01", kind: "preview" }],
    scoping: ["dynamic", "static"],
  });

  g.buildPlang("pl+franz-lisp").merge({
    name: "Franz Lisp",
    websites: [{ kind: "wikipedia", title: "Franz Lisp", href: "https://en.wikipedia.org/wiki/Franz_Lisp" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png/300px-4.3_BSD_UWisc_VAX_Emulation_Lisp_Manual.png",
      },
    ],
    scoping: ["lexical"],
  });

  g.buildPlang("pl+gnu-common-lisp").merge({
    name: "GNU Common Lisp",
    websites: [{ kind: "wikipedia", title: "GCL", href: "https://en.wikipedia.org/wiki/GNU_Common_Lisp" }],
    releases: [{ version: "2.6.14", date: "2023-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+interlisp").merge({
    name: "Interlisp",
    websites: [{ kind: "wikipedia", title: "Interlisp", href: "https://en.wikipedia.org/wiki/Interlisp" }],
  });

  g.buildPlang("pl+islisp").merge({
    name: "ISLISP",
    websites: [{ kind: "wikipedia", title: "ISLISP", href: "https://en.wikipedia.org/wiki/ISLISP" }],
  });

  g.buildPlang("pl+le-lisp").merge({
    name: "Le Lisp",
    websites: [{ kind: "wikipedia", title: "Le Lisp", href: "https://en.wikipedia.org/wiki/Le_Lisp" }],
    releases: [{ version: "15.26.13", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+lelisp").merge({
    name: "Le Lisp",
    websites: [{ kind: "wikipedia", title: "LeLisp", href: "https://en.wikipedia.org/wiki/LeLisp" }],
    releases: [{ version: "15.26.13", date: "2020-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+lisp").merge({
    name: "Lisp",
    websites: [
      { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_(programming_language)" },
      { kind: "wikipedia", title: "Lisp", href: "https://en.wikipedia.org/wiki/Lisp_programming_language" },
    ],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg" }],
  });

  g.buildPlang("pl+lispworks").merge({
    name: "LispWorks",
    websites: [{ kind: "wikipedia", title: "LispWorks", href: "https://en.wikipedia.org/wiki/LispWorks" }],
    releases: [{ version: "8.0.1", date: "2022-01-01", kind: "stable" }],
    scoping: ["dynamic"],
  });

  g.buildPlang("pl+maclisp").merge({
    name: "Maclisp",
    websites: [{ kind: "wikipedia", title: "Maclisp", href: "https://en.wikipedia.org/wiki/Maclisp" }],
    extensions: [".fasl", ".lisp"],
  });

  g.buildPlang("pl+multilisp").merge({
    name: "MultiLisp",
    websites: [{ kind: "wikipedia", title: "MultiLisp", href: "https://en.wikipedia.org/wiki/MultiLisp" }],
  });

  g.buildPlang("pl+newlisp").merge({
    name: "newLISP",
    websites: [{ kind: "wikipedia", title: "newLISP", href: "https://en.wikipedia.org/wiki/NewLISP" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Nl_logo_libel_side_color_240X100.png/121px-Nl_logo_libel_side_color_240X100.png",
      },
    ],
    releases: [
      { version: "10.7.5", date: "2019-01-01", kind: "stable" },
      { version: "10.7.4", date: "2018-01-01", kind: "preview" },
    ],
  });

  g.buildPlang("pl+oaklisp").merge({
    name: "Oaklisp",
    websites: [{ kind: "wikipedia", title: "Oaklisp", href: "https://en.wikipedia.org/wiki/Oaklisp" }],
    releases: [{ version: "unknown", date: "2000-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+objvlisp").merge({
    name: "ObjVlisp",
    websites: [{ kind: "wikipedia", title: "ObjVlisp", href: "https://en.wikipedia.org/wiki/ObjVlisp" }],
  });

  g.buildPlang("pl+openlisp").merge({
    name: "OpenLisp",
    websites: [{ kind: "wikipedia", title: "OpenLisp", href: "https://en.wikipedia.org/wiki/OpenLisp" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/OpenLisp_runnning_inside_GNU_Emacs.jpg/300px-OpenLisp_runnning_inside_GNU_Emacs.jpg",
      },
    ],
    releases: [{ version: "11.7.0", date: "2022-01-01", kind: "stable" }],
  });

  g.buildPlang("pl+picolisp").merge({
    name: "PicoLisp",
    websites: [{ kind: "wikipedia", title: "PicoLisp", href: "https://en.wikipedia.org/wiki/Picolisp" }],
    images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/PicoLisp_Logo.svg" }],
  });

  g.buildPlang("pl+star-lisp").merge({
    name: "*Lisp (StarLisp)",
    websites: [{ kind: "wikipedia", title: "*Lisp", href: "https://en.wikipedia.org/wiki/*Lisp" }],
    scoping: ["lexical"],
  });

  g.buildPlang("pl+zetalisp").merge({
    name: "Lisp Machine Lisp",
    websites: [{ kind: "wikipedia", title: "Lisp Machine Lisp", href: "https://en.wikipedia.org/wiki/ZetaLisp" }],
    extensions: [".lisp", ".qfasl"],
  });
}
