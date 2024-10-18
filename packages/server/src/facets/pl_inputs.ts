import { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs/index";
import { checkbox, facet, facetGroup, multiple, search } from "./types";

/** All the inputs: we'll distribute them among facets. */
export const PL_INPUTS = {
  plangName: search("Lang Name"),

  extensions: multiple("File Extension"),

  createdRecently: checkbox("Created recently"),
  hasLogo: checkbox("Has Logo"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),
  releasedRecently: checkbox("Released recently"),

  compilesTo: facet("Compiles To", { edge: "compilesTo", node: NPlang.kind }),
  creationDate: facet("Creation Date", { source: "creationDate" }),
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

type K = keyof typeof PL_INPUTS;

/** Groups of facets for Plangs. */
export const PL_FACET_GROUPS = [
  [
    facetGroup<K>("General", ["plangName", "createdRecently", "releasedRecently", "hasLogo", "hasWikipedia", "isMainstream", "extensions"]),
    // fmt.
  ],
  [
    facetGroup<K>("Platforms", ["platforms"]),
    facetGroup<K>("Paradigms", ["paradigms"]),
    facetGroup<K>("Type Systems", ["typeSystems"]),
    // fmt.
  ],
  [
    facetGroup<K>("Written In", ["writtenIn"]),
    facetGroup<K>("Transpiler", ["isTranspiler", "compilesTo"]),
    facetGroup<K>("Dialect Of", ["dialectOf"]),
    facetGroup<K>("Implements", ["implements"]),
    facetGroup<K>("Influenced By", ["influencedBy"]),
    facetGroup<K>("Influenced", ["influenced"]),
    // fmt.
  ],
  [
    facetGroup<K>("Tags", ["tags"]),
    facetGroup<K>("Creation Year", ["creationDate"]),
    facetGroup<K>("Licenses", ["licenses"]),
    // fmt.
  ],
] as const;

export type PlInputKey = keyof typeof PL_INPUTS;
