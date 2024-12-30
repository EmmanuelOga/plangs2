/*
 * Perform a "cleanup" of the Plangs! data:
 * * Add Github linguist data
 * * Add Languish data including external links to Wikipedia, Reddit and StackOVerflow.
 * * Home for other cleanup tasks that may need to be performed just once.
 */

import { arrayMerge } from "@plangs/auxiliar/array";
import { loadDefinitions } from "@plangs/definitions";
import { tsVertexPath, vertexCodeGen } from "@plangs/languist/codegen";
import { LG_LANGS, type Rankings } from "@plangs/languist/languish";
import { GH_LANGS } from "@plangs/languist/linguist";
import { reformatCode } from "@plangs/languist/reformat";
import type { LanguishKeys, LinguistLang } from "@plangs/languist/types";
import { PlangsGraph, type VPlang } from "@plangs/plangs/graph";

/** Update the VPlang data with Github data. */
function updateWithGH(pl: VPlang, ghMap: Map<string, LinguistLang>): boolean {
  const plGH = GH_LANGS.bestMatch(ghMap, pl.data.githubName) ?? GH_LANGS.bestMatch(ghMap, pl.name);
  if (!plGH) return false;

  pl.data.githubName = plGH.name;
  pl.data.githubGroupName = plGH.groupName;
  pl.data.githubLangId = plGH.langId;
  pl.data.githubColor = plGH.color;
  pl.data.githubPopular = plGH.popular;
  pl.data.githubType = plGH.type;

  return true;
}

/** Update the VPlang data with Languish data. */
function updateWithLanguish(pl: VPlang, rankings: Rankings): boolean {
  if (!pl.data.githubName) return false;

  const plLG = LG_LANGS.keysByName.get(pl.data.githubName) as LanguishKeys;
  if (!plLG) return false;

  pl.data.languishRanking = rankings.rankByGHName.get(pl.name);

  // Prefer the Languish data over whatever is already there.
  if (plLG[1]) pl.data.extWikipediaPath = plLG[1];
  if (plLG[2]) pl.data.extRedditPath = plLG[2];
  if (plLG[3]) arrayMerge((pl.data.stackovTags ??= []), plLG[3].split("|"));

  return true;
}

/**
 * Languish has a rank for the top 100 languages of linguist. Create skeleton files for those, if missing.
 * We used this early on, but the missing languages now are things like CSV, "AdBlock List", etc that we don't really want to add.
 */
export async function createMissingPlangs(pg: PlangsGraph, ghMap: Map<string, LinguistLang>, rankings: Rankings) {
  // Collect the existing GH names for the next step.
  const existingGHNames = new Set<string>([...pg.plang.values].map(pl => pl.data.githubName).filter(v => !!v) as string[]);

  // Find languages to create new Plang vertices for (for languages with GH ranking from 1 to 100).
  // After this we need to manually review the results: some languages may not be worth keeping (like "AdBlock lists" format).
  for (let rank = 1; rank <= 100; rank++) {
    const ghName = rankings.ghNameByRank.get(rank);
    if (!ghName) throw new Error(`Missing key for ranking ${rank}. This should never happen!`);

    // If the key is already in the map, we are done.
    if (existingGHNames.has(ghName)) continue;

    // If the key is not in the map, we need to add a new Plang vertex.
    const pl = pg.plang.set(`pl+${ghName.toLowerCase().replaceAll(/\s+/g, "-")}`, { name: ghName, languishRanking: rank });

    updateWithGH(pl, ghMap);
    updateWithLanguish(pl, rankings);
  }
}

export async function processGithubAndLanguish() {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: false });

  // These are expensive so create them once before starting.
  const ghMap = GH_LANGS.lookupMap();
  const rankings = LG_LANGS.rankings();

  const woGH = new Set<string>();
  const woLG = new Set<string>();

  // Remove all previous Languish rankings.
  for (const pl of pg.plang.values) pl.data.languishRanking = undefined;

  // Find the best match for each Plang vertex on the GH data.
  for (const pl of pg.plang.values) {
    if (updateWithGH(pl, ghMap)) {
      // Languish works with github name, so it can only work if the GH data is there.
      if (!updateWithLanguish(pl, rankings)) woLG.add(pl.name);
    } else woGH.add(pl.name);
  }

  console.warn("Languages without updates:", { woGithub: [...woGH], woLanguish: [...woLG] });

  for (const pl of pg.plang.values) Bun.write(tsVertexPath(pl), await reformatCode(vertexCodeGen(pl)));

  console.warn("CAUTION: matching github data is not a perfect process. Results (git diff) should be manually reviewed.");
}

/** Regenerate all vertices. */
export async function regenVertexDefinitions(pg: PlangsGraph) {
  for (const vertices of Object.values(pg.vertices)) {
    for (const vertex of vertices.values) {
      Bun.write(tsVertexPath(vertex), await reformatCode(vertexCodeGen(vertex)));
    }
  }
}

/**
 * Cleanup relationships in data. All edges should point to an existing vertex.
 * @param update if false only prints missing data, doesn't delete it.
 */
export function cleanupData(pg: PlangsGraph, update: boolean) {
  for (const [e, edges] of Object.entries(pg.edges)) {
    const missingKeys = new Set<string>();

    for (const tuple of edges.vertices) {
      const [keyFrom, vertexFrom, keyTo, vertexTo] = tuple;

      if (!vertexFrom) missingKeys.add(keyFrom);
      if (!vertexTo) missingKeys.add(keyTo);

      if (update && (!vertexFrom || !vertexTo)) {
        console.log("Deleting edge with missing vertex:", tuple);
        edges.delete(keyFrom as any, keyTo as any);
      }
    }

    if (missingKeys.size > 0) console.log("Edge type", e, "had missing keys:", [...missingKeys]);
  }
}

export async function cleanup() {
  const pg = new PlangsGraph();

  // Switch between: load definitions or load the data.
  // await loadDefinitions(pg, { scanImages: false });
  pg.loadJSON(JSON.parse(await Bun.file("plangs.json").text()));
  pg.materialize();

  regenVertexDefinitions(pg);
}

await cleanup();
