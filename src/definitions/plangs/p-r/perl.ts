import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+perl",
    "Perl",
    {
      name: "Perl",
      websites: [{ kind: "wikipedia", title: "Perl", href: "https://en.wikipedia.org/wiki/Perl" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg" }],
      releases: [
        { version: "5.40.0", date: "2024-01-01", kind: "stable" },
        { version: "5.39.10", date: "2024-01-01", kind: "preview" },
      ],
    },
    {
      dialects: ["pl+raku"],
      implementations: ["pl+c"],
      influences: ["pl+awk", "pl+c", "pl+cpp", "pl+basic", "pl+lisp", "pl+sed", "pl+unix-shell", "pl+raku"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+multi"],
      people: ["person+larry-wall"],
      platforms: ["platf+cross-platform"],
    },
  );
}
