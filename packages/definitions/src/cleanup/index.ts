import { join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen } from "@plangs/languist/codegen";
import { type NPlang, PlangsGraph } from "@plangs/plangs";

import { GH_LANGS, LG_LANGS } from "@plangs/languist";

const pg = new PlangsGraph();
await loadAllDefinitions(pg, { scanImages: false });

console.log(GH_LANGS.all.length, "languages in GHLangs");
console.log(LG_LANGS.all.length, "languages in LGLangs");
console.log(pg.nodes.pl.size, "languages in Plangs");

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions/");

function tspath(plainKey: string, kind = "plangs"): string {
  const base = plainKey.replace(/[^a-zA-Z0-9\_\+\-]/g, "_");
  return join(DEFINTIONS_PATH, kind, base[0], base, `${base}.ts`);
}

const skipGH = new Set<string>();

const plangsNotInGH = pg.nodes.pl.values
  .filter(pl => {
    const inGH = [...pl.family()].find(pl => GH_LANGS.lookup(pl.name));
    if (inGH !== undefined) skipGH.add(inGH.name);
    return inGH === undefined;
  })
  .map(pl => pl.name.toLowerCase())
  .sort();

const lings = new Set<string>();
for (const lgLang of GH_LANGS.all) {
  if (!skipGH.has(lgLang.name)) lings.add(lgLang.name.toLowerCase());
}

Bun.write("not-in-gh.txt", plangsNotInGH.join("\n"));
Bun.write("not-in-plangs.txt", [...lings].sort().join("\n"));

// // Re-generate all the language files.
// for (const [key, pl] of pg.nodes.pl) {
//   Bun.write(tspath(pl.plainKey), plangCodeGen(pl));
// }

const pl = pg.nodes.pl.get("pl+datalog") as NPlang;
console.log([...pl.family()].map(pl => pl.name));
