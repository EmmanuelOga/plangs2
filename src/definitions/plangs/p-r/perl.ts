import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+perl",
    "Perl",
    {
      name: "Perl",
      websites: [
        { kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" },
        { kind: "homepage", title: "perl.org", href: "https://www.perl.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1987-12-18", kind: "first" },
        { version: "5.40.0", date: "2024-06-09", kind: "stable" },
        { version: "5.39.10", date: "2024-04-27", kind: "preview" },
      ],
      extensions: [".plx", ".pls", ".pl", ".pm", ".xs", ".t", ".pod", ".cgi", ".psgi"],
    },
    {
      dialects: ["pl+raku"],
      implementations: ["pl+c"],
      influences: ["pl+lisp", "pl+cpp", "pl+awk", "pl+sed", "pl+c", "pl+basic", "pl+unix-shell", "pl+raku"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+multi"],
      people: ["person+larry-wall"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
