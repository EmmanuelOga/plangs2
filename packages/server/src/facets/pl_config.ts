import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs/index";
import { checkbox, facet, facetInput, month, search } from "./types";

/** All the inputs: we'll distribute them among facets. */
export const PL_INPUTS = {
  plangName: search("Lang Name"),
  extensions: search("File Extension", "trackSelection"),

  appearedAfter: month("Appeared After"),
  releasedAfter: month("Released After"),

  hasLogo: checkbox("Has Logo", "1"),
  hasReleases: checkbox("Any Known Release"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),

  compilesTo: facetInput("Compiles To", "compilesTo", NPlang.kind),
  dialectOf: facetInput("Dialect Of", "dialect", NPlang.kind),
  implements: facetInput("Implements", "impl", NPlang.kind),
  influenced: facetInput("Influenced", "influence", NPlang.kind, "inverse"),
  influencedBy: facetInput("Influenced By", "influence", NPlang.kind),
  licenses: facetInput("Licenses", "license", NLicense.kind),
  paradigms: facetInput("Paradigms", "paradigm", NParadigm.kind),
  platforms: facetInput("Platforms", "plat", NPlatform.kind),
  tags: facetInput("Tags", "tag", NTag.kind),
  typeSystems: facetInput("Type System", "tsys", NTsys.kind),
  writtenIn: facetInput("Written In", "writtenIn", NPlang.kind),
} as const;

/** Groups of facets for Plangs. */
export const PL_FACET_GROUPS = [
  [
    facet("General", ["plangName", "hasLogo", "hasWikipedia", "isMainstream", "extensions"]), // +Released Recently
    facet("Tags", ["tags"]),
  ],
  [facet("Platforms", ["platforms"]), facet("Paradigms", ["paradigms"]), facet("Type Systems", ["typeSystems"])],
  [
    facet("Written In", ["writtenIn"]),
    facet("Transpiler", ["isTranspiler", "compilesTo"]),
    facet("Dialect Of", ["dialectOf"]),
    facet("Implements", ["implements"]),
    facet("Influenced By", ["influencedBy"]),
    facet("Influenced", ["influenced"]),
  ],
  [facet("Created Year", ["appearedAfter"]), facet("Released Year", ["hasReleases", "releasedAfter"])],
  [facet("Licenses", ["licenses"])],
] as const;

export type PlInputKey = keyof typeof PL_INPUTS;
