import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+matlab")
    .merge({
      name: "MATLAB",
      websites: [{ kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/121px-Matlab_Logo.png",
        },
      ],
      releases: [
        {
          name: "MATLAB (programming language)MATLAB (software)",
          version: "unknown",
          date: "2024-01-01",
          kind: "stable",
        },
      ],
    })
    .addImplementations(["pl+gnu-octave", "pl+sysquake"])
    .addInfluences(["pl+fortran"])
    .addInfluence("pl+speakeasy", {
      refs: [
        {
          href: "http://archive.computerhistory.org/resources/access/text/2013/12/102746804-05-01-acc.pdf",
          title:
            "An interview with CLEVE MOLER Conducted by Thomas Haigh On 8 and 9 March, 2004 Santa Barbara, California",
        },
      ],
    })
    .addPerson("person+cleve-moler", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+objects", "para+array"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+arm"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  /**/
}
