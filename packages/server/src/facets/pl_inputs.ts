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

  compilesTo: facet("Compiles To", { kind: "noderel", edge: "compilesTo", node: NPlang.kind, dir: "direct" }),
  creationDate: facet("Creation Date", { kind: "year", node: NPlang.kind }),
  dialectOf: facet("Dialect Of", { kind: "noderel", edge: "dialect", node: NPlang.kind, dir: "direct" }),
  implements: facet("Implements", { kind: "noderel", edge: "impl", node: NPlang.kind, dir: "direct" }),
  influenced: facet("Influenced", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "inverse" }),
  influencedBy: facet("Influenced By", { kind: "noderel", edge: "influence", node: NPlang.kind, dir: "direct" }),
  licenses: facet("Licenses", { kind: "noderel", edge: "license", node: NLicense.kind, dir: "direct" }),
  paradigms: facet("Paradigms", { kind: "noderel", edge: "paradigm", node: NParadigm.kind, dir: "direct" }),
  platforms: facet("Platforms", { kind: "noderel", edge: "plat", node: NPlatform.kind, dir: "direct" }),
  tags: facet("Tags", { kind: "noderel", edge: "tag", node: NTag.kind, dir: "direct" }),
  typeSystems: facet("Type System", { kind: "noderel", edge: "tsys", node: NTsys.kind, dir: "direct" }),
  writtenIn: facet("Written In", { kind: "noderel", edge: "writtenIn", node: NPlang.kind, dir: "direct" }),
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
