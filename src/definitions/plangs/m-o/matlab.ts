import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+matlab",
    "MATLAB",
    {
      name: "MATLAB",
      websites: [
        { kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" },
        { kind: "homepage", title: "mathworks.com", href: "https://www.mathworks.com/products/matlab.html" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/121px-Matlab_Logo.png",
        },
      ],
      releases: [
        { version: "unknown", date: "1970-01-01", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2024-01-01", kind: "stable" },
        { version: "unknown", date: "1984-01-01", kind: "first" },
      ],
      extensions: [".m", ".p", ".mex*", ".mat", ".fig", ".mlx", ".mlapp", ".mltbx"],
    },
    {
      implementations: ["pl+gnu-octave", "pl+sysquake"],
      influences: ["pl+apl", "pl+eispack", "pl+fortran", "pl+linpack", "pl+pl-slash", "pl+speakeasy"],
      licenses: ["lic+proprietary", "lic+commercial"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+objects", "para+array"],
      people: ["person+cleve-moler"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+arm"],
      typeSystems: ["tsys+dynamic", "tsys+weak"],
    },
  );
}
