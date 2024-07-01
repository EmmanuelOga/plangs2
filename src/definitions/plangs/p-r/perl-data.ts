import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+perl-data")
    .merge({
      name: "Perl Data Language (PDL)",
      websites: [
        {
          kind: "wikipedia",
          title: "Perl Data Language (PDL)",
          href: "https://en.wikipedia.org/wiki/Perl_Data_Language",
        },
      ],
      releases: [{ name: "Perl Data Language (PDL)", version: "2.080", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+apl", "pl+idl", "pl+perl"])
    .addPerson("person+karl-glazebrook", { role: "developer" })
    .addLicenses(["lic+gpl", "lic+artistic"])
    .addParadigms(["para+array"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
