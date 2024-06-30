import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+perl",
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
      influences: ["pl+awk", "pl+basic", "pl+c", "pl+cpp", "pl+lisp", "pl+raku", "pl+sed", "pl+unix-shell"],
      people: ["person+larry-wall"],
      licenses: ["lic+artistic", "lic+gpl"],
      paradigms: ["para+multi"],
      platforms: ["platf+cross-platform"],
    },
  );
}
