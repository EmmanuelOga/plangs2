import type { NPlang, PlangsGraph } from "@plangs/plangs";
import type { N, NPlangAI, NPlangData } from "@plangs/plangs/schema";

/** Generate a JSON object including keys to known nodes. */
export function existingData(pg: PlangsGraph): Record<string, Record<string, string>> {
  const toMap = (k: N) => Object.fromEntries([...pg.nodes[k]].map(([key, data]) => [key, data.name]));
  return {
    apps: toMap("app"),
    tools: toMap("tool"),
    libraries: toMap("lib"),
    licenses: toMap("license"),
    paradigms: toMap("paradigm"),
    platforms: toMap("plat"),
    tags: toMap("tag"),
    typeSystems: toMap("tsys"),
  };
}

/** Return an example using existing data to show OpenAI what a good result looks like. */
export function example(pl: NPlang): NPlangAI {
  return {
    data: pl.data as NPlangData,
    compilesTo: pl.relCompilesTo.keys.existing,
    dialectOf: pl.relDialectOf.keys.existing,
    implements: pl.relImplements.keys.existing,
    influencedBy: pl.relInfluencedBy.keys.existing,
    influenced: pl.relInfluenced.keys.existing,
    licenses: pl.relLicenses.keys.existing,
    paradigms: pl.relParadigms.keys.existing,
    platforms: pl.relPlatforms.keys.existing,
    tags: pl.relTags.keys.existing,
    typeSystems: pl.relTsys.keys.existing,
    writtenIn: pl.relWrittenIn.keys.existing,

    apps: pl.relApps.keys.existing,
    tools: pl.relTools.keys.existing,
    libraries: pl.relLibs.keys.existing,
  };
}
