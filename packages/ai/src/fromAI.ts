import { type NApp, NLibrary, NLicense, NParadigm, NPlang, NPlatform, NTag, NTool, NTsys, type PlangsGraph } from "@plangs/plangs";
import type { NPlangAI } from "@plangs/plangs/schema";

/** Given the results from OpenAI, construct a new NPlang node that can be used for code generation. */
export function plangFromAI(pg: PlangsGraph, plKey: NPlang["key"], aiPL: NPlangAI): NPlang {
  const pl = new NPlang(pg, plKey).merge(aiPL.data);

  pl.addApps(aiPL.apps.filter(k => k.startsWith("app+")) as NApp["key"][]);

  pl.addCompilesTo(aiPL.compilesTo.filter(k => k.startsWith(NPlang.kind)) as NPlang["key"][]);
  pl.addCompilesTo(aiPL.dialectOf.filter(k => k.startsWith(NPlang.kind)) as NPlang["key"][]);
  pl.addCompilesTo(aiPL.implements.filter(k => k.startsWith(NPlang.kind)) as NPlang["key"][]);
  pl.addCompilesTo(aiPL.influencedBy.filter(k => k.startsWith(NPlang.kind)) as NPlang["key"][]);
  pl.addCompilesTo(aiPL.influenced.filter(k => k.startsWith(NPlang.kind)) as NPlang["key"][]);
  pl.addCompilesTo(aiPL.writtenIn.filter(k => k.startsWith(NPlang.kind)) as NPlang["key"][]);

  pl.addLibs(aiPL.libraries.filter(k => k.startsWith(NLibrary.kind)) as NLibrary["key"][]);
  pl.addLicenses(aiPL.licenses.filter(k => k.startsWith(NLicense.kind)) as NLicense["key"][]);
  pl.addParadigms(aiPL.paradigms.filter(k => k.startsWith(NParadigm.kind)) as NParadigm["key"][]);
  pl.addPlatforms(aiPL.platforms.filter(k => k.startsWith(NPlatform.kind)) as NPlatform["key"][]);

  pl.addTags(aiPL.tags.filter(k => k.startsWith(NTag.kind)) as NTag["key"][]);
  pl.addTools(aiPL.tools.filter(k => k.startsWith(NTool.kind)) as NTool["key"][]);
  pl.addTypeSystems(aiPL.typeSystems.filter(k => k.startsWith(NTsys.kind)) as NTsys["key"][]);

  return pl;
}
