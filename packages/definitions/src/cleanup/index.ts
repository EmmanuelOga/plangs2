import { join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen } from "@plangs/languist/codegen";
import { type NPlang, PlangsGraph } from "@plangs/plangs";

import { arrayMerge } from "@plangs/auxiliar/array";
import { GH_LANGS, LG_LANGS } from "@plangs/languist";
import type { LinguistLang } from "@plangs/languist/types";

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

for (const pl of pg.nodes.pl.values) {
  let plGH: LinguistLang | undefined;
  for (const fam of pl.family()) {
    plGH = GH_LANGS.lookup(fam.name);
    if (plGH) break;
  }
  if (plGH) {
    // Add partial GH data to the Plang node.
    const { name, groupName, langId, color, popular, type } = plGH;
    pl.data.github = { name, groupName, langId, color, popular, type };
    const plLG = LG_LANGS.lookup(plGH.name);
    if (plLG) {
      // Add partial LG data to the Plang node.
      if (plLG.reddit) {
        arrayMerge((pl.data.websites ??= []), [
          {
            title: `${pl.name} on Reddit`,
            kind: "reddit",
            href: `https://reddit.com/r/${plLG.reddit}`,
          },
        ]);
      }
      if (plLG.wikipedia) {
        arrayMerge((pl.data.websites ??= []), [
          {
            title: `${pl.name} on Wikipedia`,
            kind: "wikipedia",
            href: `https://en.wikipedia.org/wiki/${plLG.wikipedia}`,
          },
        ]);
      }
      if (plLG.stackoverflow) arrayMerge((pl.data.stackovTags ??= []), plLG.stackoverflow);
    }
  }
}

// Re-generate all the language files.
for (const [key, pl] of pg.nodes.pl) {
  Bun.write(tspath(pl.plainKey), plangCodeGen(pl));
}
