import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+modelica", {
      images: [{ title: "Modelica", kind: "other", url: "/images/plangs/m/modelica/main.png" }],
      name: "Modelica",
      description:
        "Modelica is an object-oriented, declarative, multi-domain modeling language for component-oriented modeling of complex systems, e.g., systems containing mechanical, electrical, electronic, hydraulic, thermal, control, electric power or process-oriented subcomponents.\nThe free Modelica language\nis developed by the non-profit Modelica Association. The Modelica Association also develops the free Modelica Standard Library that contains about 1400 generic model components and 1200 functions in various domains, as of version 4.0.0.",
      websites: [
        { href: "https://www.modelica.org/", title: "www.modelica.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Modelica", title: "Modelica", kind: "wikipedia" },
      ],
      extensions: [".mo"],
      releases: [{ version: "3.6", date: "2023-01-01" }],
    })
    .addLicenses(["lic+cc-by"])
    .addParadigms(["para+declarative"])
    .addPlatforms(["platf+cross"]);
}
