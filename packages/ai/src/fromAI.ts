import { type PlangsGraph, VPlang } from "@plangs/plangs/graph";
import type { AIVPlang } from "@plangs/plangs/graph/vertex_data_schemas";

/** Given the results from OpenAI, construct a new NPlang vertex that can be used for code generation. */
export function plangFromAI(pg: PlangsGraph, pl: VPlang, aiPL: AIVPlang): VPlang {
  const newPl = new VPlang(pg, pl.key);

  {
    // Don't use images, releases, and githubStars from the AI data since it tends to be low quality.
    const { images, releases, githubStars, ...aiRest } = aiPL.data;
    newPl.merge({ ...pl.data, ...aiRest });
  }

  // Load the keys from the AI data.
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
