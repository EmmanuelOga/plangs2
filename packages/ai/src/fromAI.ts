import { type NLicense, type NParadigm, NPlang, type NPlatform, type NTag, type NTsys, type PlangsGraph } from "@plangs/plangs";
import type { NPlangAI } from "@plangs/plangs/schema";

/** Given the results from OpenAI, construct a new NPlang node that can be used for code generation. */
export function plangFromAI(pg: PlangsGraph, pl: NPlang, aiPL: NPlangAI): NPlang {
  // We need to merge these, since Node data merge is not deep.
  const { extensions, filenames, images, releases, stackovTags } = pl.data;

  // Merge the data from the original NPlang node, but overwrite with the data from OpenAI.
  const newPl = new NPlang(pg, pl.key).merge({ ...pl.data, ...aiPL.commonData, ...aiPL.basicPlangData });

  // Re-add the original data that may have been lost in the merge.
  // TODO: maybe override the merge method to avoid this.
  newPl.addExtensions(extensions ?? []);
  newPl.addFilenames(filenames ?? []);
  newPl.addImages(images ?? []);
  newPl.addReleases(releases ?? []);
  newPl.addStackovTags(stackovTags ?? []);

  // Add the new data references from OpenAI.
  const existingPl = (k: string) => pg.nodes.pl.has(k as NPlang["key"]);
  newPl.addCompilesTo(aiPL.compilesTo.filter(existingPl) as NPlang["key"][]);
  newPl.addCompilesTo(aiPL.dialectOf.filter(existingPl) as NPlang["key"][]);
  newPl.addCompilesTo(aiPL.implements.filter(existingPl) as NPlang["key"][]);
  newPl.addCompilesTo(aiPL.influenced.filter(existingPl) as NPlang["key"][]);
  newPl.addCompilesTo(aiPL.influencedBy.filter(existingPl) as NPlang["key"][]);
  newPl.addCompilesTo(aiPL.writtenIn.filter(existingPl) as NPlang["key"][]);

  newPl.addLicenses(aiPL.licenses.filter(k => pg.nodes.license.has(k as NLicense["key"])) as NLicense["key"][]);
  newPl.addParadigms(aiPL.paradigms.filter(k => pg.nodes.paradigm.has(k as NParadigm["key"])) as NParadigm["key"][]);
  newPl.addPlatforms(aiPL.platforms.filter(k => pg.nodes.plat.has(k as NPlatform["key"])) as NPlatform["key"][]);
  newPl.addTags(aiPL.tags.filter(k => pg.nodes.tag.has(k as NTag["key"])) as NTag["key"][]);
  newPl.addTypeSystems(aiPL.typeSystems.filter(k => pg.nodes.tsys.has(k as NTsys["key"])) as NTsys["key"][]);

  return newPl;
}
