import { type PlangsGraph, type VLicense, type VParadigm, VPlang, type VPlatform, type VTag, type VTypeSystem } from "@plangs/plangs/graph";

import type { NPlangAI } from "./types";

/** Given the results from OpenAI, construct a new NPlang node that can be used for code generation. */
export function plangFromAI(pg: PlangsGraph, pl: VPlang, aiPL: NPlangAI): VPlang {
  // We need to merge these, since Node data merge is not deep.
  const { extensions, filenames, images, releases, stackovTags } = pl.data;

  // Merge the data from the original NPlang node, but overwrite with the data from OpenAI.
  const newPl = new VPlang(pg, pl.key).merge({ ...pl.data, ...aiPL.basicPlangData });

  // Re-add the original data that may have been lost in the merge.
  // TODO: maybe override the merge method to avoid this.
  newPl.addExtensions(extensions ?? []);
  newPl.addFilenames(filenames ?? []);
  newPl.addImages(images ?? []);
  newPl.addReleases(releases ?? []);
  newPl.addStackovTags(stackovTags ?? []);

  // Add the new data references from OpenAI.
  const existingPl = (k: string) => pg.plang.has(k as VPlang["key"]);
  newPl.relCompilesTo.add(...(aiPL.compilesTo.filter(existingPl) as VPlang["key"][]));
  newPl.relDialectOf.add(...(aiPL.dialectOf.filter(existingPl) as VPlang["key"][]));
  newPl.relImplements.add(...(aiPL.implements.filter(existingPl) as VPlang["key"][]));
  newPl.relInfluenced.add(...(aiPL.influenced.filter(existingPl) as VPlang["key"][]));
  newPl.relInfluencedBy.add(...(aiPL.influencedBy.filter(existingPl) as VPlang["key"][]));
  newPl.relWrittenWith.add(...(aiPL.writtenIn.filter(existingPl) as VPlang["key"][]));

  newPl.relLicenses.add(...(aiPL.licenses.filter(k => pg.license.has(k as VLicense["key"])) as VLicense["key"][]));
  newPl.relParadigms.add(...(aiPL.paradigms.filter(k => pg.paradigm.has(k as VParadigm["key"])) as VParadigm["key"][]));
  newPl.relPlatforms.add(...(aiPL.platforms.filter(k => pg.platform.has(k as VPlatform["key"])) as VPlatform["key"][]));
  newPl.relTags.add(...(aiPL.tags.filter(k => pg.tag.has(k as VTag["key"])) as VTag["key"][]));
  newPl.relTypeSystems.add(...(aiPL.typeSystems.filter(k => pg.typeSystem.has(k as VTypeSystem["key"])) as VTypeSystem["key"][]));

  return newPl;
}
