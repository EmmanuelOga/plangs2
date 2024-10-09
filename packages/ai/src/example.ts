import type { NPlang } from "@plangs/plangs/index";
import type { NPlangData, PlAiResult } from "@plangs/plangs/schema";

export function example(pl: NPlang): PlAiResult {
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
