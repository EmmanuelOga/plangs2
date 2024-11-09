import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen, tspath } from "@plangs/languist/codegen";
import { type NPlang, PlangsGraph } from "@plangs/plangs";

import { arrayMerge } from "@plangs/auxiliar/array";
import { GH_LANGS, LG_LANGS } from "@plangs/languist";
import type { LinguistLang } from "@plangs/languist/types";

const pg = new PlangsGraph();
await loadAllDefinitions(pg, { scanImages: false });

console.log(GH_LANGS.all.length, "languages in GHLangs");
console.log(LG_LANGS.all.length, "languages in LGLangs");
console.log(pg.nodes.pl.size, "languages in Plangs");

const GH_MAP = GH_LANGS.lookupMap();

/** Find the best match from all GH langs to the given NPlang. */
function ghBestMatch(pl: NPlang): LinguistLang | undefined {
  const find = (name: string) => {
    const clean = name.trim().toLowerCase();
    if (GH_MAP.has(clean)) return GH_MAP.get(clean); // Easy win.

    // This is a bit inefficient, but since the map is small, it's not a big deal.
    // We'll find substring matches for languages with more than N characters.
    if (clean.length > 4) {
      const candidates: [string, LinguistLang][] = [];
      for (const [key, lang] of GH_MAP) {
        if (key.includes(clean)) candidates.push([key, lang]);
      }
      // Find the candidate closer in string length.
      candidates.sort(([key1], [key2]) => Math.abs(clean.length - key1.length) - Math.abs(clean.length - key2.length));
      if (candidates.length) return candidates[0][1];
    }
  };

  // We want to find the best match, for the language itself first, or any of its family.
  // NOTE: using the family can lead to many false matches.
  for (const cand of [pl /*, ...pl.family() */]) {
    const ghPl = find(cand.name);
    if (ghPl) return ghPl;
  }
}

/** Update the NPlang data with GH and Languish data. */
function updatePlang(pl: NPlang, plGH: LinguistLang) {
  // Add partial GH data to the Plang node.
  const { name, groupName, langId, color, popular, type } = plGH;
  pl.data.github = { name, groupName, langId, color, popular, type };
  const plLG = LG_LANGS.lookup(plGH.name);
  if (plLG) {
    // Add partial LG data to the Plang node.
    if (plLG.reddit) {
      arrayMerge(
        (pl.data.websites ??= []),
        [
          {
            title: `${pl.name} on Reddit`,
            kind: "reddit",
            href: `https://reddit.com/r/${plLG.reddit}`,
          },
        ],
        (l1, l2) => l1.href === l2.href,
      );
    }
    if (plLG.wikipedia) {
      arrayMerge(
        (pl.data.websites ??= []),
        [
          {
            title: `${pl.name} on Wikipedia`,
            kind: "wikipedia",
            href: `https://en.wikipedia.org/wiki/${plLG.wikipedia}`,
          },
        ],
        (l1, l2) => l1.href === l2.href,
      );
    }
    if (plLG.stackoverflow) arrayMerge((pl.data.stackovTags ??= []), plLG.stackoverflow);
  }
}

/** Find matching data to add to the Plang nodes, then recreate the code definition to include this data. */
export function mergeGHandLanguishData() {
  for (const pl of pg.nodes.pl.values) {
    const plGH = ghBestMatch(pl);
    if (plGH) updatePlang(pl, plGH);
  }

  // Re-generate all the language files.
  for (const [key, pl] of pg.nodes.pl) {
    Bun.write(tspath(pl.plainKey), plangCodeGen(pl));
  }
}

mergeGHandLanguishData();

console.warn("CAUTION: matching github data is not a perfect process. Results (git diff) should be manually reviewed.");
