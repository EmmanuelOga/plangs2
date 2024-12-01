import { type PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { VLicenseKey, VParadigmKey, VPlangKey, VPlatformKey, VTagKey, VTypeSystemKey } from "@plangs/plangs/graph/generated";

import type { NPlangAI } from "./types";

/** Given the results from OpenAI, construct a new NPlang vertex that can be used for code generation. */
export function plangFromAI(pg: PlangsGraph, pl: VPlang, aiPL: NPlangAI): VPlang {
  // We need to merge these, since Vertex data merge is not deep.
  const { extensions, filenames, images, releases, stackovTags } = pl.data;

  // Merge the data from the original NPlang vertex, but overwrite with the data from OpenAI.
  const newPl = new VPlang(pg, pl.key).merge({ ...pl.data, ...aiPL.basicPlangData });

  // Re-add the original data that may have been lost in the merge.
  // TODO: maybe override the merge method to avoid this.
  newPl.addExtensions(extensions ?? []);
  newPl.addFilenames(filenames ?? []);
  newPl.addImages(images ?? []);
  newPl.addReleases(releases ?? []);
  newPl.addStackovTags(stackovTags ?? []);

  // Add the new data references from OpenAI.
  const existingPl = (k: string) => pg.plang.has(k as VPlangKey);
  newPl.relCompilesTo.add(...(aiPL.compilesTo.filter(existingPl) as VPlangKey[]));
  newPl.relDialectOf.add(...(aiPL.dialectOf.filter(existingPl) as VPlangKey[]));
  newPl.relImplements.add(...(aiPL.implements.filter(existingPl) as VPlangKey[]));
  newPl.relInfluenced.add(...(aiPL.influenced.filter(existingPl) as VPlangKey[]));
  newPl.relInfluencedBy.add(...(aiPL.influencedBy.filter(existingPl) as VPlangKey[]));
  newPl.relWrittenWith.add(...(aiPL.writtenIn.filter(existingPl) as VPlangKey[]));

  newPl.relLicenses.add(...(aiPL.licenses.filter(k => pg.license.has(k as VLicenseKey)) as VLicenseKey[]));
  newPl.relParadigms.add(...(aiPL.paradigms.filter(k => pg.paradigm.has(k as VParadigmKey)) as VParadigmKey[]));
  newPl.relPlatforms.add(...(aiPL.platforms.filter(k => pg.platform.has(k as VPlatformKey)) as VPlatformKey[]));
  newPl.relTags.add(...(aiPL.tags.filter(k => pg.tag.has(k as VTagKey)) as VTagKey[]));
  newPl.relTypeSystems.add(...(aiPL.typeSystems.filter(k => pg.typeSystem.has(k as VTypeSystemKey)) as VTypeSystemKey[]));

  return newPl;
}
