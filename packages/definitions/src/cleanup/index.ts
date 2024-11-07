import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen } from "@plangs/languist/codegen";
import { PlangsGraph } from "@plangs/plangs";

import { GH_LANGS, LG_LANGS } from "@plangs/languist";

const pg = new PlangsGraph();
await loadAllDefinitions(pg, "noScan");

console.log(GH_LANGS.all.length, "languages in GHLangs");
console.log(LG_LANGS.all.length, "languages in LGLangs");
console.log(pg.nodes.pl.size, "languages in Plangs");

// biome-ignore lint/style/noNonNullAssertion: pl+python is defined in the definitions.
Bun.write("test.ts", plangCodeGen(pg.nodes.pl.get("pl+python")!));
