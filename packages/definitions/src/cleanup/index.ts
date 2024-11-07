import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen } from "@plangs/languist/codegen";
import { PlangsGraph } from "@plangs/plangs";

import { GH_LANGS, LG_LANGS } from "@plangs/languist";

const pg = new PlangsGraph();
await loadAllDefinitions(pg, "noScan");

console.log(GH_LANGS.all.length, "languages in GHLangs");
console.log(LG_LANGS.all.length, "languages in LGLangs");
console.log(pg.nodes.pl.size, "languages in Plangs");

// Re-generate all the language files.
for (const [key, pl] of pg.nodes.pl) {
  Bun.write(pl.tspath, plangCodeGen(pl));
}
