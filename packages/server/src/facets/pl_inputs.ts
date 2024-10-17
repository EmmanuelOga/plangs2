import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs/index";
import { checkbox, facet, facetGroup, month, multiple, search } from "./types";

/** All the inputs: we'll distribute them among facets. */
export const PL_INPUTS = {
  plangName: search("Lang Name"),

  extensions: multiple("File Extension"),

  hasLogo: checkbox("Has Logo"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),
  releasesRecently: checkbox("Released recently"),

  creationDate: facet("Creation Date", { source: "creationDate" }),

  compilesTo: facet("Compiles To", { edge: "compilesTo", node: NPlang.kind }),
  dialectOf: facet("Dialect Of", { edge: "dialect", node: NPlang.kind }),
  implements: facet("Implements", { edge: "impl", node: NPlang.kind }),
  influenced: facet("Influenced", { edge: "influence", node: NPlang.kind, dir: "inverse" }),
  influencedBy: facet("Influenced By", { edge: "influence", node: NPlang.kind }),
  licenses: facet("Licenses", { edge: "license", node: NLicense.kind }),
  paradigms: facet("Paradigms", { edge: "paradigm", node: NParadigm.kind }),
  platforms: facet("Platforms", { edge: "plat", node: NPlatform.kind }),
  tags: facet("Tags", { edge: "tag", node: NTag.kind }),
  typeSystems: facet("Type System", { edge: "tsys", node: NTsys.kind }),
  writtenIn: facet("Written In", { edge: "writtenIn", node: NPlang.kind }),
} as const;

/** Groups of facets for Plangs. */
export const PL_FACET_GROUPS = [
  [
    facetGroup("General", ["plangName", "hasLogo", "hasWikipedia", "isMainstream", "extensions"]), // +Released Recently
    facetGroup("Tags", ["tags"]),
  ],
  [facetGroup("Platforms", ["platforms"]), facetGroup("Paradigms", ["paradigms"]), facetGroup("Type Systems", ["typeSystems"])],
  [
    facetGroup("Written In", ["writtenIn"]),
    facetGroup("Transpiler", ["isTranspiler", "compilesTo"]),
    facetGroup("Dialect Of", ["dialectOf"]),
    facetGroup("Implements", ["implements"]),
    facetGroup("Influenced By", ["influencedBy"]),
    facetGroup("Influenced", ["influenced"]),
  ],
  [facetGroup("Created Year", ["appearedAfter"]), facetGroup("Released Year", ["hasReleases", "releasedAfter"])],
  [facetGroup("Licenses", ["licenses"])],
] as const;

export type PlInputKey = keyof typeof PL_INPUTS;
