import { arrayMerge } from "@plangs/auxiliar/array";
import { loadAllDefinitions } from "@plangs/definitions";
import { plangCodeGen, tspath } from "@plangs/languist/codegen";
import { LG_LANGS } from "@plangs/languist/languish";
import { GH_LANGS } from "@plangs/languist/linguist";
import type { LanguishKeys, LinguistLang } from "@plangs/languist/types";
import { type NPlang, PlangsGraph } from "@plangs/plangs";

// Load all Plangs! definitions.
const pg = new PlangsGraph();
await loadAllDefinitions(pg, { scanImages: false });

// Load all Languish data.
const GH_MAP = GH_LANGS.lookupMap();

// Use Languish data to get the rankings for the languages.
// We use the 2024Q3 data, as it's the most recent one.
// This should be updated every quarter.
const RANKINGS: Map<string, number> = LG_LANGS.rankingsMap("2024Q3");
const REV_RANKINGS: Map<number, string> = new Map(RANKINGS.entries().map(([k, v]) => [v, k]));

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
  for (const candidate of [pl /*, ...pl.family() */]) {
    const ghPl = find(candidate.name);
    if (ghPl) return ghPl;
  }
}

function updateWithGH(pl: NPlang, plGH: LinguistLang) {
  // Add partial GH data to the Plang node.
  const { name, groupName, langId, color, popular, type } = plGH;
  pl.data.github = { name, groupName, langId, color, popular, type };
  pl.data.githubName = name;
  pl.data.languishRanking = RANKINGS.get(name);
}

/** Update the NPlang data with GH and Languish data. */
function updateWithLanguish(pl: NPlang, plLG: LanguishKeys) {
  // Add partial LG data to the Plang node.
  if (plLG[2] && !pl.data.websites?.some(w => w.kind === "reddit")) {
    arrayMerge(
      (pl.data.websites ??= []),
      [{ kind: "reddit", title: `${pl.name} on Reddit`, href: `https://reddit.com/r/${plLG[2]}` }],
      (l1, l2) => l1.href === l2.href,
    );
  }
  if (plLG[1] && !pl.data.websites?.some(w => w.kind === "wikipedia")) {
    arrayMerge(
      (pl.data.websites ??= []),
      [{ kind: "wikipedia", title: `${pl.name} on Wikipedia`, href: `https://en.wikipedia.org/wiki/${plLG[1]}` }],
      (l1, l2) => l1.href === l2.href,
    );
  }
  if (plLG[3]) arrayMerge((pl.data.stackovTags ??= []), plLG[3].split("|"));
}

/** Find matching data to add to the Plang nodes, then recreate the code definition to include this data. */
export function mergeGHandLanguishData() {
  // Find the best match for each Plang node on the GH data.
  for (const pl of pg.nodes.pl.values) {
    const plGH = ghBestMatch(pl);
    if (plGH) updateWithGH(pl, plGH);
    if (!pl.data.githubName) continue;
    const plLG = LG_LANGS.keysByName.get(pl.data.githubName);
    if (plLG) updateWithLanguish(pl, plLG);
  }

  // Collect the existing GH names for the next step.
  const existingGHNames = new Set<string>();
  for (const pl of pg.nodes.pl.values) {
    const { githubName } = pl.data;
    if (githubName) existingGHNames.add(githubName);
  }

  // We want to ensure we have the top 100 languages in the rankings.
  for (let i = 1; i <= 100; i++) {
    const key = REV_RANKINGS.get(i);
    if (!key) throw new Error(`Missing key for ranking ${i}. This should never happen!`);

    // If the key is already in the map, we are done.
    if (existingGHNames.has(key)) continue;

    // If the key is not in the map, we need to add a new Plang node.
    const pl = pg.nodes.pl.set(`pl+${key.toLowerCase().replaceAll(/\s+/g, "-")}`, { name: key, languishRanking: i });

    const plGH = GH_MAP.get(key);
    if (plGH) {
      updateWithGH(pl, plGH);
    } else {
      console.warn(`Missing GH data for ${key}.`);
    }

    const plLG = LG_LANGS.keysByName.get(key);
    if (plLG) {
      updateWithLanguish(pl, plLG);
    } else {
      console.warn(`Missing Languish data for ${key}.`);
    }
  }

  // Re-generate all the language files.
  for (const [key, pl] of pg.nodes.pl) {
    Bun.write(tspath(pl.plainKey), plangCodeGen(pl));
  }
}

mergeGHandLanguishData();

console.warn("CAUTION: matching github data is not a perfect process. Results (git diff) should be manually reviewed.");
