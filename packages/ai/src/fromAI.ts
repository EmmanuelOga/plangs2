import { type PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { AIVPlang } from "@plangs/plangs/graph/vertex_data_schemas";

/** Given the results from OpenAI, construct a new NPlang vertex that can be used for code generation. */
export function plangFromAI(pg: PlangsGraph, pl: VPlang, aiPL: AIVPlang): VPlang {
  // We need to merge these, since Vertex data merge is not deep.
  const { extensions, filenames, images, releases, stackovTags, links } = pl.data;

  // Merge the data from the original NPlang vertex, but overwrite with the data from OpenAI.
  const newPl = new VPlang(pg, pl.key).merge({ ...pl.data, ...aiPL.data });

  // Re-add the original data that may have been lost in the merge.
  // TODO: maybe override the merge method to avoid this.
  newPl.addExtensions(extensions ?? []);
  newPl.addFilenames(filenames ?? []);
  newPl.addImages(images ?? []);
  newPl.addReleases(releases ?? []);
  newPl.addStackovTags(stackovTags ?? []);
  newPl.addLinks(links ?? []);

  newPl.relCompilesTo.maybeAdd(aiPL.compilesTo);
  newPl.relDialectOf.maybeAdd(aiPL.dialectOf);
  newPl.relImplements.maybeAdd(aiPL.implements);
  newPl.relInfluenced.maybeAdd(aiPL.influenced);
  newPl.relInfluencedBy.maybeAdd(aiPL.influencedBy);
  newPl.relLicenses.maybeAdd(aiPL.licenses);
  newPl.relParadigms.maybeAdd(aiPL.paradigms);
  newPl.relPlatforms.maybeAdd(aiPL.platforms);
  newPl.relTags.maybeAdd(aiPL.tags);
  newPl.relTypeSystems.maybeAdd(aiPL.typeSystems);
  newPl.relWrittenWith.maybeAdd(aiPL.writtenWith);

  return newPl;
}
