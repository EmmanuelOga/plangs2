import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+matlab",
    {
      name: "MATLAB",
      websites: [{ kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/121px-Matlab_Logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+gnu-octave", "pl+sysquake"],
      influences: ["pl+fortran", "pl+speakeasy"],
      people: ["person+cleve-moler"],
      licenses: ["lic+commercial", "lic+proprietary"],
      paradigms: ["para+array", "para+functional", "para+imperative", "para+multi", "para+objects"],
      platforms: ["platf+arm", "platf+ia-32", "platf+x86-64"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
