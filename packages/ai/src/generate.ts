import type { NPlang } from "@plangs/plangs/index";
import type { PlAiResult } from "@plangs/plangs/schema";

/** Generate code that can reconstruct the state of a NPlang node. */
export function generateCode(key: NPlang["key"], plr: PlAiResult): string {
  const relations: string[] = [];

  function addRel(methodName: string, keys: string[]) {
    if (keys.length === 0) return;
    relations.push(`\n    .${methodName}(${JSON.stringify(keys.sort())})`);
  }

  addRel("addDialectOf", plr.dialectOf);
  addRel("addImplements", plr.implements);
  addRel("addInfluencedBy", plr.influencedBy); // TODO: handle influenced.
  addRel("addLicenses", plr.licenses);
  addRel("addParadigms", plr.paradigms);
  addRel("addPlatforms", plr.platforms);
  addRel("addTags", plr.tags);
  addRel("addTypeSystems", plr.typeSystems);
  addRel("addWrittenIn", plr.writtenIn);

  const code = `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {

    g.nodes.pl.set(${JSON.stringify(key)}, ${JSON.stringify(plr.data)})${relations.join("")}

  }
  `;

  return code;
}
